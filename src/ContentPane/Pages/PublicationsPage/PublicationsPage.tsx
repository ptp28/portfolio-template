import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {Link, Stack} from "@mui/material";
import BookmarkIcon from '@mui/icons-material/Bookmark';
import PublicationDetailsComponent from "./PublicationDetailsComponent.tsx";
import CollectionsBookmarkIcon from "@mui/icons-material/CollectionsBookmark";
import BadgeIcon from '@mui/icons-material/Badge';

export default function PublicationsPage(props) {
    return (
        <Box sx={{...props.sx}}>
            <Stack sx={{mb: 5}} spacing={2}>
                <Typography color="primary" variant="h3">
                    <CollectionsBookmarkIcon sx={{fontSize: 30}}/> PUBLICATIONS
                </Typography>
                <Typography sx={{pl: 1}} color="textSecondary" variant="h5">
                    <BadgeIcon sx={{fontSize: 23, mr: 1}}/>
                    <Link
                        target="_blank"
                        rel="noopener noreferrer"
                        color="textSecondary"
                        href={'https://scholar.google.com/'}>
                        Google Scholar Profile
                    </Link>
                </Typography>
            </Stack>


            <Stack direction="column" spacing={5}>
                <PublicationDetailsComponent
                    publicationName={'Lorem ipsum'}
                    presentedAt={'IEEE'}
                    publicationYear={'2024'}
                    description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
                    publicationLinks={[
                        {
                            'text': 'Link to IEEE Xplore',
                            'link': 'https://ieeexplore.ieee.org/',
                            'icon': <BookmarkIcon sx={{mr: 0.5}}/>
                        }
                    ]}/>

                <PublicationDetailsComponent
                    publicationName={'Lorem ipsum'}
                    presentedAt={'IEEE'}
                    publicationYear={'2023'}
                    description={'<b>Lorem ipsum</b> dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
                    publicationLinks={[
                        {
                            'text': 'Link to IEEE Xplore',
                            'link': 'https://ieeexplore.ieee.org/',
                            'icon': <BookmarkIcon sx={{mr: 0.5}}/>
                        }
                    ]}/>

                <PublicationDetailsComponent
                    publicationName={'Lorem ipsum'}
                    presentedAt={'IEEE'}
                    publicationYear={'2022'}
                    description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
                    publicationLinks={[
                        {
                            'text': 'Link to IEEE Xplore',
                            'link': 'https://ieeexplore.ieee.org/',
                            'icon': <BookmarkIcon sx={{mr: 0.5}}/>
                        }
                    ]}/>
            </Stack>
        </Box>
    )
}