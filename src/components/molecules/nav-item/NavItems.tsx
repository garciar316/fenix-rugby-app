import React from 'react';
import NavItemModel from '../../../models/NavItemModel';
import NavButton from '../../atoms/nav-button/NavButton';

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