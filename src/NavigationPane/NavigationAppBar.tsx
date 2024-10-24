import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import {IconButton} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import * as React from "react";

interface NavigationAppBarProps {
    AvatarPhotoComponent: React.ReactElement;
    name: string;
    isMd: boolean;
    handleDrawerToggle?: () => void;
}

export default function NavigationAppBar(props: NavigationAppBarProps) {
    return (
        <AppBar position="fixed" sx={{
            zIndex: (theme) => theme.zIndex.drawer + 1,
            display: props.isMd ? 'none' : 'block',
            bgcolor: 'primary.main',
            boxShadow: 'none'
        }}>
            <Toolbar>
                {props.AvatarPhotoComponent}
                <Typography variant="h6" noWrap component="div" sx={{flexGrow: 1}}>
                    {props.name}
                </Typography>
                <IconButton
                    size="large"
                    edge="end"
                    color="inherit"
                    aria-label="menu"
                    sx={{ml: 'auto'}}
                    onClick={props.handleDrawerToggle}
                >
                    <MenuIcon/>
                </IconButton>
            </Toolbar>
        </AppBar>
    );
}