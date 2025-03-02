import React from 'react';
import WorkExperience from './resume/WorkExperience';

const Resume = () => {
    return (
        <div className="flex flex-col w-full gap-6">
            <WorkExperience
                title="Software Developer"
                company="Taiv (YC W20)"
                description="Series A ad-tech startup focused on real-time TV commercial detection."
                startDate="2024"
                endDate="Present"
            />
            <WorkExperience
                title="Software Developer"
                company="Pillexa"
                description="D2C healthcare platform focused on quickly scaling e-commerce health brands."
                startDate="2024"
                endDate="Present"
            />
            <WorkExperience
                title="Computer Vision Research Intern"
                company="Queen's University"
                description="Algorithms, architectures, and transfer learning for real-time TV commercial detection."
                startDate="2024"
            />
            <WorkExperience
                title="Co-Founder"
                company="Local Reach - acq. by Taiv (YC W20)"
                description="Ad-tech startup leveraging overlooked restaurant TV advertising."
                startDate="2024"
                endDate="2025"
            />
            <WorkExperience
                title="Executive Director"
                company="inQUbate"
                description="Canada's leading undergraduate student startup accelerator."
                startDate="2024"
                endDate="2025"
            />
            <WorkExperience
                title="Athlete"
                company="Queen's Varsity Wrestling Team"
                description="National competitor representing Queen's University."
                startDate="2022"
                endDate="Present"
            />
        </div>
    );
};

export default Resume;
