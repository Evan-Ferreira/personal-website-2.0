import React from 'react';

interface HeadingProps {
    children: React.ReactNode;
    className?: string;
}

const Heading = ({ children, className }: HeadingProps) => {
    return (
        <h1
            className={`${className} block text-white text-4xl font-bold tracking-wider mt-14 mb-2`}
        >
            {children}
        </h1>
    );
};

export default Heading;
