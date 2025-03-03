import { Card, CardActionArea, CardMedia, CardContent, Typography } from "@mui/material";
import React, { ReactNode } from "react";

interface Props {
    image: string;
    alt: string;
    title: string;
    children?: ReactNode;
}
const SportsLineCard = (props: Props) => {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={props.image}
                    alt={props.alt}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {props.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {props.children}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default SportsLineCard;