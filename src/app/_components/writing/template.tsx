import React from 'react';
import Info from './misc/info';

interface TemplateProps {
    children: React.ReactNode;
    title: string;
    date: string;
    titleId: string;
    className?: string;
}

const Template = ({
    children,
    title,
    date,
    titleId,
    className,
}: TemplateProps) => {
    return (
        <div
            className={`flex flex-col px-48 max-md:px-10 min-h-screen w-screen pb-16 pt-40 bg-[#2A2A2A] gap-16 ${className}`}
        >
            <Info title={title} date={date} titleId={titleId} />
            <div className="text-white text-lg font-light">{children}</div>
        </div>
    );
};

export default Template;
