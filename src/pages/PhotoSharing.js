import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';


import Posts from '../components/Posts/Posts';
import Form from '../components/Form/Form';
import { getPosts } from '../actions/posts';
// import useStyles from '../styles';
import ResponsiveAppBar from '../components/ResponsiveAppBar/ResponsiveAppBar';


const PhotoSharing = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  // const classes = useStyles();
  // const posts = useSelector((state) => state.posts);
  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <Container maxWidth="lg">
      
     
      {/* <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">Memories</Typography>
        {/* <img className={classes.image} src={memories} alt="icon" height="60" /> */}
    
      <Grow in>
        <Container>
        <Grid container justify="space-between" alignItems="stretch" spacing={3} className="gridContainer">
             {/* <Grid item xs={12} sm={6} md={9}> */}
             <Posts setCurrentId={setCurrentId} />
          {/* </Grid> */}
            {/* <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid> */}
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default PhotoSharing;
