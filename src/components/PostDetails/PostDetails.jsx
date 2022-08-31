import React, { useEffect, useState } from "react"
import {
  Paper,
  Typography,
  CircularProgress,
  Divider,
  Box,
  CardMedia,
} from "@mui/material"
import { useDispatch, useSelector } from "react-redux"

import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"

import { getPost, getPostsBySearch } from "../../actions/posts"
import useStyles from "./styles"
import ResponsiveAppBar from "../ResponsiveAppBar/ResponsiveAppBar"
import "./PostDetails.css"

const PostDetails = () => {
  const post = useSelector((state) => state.posts)

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const classes = useStyles()
  const { id } = useParams()
  const [loading, setLoading] = useState(false)

  let [createDate, setCreateDate] = useState("NA")

  useEffect(() => {
    setLoading(true)
    dispatch(getPost(id))
    setLoading(false)
    // const photoDate = {
    //   year: post.createdAt.split("-")[0],
    //   month: post.createdAt.split("-")[1],
    //   day: post.createdAt.split("-")[2].split("T")[0],
    // }
    //  setCreateDate(`${photoDate.month}/${photoDate.day}/${photoDate.year}`)
  }, [id])

  if (loading) return <CircularProgress />

  return (
    <div className="container">
      
      <Box  style={{
          padding: "20px",
          borderRadius: "15px",
          margin: "2rem",
          width: "90%",
          borderStyle: "solid",
          // border: "1px" "solid" "red",
        }}>
        <div className={classes.card}>
          <div className={classes.section}>
            <Typography variant="h3" component="h3" align="left">
              {post.title}
            </Typography>

            <Divider style={{ margin: "20px 0" }} />
            <Typography variant="h6" align="left">
              Baby's name: {post.babyName || "Anonymous"}
            </Typography>
            <Divider style={{ margin: "20px 0" }} />
            <Typography
              gutterBottom
              variant="h6"
              color="primary"
              component="h3"
              align="left"
            >
              {post.tags && post.tags.map((tag) => `#${tag},`).join(" ")}
              <Divider style={{ margin: "20px 0" }} />
            </Typography>
            <Typography gutterBottom variant="body1" component="p" align="left">
              Description: {post.message}
            </Typography>
            <Divider style={{ margin: "20px 0" }} />
            <Typography gutterBottom variant="body1" component="p" align="left">
              City: {post.location}
            </Typography>
            <Divider style={{ margin: "20px 0" }} />
            <Typography gutterBottom variant="body1" component="p" align="left">
              Baby is: {post.year} years old.
            </Typography>
            <Divider style={{ margin: "20px 0" }} />

            <Typography gutterBottom variant="body1" component="p" align="left">
              Photo date: {createDate}
            </Typography>
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
             {/* <CardMedia
          component="img"
          // height="194"
          // height="20%"
          width ="500px"
          image ={post.selectedFile ||
            "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"}
          alt={post.title}
        /> */}
          </div>
        </div>
        </Box>
      {/* </Paper> */}
    </div>
  )
}

export default PostDetails
