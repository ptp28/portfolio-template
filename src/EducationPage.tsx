import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SchoolIcon from '@mui/icons-material/School';
import {Stack} from "@mui/material";
import Grid from '@mui/material/Grid2';


export default function EducationPage(props) {
    return (
        <Box sx={{...props.sx}}>
            <Typography sx={{fontWeight: 'bold', mb: 8}} color="textPrimary" variant="h4">
                <SchoolIcon sx={{fontSize: 30}}/> EDUCATION
            </Typography>

            <Stack direction="column" spacing={5}>
                <Stack direction="column" spacing={1}>
                    <Grid container spacing={1} justifyContent={'space-between'}>
                        <Grid size={{xs: 12, md: 6}} order={1}>
                                        <Typography sx={{fontWeight: 'bold'}} color="textPrimary" variant="h4">
                                            Harvard University
                                        </Typography>
                        </Grid>
                        <Grid size={{xs: 12, md: 'auto'}} order={{ xs: 3, md: 2 }}>
                                        <Typography color="primary" variant="h6" gutterBottom>
                                            September 2022 - December 2024
                                        </Typography>
                        </Grid>
                        <Grid size={{xs: 12}}  order={{ xs: 2, md: 3 }}>
                            <Typography sx={{fontWeight: 'bold'}} color="textSecondary" variant="h5">
                                Bachelor of Engineering
                                (Electrical Engineering)
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
                                Harvard University
                            </Typography>
                        </Grid>
                        <Grid size={{xs: 12, md: 'auto'}} order={{ xs: 3, md: 2 }}>
                            <Typography color="primary" variant="h6" gutterBottom>
                                September 2022 - December 2024
                            </Typography>
                        </Grid>
                        <Grid size={{xs: 12}}  order={{ xs: 2, md: 3 }}>
                            <Typography sx={{fontWeight: 'bold'}} color="textSecondary" variant="h5">
                                Bachelor of Engineering
                                (Computer Engineering)
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