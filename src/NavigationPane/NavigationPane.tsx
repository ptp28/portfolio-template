import * as React from "react";
import {useMediaQuery, useTheme} from "@mui/material";
import NavigationDrawer from "./NavigationDrawer.tsx";
import NavigationAppBar from "./NavigationAppBar.tsx";
import AvatarPhoto from "./AvatarPhoto.tsx";

interface NavigationPaneProps {
    name: string;
    photoSrc: string;
    displayWork: boolean;
    displayEducation: boolean;
    displayProjects: boolean;
    displayPublications: boolean;
}

export default function NavigationPane(props: NavigationPaneProps) {

    const theme = useTheme();
    const isMd = useMediaQuery(theme.breakpoints.up('md'));

    const [mobileDrawerOpen, setMobileDrawerOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileDrawerOpen((prevState) => !prevState);
    };

    return (
        <>
            <NavigationAppBar
                AvatarPhotoComponent={
                    <AvatarPhoto name={props.name}
                                 src={props.photoSrc}
                                 width={40}
                                 height={40}
                    />
                }
                isMd={isMd}
                handleDrawerToggle={handleDrawerToggle}
                name={props.name}
            />
            <NavigationDrawer
                isMd={isMd}
                isMobileDrawerOpen={mobileDrawerOpen}
                handleDrawerToggle={handleDrawerToggle}
                displayWork={props.displayWork}
                displayEducation={props.displayEducation}
                displayProjects={props.displayProjects}
                displayPublications={props.displayPublications}
                AvatarPhotoComponent={
                    <AvatarPhoto name={props.name}
                                 src={props.photoSrc}
                                 width={191}
                                 height={191}
                                 border={'9px solid rgba(255, 255, 255, .4)'}
                    />
                }/>
        </>
    );
}