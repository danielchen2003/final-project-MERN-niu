import React, { useState } from "react"
import {
  Container,
  Grow,
  Grid,
  AppBar,
  TextField,
  Button,
  Paper,
} from "@material-ui/core"
import { useDispatch } from "react-redux"
import { useLocation } from "react-router-dom"


// import { getPostsBySearch } from "../../actions/posts"
import Posts from "../Posts/Posts"
import Form from "../Form/Form"

import useStyles from "./styles"

function useQuery() {
  return new URLSearchParams(useLocation().search)
}
export default function SearchBox() {
  const classes = useStyles()
  const query = useQuery()
  const page = query.get("page") || 1
  const searchQuery = query.get("searchQuery")

  const [currentId, setCurrentId] = useState(0)
  const dispatch = useDispatch()

  const [search, setSearch] = useState("")
  const [tags, setTags] = useState([])


  const searchPost = () => {
    if (search.trim() || tags) {
      // dispatch(getPostsBySearch({ search, tags: tags.join(",") }))
      console.log(search);
    
    }
  }

  const handleKeyPress = (e) => {
    if (e.keyCode === 13) {
      searchPost()
    }
  }
  
  
  
  return (
    <AppBar position="static" color="inherit">
      <TextField
        onKeyDown={handleKeyPress}
        name="search"
        variant="outlined"
        label="Search Memories"
        fullWidth
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    
      <Button onClick={searchPost} variant="contained" color="primary">
        Search
      </Button>
    </AppBar>
  )
}
