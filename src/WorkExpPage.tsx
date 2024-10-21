import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import {Stack} from "@mui/material";
import Grid from '@mui/material/Grid2';


export default function WorkExpPage(props) {
    return (
        <Box sx={{...props.sx}}>
            <Typography sx={{fontWeight: 'bold', mb: 8}} color="textPrimary" variant="h4">
                <BusinessCenterIcon sx={{fontSize: 30}}/> WORK EXPERIENCE
            </Typography>

            <Stack direction="column" spacing={5}>
                <Stack direction="column" spacing={1}>
                    <Typography sx={{fontWeight: 'bold'}} color="textPrimary" variant="h4">
                        Apple Inc.
                    </Typography>
                    <Grid container spacing={1} justifyContent={'space-between'}>
                        <Grid size={{xs: 12, md: 6}}>
                            <Typography sx={{fontWeight: 'bold', ml: 2}} color="textSecondary" variant="h5">
                                Sr. Software Engineer
                            </Typography>
                        </Grid>
                        <Grid size={{xs: 12, md: 'auto'}}>
                            <Typography color="primary" variant="h6" gutterBottom>
                                September 2022 - December 2024
                            </Typography>
                        </Grid>
                    </Grid>

                    <Typography>
                        <ul>
                            <li>
                                This is the first bullet point paragraph. It contains some example text describing a
                                specific topic or idea. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua.
                            </li>
                            <li>
                                This is the second bullet point paragraph. It contains some example text describing a
                                specific topic or idea.
                            </li>
                            <li>
                                This is the third bullet point paragraph. It contains some example text describing a
                                specific topic or idea. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua.
                            </li>
                        </ul>
                    </Typography>

                    <Grid container spacing={1} justifyContent={'space-between'}>
                        <Grid size={{xs: 12, md: 6}}>
                            <Typography sx={{fontWeight: 'bold', ml: 2}} color="textSecondary" variant="h5">
                                Software Engineer
                            </Typography>
                        </Grid>
                        <Grid size={{xs: 12, md: 'auto'}}>
                            <Typography color="primary" variant="h6" gutterBottom>
                                June 2022 - September 2024
                            </Typography>
                        </Grid>
                    </Grid>

                    <Typography>
                        <ul>
                            <li>
                                This is the first bullet point paragraph. It contains some example text describing a
                                specific topic or idea. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua.
                            </li>
                        </ul>
                    </Typography>
                </Stack>

                <Stack direction="column" spacing={1}>
                    <Typography sx={{fontWeight: 'bold'}} color="textPrimary" variant="h4">
                        NeXT Computers
                    </Typography>
                    <Grid container spacing={1} justifyContent={'space-between'}>
                        <Grid size={{xs: 12, md: 6}}>
                            <Typography sx={{fontWeight: 'bold', ml: 2}} color="textSecondary" variant="h5">
                                User Interface Designer
                            </Typography>
                        </Grid>
                        <Grid size={{xs: 12, md: 'auto'}}>
                            <Typography color="primary" variant="h6" gutterBottom>
                                September 2022 - December 2024
                            </Typography>
                        </Grid>
                    </Grid>

                    <Typography>
                        <ul>
                            <li>
                                This is the first bullet point paragraph. It contains some example text describing a
                                specific topic or idea.
                            </li>
                            <li>
                                This is the second bullet point paragraph. It contains some example text describing a
                                specific topic or idea. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua.
                            </li>
                            <li>
                                This is the third bullet point paragraph. It contains some example text describing a
                                specific topic or idea.
                            </li>
                        </ul>
                    </Typography>
                </Stack>
            </Stack>
        </Box>
    )
}