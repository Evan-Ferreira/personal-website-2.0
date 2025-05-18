import React from 'react';

interface InfoProps {
    title: string;
    date: string;
    titleId: string;
}

const Info = async ({ title, date, titleId }: InfoProps) => {
    const oldViewsResponse = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/writing/${titleId}/views`
    );

    const { views: oldViews } = await oldViewsResponse.json();

    const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/writing`,
        {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title: titleId,
                views: oldViews + 1,
            }),
        }
    );

    return (
        <div className="flex flex-col gap-6">
            <h1 className="text-white lg:text-6xl text-4xl font-bold tracking-widest">
                {title}
            </h1>
            <p className="text-[#969696] text-md">
                {date} – {oldViews + 1} views
            </p>
            <div className="w-full h-[0.5px] bg-white"></div>
        </div>
    );
};

export default Info;
