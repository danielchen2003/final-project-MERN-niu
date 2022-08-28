

import { BrowserRouter, Link } from "react-router-dom"
// import Search from "./components/Search"
import styled from "styled-components"

import Navbar from "../components/ResponsiveAppBar/ResponsiveAppBar.jsx"
import Sidebar from "../components/Sidebar/Sidebar.jsx"
import { createTheme, Stack, ThemeProvider, Paper } from "@mui/material"
import React, { useState } from "react"

import { Add } from "@mui/icons-material"
// import Footer from "./components/Footer/Footer.jsx"
import {Main} from "../pages/Main"

export default function App() {
  return (
    <div><div className="App">
    <ThemeProvider >
      <Paper>
        <BrowserRouter>
          <Navbar></Navbar>
         
          <Stack direction="row" spacing={2} justifyContent="space-between">
            <Sidebar  />
            {/* <Main /> */}
          </Stack>
          {/* <Footer></Footer> */}
        </BrowserRouter>
      </Paper>
    </ThemeProvider>
  </div></div>
  )
}
