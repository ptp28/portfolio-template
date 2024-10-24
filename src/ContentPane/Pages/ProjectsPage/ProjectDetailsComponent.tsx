import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import {Link, Stack} from "@mui/material";
import * as React from "react";
import {LinkRounded} from "@mui/icons-material";
import DOMPurify from 'dompurify';

interface ProjectDetailsComponentProps {
    projectName: string;
    projectTags: string;
    description: string;
    links?: {
        title: string,
        url: string
    }[]
}

export default function ProjectDetailsComponent(props: ProjectDetailsComponentProps) {

    return (
        <Stack direction="column" spacing={1}>
            <Grid container spacing={0} justifyContent={'space-between'}>
                <Grid size={{xs: 12, md: 6}} order={1}>
                    <Typography color="textPrimary" variant="h4" fontWeight={700} fontSize={45}>
                        {props.projectName}
                    </Typography>
                </Grid>
                <Grid size={{xs: 12, md: 'auto'}} order={{xs: 3, md: 2}}>
                    <Typography color="primary" fontFamily={'Mulish'} variant="h6" gutterBottom>
                        {props.projectTags}
                    </Typography>
                </Grid>
            </Grid>

            <Typography sx={{mt: 2, pr: {sm: 0, md: 10}}} dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(props.description)}}/>

            <Stack direction="row" spacing={3} sx={{pr: {sm: 0, md: 10}}}>
                {
                    props.links &&
                    props.links.map((link: { title: string, url: string }) => {
                        return (
                            <Link
                                target="_blank"
                                rel="noopener noreferrer"
                                href={link.url}
                                sx={{fontWeight: 600, display: 'flex', alignItems: 'center'}}>
                                <LinkRounded sx={{mr: 0.5}}/> {link.title}
                            </Link>
                        )
                    })
                }
            </Stack>

        </Stack>
    );
}