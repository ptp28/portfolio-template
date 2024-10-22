import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ContactButtons from "./ContactButtons.tsx";
import NameComponent from "./NameComponent.tsx";

export default function AboutPage(props) {


    return (
        <Box sx={{...props.sx}}>

            <NameComponent/>

            <Typography
                sx={{marginTop: 7, fontFamily: 'Mulish', fontWeight: '500', fontSize: '20px'}}
                component="p">
                Student at Northeastern University, Boston, pursuing a graduate degree in Computer Science.
                <br/>
                SDE-intern at SOLIDWORKS, Dassault Systèmes.
                <br/>
                Previously worked at e-Yantra, IIT-Bombay as a Sr. Project Technical Researcher.
                <br/>
                Graduated from Pune University with a Bachelor's degree in Computer Engineering.
                <br/>
                Always interested to learn more about computer science, technology, project ideas, etc.
                <br/>
                Enjoy playing tennis and sailing.
            </Typography>

            <ContactButtons/>
        </Box>
    )
}