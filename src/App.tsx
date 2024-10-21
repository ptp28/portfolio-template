import * as React from 'react';
import Box from '@mui/material/Box';
import NavigationPane from "./NavigationPane/NavigationPane.tsx";
import ContentPane from "./ContentPane/ContentPane.tsx";
import {useEffect, useState} from "react";
import {createTheme, CssBaseline, ThemeProvider} from "@mui/material";

const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#1976d2',
        },
        secondary: {
            main: '#2f2f2f',
        },
    },
});

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#1976d2',
        },
        secondary: {
            main: '#e2e2e2',
        },
    },
});


function App() {
    const [theme, setTheme] = useState(lightTheme);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const handleChange = (event) => {
            setTheme(event.matches ? darkTheme : lightTheme);
        };
        setTheme(mediaQuery.matches ? darkTheme : lightTheme);
        mediaQuery.addEventListener('change', handleChange);
        return () => {
            mediaQuery.removeEventListener('change', handleChange);
        };
    }, []);

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <Box sx={{display: 'flex'}}>
                <NavigationPane/>
                <ContentPane/>
            </Box>
        </ThemeProvider>
    );
}

export default App;