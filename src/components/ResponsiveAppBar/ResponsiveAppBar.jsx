import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import {Link, styled} from "@mui/material"


import { images } from '../../constants';
import PrimarySearchBar from '../SearchBox/SearchBar2';
import { Stack } from '@mui/system';

const pages = ['Home', 'Memories', 'About'];


const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  

  
  const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
    height: "85px",
    
    
  })

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const StyleeAppBar = styled(AppBar)({
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 56 28' width='56' height='28'%3E%3Cpath fill='%238acedb' fill-opacity='0.18' d='M56 26v2h-7.75c2.3-1.27 4.94-2 7.75-2zm-26 2a2 2 0 1 0-4 0h-4.09A25.98 25.98 0 0 0 0 16v-2c.67 0 1.34.02 2 .07V14a2 2 0 0 0-2-2v-2a4 4 0 0 1 3.98 3.6 28.09 28.09 0 0 1 2.8-3.86A8 8 0 0 0 0 6V4a9.99 9.99 0 0 1 8.17 4.23c.94-.95 1.96-1.83 3.03-2.63A13.98 13.98 0 0 0 0 0h7.75c2 1.1 3.73 2.63 5.1 4.45 1.12-.72 2.3-1.37 3.53-1.93A20.1 20.1 0 0 0 14.28 0h2.7c.45.56.88 1.14 1.29 1.74 1.3-.48 2.63-.87 4-1.15-.11-.2-.23-.4-.36-.59H26v.07a28.4 28.4 0 0 1 4 0V0h4.09l-.37.59c1.38.28 2.72.67 4.01 1.15.4-.6.84-1.18 1.3-1.74h2.69a20.1 20.1 0 0 0-2.1 2.52c1.23.56 2.41 1.2 3.54 1.93A16.08 16.08 0 0 1 48.25 0H56c-4.58 0-8.65 2.2-11.2 5.6 1.07.8 2.09 1.68 3.03 2.63A9.99 9.99 0 0 1 56 4v2a8 8 0 0 0-6.77 3.74c1.03 1.2 1.97 2.5 2.79 3.86A4 4 0 0 1 56 10v2a2 2 0 0 0-2 2.07 28.4 28.4 0 0 1 2-.07v2c-9.2 0-17.3 4.78-21.91 12H30zM7.75 28H0v-2c2.81 0 5.46.73 7.75 2zM56 20v2c-5.6 0-10.65 2.3-14.28 6h-2.7c4.04-4.89 10.15-8 16.98-8zm-39.03 8h-2.69C10.65 24.3 5.6 22 0 22v-2c6.83 0 12.94 3.11 16.97 8zm15.01-.4a28.09 28.09 0 0 1 2.8-3.86 8 8 0 0 0-13.55 0c1.03 1.2 1.97 2.5 2.79 3.86a4 4 0 0 1 7.96 0zm14.29-11.86c1.3-.48 2.63-.87 4-1.15a25.99 25.99 0 0 0-44.55 0c1.38.28 2.72.67 4.01 1.15a21.98 21.98 0 0 1 36.54 0zm-5.43 2.71c1.13-.72 2.3-1.37 3.54-1.93a19.98 19.98 0 0 0-32.76 0c1.23.56 2.41 1.2 3.54 1.93a15.98 15.98 0 0 1 25.68 0zm-4.67 3.78c.94-.95 1.96-1.83 3.03-2.63a13.98 13.98 0 0 0-22.4 0c1.07.8 2.09 1.68 3.03 2.63a9.99 9.99 0 0 1 16.34 0z'%3E%3C/path%3E%3C/svg%3E")`
    
  })


  return (
    <StyleeAppBar position="static" color="primary" >
     
        <StyledToolbar  disableGutters >
          
      <Stack  direction="row"  spacing={2} alignItems='center'>
        
     
        <Box
            component="img"
            sx={{
            height: 64,
            }}
            alt="Your logo."
            src={images.logo}
        />
        
        <Link href="/" textDecoration="none" underline="none" color="white">
          <Typography
            variant="h1"
            noWrap
            component="a"
            fontFamily="Source Serif Pro"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: "#FFFFFF",
              textDecoration: 'none',
            }}
          >
            NiuNiu
          </Typography>
          </Link>
          </Stack>

        
          <PrimarySearchBar></PrimarySearchBar>
          {/* * // TODO //flexgrow让它撑大 */}
          
          <Box  sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
              <Link href="/" textDecoration="none" underline="none">
              <Button
                key={111}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                HOME
              </Button>
              </Link>
              <Link href="/posts" textDecoration="none" underline="none">
              <Button
                key={112}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                MEMORIES
              </Button>
              </Link>
              <Link href="/about" textDecoration="none" underline="none">
            
              <Button
                key={113}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                ABOUT
              </Button>
              </Link>
          
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="secondary"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="demo-positioned-menu"
              aria-labelledby="demo-positioned-button"
              anchorOrigin={{
                vertical: 'top',
        horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
                <MenuItem key="001" onClick={handleCloseNavMenu}>
          <Link href="/" textDecoration="none" underline="none">
          <Typography textAlign="center">HOME</Typography>
          </Link>
        </MenuItem>
        <MenuItem key="002" onClick={handleCloseNavMenu}>
          <Link href="/posts" textDecoration="none" underline="none">
          <Typography textAlign="center">MEMORIES</Typography>
          </Link>
        </MenuItem>
        <MenuItem key="003" onClick={handleCloseNavMenu}>
          <Link href="/about" textDecoration="none" underline="none">
          <Typography textAlign="center">ABOUT</Typography>
          </Link>
        </MenuItem>
             
            </Menu>
          </Box>
      
        </StyledToolbar>
     
    </StyleeAppBar>
  );
};
export default ResponsiveAppBar;