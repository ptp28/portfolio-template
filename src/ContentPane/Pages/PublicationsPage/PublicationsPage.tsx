import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {Link, Stack} from "@mui/material";
import PublicationDetailsComponent from "./PublicationDetailsComponent.tsx";
import CollectionsBookmarkIcon from "@mui/icons-material/CollectionsBookmark";
import BadgeIcon from '@mui/icons-material/Badge';

interface ProjectsPageProps {
    googleScholarLink?: string;
    data: {
        title: string;
        presentedAt: string;
        year: string;
        description: string;
        links?: {
            title: string,
            url: string,
        }[];
    }[];
}

export default function PublicationsPage(props: ProjectsPageProps) {

    return (
        <Box>
            <Stack sx={{mb: 5}} spacing={2}>
                <Typography color="primary" variant="h3">
                    <CollectionsBookmarkIcon sx={{fontSize: 30}}/> PUBLICATIONS
                </Typography>
                {props.googleScholarLink &&
                    <Typography sx={{pl: 1}} color="textSecondary" variant="h5">
                        <BadgeIcon sx={{fontSize: 23, mr: 1}}/>
                        <Link
                            target="_blank"
                            rel="noopener noreferrer"
                            color="textSecondary"
                            href={props.googleScholarLink}>
                            Google Scholar Profile
                        </Link>
                    </Typography>
                }
            </Stack>


            <Stack direction="column" spacing={5}>
                {props.data.map((publication) => {
                    return (
                        <PublicationDetailsComponent
                            title={publication.title}
                            presentedAt={publication.presentedAt}
                            year={publication.year}
                            description={publication.description}
                            links={publication.links}
                        />
                    );
                })}
            </Stack>
        </Box>
    )
}