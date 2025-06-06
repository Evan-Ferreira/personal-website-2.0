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
                <h3 className="text-lg text-[#F9F9F9] ">{title}</h3>
                <div className="flex-grow h-[0.1px] bg-[#969696] flex max-md:hidden"></div>
                <div
                    className={`flex-grow h-[0.1px] bg-[#969696] flex md:hidden text-[#F9F9F9] ${
                        endDate !== 'Present' ? 'hidden' : ''
                    }`}
                ></div>
                <h2 className="text-lg block max-md:hidden text-[#F9F9F9]">
                    {startDate} {endDate ? `- ${endDate}` : ''}
                </h2>
                <h2 className="md:hidden text-[#F9F9F9] ">
                    {endDate === 'Present' ? endDate : ''}
                </h2>
            </div>

            <p className="text-base text-[#969696] mb-2">{company}</p>
            <div
                className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${
                    activeTab === id ? 'max-h-[500px]' : 'max-h-0'
                }`}
            >
                <p className="text-sm text-[#969696] italic">{description}</p>
            </div>
        </div>
    );
};

export default WorkExperience;
