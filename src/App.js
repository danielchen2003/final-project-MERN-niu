

import React, { useState, useEffect } from "react"
import Home from "./pages/Home.js"
import { Route, Routes, useLocation } from "react-router-dom"
import { Box } from "@mui/material"
import PhotoSharing from './pages/Dashboard'
import NoMatch from './pages/NoMatch/NoMatch'
import DashBoard from "./pages/Dashboard.js"
import { createTheme, Stack, ThemeProvider, Paper } from "@mui/material"
import theme from "./themetemplate"
import PostDetails from "./components/PostDetails/PostDetails.jsx"
import ResponsiveAppBar from "./components/ResponsiveAppBar/ResponsiveAppBar.jsx"
import Footer from "./components/Footer/Footer.jsx"
import Aboutme from "./components/Aboutme/Aboutme.jsx"


export default function Pages() {
  const location = useLocation()
  // const [mode, setMode] = useState("dark")
  const [mode, setMode] = useState("dark")

  // const darkTheme = createTheme({
  //   palette: {
  //     mode: mode,
  //     primary: {
  //       main: "#8acedb",
  //       light: "white",
  //       dark: "#2e973e",
  //     },
  //     secondary: {
  //       main: "#f04328",
  //     },
  //   },
  // })

 

  return (
    // <Box flex={7.5} p={2}>
      // <AnimatePresence exitBeforeEnter>
      <>
       <ThemeProvider theme={theme}>
         
       <ResponsiveAppBar />
       
       
     
        <Routes Location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<DashBoard setMode={setMode} mode={mode}/>} />
          {/* <Route path="/searched/:search" element={<Searched />} /> */}
          <Route path="/posts/:id" element={<PostDetails />} />
          <Route path="/posts/search" element={<DashBoard />} />
          
          <Route path="/about" element={<Aboutme />} />
          
          <Route path="*" element={<NoMatch />} />
         
          
        </Routes>
        <Footer />
       
       
        
        </ThemeProvider>
        </>
      //  </AnimatePresence>
    // </Box>
  )
}
