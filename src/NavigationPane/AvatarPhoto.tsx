import {Avatar} from "@mui/material";

interface AvatarPhotoProps {
    name?: string;
    src: string;
    width?: number;
    height?: number;
    border?: string;
}

export default function AvatarPhoto(props: AvatarPhotoProps) {
    return (
        <>
            <Avatar
                alt={props.name}
                src={props.src}
                sx={{
                    m: 2,
                    width: props.width,
                    height: props.height,
                    border: props.border,
                }}
            />
        </>
    );
}