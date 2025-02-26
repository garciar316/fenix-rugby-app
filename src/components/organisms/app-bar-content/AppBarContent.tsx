import React from 'react';
import { Box, IconButton, Typography, Menu, MenuItem, Button, Toolbar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import type { RefObject } from 'react';
import NavItemModel from '../../../models/NavItemModel';
import Logo from '../../atoms/logo/Logo';
import NavItems from '../../molecules/nav-item/NavItems';
import AccountMenu from '../../molecules/account-menu/AccountMenu';

interface AppBarContentProps {
    navItems: NavItemModel[];
    teamCategories: string[];
    handleDrawerToggle: () => void;
    anchorEl: HTMLElement | null;
    handleMenuClick: (event: React.MouseEvent<HTMLElement>) => void;
    handleMenuClose: () => void;
    buttonRef: RefObject<HTMLButtonElement | null>;
    buttonWidth: number | null;
}

const AppBarContent: React.FC<AppBarContentProps> = ({
    navItems,
    teamCategories,
    handleDrawerToggle,
    anchorEl,
    handleMenuClick,
    handleMenuClose,
    buttonRef,
    buttonWidth,
}) => {
    return (
        <Toolbar>
            <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: 'none' } }}
            >
                <MenuIcon />
            </IconButton>
            <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
                <Logo src="FENIX-01.png" alt="Logo" />
                <Typography
                    variant="h6"
                    component="div"
                    sx={{ display: { xs: 'none', sm: 'block', textAlign: 'left' } }}
                >
                    FENIX RUGBY CLUB
                </Typography>
            </Box>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                <NavItems items={navItems} />
                <Button
                    ref={buttonRef}
                    aria-controls="simple-menu"
                    aria-haspopup="true"
                    onClick={handleMenuClick}
                    sx={{ color: '#fff' }}
                    endIcon={<ArrowDropDownIcon />}
                >
                    Equipos
                </Button>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleMenuClose}
                    sx={{ minWidth: buttonWidth }}
                >
                    {teamCategories.map((team) => (
                        <MenuItem key={team} onClick={handleMenuClose}>{team}</MenuItem>
                    ))}
                </Menu>
            </Box>
            <AccountMenu />
        </Toolbar>
    );
};

export default AppBarContent;