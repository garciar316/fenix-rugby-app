import { Button } from '@mui/material';
import React from 'react';

interface NavButtonProps {
    label: string;
    onClick?: () => void;
}

const NavButton: React.FC<NavButtonProps> = ({ label, onClick }) => {
    return (
        <Button sx={{ color: '#fff' }} onClick={onClick}>
            {label}
        </Button>
    );
};

export default NavButton;