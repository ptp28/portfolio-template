import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import {Stack} from "@mui/material";
import * as React from "react";
import DOMPurify from "dompurify";

interface EducationHistoryProps {
    instituteName: string;
    degree: string;
    duration: string;
    description: string;
    grade?: string;
}

export default function EducationHistory(props: EducationHistoryProps) {

    return (
        <>
            <Stack direction="column" spacing={1}>
                <Grid container spacing={0} justifyContent={'space-between'}>
                    <Grid size={{xs: 12, md: 6}} order={1}>
                        <Typography color="textPrimary"  variant="h4" fontWeight={700} fontSize={45}>
                            {props.instituteName}
                        </Typography>
                    </Grid>
                    <Grid size={{xs: 12, md: 'auto'}} order={{xs: 3, md: 2}}>
                        <Typography color="primary" variant="h6" sx={{fontFamily: 'Mulish'}} gutterBottom>
                            {props.duration}
                        </Typography>
                    </Grid>
                    <Grid size={{xs: 12}} order={{xs: 2, md: 3}}>
                        <Typography color="textSecondary" variant="h4">
                            {props.degree}
                        </Typography>
                    </Grid>
                </Grid>
                <Stack spacing={2} sx={{pr: {sm: 0, md: 10}}}>
                    <Typography dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(props.description)}}/>
                    <Typography>
                        {props.grade && 'Grade - ' + props.grade}
                    </Typography>
                </Stack>
            </Stack>
        </>
    );
}