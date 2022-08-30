import {
  AccountBox,
  Article,
  Group,
  Home,
  ModeNight,
  Person,
  Settings,
  Storefront,
} from "@mui/icons-material"
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
 
  AppBar,
   TextField, 
   Button,
} from "@mui/material"
import React from "react"
// import { useNavigate } from "react-router-dom"
import LocalPizzaRoundedIcon from "@mui/icons-material/LocalPizzaRounded"
import SetMealIcon from "@mui/icons-material/SetMeal"
import LocalBarIcon from "@mui/icons-material/LocalBar"
import DinnerDiningIcon from "@mui/icons-material/DinnerDining"
import KebabDiningIcon from "@mui/icons-material/KebabDining"
import IcecreamIcon from "@mui/icons-material/Icecream"
import RamenDiningRoundedIcon from "@mui/icons-material/RamenDiningRounded"
// import BeefIcon from "../icons/meat.png"
import FlutterDashIcon from "@mui/icons-material/FlutterDash"
import OutdoorGrillIcon from "@mui/icons-material/OutdoorGrill"
import EggAltIcon from "@mui/icons-material/EggAlt"
import SpaIcon from "@mui/icons-material/Spa"
import CreatePost from "../CreatePost/CreatePost"
import AddLocationIcon from '@mui/icons-material/AddLocation';
import ChildCareIcon from '@mui/icons-material/ChildCare';
import BedroomBabyIcon from '@mui/icons-material/BedroomBaby';
import SearchBox from "../SearchBox/SearchBox"
import PrimarySearchBar from "../SearchBox/SearchBar2"


export default function Sidebar() {
 
  return (
    <Box flex={1} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed">
 
        <List >
          <ListItem disablePadding >
            <ListItemButton component="a" href="/">
              {/* navigate(`/searched/${input}`) */}
              <ListItemIcon>
                <Home fontSize="large" />
              </ListItemIcon>
              <ListItemText primary="Homepage" />
            </ListItemButton>
          </ListItem>
          
         
          <ListItem disablePadding>
            <ListItemButton component="a" href="#">
              {/* navigate(`/searched/${input}`) */}
              <ListItemIcon>
                <AddLocationIcon fontSize="large" />
              </ListItemIcon>
              <ListItemText primary="Filter by Location" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href="#">
              {/* navigate(`/searched/${input}`) */}
              <ListItemIcon>
                <ChildCareIcon fontSize="large" />
              </ListItemIcon>
              <ListItemText primary="Search by name" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#">
              <ListItemIcon>
                < BedroomBabyIcon fontSize="large" />
              </ListItemIcon>
              <ListItemText primary="Filter by Age" />
            </ListItemButton>
          </ListItem>
          <PrimarySearchBar></PrimarySearchBar>
       
          <ListItem disablePadding>
            <ListItemButton component="a">
              <ListItemIcon>
                <ModeNight fontSize="large" />
              </ListItemIcon>
              <Switch
                // onChange={(e) => setMode(mode === "light" ? "dark" : "light")}
              />
            </ListItemButton>
          </ListItem>
        </List>
        

        <CreatePost />
      </Box>
    </Box>
  )
}
