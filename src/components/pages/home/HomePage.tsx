import { SponsorCarousel } from "@/components/organisms";
import { Typography } from "@mui/material";

const HomePage = () => {
    return (
        <>
            <Typography variant="h1" sx={{color: '#fff'}}>Pagina de inicio</Typography>
            <SponsorCarousel />
        </>
    )
}

export default HomePage;