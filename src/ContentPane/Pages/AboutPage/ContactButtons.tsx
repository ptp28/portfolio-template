import {Button, Stack, styled} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import FaxIcon from "@mui/icons-material/Fax";
import * as React from "react";
import Typography from "@mui/material/Typography";

export default function ContactButtons() {

    const CircularButton = styled(Button)(({theme}) => ({
        borderRadius: '50%',
        width: 60,
        height: 60,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 0,
    }));

    const handleClick = () => {
        console.log('Button clicked!');
    };


    return (
        <>
            <Typography sx={{fontWeight: 'bold', mt: 7, mb: 2}} color="textSecondary" variant="h5">
                GET IN TOUCH:
            </Typography>
            <Stack direction="row" spacing={4}>
                <CircularButton
                    variant="contained"
                    color="secondary"
                    onClick={handleClick}
                >
                    <LinkedInIcon sx={{fontSize: 30}}/>
                </CircularButton>
                <CircularButton
                    variant="contained"
                    color="secondary"
                    onClick={handleClick}
                >
                    <EmailIcon sx={{fontSize: 30}}/>
                </CircularButton>
                <CircularButton
                    variant="contained"
                    color="secondary"
                    onClick={handleClick}
                >
                    <FaxIcon sx={{fontSize: 30}}/>
                </CircularButton>
            </Stack>
        </>
    );
}