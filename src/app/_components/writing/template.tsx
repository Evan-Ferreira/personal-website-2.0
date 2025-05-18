import React from 'react';
import Info from './info';

interface TemplateProps {
    children: React.ReactNode;
    title: string;
    date: string;
    titleId: string;
}

const Template = ({ children, title, date, titleId }: TemplateProps) => {
    return (
        <div className="flex flex-col px-48 max-md:px-10 min-h-screen pb-8 pt-40 bg-[#2A2A2A] gap-16">
            <Info title={title} date={date} titleId={titleId} />
            <div className="text-white text-lg font-light">{children}</div>
        </div>
    );
};

export default Template;
