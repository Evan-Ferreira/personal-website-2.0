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
                <p className="text-[#E9E9E9] text-sm">
                    I like to keep myself busy — maybe too busy. I have a lot of
                    hobbies and side projects and when I&apos;m curious about
                    something, I dive deep into it. Here you&apos;ll find
                    anything related to software, athletics, and everything in
                    between.
                </p>
            </div>
            <div className="grid grid-cols-1 gap-12">
                <SideQuestLeft
                    title="inQUbate - All Inclusive Trip to SF"
                    description="I love startups and I wanted to build a community of like-minded individuals. 
                I ran a student-run startup club called inQUbate, where members pitched to investors and pitched
                to win an all-inclusive trip to San Francisco (pictured here)."
                    link="https://www.instagram.com/inqubate.qu/"
                    imagePath="/sf.jpeg"
                    year="2025"
                />
                <SideQuestRight
                    title="Wrestling"
                    description="When I'm not coding or studying, you'll catch me on the wrestling mat. I love
                    wrestling — for the past 6 years, I have competed at the provincial and
                    national level where I was previously ranked as 3rd in Canada
                    for the 2023-2024 season at 72kg."
                    link="https://gogaelsgo.com/sports/wrestling/roster/2022-2023"
                    imagePath="/wrestling.png"
                    year="Present"
                />
                <SideQuestLeft
                    title="Mayor's Innovation Challenge (Baobab)"
                    description="
                Last March, my two friends and I qualified for the Mayor's
                Innovation Challenge. We won the competition and were awarded
                $5,000 to kickstart Baobab, an app connecting those in need to
                local donators completely anonymously."
                    link="https://www.queensu.ca/gazette/stories/students-recognized-city-kingston-impactful-innovations"
                    imagePath="/mayor-win.jpg"
                    year="2024"
                />
            </div>
        </div>
    );
};

export default SideQuests;
