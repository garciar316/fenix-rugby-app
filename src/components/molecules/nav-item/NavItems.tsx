import React from 'react';
import { NavButton } from '../../atoms';

interface NavItemsProps {
    items: string[];
}

const NavItems: React.FC<NavItemsProps> = ({ items }) => {
    return (
        <>
            {items.map((item) => (
                <NavButton key={item} label={item} />
            ))}
        </>
    );
};

export default NavItems;