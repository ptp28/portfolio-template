import {Link, Stack} from "@mui/material";
import Typography from "@mui/material/Typography";
import * as React from "react";

interface NameComponentProps {
    firstName: string;
    lastName: string;
    email: string;
}

export default function NameComponent(props: NameComponentProps) {

    return (
        <>
            <Stack direction={{xs: 'column', sm: 'row'}} spacing={{xs: 0, sm: 1}}>
                <Typography
                    color="textPrimary" variant="h1" component="span">
                    {props.firstName}
                </Typography>
                <Typography color="primary" variant="h1" component="span">
                    {props.lastName}
                </Typography>
            </Stack>
            <Typography color="textSecondary" variant="h4">
                <Link color="textSecondary" sx={{textDecoration: 'none'}}
                      href={'mailto:' + props.email}>{props.email}</Link>
            </Typography>
        </>
    );
}