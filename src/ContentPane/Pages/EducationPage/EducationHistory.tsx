import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import {Stack} from "@mui/material";
import * as React from "react";

export default function EducationHistory({instituteName, degree, studyDuration, description, grade, honors}) {

    return (
        <>
            <Stack direction="column" spacing={1}>
                <Grid container spacing={0} justifyContent={'space-between'}>
                    <Grid size={{xs: 12, md: 6}} order={1}>
                        <Typography color="textPrimary" variant="h3">
                            {instituteName}
                        </Typography>
                    </Grid>
                    <Grid size={{xs: 12, md: 'auto'}} order={{xs: 3, md: 2}}>
                        <Typography color="primary" variant="h6" sx={{fontFamily: 'Mulish'}} gutterBottom>
                            {studyDuration}
                        </Typography>
                    </Grid>
                    <Grid size={{xs: 12}} order={{xs: 2, md: 3}}>
                        <Typography color="textSecondary" variant="h4">
                            {degree}
                        </Typography>
                    </Grid>
                </Grid>

                <Typography sx={{mt: 2}}>
                    {description}
                </Typography>

                <Typography sx={{mt: 2}}>
                    {grade && 'Grade - ' + grade}
                </Typography>

                <Typography sx={{mt: 2}}>
                    {honors && 'Honors - ' + honors}
                </Typography>
            </Stack>
        </>
    );
}