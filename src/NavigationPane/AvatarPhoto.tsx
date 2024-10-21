import {Avatar} from "@mui/material";

export default function AvatarPhoto({width, height, border}) {
    return (
        <>
            <Avatar
                alt="Charlie Brown"
                src={'avatar.png'}
                sx={{
                    m: 2,
                    width: width,
                    height: height,
                    border: border,
                }}
            />
        </>
    );
}