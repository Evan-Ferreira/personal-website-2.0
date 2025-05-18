import React from 'react';

interface SmallSpacerProps {
    className?: string;
}

const SmallSpacer = ({ className }: SmallSpacerProps) => {
    return <div className={`${className} h-4`}></div>;
};

export default SmallSpacer;
