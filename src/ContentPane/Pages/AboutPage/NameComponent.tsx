import {Stack} from "@mui/material";
import Typography from "@mui/material/Typography";
import * as React from "react";

export default function NameComponent() {

    return (
        <>
            <Stack direction={{xs: 'column', sm: 'row'}} spacing={{xs: 0, sm: 1}}>
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
        </>
    );
}