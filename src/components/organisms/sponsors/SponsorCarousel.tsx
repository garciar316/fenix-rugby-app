import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { Box, IconButton, Paper, styled, Tooltip, useMediaQuery, useTheme } from "@mui/material";
import React, { useEffect, useState } from "react";

const CarouselWrapper = styled(Box)(() => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    margin: '0 auto'
}));

const CarouselContainer = styled(Box)(({ theme }) => ({
    position: "relative",
    width: "100%",
    overflow: "hidden",
    maxWidth: "90vw",
    padding: theme.spacing(4, 0)
}));

const LogoTrack = styled(Box)(({ theme }) => ({
    display: "flex",
    transition: "transform 0.5s ease",
    gap: theme.spacing(2)
}));

const LogoWrapper = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(2),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    transition: "all 0.3s ease",
    filter: "grayscale(100%)",
    "&:hover": {
        filter: "grayscale(0%)",
        transform: "scale(1.05)",
        boxShadow: theme.shadows[4]
    }
}));

const NavigationButton = styled(IconButton)(({ theme }) => ({
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    backgroundColor: theme.palette.background.paper,
    "&:hover": {
        backgroundColor: theme.palette.grey[200]
    }
}));

const LogoCarousel = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const logos = [
        {
            id: 1,
            name: "Alberto Alvarez",
            url: "sponsors/alberto-alvarez.png",
            link: "https://albertoalvarez.com/"
        },
        {
            id: 2,
            name: "Santiago Villada",
            url: "sponsors/santiago-villada.png",
            link: "https://www.instagram.com/sv_seguros/"
        },
        {
            id: 3,
            name: "Miel de Sandía",
            url: "sponsors/miel-de-sandia.png",
            link: "#"
        },
        {
            id: 4,
            name: "Maderas & Proyectos",
            url: "sponsors/maderas-y-proyectos-2.png",
            link: "#"
        },
        {
            id: 5,
            name: "Team Box",
            url: "sponsors/team-box.png",
            link: "#"
        }
    ];

    const getVisibleLogos = () => {
        if (isMobile) return 2;
        if (isTablet) return 4;
        return 6;
    };

    const infiniteLogos = [...logos, ...logos, ...logos];

    const handlePrevClick = () => {
        setCurrentIndex((prev) => {
            const newIndex = prev - 1;
            if (newIndex < 0) {
                return logos.length - 1;
            }
            return newIndex;
        });
    };

    const handleNextClick = () => {
        setCurrentIndex((prev) => {
            const newIndex = prev + 1;
            if (newIndex >= logos.length) {
                return 0;
            }
            return newIndex;
        });
    };

    useEffect(() => {
        let interval: string | number | NodeJS.Timeout | undefined;
        if (!isPaused) {
            interval = setInterval(() => {
                handleNextClick();
            }, 3000);
        }
        return () => clearInterval(interval);
    }, [isPaused]);

    const handleLogoClick = (link: string) => {
        window.open(link, "_blank");
    };

    const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
        e.currentTarget.src = "https://images.unsplash.com/photo-1557683316-973673baf926";
    };

    return (
        <CarouselWrapper>
            <CarouselContainer
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
            >
                <NavigationButton
                    onClick={handlePrevClick}
                    sx={{ left: theme.spacing(1), zIndex: 1000 }}
                    aria-label="Previous"
                >
                    <ChevronLeft />
                </NavigationButton>

                <LogoTrack
                    sx={{
                        transform: `translateX(-${(currentIndex * 100) / getVisibleLogos()}%)`
                    }}
                >
                    {infiniteLogos.map((logo, index) => (
                        <Tooltip key={`${logo.id}-${index}`} title={logo.name} arrow>
                            <LogoWrapper
                                onClick={() => handleLogoClick(logo.link)}
                                sx={{
                                    width: `${100 / getVisibleLogos()}%`,
                                    flexShrink: 0,
                                    backgroundColor: "transparent"
                                }}
                            >
                                <Box
                                    component="img"
                                    src={logo.url}
                                    alt={logo.name}
                                    onError={handleImageError}
                                    sx={{
                                        width: "100%",
                                        height: "auto",
                                        maxHeight: 80,
                                        objectFit: "contain",
                                    }}
                                    loading="lazy"
                                />
                            </LogoWrapper>
                        </Tooltip>
                    ))}
                </LogoTrack>

                <NavigationButton
                    onClick={handleNextClick}
                    sx={{ right: theme.spacing(1), zIndex: 1000 }}
                    aria-label="Next"
                >
                    <ChevronRight />
                </NavigationButton>
            </CarouselContainer>
        </CarouselWrapper>
    );
};

export default LogoCarousel;