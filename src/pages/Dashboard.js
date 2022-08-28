import { BrowserRouter, Link } from "react-router-dom"
// import Search from "./components/Search"
import styled from "styled-components"
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';

import Sidebar from "../components/Sidebar/Sidebar.jsx"
import { createTheme, Stack, ThemeProvider, Paper } from "@mui/material"
import React, { useState, useEffect } from "react"
import Posts from '../components/Posts/Posts';
import { useDispatch } from 'react-redux';
import { getPosts } from '../actions/posts';
import PhotoSharing from "./PhotoSharing.js";
import ResponsiveAppBar from "../components/ResponsiveAppBar/ResponsiveAppBar.jsx";
import PrimarySearchBar from "../components/SearchBox/SearchBar2.jsx";
import { Route, Routes, useLocation } from "react-router-dom"
import PostDetails from "../components/PostDetails/PostDetails.jsx";



// import { Add } from "@mui/icons-material"
// import Footer from "./components/Footer/Footer.jsx"
// import {Main} from "../pages/Main"

export default function Dashboard() {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
// TODO 这里是客人真的需要菜了 dispatch 派遣 getpost 然后把state 转换成新的state 储存在post里面
  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <div className="DashBoard">
      <Paper >
        <ResponsiveAppBar></ResponsiveAppBar>
  
        <Stack direction="row" spacing={3} justifyContent="space-between" padding="30px">
        <Sidebar></Sidebar>
         <PhotoSharing />
         <Routes>
         
       
          <Route path="/posts/:id" element={<PostDetails />} />
          </Routes>
        </Stack>
        <h3>Footer</h3>
        </Paper>
        
    
    </div>
  )
}

// import React from "react"

// export default function Dashboard() {
//   return (
//     <div>
//       <h1>dash board</h1>
//     </div>
//   )
// }
