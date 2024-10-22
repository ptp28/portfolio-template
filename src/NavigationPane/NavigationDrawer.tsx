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
import {useEffect} from "react";

export default function NavigationDrawer({isMd, isMobileDrawerOpen, handleDrawerToggle}) {
    const drawerWidth = 256;
    const sections = ['about-section', 'workex-section', 'education-section', 'projects-section'];
    const [selectedIndex, setSelectedIndex] = React.useState(0);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = sections.findIndex((section) => section === entry.target.id);
                        setSelectedIndex(index);
                    }
                });
            },
            {
                root: null,
                threshold: 0.6,
            }
        );
        sections.forEach((section) => {
            const element = document.getElementById(section);
            if (element) {
                observer.observe(element);
            }
        });
        return () => {
            sections.forEach((section) => {
                const element = document.getElementById(section);
                if (element) {
                    observer.unobserve(element);
                }
            });
        };
    }, []);

    const CustomListItem = ({index, icon, title, onClick}) => {
        return (
            <ListItem disablePadding disableGutters>
                <ListItemButton
                    selected={selectedIndex === index}
                    onClick={onClick}>
                    <ListItemIcon
                        sx={{color: selectedIndex === index ? 'rgba(255,255,255, 1)' : 'rgba(255,255,255,0.5)'}}
                    >
                        {icon}
                    </ListItemIcon>
                    <ListItemText
                        primary={title}
                        primaryTypographyProps={{
                            fontWeight: selectedIndex === index ? '800' : '600',
                            color: selectedIndex === index ? 'rgba(255,255,255, 1)' : 'rgba(255,255,255,0.5)',
                        }}
                    />
                </ListItemButton>
            </ListItem>
        );
    }


    function goToSection(sectionId: string, index) {
        const section = document.getElementById(sectionId);
        if (section) {
            const offset = isMd ? -30 : 30;
            const sectionTop = section.getBoundingClientRect().top + window.scrollY;

            window.scrollTo({
                top: sectionTop - offset,
                behavior: 'smooth',
            });
        }
        if (isMobileDrawerOpen) {
            handleDrawerToggle();
        }
        setSelectedIndex(index);
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
                // bgcolor: 'background.paper',
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
                    <CustomListItem
                        index={0}
                        title={'ABOUT'}
                        icon={<InfoIcon/>}
                        onClick={() => {
                            goToSection('about-section', 0)
                        }}
                    />
                    <CustomListItem
                        index={1}
                        title={'WORK EXPERIENCE'}
                        icon={<BusinessCenterIcon/>}
                        onClick={() => {
                            goToSection('workex-section', 1)
                        }}
                    />
                    <CustomListItem
                        index={2}
                        title={'EDUCATION'}
                        icon={<SchoolIcon/>}
                        onClick={() => {
                            goToSection('education-section', 2)
                        }}
                    />
                    <CustomListItem
                        index={3}
                        title={'PROJECTS'}
                        icon={<TerminalIcon/>}
                        onClick={() => {
                            goToSection('projects-section', 3)
                        }}
                    />
                </List>
            </Container>
        </Drawer>
    );
}