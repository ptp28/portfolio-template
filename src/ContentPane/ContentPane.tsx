import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import * as React from "react";
import AboutPage from "./Pages/AboutPage/AboutPage.tsx";
import EducationPage from "./Pages/EducationPage/EducationPage.tsx";
import Divider from "@mui/material/Divider";
import ProjectsPage from "./Pages/ProjectsPage/ProjectsPage.tsx";
import WorkExpPage from "./Pages/WorkExpPage/WorkExpPage.tsx";
import PublicationsPage from "./Pages/PublicationsPage/PublicationsPage.tsx";

export default function ContentPane() {

    const PageContainer = ({children, id}) => {
        return (
            <>
                <section id={id} style={{minHeight: '100vh'}}>
                    <Toolbar/>
                    {children}
                </section>
                <Divider sx={{mt: 5}}/>
            </>
        );
    };

    return (
        <Box component="main" sx={{flexGrow: 1, p: 3, width: '100%', mr: {sm: 0, md: 3}}}>
            <PageContainer id={'about-section'}>
                <AboutPage/>
            </PageContainer>
            <PageContainer id={'workex-section'}>
                <WorkExpPage/>
            </PageContainer>
            <PageContainer id={'education-section'}>
                <EducationPage/>
            </PageContainer>
            <PageContainer id={'projects-section'}>
                <ProjectsPage/>
            </PageContainer>
            <PageContainer id={'publications-section'}>
                <PublicationsPage/>
            </PageContainer>
        </Box>
    );
}