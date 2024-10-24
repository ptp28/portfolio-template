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

interface ContactButtonsProps {
    contactLinks: {
        phone?: string,
        email?: string,
        linkedin?: string,
        github?: string,
        x?: string,
        facebook?: string,
        instagram?: string
    }
}

export default function ContactButtons(props: ContactButtonsProps) {

    const CircularButton = styled(Button)(() => ({
        borderRadius: '50%',
        width: 60,
        height: 60,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 0,
    }));

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        let url = '#';
        switch (event.currentTarget.id) {
            case 'linkedin':
                url = props.contactLinks['linkedin'] || '';
                break;
            case 'github':
                url = props.contactLinks['github'] || '';
                break;
            case 'email':
                url = props.contactLinks['email'] || '';
                break;
            case 'phone':
                url = "tel" + props.contactLinks['phone'] || '';
                break;
            case 'x':
                url = props.contactLinks['x'] || '';
                break;
            case 'facebook':
                url = props.contactLinks['facebook'] || '';
                break;
            case 'instagram':
                url = props.contactLinks['instagram'] || '';
                break;
            default:
                url = "#";
                break;
        }
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    if (!props.contactLinks || Object.keys(props.contactLinks).length == 0) {
        return (<></>);
    }

    return (
        <>
            <Typography sx={{mt: 7, mb: 2}} color="secondary" variant="h4">
                GET IN TOUCH
            </Typography>
            <Stack direction="row" spacing={4}>
                {
                    props.contactLinks['phone'] &&
                    <CircularButton
                        id={'phone'}
                        variant="contained"
                        color="secondary"
                        onClick={handleClick}
                    >
                        <PhoneIcon sx={{fontSize: 35}}/>
                    </CircularButton>
                }
                {
                    props.contactLinks['email'] &&
                    <CircularButton
                        id={'email'}
                        variant="contained"
                        color="secondary"
                        onClick={handleClick}
                    >
                        <EmailIcon sx={{fontSize: 35}}/>
                    </CircularButton>
                }
                {
                    props.contactLinks['linkedin'] &&
                    <CircularButton
                        id={'linkedin'}
                        variant="contained"
                        color="secondary"
                        onClick={handleClick}
                    >
                        <LinkedInIcon sx={{fontSize: 35}}/>
                    </CircularButton>
                }
                {
                    props.contactLinks['github'] &&
                    <CircularButton
                        id={'github'}
                        variant="contained"
                        color="secondary"
                        onClick={handleClick}
                    >
                        <GitHubIcon sx={{fontSize: 35}}/>
                    </CircularButton>
                }
                {
                    props.contactLinks['x'] &&
                    <CircularButton
                        id={'x'}
                        variant="contained"
                        color="secondary"
                        onClick={handleClick}
                    >
                        <XIcon sx={{fontSize: 35}}/>
                    </CircularButton>
                }
                {
                    props.contactLinks['facebook'] &&
                    <CircularButton
                        id={'facebook'}
                        variant="contained"
                        color="secondary"
                        onClick={handleClick}
                    >
                        <FacebookIcon sx={{fontSize: 35}}/>
                    </CircularButton>
                }
                {
                    props.contactLinks['instagram'] &&
                    <CircularButton
                        id={'instagram'}
                        variant="contained"
                        color="secondary"
                        onClick={handleClick}
                    >
                        <InstagramIcon sx={{fontSize: 35}}/>
                    </CircularButton>
                }
            </Stack>
        </>
    );
}