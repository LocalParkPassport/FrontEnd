import React from 'react'
import StarRatings from 'react-star-ratings'
import {useState, useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles({
    card: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });

function Ratings(props) {

    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
    // useEffect(()=> {
    //             console.log(props.ratings)
    //         }, [props.ratings])


            // comments: "This is an example comment"
            // id: 1
            // park_id: 5
            // rating: 3
            // user_id: null


            console.log(props.ratings)
    return (
        <div>
            {props.ratings.map(rate => (
                <div>
                    <h3>Rating: {rate.rating}</h3>
                    <h4>Comments: {rate.comments}</h4>
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          User Comment
        </Typography>
        <Typography variant="h5" component="h2">
        {rate.comments}
        </Typography>
      </CardContent>
      <Box component="fieldset" mb={3} borderColor="transparent">
        {/* <Typography component="legend">Disabled</Typography> */}
        <Rating name="disabled" value={rate.rating} disabled />
      </Box>
    </Card>
                </div>
    ))}
        </div>
    )
}

export default Ratings
