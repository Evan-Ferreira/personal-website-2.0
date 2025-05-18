import React from 'react';

interface SpacerProps {
    className?: string;
}

const Spacer = ({ className }: SpacerProps) => {
    return <div className={`${className} h-8`}></div>;
};

export default Spacer;
