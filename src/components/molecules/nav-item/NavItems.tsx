import React from 'react';
import { NavItemModel } from '@/models';
import { NavButton } from '@/components/atoms';

interface NavItemsProps {
    items: NavItemModel[];
}

const NavItems: React.FC<NavItemsProps> = ({ items }) => {
    return (
        <>
            {items.map((item) => (
                <NavButton key={item.path} label={item.text} path={item.path} />
            ))}
        </>
    );
};

export default NavItems;