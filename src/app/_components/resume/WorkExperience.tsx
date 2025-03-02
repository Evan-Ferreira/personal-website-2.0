import React from 'react';

type WorkExperienceProps = {
    id: number;
    title: string;
    company: string;
    description: string;
    startDate: string;
    endDate?: string;
    setActiveTab: (tab: number | null) => void;
    activeTab: number | null;
};

const WorkExperience = ({
    id,
    title,
    company,
    description,
    startDate,
    endDate,
    setActiveTab,
    activeTab,
}: WorkExperienceProps) => {
    return (
        <div
            className="flex flex-col hover:cursor-pointer"
            onClick={
                id === activeTab
                    ? () => setActiveTab(null)
                    : () => setActiveTab(id)
            }
        >
            <div className="flex gap-4 items-center">
                <h3 className="text-lg">{title}</h3>
                <div className="flex-grow h-[0.1px] bg-[#969696]"></div>
                <h2 className="text-lg">
                    {startDate} {endDate ? `- ${endDate}` : ''}
                </h2>
            </div>

            <p className="text-base text-[#969696] mb-2">{company}</p>
            {activeTab === id && (
                <p className="text-sm text-[#969696] italic">{description}</p>
            )}
        </div>
    );
};

export default WorkExperience;
