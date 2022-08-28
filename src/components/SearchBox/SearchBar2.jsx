import * as React from "react"
import { styled, alpha } from "@mui/material/styles"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import IconButton from "@mui/material/IconButton"
import Typography from "@mui/material/Typography"
import InputBase from "@mui/material/InputBase"
import Badge from "@mui/material/Badge"
import MenuItem from "@mui/material/MenuItem"
import Menu from "@mui/material/Menu"
import Button  from "@mui/material/Button" 
import MenuIcon from "@mui/icons-material/Menu"
import SearchIcon from "@mui/icons-material/Search"
import AccountCircle from "@mui/icons-material/AccountCircle"
import MailIcon from "@mui/icons-material/Mail"
import NotificationsIcon from "@mui/icons-material/Notifications"
import MoreIcon from "@mui/icons-material/MoreVert"
import { useNavigate } from "react-router-dom"
import ImageSearchIcon from '@mui/icons-material/ImageSearch';
import { Rowing } from "@mui/icons-material"
import {useState} from "react"
import { getPostsBySearch } from "../../actions/posts"

import { useDispatch } from "react-redux"
import { useLocation } from "react-router-dom"


const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  display:"flex",
  flexdirection: "Row" ,
  marginRight: theme.spacing(2),
  alignItems:"center",
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}))

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "relative",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}))

export default function PrimarySearchBar() {
  
  const dispatch = useDispatch()

  const [search, setSearch] = useState("")
 
  // const navigate = useNavigate() //hood 挂钩上搜索框内的东西直接上到地址栏 比如搜素noodle enter  地址栏直接到serached/noodle
  
  
  const searchPost = () => {
    if (search.trim()) {
      dispatch(getPostsBySearch({ search }))
      console.log(search);
    
    }
  }
  
  const sumbitHandler = (e) => {
   
      if (e.keyCode === 13) {
        searchPost()
      
    }
  }

  return (
    <>
     
      <Search>
      <SearchIconWrapper>
           <ImageSearchIcon></ImageSearchIcon>
          </SearchIconWrapper>
        <form onSubmit={sumbitHandler}>
       
          <StyledInputBase
            
            inputProps={{ "aria-label": "search" }}
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="Searching a Memory"
            value={search}
          />
           <Button onClick={searchPost} variant="contained" color="primary">
        Search
      </Button>
        </form>
      </Search>
    </>
  )
}