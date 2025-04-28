import React from 'react';

interface PProps {
    children: React.ReactNode;
}

const P = ({ children }: PProps) => {
    return <p className="text-white text-lg font-light">{children}</p>;
};

export default P;
