import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import AccountPopover from "./../AccountPopover/AccountPopover";
import Logo from "./../../../components/Logo";
import {NavBarButtons} from "./compoents/NavBarButtons";
import {BUTTONS} from "./utils/constants"
import CartPopover from "../CartPopover";


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
                            <NavBarButtons
                                button={BUTTONS}
                                handleCloseNavMenu={handleCloseNavMenu}
                            />
                        </Menu>
                    </Box>
                    <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
                        <NavBarButtons
                            button={BUTTONS}
                            handleCloseNavMenu={handleCloseNavMenu}
                        />
                    </Box>
                    <Box sx={{mr: 3}}>
                        <CartPopover/>
                    </Box>
                    <Box>
                        <AccountPopover/>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}