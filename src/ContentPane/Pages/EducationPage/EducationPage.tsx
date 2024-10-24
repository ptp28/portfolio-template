import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SchoolIcon from '@mui/icons-material/School';
import {Stack} from "@mui/material";
import EducationHistory from "./EducationHistory.tsx";

interface EducationPageProps {
    data: {
        instituteName: string;
        degree: string;
        duration: string;
        description: string;
        grade?: string;
    }[];
}

export default function EducationPage(props: EducationPageProps) {
    if (props.data == undefined) {
        return (<></>);
    }

    return (
        <Box>
            <Typography sx={{mb: 5}} color="primary" variant="h3">
                <SchoolIcon sx={{fontSize: 30}}/> EDUCATION
            </Typography>

            <Stack direction="column" spacing={5}>
                {props.data.map((education) => {
                    return (
                        <EducationHistory
                            instituteName={education.instituteName}
                            degree={education.degree}
                            duration={education.duration}
                            description={education.description}
                            grade={education.grade}
                        />
                    );
                })}
            </Stack>
        </Box>
    )
}