import React from 'react';

interface LogoProps {
    src: string;
    alt: string;
    height?: string;
    marginRight?: string;
}

const Logo: React.FC<LogoProps> = ({ src, alt, height = '40px', marginRight = '8px' }) => {
    return <img src={src} alt={alt} style={{ marginRight, height }} />;
};

export default Logo;