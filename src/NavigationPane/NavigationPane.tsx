import * as React from "react";
import {useMediaQuery, useTheme} from "@mui/material";
import NavigationDrawer from "./NavigationDrawer.tsx";
import NavigationAppBar from "./NavigationAppBar.tsx";

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
                isMd={isMd}
                handleDrawerToggle={handleDrawerToggle}
            />
            <NavigationDrawer
                isMd={isMd}
                isMobileDrawerOpen={mobileDrawerOpen}
                handleDrawerToggle={handleDrawerToggle}
            />
        </>
    );
}