import { Box } from '@mui/material';
import React, { ReactNode } from 'react';

interface LayoutContainerProps {
    children: ReactNode;
}

const LayoutContainer: React.FC<LayoutContainerProps> = ({ children }) => {
    return (
        <Box sx={{
            display: 'flex',
            minWidth: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            margin: '0 auto',
            padding: {
                xs: '0',
                sm: '0',
                md: '50px',
                lg: '50px',
            },
            color: '#ffffff',
        }}>
            {children}
        </Box>
    );
};

export default LayoutContainer;