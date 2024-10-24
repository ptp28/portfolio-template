import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ContactButtons from "./ContactButtons.tsx";
import NameComponent from "./NameComponent.tsx";

interface AboutPageProps {
    data: {
        firstName: string;
        lastName: string;
        email: string;
        text: string;
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
}

export default function AboutPage(props: AboutPageProps) {


    return (
        <Box>

            <NameComponent firstName={props.data["firstName"]} lastName={props.data["lastName"]} email={props.data["email"]} />

            <Typography sx={{marginTop: 7, fontSize: 20, fontWeight: "500"}} dangerouslySetInnerHTML={{__html: props.data['text']}}  />

            <ContactButtons contactLinks={props.data["contactLinks"]} />
        </Box>
    )
}