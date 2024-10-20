import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import * as React from "react";
import AboutPage from "./AboutPage.tsx";
import EducationPage from "./EducationPage.tsx";
import Divider from "@mui/material/Divider";
import ProjectsPage from "./ProjectsPage.tsx";

export default function ContentPane() {

    const PageContainer = ({children, id }) => {
        return (
            <>
                <section id={id} style={{minHeight: '100vh'}}>
                    <Toolbar/>
                    {children}
                </section>
                <Divider/>
            </>
        );
    };

    return (
        <Box component="main" sx={{flexGrow: 1, p: 3}}>
            <PageContainer id={'about-section'}>
                <AboutPage/>
            </PageContainer>
            <PageContainer id={'education-section'}>
                <EducationPage/>
            </PageContainer>
            <PageContainer id={'projects-section'}>
                <ProjectsPage/>
            </PageContainer>
        </Box>
    );
}