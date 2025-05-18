import React from 'react';

interface PProps {
    children: React.ReactNode;
    className?: string;
}

const P = ({ children, className }: PProps) => {
    return (
        <p className={`text-white text-md font-light ${className}`}>
            {children}
        </p>
    );
};

export default P;
