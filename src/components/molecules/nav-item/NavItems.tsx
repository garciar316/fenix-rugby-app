import React from 'react';
import { NavButton } from '../../atoms';
import NavItemModel from '../../../models/NavItemModel';

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