import React, { useState, useEffect } from "react"
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core"
import { useDispatch } from "react-redux"
import "./PhotoSharing.css"

import Posts from "../components/Posts/Posts"
import Form from "../components/Form/Form"
import { getPosts } from "../actions/posts"
// import useStyles from '../styles';

import "./PhotoSharing.css"
import Sidebar from "../components/Sidebar/Sidebar"

const PhotoSharing = () => {
  const [currentId, setCurrentId] = useState(0)
  const dispatch = useDispatch()
  // const classes = useStyles();
  // const posts = useSelector((state) => state.posts);
  useEffect(() => {
    dispatch(getPosts())
  }, [])

  return (
    // <div className="container--photo">
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
      {/* </div > */}
    </Grow>
  )
}

export default PhotoSharing
