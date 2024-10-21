import Toolbar from "@mui/material/Toolbar";
import AvatarPhoto from "./AvatarPhoto.tsx";
import Typography from "@mui/material/Typography";
import {IconButton} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import * as React from "react";

export default function NavigationAppBar({isMd, handleDrawerToggle}) {
    return (
        <AppBar position="fixed" sx={{
            zIndex: (theme) => theme.zIndex.drawer + 1,
            display: isMd ? 'none' : 'block',
            bgcolor: 'primary.main',
            boxShadow: 'none'
        }}>
            <Toolbar>
                <AvatarPhoto
                    width={40}
                    height={40}
                    border={''}
                />
                <Typography variant="h6" noWrap component="div" sx={{flexGrow: 1}}>
                    CHARLIE BROWN
                </Typography>
                <IconButton
                    size="large"
                    edge="end"
                    color="inherit"
                    aria-label="menu"
                    sx={{ml: 'auto'}}
                    onClick={handleDrawerToggle}
                >
                    <MenuIcon/>
                </IconButton>
            </Toolbar>
        </AppBar>
    );
}