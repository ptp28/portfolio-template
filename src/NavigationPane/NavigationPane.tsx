import * as React from "react";
import {useMediaQuery, useTheme} from "@mui/material";
import NavigationDrawer from "./NavigationDrawer.tsx";
import NavigationAppBar from "./NavigationAppBar.tsx";
import AvatarPhoto from "./AvatarPhoto.tsx";

export default function NavigationPane() {

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
                    <AvatarPhoto name={'Charlie'}
                                 src={'avatar.png'}
                                 width={40}
                                 height={40}
                    />
                }
                isMd={isMd}
                handleDrawerToggle={handleDrawerToggle}
                name={'Charlie'}
            />
            <NavigationDrawer
                isMd={isMd}
                isMobileDrawerOpen={mobileDrawerOpen}
                handleDrawerToggle={handleDrawerToggle}
                AvatarPhotoComponent={
                    <AvatarPhoto name={'Charlie'}
                                 src={'avatar.png'}
                                 width={191}
                                 height={191}
                                 border={'9px solid rgba(255, 255, 255, .4)'}
                    />
                }/>
        </>
    );
}