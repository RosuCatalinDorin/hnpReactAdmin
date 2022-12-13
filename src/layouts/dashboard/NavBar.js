import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import {NavLink as RouterLink} from "react-router-dom";
import AccountPopover from "./AccountPopover";
import Logo from "../../components/Logo";


const routes = [
    {
        title: 'Homepage',
        path: '/dashboard/homepage',
        admin: true
    },
    {
        title: 'Dashboard',
        path: '/dashboard/app',
        admin: false
    },
    {
        title: 'Users',
        path: '/dashboard/user',
        admin: true
    },
    {
        title: 'Partners',
        path: '/dashboard/company',
        admin: true
    },
    {
        title: 'Products',
        path: '/dashboard/Products',
        admin: true
    },
    {
        title: 'Blog',
        path: '/dashboard/blog',
        admin: true
    },
    /*  {
        title: 'login',
        path: '/login',
        icon: getIcon('eva:lock-fill')
      },
      {
        title: 'register',
        path: '/register',
        icon: getIcon('eva:person-add-fill')
      },
      {
        title: 'Not found',
        path: '/404',
        icon: getIcon('eva:alert-triangle-fill')
      }*/
];


export default function ResponsiveAppBar() {

    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar position="fixed" color='transparent' sx={{boxShadow: 'none', backdropFilter: "blur(20px)"}}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box>
                        <Logo/>
                    </Box>
                    <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="black"
                        >
                            <MenuIcon/>
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
                            sx={{
                                display: {xs: 'block', md: 'none'},
                            }}
                        >
                            {routes.map((item) => (
                                <MenuItem
                                    component={RouterLink}
                                    to={item.path}
                                    key={item.title} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center" sx={{color: 'black'}}>{item.title}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
                        {routes.map((item) => (
                            <Button
                                component={RouterLink}
                                to={item.path}
                                key={item.title}
                                onClick={handleCloseNavMenu}
                                sx={{my: 2, color: 'black', display: 'block'}}
                            >
                                {item.title}
                            </Button>
                        ))}
                    </Box>
                    <Box>
                        {/*<LanguagePopover/>*/}
                        {/*<NotificationsPopover/>*/}
                        <AccountPopover/>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}