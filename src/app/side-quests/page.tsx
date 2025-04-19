import React from 'react';
import SideQuestRight from '../_components/SideQuestRight';
import SideQuestLeft from '../_components/SideQuestLeft';

const SideQuests = () => {
    return (
        <div className="flex flex-col items-center min-h-screen pb-16 pt-32 lg:px-48 px-10 gap-16 bg-[#2A2A2A]">
            <div className="flex flex-col md:w-96 items-center">
                <h3 className="text-[#969696] text-md">EVAN FERREIRA</h3>
                <h1 className="text-white text-5xl font-bold  mt-2 mb-3">
                    SIDE QUESTS
                </h1>
            </div>
            <div className="grid grid-cols-1 gap-12">
                <SideQuestLeft
                    title="inQUbate - All Inclusive Trip to SF"
                    description="I ran startup club called inQUbate, where members pitched to investors and
                to win an all-inclusive trip to San Francisco. Click to read my reflections."
                    link="https://www.instagram.com/inqubate.qu/"
                    mobileImagePath="/sf-mobile.JPG"
                    desktopImagePath="/sf-desktop.jpeg"
                    year="2025"
                />
                <SideQuestRight
                    title="Wrestling"
                    description="For the past 6 years, I have competed at the provincial and
                    national level where I was previously ranked as 3rd in Canada
                    for the 2023-2024 season at 72kg."
                    link="https://gogaelsgo.com/sports/wrestling/roster/2022-2023"
                    mobileImagePath="/wrestling-mobile.png"
                    desktopImagePath="/wrestling-desktop.png"
                    year="Present"
                />
                <SideQuestLeft
                    title="Mayor's Innovation Challenge (Baobab)"
                    description="
                My friends and I won $5,000 from the Mayor of Kingston to launch Baobab, an app connecting those in need to
                local donators completely anonymously."
                    link="https://www.queensu.ca/gazette/stories/students-recognized-city-kingston-impactful-innovations"
                    mobileImagePath="/myi-mobile.png"
                    desktopImagePath="/myi-desk.png"
                    year="2024"
                />
            </div>
        </div>
    );
};

export default SideQuests;
