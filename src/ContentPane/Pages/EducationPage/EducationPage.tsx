import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SchoolIcon from '@mui/icons-material/School';
import {Stack} from "@mui/material";
import EducationHistory from "./EducationHistory.tsx";


export default function EducationPage(props) {
    return (
        <Box sx={{...props.sx}}>
            <Typography sx={{fontWeight: 'bold', mb: 8}} color="textPrimary" variant="h4">
                <SchoolIcon sx={{fontSize: 30}}/> EDUCATION
            </Typography>

            <Stack direction="column" spacing={5}>

                <EducationHistory
                    instituteName={'Harvard University'}
                    degree={'Master of Science in Computer Science'}
                    studyDuration={'September 2022 - Present'}
                    description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id donec ultrices.'}
                    grade={'4.0/4.0 GPA'}
                    honors={'Order of the Crimson, Distinction'}
                />

                <EducationHistory
                    instituteName={'Indian Institute of Technology Bombay'}
                    degree={'Bachelor of Engineering (Computer Engineering)'}
                    studyDuration={'July 2016 - August 2020'}
                    description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id donec ultrices.'}
                    grade={'3.8/4.0 GPA'}
                    honors={''}
                />
            </Stack>
        </Box>
    )
}