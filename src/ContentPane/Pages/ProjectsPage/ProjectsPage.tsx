import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TerminalIcon from '@mui/icons-material/Terminal';
import {Stack} from "@mui/material";
import ProjectDetailsComponent from "./ProjectDetailsComponent.tsx";

export default function ProjectsPage(props) {
    return (
        <Box sx={{...props.sx}}>
            <Typography sx={{mb: 5}} color="primary" variant="h3">
                <TerminalIcon sx={{fontSize: 30}}/> PROJECTS
            </Typography>

            <Stack direction="column" spacing={5}>
                <ProjectDetailsComponent
                    projectName={'Nebula Nexus'}
                    projectTags={'#java #sql #spring #docker #tomcat'}
                    description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id donec ultrices.'}
                    projectLinks={[
                        {
                            'text': 'Open Nebula Nexus',
                            'link': 'https://nexus.com',
                        }
                    ]}/>

                <ProjectDetailsComponent
                    projectName={'Quantum Quill'}
                    projectTags={'#typescript #react #vite #scss'}
                    description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id donec ultrices.'}
                    projectLinks={[]}/>

                <ProjectDetailsComponent
                    projectName={'Aurora Forge'}
                    projectTags={'#swift #uikit #metal #xcode'}
                    description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id donec ultrices.'}
                    projectLinks={[
                        {
                            'text': 'Open Aurora Forge',
                            'link': 'aurora.com',
                        },
                        {
                            'text': 'Get Source Code',
                            'link': 'https://github.com',
                        }
                    ]}/>

                <ProjectDetailsComponent
                    projectName={'Eclipse Harbor'}
                    projectTags={'#typescript #express.js #node.js #sql'}
                    description={'<b>Lorem ipsum</b> dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id donec ultrices.'}
                    projectLinks={[]}/>

                <ProjectDetailsComponent
                    projectName={'CipherWave'}
                    projectTags={'#java'}
                    description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id donec ultrices.'}
                    projectLinks={[]}/>

            </Stack>
        </Box>
    )
}