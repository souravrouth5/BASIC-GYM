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
import { Link, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { checkToken, logout } from '../../redux/Authslice';
import FitnessCenterSharpIcon from '@mui/icons-material/FitnessCenterSharp';


export function Navbar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const { isLoggedIn } = useSelector(state => state.authentication)
    const user = JSON.parse(localStorage.getItem('user')) || JSON.parse(sessionStorage.getItem('user'))
    const dispatch = useDispatch()

    // console.log(user.name);
    const Logout = () => {
        dispatch(logout())
    }

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

    let pages
    if (!isLoggedIn) {
        pages = [
            {
                path: '/',
                name: 'Home'
            },
            {
                path: '/blogs',
                name: 'Blogs'
            },
            // {
            //     path: '/bookings',
            //     name: 'Bookings'
            // },
            {
                path: '/login',
                name: 'Login'
            },
            {
                path: '/register',
                name: 'Register'
            }
        ]
    } else {
        pages = [
            {
                path: '/',
                name: 'Home'
            },
            {
                path: '/blogs',
                name: 'Blogs'
            },
            // {
            //     path: '/bookings',
            //     name: 'Bookings'
            // },
            {
                path: '/login',
                name: 'Logout'
            },
        ]
    }
    let settings;
    if(!isLoggedIn){
        settings = [
            {
                path: '/profile',
                name: `${user?.name ?? 'demo'}`
            },
            {
                path: '/login',
                name: 'Login'
            }
        ];
    } else {
        settings = [
            {
                path: '/profile',
                name: `${user?.name ?? 'demo'}`
            },
            {
                path: '/dashboard',
                name: 'Dashboard'
            },
            {
                path: '/login',
                name: 'Logout'
            }
        ];
    }
    React.useEffect(()=>{
        dispatch(checkToken())
    },[dispatch])

    return (
        <AppBar position="sticky" sx={{ bgcolor: 'black', color: 'white' }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
                    <FitnessCenterSharpIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="/"
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
                        <Link to={'/'} style={{ textDecoration: 'none', color: 'white' }}>
                            <span style={{color: 'red'}}>P</span>owerhouse Gym
                            </Link>
                        </Typography>

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
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">
                                        <NavLink to={page.path} style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }} onClick={page.name === 'Logout' && Logout}>{page.name}</NavLink>
                                    </Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
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
                        LOGO
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end', mr: '10px' }}>
                        {pages.map((page) => (
                            <Button
                                key={page.name}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                <NavLink to={page.path} style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }} onClick={page.name === 'Logout' && Logout}>{page.name}</NavLink>
                            </Button>
                        ))}
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => (
                                <MenuItem key={setting.name} onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center">
                                        <NavLink to={setting.path} style={{ color: 'black', textDecoration: 'none', fontWeight: 'bold', textTransform: 'uppercase' }} onClick={setting.name === 'Logout' && Logout}>{setting.name}</NavLink>
                                    </Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}