import { Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

interface NavButtonProps {
    label: string;
    path: string;
    onClick?: () => void;
}

const NavButton: React.FC<NavButtonProps> = ({ label, path, onClick }) => {
    return (
        <Button
            component={Link}
            to={path}
            sx={{ color: '#fff' }}
            onClick={onClick}
        >
            {label}
        </Button>
    );
};

export default NavButton;