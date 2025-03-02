'use client';
import React, { useState } from 'react';
import WorkExperience from './resume/WorkExperience';

const Resume = () => {
    const [activeTab, setActiveTab] = useState<number | null>(null);

    return (
        <div className="flex flex-col w-full gap-4">
            <WorkExperience
                id={0}
                title="Software Developer"
                company="Taiv (YC W20)"
                description="Series A ad-tech startup focused on real-time TV commercial detection."
                startDate="2024"
                endDate="Present"
                setActiveTab={setActiveTab}
                activeTab={activeTab}
            />
            <WorkExperience
                id={1}
                title="Software Developer"
                company="Pillexa"
                description="D2C healthcare platform focused on quickly scaling e-commerce health brands."
                startDate="2024"
                endDate="Present"
                setActiveTab={setActiveTab}
                activeTab={activeTab}
            />
            <WorkExperience
                id={2}
                title="Computer Vision Research Intern"
                company="Queen's University"
                description="Algorithms, architectures, and transfer learning for real-time TV commercial detection."
                startDate="2024"
                setActiveTab={setActiveTab}
                activeTab={activeTab}
            />
            <WorkExperience
                id={3}
                title="Co-Founder"
                company="Local Reach - acq. by Taiv (YC W20)"
                description="Ad-tech startup leveraging overlooked restaurant TV advertising."
                startDate="2024"
                endDate="2025"
                setActiveTab={setActiveTab}
                activeTab={activeTab}
            />
            <WorkExperience
                id={4}
                title="Executive Director"
                company="inQUbate"
                description="Canada's leading undergraduate student startup accelerator."
                startDate="2024"
                endDate="2025"
                setActiveTab={setActiveTab}
                activeTab={activeTab}
            />
            <WorkExperience
                id={5}
                title="Athlete"
                company="Queen's Varsity Wrestling Team"
                description="National competitor representing Queen's University."
                startDate="2022"
                endDate="Present"
                setActiveTab={setActiveTab}
                activeTab={activeTab}
            />
        </div>
    );
};

export default Resume;
