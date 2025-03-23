import React from 'react';

type titleDescriptionProps = {
    title: string;
    description: string;
    year: string;
};

const TitleDescription = ({
    title,
    description,
    year,
}: titleDescriptionProps) => {
    return (
        <div className="flex flex-col gap-2">
            <h2 className="text-white text-xl">
                {title} <span className="text-[#969696]">— {year}</span>
            </h2>
            <p className="text-[#E9E9E9] text-sm">{description}</p>
        </div>
    );
};

export default TitleDescription;
