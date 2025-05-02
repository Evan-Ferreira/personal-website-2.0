import React from 'react';

interface TemplateProps {
    children: React.ReactNode;
    title: string;
    date: string;
    views: number;
}

const Template = ({ children, title, date, views }: TemplateProps) => {
    return (
        <div className="flex flex-col px-48 max-md:px-10 min-h-screen pb-8 pt-40 bg-[#2A2A2A] gap-16">
            <div className="flex flex-col gap-6">
                <h1 className="text-white lg:text-6xl text-4xl font-bold tracking-widest">
                    {title}
                </h1>
                <p className="text-[#969696] text-md">
                    {date} – {views} views
                </p>
                <div className="w-full h-[0.5px] bg-white"></div>
            </div>
            <div className="text-white text-lg font-light">{children}</div>
        </div>
    );
};

export default Template;
