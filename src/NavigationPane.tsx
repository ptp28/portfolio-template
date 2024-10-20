import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import InfoIcon from '@mui/icons-material/Info';
import SchoolIcon from '@mui/icons-material/School';
import TerminalIcon from '@mui/icons-material/Terminal';
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import * as React from "react";
import {Avatar, Container, IconButton, useMediaQuery, useTheme} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

export default function NavigationPane() {

    const drawerWidth = 240;
    const theme = useTheme();
    const isMd = useMediaQuery(theme.breakpoints.up('md'));

    const [mobileDrawerOpen, setMobileDrawerOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileDrawerOpen((prevState) => !prevState);
    };

    function goToSection(sectionId:  string) {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
                inline: 'nearest',
            });
        }
        if(mobileDrawerOpen) {
            handleDrawerToggle();
        }
    }

    return (
        <>
            <AppBar position="fixed" sx={{
                zIndex: (theme) => theme.zIndex.drawer + 1,
                display: isMd ? 'none' : 'block',
                bgcolor: 'primary.main',
                boxShadow: 'none'
            }}>
                <Toolbar>
                    <Avatar
                        alt="Remy Sharp"
                        src={'avatar.png'}
                        sx={{width: 40, height: 40, m: 1}}
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
            <Drawer
                anchor={isMd ? 'left' : 'top'}
                open={mobileDrawerOpen}
                variant={isMd ? "permanent" : "temporary"}
                sx={{
                    width: isMd ? drawerWidth : 'auto',
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: {width: isMd ? drawerWidth : 'auto', boxSizing: 'border-box'},
                }}
            >
                <Container sx={{
                    height: '100%',
                    overflow: 'auto',
                    bgcolor: 'primary.main',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: isMd ? 'center' : 'start',
                    justifyContent: 'center',
                }}>
                    <Toolbar />
                    {isMd && <Avatar
                        alt="Remy Sharp"
                        src={'avatar.png'}
                        sx={{width: 165, height: 165, mt: 2, mb: 2}}
                    />}
                    <List sx={{color: 'white', justifyContent: 'center', alignItems: 'center'}}>
                        <ListItem disablePadding>
                            <ListItemButton onClick={() => {goToSection('about-section')}}>
                                <ListItemIcon>
                                    <InfoIcon />
                                </ListItemIcon>
                                <ListItemText primary={'ABOUT'}/>
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton onClick={() => {goToSection('education-section')}}>
                                <ListItemIcon>
                                    <SchoolIcon/>
                                </ListItemIcon>
                                <ListItemText primary={'EDUCATION'}/>
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton onClick={() => {goToSection('projects-section')}}>
                                <ListItemIcon>
                                    <TerminalIcon/>
                                </ListItemIcon>
                                <ListItemText primary={'PROJECTS'}/>
                            </ListItemButton>
                        </ListItem>
                    </List>
                </Container>
            </Drawer>
        </>
    );
}