import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import * as React from "react";
import AboutPage from "./Pages/AboutPage/AboutPage.tsx";
import EducationPage from "./Pages/EducationPage/EducationPage.tsx";
import Divider from "@mui/material/Divider";
import ProjectsPage from "./Pages/ProjectsPage/ProjectsPage.tsx";
import WorkExpPage from "./Pages/WorkExpPage/WorkExpPage.tsx";
import PublicationsPage from "./Pages/PublicationsPage/PublicationsPage.tsx";
import ContentPaneProps from "./ContentPaneProps.tsx";


export default function ContentPane(props: ContentPaneProps) {

    const PageContainer = ({children, id}: { children: React.ReactNode; id: string }) => {
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
            {props.aboutSectionData &&
                <PageContainer id={'about-section'}>
                    <AboutPage data={props.aboutSectionData}/>
                </PageContainer>
            }
            {props.workSectionData &&
                <PageContainer id={'workex-section'}>
                    <WorkExpPage data={props.workSectionData}/>
                </PageContainer>
            }
            {props.educationSectionData &&
                <PageContainer id={'education-section'}>
                    <EducationPage data={props.educationSectionData}/>
                </PageContainer>
            }
            {props.projectsSectionData &&
                <PageContainer id={'projects-section'}>
                    <ProjectsPage data={props.projectsSectionData}/>
                </PageContainer>
            }
            {props.publicationSectionData &&
                <PageContainer id={'publications-section'}>
                    <PublicationsPage
                        googleScholarLink={props.publicationSectionData.googleScholarProfileLink}
                        data={props.publicationSectionData.publications}/>
                </PageContainer>
            }

        </Box>
    );
}