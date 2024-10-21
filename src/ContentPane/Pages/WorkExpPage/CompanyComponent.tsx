import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid2";
import {Stack} from "@mui/material";
import * as React from "react";

export default function CompanyComponent({
                                             companyName,
                                             workDescription
                                         }) {

    return (
        <>
            <Stack direction="column" spacing={1}>
                <Typography sx={{fontWeight: 'bold'}} color="textPrimary" variant="h4">
                    {companyName}
                </Typography>
                {
                    workDescription.map((work) => {
                        return (<>
                                <Grid container spacing={0} justifyContent={'space-between'}>
                                    <Grid size={{xs: 12, md: 6}}>
                                        <Typography sx={{fontWeight: 'bold', ml: 2}} color="textSecondary" variant="h5">
                                            {work['title']}
                                        </Typography>
                                    </Grid>
                                    <Grid size={{xs: 12, md: 'auto'}}>
                                        <Typography color="primary" variant="h6" sx={{ml: 2}} gutterBottom>
                                            {work['duration']}
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Typography>
                                    <ul>
                                        {work['description'].map((description) => {
                                            return (
                                                <li>
                                                    {description}
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </Typography>
                            </>
                        )
                    })
                }
            </Stack>
        </>
    );
}