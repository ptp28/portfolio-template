import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import {Link, Stack} from "@mui/material";
import * as React from "react";
import DOMPurify from 'dompurify';
import BookmarkIcon from "@mui/icons-material/Bookmark";

interface PublicationDetailsComponentProps {
    title: string;
    presentedAt: string;
    year: string;
    description: string;
    links?:  {
        title: string,
        url: string,
    }[];
}

export default function PublicationDetailsComponent(props: PublicationDetailsComponentProps) {

    return (
        <Stack direction="column" spacing={1}>
            <Grid container spacing={0} justifyContent={'space-between'}>
                <Grid size={{xs: 12, md: 6}} order={1}>
                    <Typography color="textPrimary" variant="h4" fontWeight={700} fontSize={45}>
                        {props.title}
                    </Typography>
                </Grid>
                <Grid size={{xs: 12, md: 'auto'}} order={{xs: 3, md: 2}}>
                    <Typography color="primary" variant="h6" sx={{fontFamily: 'Mulish'}} gutterBottom>
                        {props.presentedAt}
                    </Typography>
                </Grid>
                <Grid size={{xs: 12}} order={{xs: 2, md: 3}}>
                    <Typography color="textSecondary" variant="h4">
                        {props.year}
                    </Typography>
                </Grid>
            </Grid>

            <Typography sx={{mt: 2}} dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(props.description)}}/>

            <Stack direction="row" spacing={3}>
                {
                    props.links &&
                    props.links.map((link: { title: string, url: string }) => {
                        return (
                            <Link
                                target="_blank"
                                rel="noopener noreferrer"
                                href={link.url}
                                sx={{fontWeight: 600, display: 'flex', alignItems: 'center'}}>
                                <BookmarkIcon sx={{mr: 0.5}}/>
                                {link.title}
                            </Link>
                        )
                    })
                }
            </Stack>

        </Stack>
    );
}