import React, { useEffect } from "react"
import {
  Paper,
  Typography,
  CircularProgress,
  Divider,
} from '@material-ui/core/'
import { useDispatch, useSelector } from "react-redux"

import { useParams} from "react-router-dom"
import { useNavigate } from "react-router-dom";

import { getPost, getPostsBySearch } from "../../actions/posts"
import useStyles from "./styles"
import ResponsiveAppBar from "../ResponsiveAppBar/ResponsiveAppBar";
import  "./PostDetails.css"

const PostDetails = () => {
  const  post = useSelector((state) => state.posts)
  
  const dispatch = useDispatch()
  const navigate = useNavigate() 
  const classes = useStyles()
  const { id } = useParams()
console.log(id);
  useEffect(() => {
    dispatch(getPost(id))
    console.log(post);
  }, [id])

 

  if (!post) return <h1>loading</h1>



 

 

  return (
    <>
    <ResponsiveAppBar />
    <div className="container">
    <Paper style={{ padding: "20px", borderRadius: "15px", margin: "2rem", width: "90%"}} elevation={6}>
      
      <div className={classes.card}>
        <div className={classes.section}>
          <Typography variant="h3" component="h2">
            {post.title}
          </Typography>
          <Typography
            gutterBottom
            variant="h6"
            color="textSecondary"
            component="h2"
          >
           {post.tags&&post.tags.map((tag)=> `#${tag},`).join("")}
          </Typography>
          <Typography gutterBottom variant="body1" component="p">
          Description: {post.message}
          </Typography>
          <Typography gutterBottom variant="body1" component="p">
            City: {post.location}
          </Typography>
          
          <Typography gutterBottom variant="body1" component="p">
            Baby's Age: {post.year}
          </Typography> 
          <Typography variant="h6">Created by: {post.babyName}</Typography>
          <Typography variant="h6">Photo date: {post.createdAt}</Typography>
          
          <Divider style={{ margin: "20px 0" }} />
         
          <Divider style={{ margin: "20px 0" }} />
        </div>
        <div className={classes.imageSection}>
          <img
            className={classes.media}
            src={
              post.selectedFile ||
              "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
            }
            alt={post.title}
          />
        </div>
      </div>
      
    </Paper>
    </div>
    </>
  )
}

export default PostDetails
