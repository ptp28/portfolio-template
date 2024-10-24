import * as React from 'react';
import Box from '@mui/material/Box';
import NavigationPane from "./NavigationPane/NavigationPane.tsx";
import ContentPane from "./ContentPane/ContentPane.tsx";
import {useEffect, useState} from "react";
import {createTheme, CssBaseline, ThemeProvider} from "@mui/material";


const fontFamilyTitles = 'Saira Extra Condensed, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif';
const fontFamilyOther = 'Mulish, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif';
const typography = {
    fontFamily: fontFamilyOther,
    fontWeightRegular: 500,
    fontSize: 15,
    h1: {
        fontFamily: fontFamilyTitles,
        fontWeight: 700,
    },
    h2: {
        fontFamily: fontFamilyTitles,
        fontWeight: 700,
    },
    h3: {
        fontFamily: fontFamilyTitles,
        fontWeight: 700,
    },
    h4: {
        fontFamily: fontFamilyTitles,
        fontWeight: 600,
    },
    h5: {
        fontFamily: fontFamilyTitles,
        fontWeight: 600,
    },
    h6: {
        fontFamily: fontFamilyTitles,
        fontWeight: 600,
    }
};

const lightTheme = createTheme({
    typography: typography,
    palette: {
        mode: 'light',
        primary: {
            main: '#BD5D38',
        },
        secondary: {
            main: '#2f2f2f',
        },
    },
});


const darkTheme = createTheme({
    typography: typography,
    palette: {
        mode: 'dark',
        primary: {
            main: '#BD5D38',
        },
        secondary: {
            main: '#e2e2e2',
        },
    },
});


function App() {
    const [theme, setTheme] = useState(lightTheme);

    const [userData, setUserData] = useState(null);

    useEffect(() => {
        fetch('./user-data.json')
            .then((response) => response.json())
            .then((data) => setUserData(data))
            .catch((error) => console.error('Error fetching JSON:', error));
    }, []);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const handleChange = (event: MediaQueryListEvent) => {
            setTheme(event.matches ? darkTheme : lightTheme);
        };
        setTheme(mediaQuery.matches ? darkTheme : lightTheme);
        mediaQuery.addEventListener('change', handleChange);
        return () => {
            mediaQuery.removeEventListener('change', handleChange);
        };
    }, []);

    if(!userData) {
        return <></>;
    }

    if(userData['Theme']['primaryColor']) {
        theme.palette.primary.main = userData['Theme']['primaryColor'];
    }

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <Box sx={{display: 'flex'}}>
                <NavigationPane name={userData['About-Page']['firstName'] + " " + userData['About-Page']['lastName']}
                                photoSrc={userData['About-Page']['avatarPath']}
                                displayEducation={userData['Education-Page'] != undefined}
                                displayProjects={userData['Projects-Page'] != undefined}
                                displayWork={userData['Work-Page'] != undefined}
                                displayPublications={userData['Publications-Page'] != undefined}
                />
                <ContentPane
                    aboutSectionData={userData["About-Page"]}
                    workSectionData={userData["Work-Page"]}
                    educationSectionData={userData["Education-Page"]}
                    projectsSectionData={userData["Projects-Page"]}
                    publicationSectionData={userData["Publications-Page"]}
                />
            </Box>
        </ThemeProvider>
    );
}

export default App;