import React from 'react';

interface SmallSpacerProps {
    className?: string;
}

const SmallSpacer = ({ className }: SmallSpacerProps) => {
    return <div className={`${className} h-2`}></div>;
};

export default SmallSpacer;
