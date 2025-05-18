import React from 'react';

interface ListItemProps {
    children: React.ReactNode;
}

const ListItem = ({ children }: ListItemProps) => {
    return <li className="text-white text-md font-light">{children}</li>;
};

export default ListItem;
