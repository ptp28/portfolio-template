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
import {useEffect} from "react";
import CollectionsBookmarkIcon from "@mui/icons-material/CollectionsBookmark";

interface NavigationDrawerProps {
    AvatarPhotoComponent: React.ReactElement;
    isMd: boolean;
    isMobileDrawerOpen: boolean;
    handleDrawerToggle: () => void;
}

export default function NavigationDrawer(props: NavigationDrawerProps) {
    const drawerWidth = 256;
    const sections = ['about-section', 'workex-section', 'education-section', 'projects-section', 'publications-section'];
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

    const CustomListItem = ({index, icon, title, onClick}: {
        index: number,
        icon: React.ReactElement,
        title: string,
        onClick: () => void
    }) => {
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


    function goToSection(sectionId: string, index: number) {
        const section = document.getElementById(sectionId);
        if (section) {
            const offset = props.isMd ? -30 : 30;
            const sectionTop = section.getBoundingClientRect().top + window.scrollY;

            window.scrollTo({
                top: sectionTop - offset,
                behavior: 'smooth',
            });
        }
        if (props.isMobileDrawerOpen) {
            props.handleDrawerToggle();
        }
        setSelectedIndex(index);
    }

    return (
        <Drawer
            anchor={props.isMd ? 'left' : 'top'}
            open={props.isMobileDrawerOpen}
            variant={props.isMd ? "permanent" : "temporary"}
            sx={{
                width: props.isMd ? drawerWidth : 'auto',
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: {width: props.isMd ? drawerWidth : 'auto', boxSizing: 'border-box'},
            }}
        >
            <Container sx={{
                height: '100%',
                bgcolor: 'primary.main',
                // bgcolor: 'background.paper',
                display: 'flex',
                flexDirection: 'column',
                alignItems: props.isMd ? 'center' : 'start',
                justifyContent: 'center',
            }}>
                <Toolbar/>
                {props.isMd && props.AvatarPhotoComponent}
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
                    <CustomListItem
                        index={4}
                        title={'PUBLICATIONS'}
                        icon={<CollectionsBookmarkIcon/>}
                        onClick={() => {
                            goToSection('publications-section', 4)
                        }}
                    />
                </List>
            </Container>
        </Drawer>
    );
}