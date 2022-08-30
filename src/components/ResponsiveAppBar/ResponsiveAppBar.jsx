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
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  
  const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
    height: "85px",
    // backgroundColor: darkTheme.palette.primary.dark,
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

  return (
    <AppBar position="static" color="primary" >
     
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
        
       
          <Typography
            variant="h3"
            noWrap
            component="a"
            fontFamily="Source Serif Pro"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'primary',
              textDecoration: 'none',
            }}
          >
            NiuNiu
          </Typography>
          </Stack>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="primary"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
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
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem> 
              ))}
            </Menu>
          </Box>
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
          
      
        </StyledToolbar>
     
    </AppBar>
  );
};
export default ResponsiveAppBar;