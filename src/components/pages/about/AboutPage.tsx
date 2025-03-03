import { ContentImage, LayoutContainer } from '@/components/atoms';
import { SponsorCarousel, SportsLine } from '@/components/organisms';
import { Box, Divider, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';

const AboutPage = () => {
    return (
        <>
            <LayoutContainer>
                <Box sx={{
                    width: { xs: '90%', sm: '90%', md: '70%', lg: '70%' },
                    padding: '2rem'
                }}>
                    <Grid container spacing={4}>
                        <Grid
                            flexDirection={'column'}
                            size={{ xs: 12, sm: 12, md: 12, lg: 12 }}
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center"
                            }}
                        >
                            <Box sx={{ width: '100%' }}>
                                <Typography variant="h3" >
                                    Transformando
                                    Vidas a través del
                                    Rugby.
                                </Typography>
                                <Typography variant="h6">
                                    CODEF es una Corporación Deportiva dedicada a la transformación social
                                    mediante el rugby. Utilizamos este deporte como herramienta para
                                    inculcar valores y cambiar vidas en las comunidades en general.
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid
                            flexDirection={'column'}
                            size={{ xs: 12, sm: 12, md: 12, lg: 12 }}
                        >
                            <Divider
                                sx={{
                                    my: 4,
                                    backgroundColor: 'rgb(255, 255, 255)',
                                }}
                            />
                        </Grid>
                        <Grid
                            flexDirection={'column'}
                            size={{ xs: 12, sm: 12, md: 6, lg: 6 }}
                            sx={{
                                justifyContent: "center",
                                alignItems: "center"
                            }}
                        >
                            <ContentImage source={'/content/image-05.jpg'} alt={''} />
                        </Grid>
                        <Grid
                            flexDirection={'column'}
                            size={{ xs: 12, sm: 12, md: 6, lg: 6 }}
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center"
                            }}
                        >
                            <Box sx={{ width: '100%' }}>
                                <Typography variant="h3" align='left'>
                                    Misión
                                </Typography>
                                <Divider
                                    sx={{
                                        my: 2,
                                        backgroundColor: 'rgb(255, 255, 255)',
                                    }}
                                />
                                <Typography variant="h6" align='left'>
                                    C.D Fenix Rugby Club  está comprometido con el desarrollo, crecimiento, y masificación del Rugby en Antioquia que  permita a todos sus practicantes, actuales y futuros, encontrar un espacio de diversión seguro; con formación y unos altos estándares de calidad.
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid
                            flexDirection={'column'}
                            size={{ xs: 12, sm: 12, md: 6, lg: 6 }}
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center"
                            }}
                        >
                            <Box sx={{ width: '100%' }}>
                                <Typography variant="h3" align='left'>
                                    Visión
                                </Typography>
                                <Divider
                                    sx={{
                                        my: 2,
                                        backgroundColor: 'rgb(255, 255, 255)',
                                    }}
                                />
                                <Typography variant="h6" align='left'>
                                    En 2027 C.D Fenix Rugby Club será uno de los clubes deportivos más importantes del Pais, con presencia en todas  las categorías Masculinas de la Liga Antioqueña de Rugby y participación activa en todos los programas deportivos regionales y nacionales.
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid
                            flexDirection={'column'}
                            size={{ xs: 12, sm: 12, md: 6, lg: 6 }}
                            sx={{
                                justifyContent: "center",
                                alignItems: "center"
                            }}
                        >
                            <ContentImage source={'/content/image-06.jpg'} alt={''} />
                        </Grid>
                    </Grid>
                </Box>
            </LayoutContainer>
            <SponsorCarousel />
            <SportsLine />
        </>
    )
}

export default AboutPage;