import React from 'react';

interface InfoProps {
    title: string;
    date: string;
    views: number;
}

const Info = async ({ title, date, views }: InfoProps) => {
    return (
        <div className="flex flex-col gap-6">
            <h1 className="text-white lg:text-6xl text-4xl font-bold tracking-widest">
                {title}
            </h1>
            <p className="text-[#969696] text-md">
                {date} – {views} views
            </p>
            <div className="w-full h-[0.5px] bg-white"></div>
        </div>
    );
};

export default Info;
