import React from 'react';
import { Box, List, ListItem, ListItemButton, ListItemText, Accordion, AccordionSummary, AccordionDetails, Typography, Divider } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import NavItemModel from '../../../models/NavItemModel';
import { Link } from 'react-router-dom';

interface DrawerContentProps {
    navItems: NavItemModel[];
    teamCategories: string[];
    handleDrawerToggle: () => void;
}

const DrawerContent: React.FC<DrawerContentProps> = ({ navItems, teamCategories, handleDrawerToggle }) => {
    return (
        <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                FENIX RUGBY CLUB MOBILE
            </Typography>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item.path} disablePadding>
                        <ListItemButton
                            component={Link}
                            to={item.path}
                            onClick={handleDrawerToggle}
                            sx={{ textAlign: 'left' }}
                        >
                            <ListItemText primary={item.text} />
                        </ListItemButton>
                    </ListItem>
                ))}
                <ListItem disablePadding>
                    <Accordion sx={{ width: '100%' }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography>Equipos</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <List>
                                {teamCategories.map((team) => (
                                    <ListItem key={team} disablePadding>
                                        <ListItemButton sx={{ textAlign: 'left' }}>
                                            <ListItemText primary={team} />
                                        </ListItemButton>
                                    </ListItem>
                                ))}
                            </List>
                        </AccordionDetails>
                    </Accordion>
                </ListItem>
            </List>
        </Box>
    );
};

export default DrawerContent;