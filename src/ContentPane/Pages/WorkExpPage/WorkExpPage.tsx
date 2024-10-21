import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import {Stack} from "@mui/material";
import CompanyComponent from "./CompanyComponent.tsx";


export default function WorkExpPage(props) {
    return (
        <Box sx={{...props.sx}}>
            <Typography sx={{fontWeight: 'bold', mb: 8}} color="textPrimary" variant="h4">
                <BusinessCenterIcon sx={{fontSize: 30}}/> WORK EXPERIENCE
            </Typography>

            <Stack direction="column" spacing={5}>

                <CompanyComponent
                    companyName={"Apple Inc."}
                    workDescription={
                        [
                            {
                                "title": "Sr. Software Engineer",
                                "duration": "September 2022 - December 2024",
                                "description": [
                                    "This is the first bullet point paragraph. It contains some example text describing a specific topic or idea. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt ut labore et dolore magna aliqua.",
                                    "This is the second bullet point paragraph. It contains some example text describing a specific topic or idea.",
                                    "This is the third bullet point paragraph. It contains some example text describing a specific topic or idea. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt ut labore et dolore magna aliqua.",
                                ],
                            },
                            {
                                "title": "Software Engineer",
                                "duration": "June 2022 - September 2022",
                                "description": [
                                    "This is the only bullet point paragraph. It contains some example text describing a specific topic or idea. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt ut labore et dolore magna aliqua.",
                                ],
                            }
                        ]
                    }
                />

                <CompanyComponent
                    companyName={"NeXT Computers"}
                    workDescription={
                        [
                            {
                                "title": "Graphical User Interface Designer",
                                "duration": "September 2020 - June 2022",
                                "description": [
                                    "This is the first bullet point paragraph. It contains some example text describing a specific topic or idea.",
                                    "This is the second bullet point paragraph. It contains some example text describing a specific topic or idea. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt ut labore et dolore magna aliqua.",
                                    "This is the third bullet point paragraph. It contains some example text describing a specific topic or idea.",
                                ],
                            },
                        ]
                    }
                />
            </Stack>
        </Box>
    )
}