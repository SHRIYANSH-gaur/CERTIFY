import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import Posts from './components/Posts/posts';
import Form from './components/Form/form';
import { getPosts } from './actions/posts';
import useStyles from './styles';
import logo from './images/logo.svg';


const App = () => {
  ///these states and set states will be passed all the way down to post.js
  //in that will setCurrentId to post._id  (state drilling a problem that redux can solve but we are doing with react:)
//the curern id will be then recieved by the form.js
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);
///when aler is called currentId changes so the action is dispached
  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">Certify</Typography>
        <img className={classes.image} src={logo} alt="icon" height="60" />
      </AppBar>
      <Grow in>
        <Container>
          <Grid container  className={classes.mobile}     justify="space-between"      alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
