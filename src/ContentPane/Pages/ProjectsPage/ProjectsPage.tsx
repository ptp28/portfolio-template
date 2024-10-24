import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TerminalIcon from '@mui/icons-material/Terminal';
import {Stack} from "@mui/material";
import ProjectDetailsComponent from "./ProjectDetailsComponent.tsx";

interface ProjectsPageProps {
    data: {
        projectName: string;
        projectTags: string;
        description: string;
        links?: {
            title: string,
            url: string
        }[]
    }[];
}

export default function ProjectsPage(props: ProjectsPageProps) {
    return (
        <Box>
            <Typography sx={{mb: 5}} color="primary" variant="h3">
                <TerminalIcon sx={{fontSize: 30}}/> PROJECTS
            </Typography>

            <Stack direction="column" spacing={5}>
                {props.data.map((project) => {
                    return (
                        <ProjectDetailsComponent
                            projectName={project.projectName}
                            projectTags={project.projectTags}
                            description={project.description}
                            links={project.links}/>
                    );
                })}
            </Stack>
        </Box>
    )
}