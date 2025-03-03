import { Diversity2, EmojiEvents, FitnessCenter, SportsRugby } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";

function SportsLine() {
    const items = [
        {
            id: "service-1",
            title: 'Formación Deportiva',
            description:
                'Entrenamos a niños y jóvenes en los fundamentos del rugby y sus valores. Trabajamos desde la etapa recreativa hasta la alta competencia.',
            icon: < SportsRugby sx={{ color: '#fff', fontSize: '50px' }} />,
        },
        {
            id: "service-2",
            title: 'Participacion',
            description:
                'Contamos con diferentescategorias (juvenil,desarrollo y rendimiento) lascuales participan en torneosregionales y nacionalesdurante todo el año.',
            icon: <EmojiEvents sx={{ color: '#fff', fontSize: '50px' }} />,
        },
        {
            id: "service-3",
            title: 'Alto Rendimiento',
            description:
                'Nuestro equipo competitivo se mantiene en los primeros puestos a nivel nacional y trabajamos por lograr llegar a competir internacionalmente.',
            icon: <FitnessCenter sx={{ color: '#fff', fontSize: '50px' }} />,
        },
        {
            id: "service-4",
            title: 'Representación Deportiva',
            description:
                'Contamos con deportistas de alto rendimiento en los diferentes seleccionados regionales, nacionales y equipos Internacionales.',
            icon: <Diversity2 sx={{ color: '#fff', fontSize: '50px' }} />,
        },
    ];

    return (
        <Box sx={{
            flexGrow: 1,
            width: {
                xs: "90%",
                md: "80%"
            },
            margin: "0 auto",
            padding: {
                xs: "0 auto",
                md: "50px"
            },
        }}>
            <Grid container spacing={4} justifyContent="center" >
                {items.map((item) => (
                    <Grid
                        key={item.id}
                        size={{ xs: 12, sm: 3, md: 3 }}
                        flexDirection={"column"}
                        sx={{ display: "flex", justifyContent: "top" }}
                    >
                        <Grid container sx={{
                            minHeight: '100%',
                            textAlign: 'center',
                            padding: 3,
                            backgroundColor: 'rgba(254, 84, 4, 0.77)'
                        }}>
                            <Grid size={{ xs: 12, sm: 12, md: 12 }}>
                                {item.icon}
                            </Grid>
                            <Grid size={{ xs: 12, sm: 12, md: 12 }}>
                                <Typography variant="h5" color="#fff" sx={{ fontWeight: 'bold', mb: 1 }}>
                                    {item.title}
                                </Typography>
                            </Grid>
                            <Grid size={{ xs: 12, sm: 12, md: 12 }}>
                                <Typography variant="body1" color="#fff">
                                    {item.description}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

export default SportsLine;