import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import {Link, Stack} from "@mui/material";
import * as React from "react";

export default function ProjectDetailsComponent({projectName, projectTags, projectDescription, projectLinks}) {

    return (
        <Stack direction="column" spacing={1}>
            <Grid container spacing={0} justifyContent={'space-between'}>
                <Grid size={{xs: 12, md: 6}} order={1}>
                    <Typography color="textPrimary" variant="h3">
                        {projectName}
                    </Typography>
                </Grid>
                <Grid size={{xs: 12, md: 'auto'}} order={{xs: 3, md: 2}}>
                    <Typography color="primary" fontFamily={'Mulish'} variant="h6" gutterBottom>
                        {projectTags}
                    </Typography>
                </Grid>
            </Grid>

            <Typography sx={{mt: 2}}>
                {projectDescription}
            </Typography>

            <Stack direction="row" spacing={3}>
                {
                    projectLinks.map((link) => {
                        return (
                            <Link sx={{fontWeight: 600, display: 'flex', alignItems: 'center'}}>
                                {link['icon']} {link['text']}
                            </Link>
                        )
                    })
                }
            </Stack>

        </Stack>
    );
}