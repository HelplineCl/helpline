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
import AdbIcon from '@mui/icons-material/Adb';
import logo from "/logo.svg"
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';

const pages = ['Nosotras', 'Características', 'Instagram'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

export default function CustomMenu() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

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
      <div>
        <AppBar color="#ffffff" position="static">
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              {/* Logo desk */}
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="#app-bar-with-responsive-menu"
                sx={{
                  mr: 2,
                  display: { xs: 'none', md: 'flex' },
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              >
              <img src={logo} className="logo" alt="Vite logo" />
              </Typography>

              {/* Menu mobile */}
              <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{ display: { xs: 'block', md: 'none' } }}
                >
                  {pages.map((page) => (
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                      <Typography  sx={{ textAlign: 'center' }}>{page}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>

             { /*Logo mobile*/}
              <Typography
                variant="h5"
                noWrap
                component="a"
                href="#app-bar-with-responsive-menu"
                sx={{
                  mr: 2,
                  display: { xs: 'flex', md: 'none' },
                  flexGrow: 1,
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              >
                <img src={logo} className="logo" alt="Vite logo" />
              </Typography>

              {/* Menu desk */}     
              <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                {pages.map((page) => (
                  <Button
                    variant="contained"
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2,bgcolor: 'white', color: 'black', display: 'block',boxShadow: 'none',
                      '&:hover': { 
                        bgcolor: "none", 
                        boxShadow: 'none' 
                      } }}
                  >
                    {page}
                  </Button>
                ))}
              </Box>

                {/* Icono boton descargala */}
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="">
                <Button variant="outlined" startIcon={<CloudDownloadIcon />}>
                  Descargala aquí
                </Button>
                </Tooltip>
              </Box>

            </Toolbar>
          </Container>
        </AppBar>
      </div>
    );
  }