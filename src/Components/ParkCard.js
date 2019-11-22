import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Amenities from './Amenities'
import axios from 'axios'
import Ratings from './Ratings'
import CreateRating from './CreateRating'
// import DeletePark from './DeletePark';

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function ParkCard({park}) {
  console.log(park);
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  const [idData, setIdData] = useState({
    arr: []
  });


// Lock Feature
/*
      { localStorage.getItem('token') &&
        
      }
*/ 

  

  useEffect(async () => { 
    let getData = await axios.get(`https://parks-passport.herokuapp.com/api/parks/${park.id}/ratings`)
    .then(res => { 
      setIdData({
        ...idData,
        arr: res.data
      }) 
    })
    .catch(err => console.log(err))
  }, [])
  
  const handleDelete = id => {
    axios
      .delete(`https://parks-passport.herokuapp.com/api/parks/${park.id}`)
      .then(res => {
        console.log(res);
        window.location.reload();
      })
      .catch(err => {
        console.log("An error has occured", err)
      })
  };
  // useEffect(() => { 
  //   console.log(idData.arr)
  // }, [idData.arr])

  // let testData = [{
  //   comments: "This is an example comment",
  //   id: 1,
  //   park_id: 5,
  //   rating: 3,
  //   user_id: null
  // }, {
  //   comments: "This is an example comment",
  //   id: 1,
  //   park_id: 5,
  //   rating: 3,
  //   user_id: null
  // }]

    // let agvRatingArray= idData.arr.ratings;
    // console.log(`ratings array: ${agvRatingArray}`)

 
  
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <div className= 'ParkCard'>
      <Card className={classes.card}>
        <CardHeader
          // avatar={
          //   <Avatar aria-label="recipe" className={classes.avatar}>
          //     <FontAwesomeIcon icon={['fas', 'tree']} size="1x"/>
          //   </Avatar>
          // }
          action={
            <IconButton aria-label="settings">
              {/* <MoreVertIcon /> */}
              { localStorage.getItem('token') &&
      <button className='deleteparkbutton' onClick={handleDelete}><FontAwesomeIcon icon={['fas', 'minus-circle']} className='deleteicon' size="2x" /></button>
      }
            </IconButton>
          }

          // Park Name
          title= {park.name}


          //  Park Location
          subheader= {park.location}
        />
    


      {/* { localStorage.getItem('token') &&
      <button onClick={handleDelete}>Delete Park</button>
      } */}


        {/* Image Section */}
        <CardMedia
          className={classes.media}
          image= {park.img} 
          title= {park.name}
        />

        {/* Park Desctiption */}
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
          {park.description}
          </Typography>
        </CardContent>
        
        {/* Ameneties */}
          <Amenities park={park}/>


        {/* Ratings */}
        {/* <Ratings ratings={idData.arr}/>  */}


          <CardActions>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>

        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
                    {/* Display Ratings */}
                    <Ratings ratings={idData.arr}/> 
                    { localStorage.getItem('token') &&
                      // {/* Add Ratings */}
                      <CreateRating park={park}/>
                    }
          </CardContent>
        </Collapse>
      </Card>
    </div>
  );
}