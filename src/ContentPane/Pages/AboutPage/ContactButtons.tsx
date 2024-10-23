import {Button, Stack, styled} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from '@mui/icons-material/GitHub';
import * as React from "react";
import Typography from "@mui/material/Typography";
import PhoneIcon from '@mui/icons-material/Phone';
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

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

    const handleClick = (event) => {
        let url = '#';
        switch (event.currentTarget.id) {
            case 'linkedin':
                url = "https://www.linkedin.com/in/"
                break;
            case 'github':
                url = "https://github.com/"
                break;
            case 'email':
                url = "mailto:charlie.brown@email.com"
                break;
            case 'phone':
                url = "tel:9876543210"
                break;
            case 'x':
                url = "x.com"
                break;
            case 'facebook':
                url = "facebook.com"
                break;
            case 'instagram':
                url = "instagram.com"
                break;
            default:
                url = "#";
                break;
        }
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (
        <>
            <Typography sx={{mt: 7, mb: 2}} color="secondary" variant="h4">
                GET IN TOUCH
            </Typography>
            <Stack direction="row" spacing={4}>
                <CircularButton
                    id={'phone'}
                    variant="contained"
                    color="secondary"
                    onClick={handleClick}
                >
                    <PhoneIcon sx={{fontSize: 35}}/>
                </CircularButton>
                <CircularButton
                    id={'email'}
                    variant="contained"
                    color="secondary"
                    onClick={handleClick}
                >
                    <EmailIcon sx={{fontSize: 35}}/>
                </CircularButton>
                <CircularButton
                    id={'linkedin'}
                    variant="contained"
                    color="secondary"
                    onClick={handleClick}
                >
                    <LinkedInIcon sx={{fontSize: 35}}/>
                </CircularButton>
                <CircularButton
                    id={'github'}
                    variant="contained"
                    color="secondary"
                    onClick={handleClick}
                >
                    <GitHubIcon sx={{fontSize: 35}}/>
                </CircularButton>
                <CircularButton
                    id={'x'}
                    variant="contained"
                    color="secondary"
                    onClick={handleClick}
                >
                    <XIcon sx={{fontSize: 35}}/>
                </CircularButton>
                <CircularButton
                    id={'facebook'}
                    variant="contained"
                    color="secondary"
                    onClick={handleClick}
                >
                    <FacebookIcon sx={{fontSize: 35}}/>
                </CircularButton>
                <CircularButton
                    id={'instagram'}
                    variant="contained"
                    color="secondary"
                    onClick={handleClick}
                >
                    <InstagramIcon sx={{fontSize: 35}}/>
                </CircularButton>
            </Stack>
        </>
    );
}