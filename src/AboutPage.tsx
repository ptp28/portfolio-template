import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {Button, Stack, styled} from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import FaxIcon from '@mui/icons-material/Fax';

export default function AboutPage(props) {

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
        <Box sx={{...props.sx}}>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1}>
                <Typography sx={{fontWeight: 'bold'}} color="textPrimary" variant="h2" component="span">
                    CHARLIE
                </Typography>
                <Typography sx={{fontWeight: 'bold'}} color="primary" variant="h2" component="span">
                    BROWN
                </Typography>
            </Stack>
            <Typography color="textSecondary" variant="h5">
                charlie.brown@email.com
            </Typography>

            <Typography sx={{marginTop: 7}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
                enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
                imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
                Convallis convallis tellus id interdum velit laoreet id donec ultrices.
                Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
                adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
                nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
                leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
                feugiat vivamus at augue. At augue eget arcu dictum varius duis at
                consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
                sapien faucibus et molestie ac.
            </Typography>
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
        </Box>
    )
}