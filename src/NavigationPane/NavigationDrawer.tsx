import {Container, Drawer} from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import InfoIcon from "@mui/icons-material/Info";
import ListItemText from "@mui/material/ListItemText";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import SchoolIcon from "@mui/icons-material/School";
import TerminalIcon from "@mui/icons-material/Terminal";
import * as React from "react";
import AvatarPhoto from "./AvatarPhoto.tsx";

export default function NavigationDrawer({isMd, isMobileDrawerOpen, handleDrawerToggle}) {
    const drawerWidth = 240;

    function goToSection(sectionId: string) {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
                inline: 'nearest',
            });
        }
        if (isMobileDrawerOpen) {
            handleDrawerToggle();
        }
    }

    return (
        <Drawer
            anchor={isMd ? 'left' : 'top'}
            open={isMobileDrawerOpen}
            variant={isMd ? "permanent" : "temporary"}
            sx={{
                width: isMd ? drawerWidth : 'auto',
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: {width: isMd ? drawerWidth : 'auto', boxSizing: 'border-box'},
            }}
        >
            <Container sx={{
                height: '100%',
                bgcolor: 'primary.main',
                display: 'flex',
                flexDirection: 'column',
                alignItems: isMd ? 'center' : 'start',
                justifyContent: 'center',
            }}>
                <Toolbar/>
                {isMd &&
                    <AvatarPhoto
                        width={191}
                        height={191}
                        border={'9px solid rgba(255, 255, 255, .4)'}
                    />}
                <List sx={{color: 'white', justifyContent: 'center', alignItems: 'center', width: '100%'}}>
                    <ListItem disablePadding>
                        <ListItemButton onClick={() => {
                            goToSection('about-section')
                        }}>
                            <ListItemIcon>
                                <InfoIcon/>
                            </ListItemIcon>
                            <ListItemText primary={'ABOUT'}/>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton onClick={() => {
                            goToSection('workex-section')
                        }}>
                            <ListItemIcon>
                                <BusinessCenterIcon/>
                            </ListItemIcon>
                            <ListItemText primary={'WORK EXPERIENCE'}/>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton onClick={() => {
                            goToSection('education-section')
                        }}>
                            <ListItemIcon>
                                <SchoolIcon/>
                            </ListItemIcon>
                            <ListItemText primary={'EDUCATION'}/>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton onClick={() => {
                            goToSection('projects-section')
                        }}>
                            <ListItemIcon>
                                <TerminalIcon/>
                            </ListItemIcon>
                            <ListItemText primary={'PROJECTS'}/>
                        </ListItemButton>
                    </ListItem>
                </List>
            </Container>
        </Drawer>
    );
}