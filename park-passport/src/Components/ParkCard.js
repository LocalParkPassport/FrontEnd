import React, { useEffect } from 'react';
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

export default function ParkCard({ park }) {
  const imageLink = "https://cdn.pixabay.com/photo/2014/12/08/02/59/bench-560435_960_720.jpg";
    const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [parkRate, setParkRate]= React.useState()
  useEffect(()=>{
    axios
    .get(`https://parks-passport.herokuapp.com/api/parks/${park.id}/ratings`)
    .then(res=>{
      console.log('ratings', res)
      setParkRate(res)
    })
    .catch(err=>{
      console.log('ratings get error', err)
    })
  })
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }

        // Park Name
        title= {park.name}

        //  Park Location
        subheader= {park.location}
      />

      {/* Image Section */}
      <CardMedia
        className={classes.media}
        image= {imageLink} 
        title= {park.name}
      />

      {/* Park Desctiption */}
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        {park.description}
        </Typography>
        <Ratings ratings={parkRate}/>
      </CardContent>
      
      {/* Ameneties */}
        <Amenities park={park}/>

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
          Comments Go here
        </CardContent>
      </Collapse>
    </Card>
  );
}