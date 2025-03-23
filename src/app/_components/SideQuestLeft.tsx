'use client';

import React, { useState } from 'react';
import TitleDescription from '../side-quests/title-description';

type SideQuestProps = {
    title: string;
    description: string;
    link: string;
    imagePath: string;
    year: string;
};

const SideQuestLeft = ({
    title,
    description,
    link,
    imagePath,
    year,
}: SideQuestProps) => {
    const [mouseEnter, setMouseEnter] = useState(false);

    return (
        <div
            onMouseEnter={() => setMouseEnter(true)}
            onMouseLeave={() => setMouseEnter(false)}
            className="w-full h-64 overflow-hidden relative hover:scale-[105%] duration-150 ease-in-out group max-lg:opacity-100"
        >
            <div
                className="z-10 absolute right-0 top-0 h-full lg:w-1/3 w-full flex flex-col justify-between py-4 px-4 opacity-0 max-lg:opacity-100 group-hover:opacity-100 
            group-hover:translate-x-0 ease-in-out duration-300 pointer-events-none group-hover:pointer-events-auto max-lg:bg-gradient-to-r from-[#2A2A2A]/50 to-[#2A2A2A]"
            >
                <TitleDescription
                    title={title}
                    description={description}
                    year={year}
                />
                <a href={link}>
                    <div className="flex items-center gap-2 hover:cursor-pointer ease-in-out duration-100 group/repo">
                        <p className="font-light text-md group-hover/repo:font-semibold">
                            Learn More
                        </p>
                        <img
                            src="/right-arrow-icon.svg"
                            alt="Right Arrow"
                            width="24"
                            height="24"
                            className="group-hover/repo:translate-x-3 transition-transform duration-300 ease-in-out"
                        />
                    </div>
                </a>
            </div>
            <img className="w-full" src={imagePath} alt="" />
            <div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-[#2A2A2A]/30 via-20%
             via-[#2A2A2A]/50 via-40% via-[#2A2A2A]/70 via-70% to-[#2A2A2A]/90"
            ></div>
            <div
                className={`absolute inset-0 max-lg:bg-gradient-to-r from-[#2A2A2A]/50 to-[#2A2A2A] ${
                    mouseEnter ? `bg-gradient-to-r` : ''
                }`}
            ></div>{' '}
        </div>
    );
};

export default SideQuestLeft;
