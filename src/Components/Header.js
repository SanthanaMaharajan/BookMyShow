import React from 'react';

// //Bootstrap
import Form from 'react-bootstrap/Form';

//MUI
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AccountCircle from '@mui/icons-material/AccountCircle';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';




const pages = ['Products', 'Pricing', 'Blog'] ;
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(2),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    margin:'15px 0',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        border:'1px solid #ccc',
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        [theme.breakpoints.up('sm')]: {
            width: '50ch',
            '&:focus': {
                width: 'ch',
            },
        },
    },
}));

function Header() {
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

            <AppBar position="static" className='appbar'>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
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
                                color: 'black',
                                textDecoration: 'none',
                            }}
                        >
                            <img src="https://in.bmscdn.com/bmsin/new/BMS_logo_new.png" className='logo-img' />
                        </Typography>

                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="black"
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
                                <Search>
                                    <SearchIconWrapper>
                                        <SearchIcon />
                                    </SearchIconWrapper>
                                    <StyledInputBase
                                        placeholder="Search for Movies,Events,Plays,Sports and Activities"
                                        inputProps={{ 'aria-label': 'search' }}
                                    />
                                </Search>

                                
                                    <MenuItem  >
                                        <Form.Select size="sm">
                                            <option>Chennai</option>
                                            <option>Hyderabad</option>
                                            <option>New Delhi</option>
                                            <option>Kochi</option>
                                            <option>Mumbai</option>
                                            <option>Kolkata</option>
                                            <option>Pune</option>
                                            <option>Bengaluru</option>
                                        </Form.Select>
                                    </MenuItem>
                            </Menu>
                        </Box>
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
                                lineHeight:"normal",
                                letterSpacing: '.3rem',
                                color: '#000',
                                textDecoration: 'none',
                            }}
                        >
                            <img src="https://in.bmscdn.com/bmsin/new/BMS_logo_new.png" className='logo-img' />
                        </Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                                        <Search className='searchbar'>
                                            <SearchIconWrapper>
                                                <SearchIcon />
                                            </SearchIconWrapper>
                                            <StyledInputBase
                                                placeholder="Search for Movies,Events,Plays,Sports and Activities"
                                                inputProps={{ 'aria-label': 'search' }}
                                            />
                                        </Search>
                                    <Form.Select size="sm" className='selectbtn'>
                                        <option>Chennai</option>
                                        <option>Hyderabad</option>
                                        <option>New Delhi</option>
                                        <option>Kochi</option>
                                        <option>Mumbai</option>
                                        <option>Kolkata</option>
                                        <option>Pune</option>
                                        <option>Bengaluru</option>
                                    </Form.Select>
                        </Box>

                        <Box sx={{ flexGrow: 0 }}>
                            <Tooltip title="Open settings">
                                <IconButton
                                    size="large"
                                    aria-label="account of current user"
                                    aria-controls="primary-search-account-menu"
                                    aria-haspopup="true"
                                    color="#ccc"
                                    onClick={handleOpenUserMenu} sx={{ p: 0 }}
                                >
                                    <AccountCircle fontSize='large' color='disabled' sx={{p:0}}/>
                                    <Typography textAlign="center"> Hi,Guest</Typography>
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
                                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                        <Typography textAlign="center">{setting}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            <Box className='subbar mb-1' sx={{ flexGrow: 1, display: { xs: 'none', md: 'block' } }}>

            <Container maxWidth='xl' >
                <div className='py-2 px-4 d-flex justify-content-between'>
                    <div className='px-2'>
                        <a className='text-muted text-decoration-none pe-4' href=''>Movies</a>
                        <a className='text-muted text-decoration-none pe-4' href=''>Stream</a>
                        <a className='text-muted text-decoration-none pe-4' href=''>Events</a>
                        <a className='text-muted text-decoration-none pe-4' href=''>Plays</a>
                        <a className='text-muted text-decoration-none pe-4' href=''>Sports</a>
                        <a className='text-muted text-decoration-none pe-4' href=''>Activities</a>
                    </div>
                    <div>
                        <a className='text-muted text-decoration-none ps-4' href=''>ListYourShow</a>
                        <a className='text-muted text-decoration-none ps-4' href=''>Corporates</a>
                        <a className='text-muted text-decoration-none ps-4' href=''>Offers</a>
                        <a className='text-muted text-decoration-none ps-4' href=''>Giftcards</a>
                    </div>
                </div>
            </Container>
            </Box>
        </div>
    );
}

export default Header;