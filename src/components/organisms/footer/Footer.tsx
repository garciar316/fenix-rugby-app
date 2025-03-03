import {
    Box,
    Container,
    IconButton,
    Typography
} from '@mui/material';
import Grid from '@mui/material/Grid2';
import React from 'react';

import {
    Email,
    Facebook,
    Instagram,
    LinkedIn,
    Twitter
} from '@mui/icons-material';

const Footer: React.FC = () => {
    return (
        <Box
            component="footer"
            sx={{
                backgroundColor: 'rgba(14, 27, 91, 0.91)',
                color: 'white',
                py: 2,
                mt: '20px',
                width: '100%'
            }}
        >
            <Container maxWidth="lg">
                <Grid container spacing={4}>
                    <Grid size={{ xs: 12, sm: 6 }}>
                        <Typography variant="body2" align="center" sx={{ pt: 2 }}>
                            © {new Date().getFullYear()} Fenix Rugby Club. Todos los derechos reservados
                        </Typography>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                        <Box>
                            <IconButton
                                color="inherit"
                                href="https://facebook.com"
                                target="_blank"
                                aria-label="Facebook"
                            >
                                <Facebook />
                            </IconButton>
                            <IconButton
                                color="inherit"
                                href="https://twitter.com"
                                target="_blank"
                                aria-label="Twitter"
                            >
                                <Twitter />
                            </IconButton>
                            <IconButton
                                color="inherit"
                                href="https://instagram.com"
                                target="_blank"
                                aria-label="Instagram"
                            >
                                <Instagram />
                            </IconButton>
                            <IconButton
                                color="inherit"
                                href="https://linkedin.com"
                                target="_blank"
                                aria-label="LinkedIn"
                            >
                                <LinkedIn />
                            </IconButton>
                            <IconButton
                                color="inherit"
                                href="mailto:info@company.com"
                                aria-label="Email"
                            >
                                <Email />
                            </IconButton>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Footer;