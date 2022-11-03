import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/material/Menu'
import React from 'react'

const Navbar = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton edge="start" color='inherit'>
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" color="inherit">
                    Live Score
                </Typography>
                {/* <Button color="inherit">Login</Button> */}
            </Toolbar>
        </AppBar>


    )
}

export default Navbar;
