import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid2";
import {Stack} from "@mui/material";
import * as React from "react";
import DOMPurify from 'dompurify';

interface CompanyComponentProps {
    companyName: string;
    workDescription:  {
        duration: string,
        role: string,
        description: string[]
    }[];
}

export default function CompanyComponent(props: CompanyComponentProps) {

    return (
        <>
            <Stack direction="column" spacing={1}>
                <Typography color="textPrimary" variant="h3">
                    {props.companyName}
                </Typography>
                {
                    props.workDescription.map((work) => {
                        return (<>
                                <Grid container spacing={0} justifyContent={'space-between'}>
                                    <Grid size={{xs: 12, md: 6}}>
                                        <Typography sx={{ml: 2}} color="textSecondary" variant="h4">
                                            {work.role}
                                        </Typography>
                                    </Grid>
                                    <Grid size={{xs: 12, md: 'auto'}}>
                                        <Typography color="primary" fontFamily={'Mulish'} variant="h6" sx={{ml: 2}}
                                                    gutterBottom>
                                            {work.duration}
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Typography sx={{pr: {sm: 0, md: 10}}}>
                                    <ul>
                                        {work.description.map((description: string) => {
                                            return (
                                                <li dangerouslySetInnerHTML={{
                                                    __html: DOMPurify.sanitize(description),
                                                }} />
                                            )
                                        })}
                                    </ul>
                                </Typography>
                            </>
                        )
                    })
                }
            </Stack>
        </>
    );
}