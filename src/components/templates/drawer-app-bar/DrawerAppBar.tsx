import React from 'react';
import { Box, CssBaseline, AppBar, Drawer } from '@mui/material';
import { AppBarContent, DrawerContent } from '../../organisms';

interface Props {
    window?: () => Window;
}

const drawerWidth = 240;
const navItems = ['Inicio', 'Nosotros', 'Contacto'];
const teamCategories = ['Categoria A', 'Categoria B'];

function DrawerAppBar(props: Readonly<Props>) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [buttonWidth, setButtonWidth] = React.useState<number | null>(null);
    const buttonRef = React.useRef<HTMLButtonElement>(null);

    React.useEffect(() => {
        if (buttonRef.current) {
            setButtonWidth(buttonRef.current.offsetWidth);
        }
    }, []);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar component="nav" position="fixed" sx={{backgroundColor: '#006d9b'}}>
                <AppBarContent
                    navItems={navItems}
                    teamCategories={teamCategories}
                    handleDrawerToggle={handleDrawerToggle}
                    anchorEl={anchorEl}
                    handleMenuClick={handleMenuClick}
                    handleMenuClose={handleMenuClose}
                    buttonRef={buttonRef}
                    buttonWidth={buttonWidth}
                />
            </AppBar>
            <Box component="nav" sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}>
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': {
                            boxSizing: 'border-box',
                            width: drawerWidth,
                            marginTop: '64px',
                        },
                    }}
                >
                    <DrawerContent navItems={navItems} teamCategories={teamCategories} />
                </Drawer>
            </Box>
        </Box>
    );
}

export default DrawerAppBar;