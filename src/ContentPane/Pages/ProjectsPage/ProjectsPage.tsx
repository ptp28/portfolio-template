import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TerminalIcon from '@mui/icons-material/Terminal';
import {Stack} from "@mui/material";
import {GitHub, LinkRounded} from "@mui/icons-material";
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
                    projectDescription={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id donec ultrices.'}
                    projectLinks={[
                        {
                            'text': 'Open Nebula Nexus',
                            'link': 'nexus.com',
                            'icon': <LinkRounded sx={{mr: 0.5}}/>
                        }
                    ]}/>

                <ProjectDetailsComponent
                    projectName={'Quantum Quill'}
                    projectTags={'#typescript #react #vite #scss'}
                    projectDescription={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id donec ultrices.'}
                    projectLinks={[]}/>

                <ProjectDetailsComponent
                    projectName={'Aurora Forge'}
                    projectTags={'#swift #uikit #metal #xcode'}
                    projectDescription={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id donec ultrices.'}
                    projectLinks={[
                        {
                            'text': 'Open Aurora Forge',
                            'icon': <LinkRounded sx={{mr: 0.5}}/>,
                            'link': 'aurora.com',
                        },
                        {
                            'text': 'Get Source Code',
                            'icon': <GitHub sx={{mr: 0.5}}/>,
                            'link': 'github.com',
                        }
                    ]}/>

                <ProjectDetailsComponent
                    projectName={'Eclipse Harbor'}
                    projectTags={'#typescript #express.js #node.js #sql'}
                    projectDescription={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id donec ultrices.'}
                    projectLinks={[]}/>

                <ProjectDetailsComponent
                    projectName={'CipherWave'}
                    projectTags={'#java'}
                    projectDescription={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id donec ultrices.'}
                    projectLinks={[]}/>

            </Stack>
        </Box>
    )
}