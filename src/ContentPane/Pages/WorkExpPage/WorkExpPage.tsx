import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import {Stack} from "@mui/material";
import CompanyComponent from "./CompanyComponent.tsx";


interface WorkExpPageProps {
    data: {
        companyName: string;
        workDetails: {
            duration: string,
            role: string,
            description: string[]
        }[];
    }[];
}

export default function WorkExpPage(props: WorkExpPageProps) {
    return (
        <Box>
            <Typography sx={{mb: 5}} color="primary" variant="h3">
                <BusinessCenterIcon sx={{fontSize: 30}}/> WORK EXPERIENCE
            </Typography>

            <Stack direction="column" spacing={5}>
                {props.data.map((company) => {
                    return (
                        <CompanyComponent
                            companyName={company.companyName}
                            workDescription={company.workDetails}
                        />
                    );
                })}
            </Stack>
        </Box>
    )
}