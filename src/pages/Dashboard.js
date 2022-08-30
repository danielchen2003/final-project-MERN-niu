import React, { useState, useEffect } from "react"
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core"
import { useDispatch } from "react-redux"


import Posts from "../components/Posts/Posts"
import Form from "../components/Form/Form"
import { getPosts } from "../actions/posts"
// import useStyles from '../styles';

import "./Dashboard.css"
import Sidebar from "../components/Sidebar/Sidebar"

export default function Dashboard() {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
// TODO 这里是客人真的需要菜了 dispatch 派遣 getpost 然后把state 转换成新的state 储存在post里面
  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);
  
 
  // const classes = useStyles();
  // const posts = useSelector((state) => state.posts);
 

  return (
    <div className="container--photo">
    <Grow in>
      <Container maxWidth="xl">
        <Grid
          container
          justifyContent="space-between"
          alignItems="stretch"
          spacing={3}
          className="gridContainer"
        >
          <Grid item xs={12} sm={4} md={3}>
            <Sidebar></Sidebar>
          </Grid>
          <Grid item xs={12} sm={8} md={9}>
            <Posts setCurrentId={setCurrentId} />
          </Grid>
        </Grid>
      </Container>
     
    </Grow>
     </div >
  )
}

