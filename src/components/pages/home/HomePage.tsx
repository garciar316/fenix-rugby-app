import { SponsorCarousel } from "@/components/organisms";
import { Typography } from "@mui/material";
import React from "react";

const HomePage = () => {
    return (
        <>
            <Typography variant="h1" sx={{color: '#fff'}}>Pagina de inicio</Typography>
            <SponsorCarousel />
        </>
    )
}

export default HomePage;