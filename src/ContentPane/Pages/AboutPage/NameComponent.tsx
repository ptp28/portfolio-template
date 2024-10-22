import {Stack} from "@mui/material";
import Typography from "@mui/material/Typography";
import * as React from "react";

export default function NameComponent() {

    return (
        <>
            <Stack direction={{xs: 'column', sm: 'row'}} spacing={{xs: 0, sm: 1}}>
                <Typography
                    color="textPrimary" variant="h1" component="span">
                    CHARLIE
                </Typography>
                <Typography color="primary" variant="h1" component="span">
                    BROWN
                </Typography>
            </Stack>
            <Typography color="textSecondary" variant="h4">
                charlie.brown@email.com
            </Typography>
        </>
    );
}