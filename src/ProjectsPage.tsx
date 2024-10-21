import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TerminalIcon from '@mui/icons-material/Terminal';
import {Link, Stack} from "@mui/material";
import Grid from "@mui/material/Grid2";
import {GitHub, LinkRounded} from "@mui/icons-material";

export default function ProjectsPage(props) {
    return (
        <Box sx={{...props.sx}}>
            <Typography sx={{fontWeight: 'bold', mb: 8}} color="textPrimary" variant="h4">
                <TerminalIcon sx={{fontSize: 30}}/> PROJECTS
            </Typography>

            <Stack direction="column" spacing={5}>
                <Stack direction="column" spacing={1}>
                    <Grid container spacing={1} justifyContent={'space-between'}>
                        <Grid size={{xs: 12, md: 6}} order={1}>
                            <Typography sx={{fontWeight: 'bold'}} color="textPrimary" variant="h4">
                                Nebula Nexus
                            </Typography>
                        </Grid>
                        <Grid size={{xs: 12, md: 'auto'}} order={{xs: 3, md: 2}}>
                            <Typography color="primary" variant="h6" gutterBottom>
                                #java #sql #spring #docker #tomcat
                            </Typography>
                        </Grid>
                    </Grid>

                    <Typography sx={{mt: 2}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
                        enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
                        imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
                        Convallis convallis tellus id interdum velit laoreet id donec ultrices.
                    </Typography>

                    <Link sx={{fontWeight: 600, display: 'flex', alignItems: 'center'}}>
                        <LinkRounded sx={{mr: 0.5}}/> Open Nebula Nexus
                    </Link>
                </Stack>

                <Stack direction="column" spacing={1}>
                    <Grid container spacing={1} justifyContent={'space-between'}>
                        <Grid size={{xs: 12, md: 6}} order={1}>
                            <Typography sx={{fontWeight: 'bold'}} color="textPrimary" variant="h4">
                                Quantum Quill
                            </Typography>
                        </Grid>
                        <Grid size={{xs: 12, md: 'auto'}} order={{xs: 3, md: 2}}>
                            <Typography color="primary" variant="h6" gutterBottom>
                                #typescript #react #vite #scss
                            </Typography>
                        </Grid>
                    </Grid>

                    <Typography sx={{mt: 2}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
                        enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
                        imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
                        Convallis convallis tellus id interdum velit laoreet id donec ultrices.
                    </Typography>
                </Stack>

                <Stack direction="column" spacing={1}>
                    <Grid container spacing={1} justifyContent={'space-between'}>
                        <Grid size={{xs: 12, md: 6}} order={1}>
                            <Typography sx={{fontWeight: 'bold'}} color="textPrimary" variant="h4">
                                Aurora Forge
                            </Typography>
                        </Grid>
                        <Grid size={{xs: 12, md: 'auto'}} order={{xs: 3, md: 2}}>
                            <Typography color="primary" variant="h6" gutterBottom>
                                #swift #uikit #metal #xcode
                            </Typography>
                        </Grid>
                    </Grid>

                    <Typography sx={{mt: 2}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
                        enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
                        imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
                        Convallis convallis tellus id interdum velit laoreet id donec ultrices.
                    </Typography>

                    <Stack direction="row" spacing={3}>
                        <Link sx={{fontWeight: 600, display: 'flex', alignItems: 'center'}}>
                            <LinkRounded sx={{mr: 0.5}}/> Open Aurora Forge
                        </Link>

                        <Link sx={{fontWeight: 600, display: 'flex', alignItems: 'center'}}>
                            <GitHub sx={{mr: 0.5}}/> See Code
                        </Link>
                    </Stack>
                </Stack>

                <Stack direction="column" spacing={1}>
                    <Grid container spacing={1} justifyContent={'space-between'}>
                        <Grid size={{xs: 12, md: 6}} order={1}>
                            <Typography sx={{fontWeight: 'bold'}} color="textPrimary" variant="h4">
                                Eclipse Harbor
                            </Typography>
                        </Grid>
                        <Grid size={{xs: 12, md: 'auto'}} order={{xs: 3, md: 2}}>
                            <Typography color="primary" variant="h6" gutterBottom>
                                #typescript #express.js #node.js #sql
                            </Typography>
                        </Grid>
                    </Grid>

                    <Typography sx={{mt: 2}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
                        enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
                        imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
                        Convallis convallis tellus id interdum velit laoreet id donec ultrices.
                    </Typography>
                </Stack>

                <Stack direction="column" spacing={1}>
                    <Grid container spacing={1} justifyContent={'space-between'}>
                        <Grid size={{xs: 12, md: 6}} order={1}>
                            <Typography sx={{fontWeight: 'bold'}} color="textPrimary" variant="h4">
                                CipherWave
                            </Typography>
                        </Grid>
                        <Grid size={{xs: 12, md: 'auto'}} order={{xs: 3, md: 2}}>
                            <Typography color="primary" variant="h6" gutterBottom>
                                #java
                            </Typography>
                        </Grid>
                    </Grid>

                    <Typography sx={{mt: 2}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
                        enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
                        imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
                        Convallis convallis tellus id interdum velit laoreet id donec ultrices.
                    </Typography>
                </Stack>
            </Stack>
        </Box>
    )
}