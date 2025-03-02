'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Host_Grotesk } from 'next/font/google';

const hostGrotesk = Host_Grotesk({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700'],
});

const Project = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="">
            <div
                className="relative hover:scale-[105%] hover:cursor-default ease-in-out duration-150"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <img src="/project1.png" alt="Project 1" width="100%" />
                {isHovered && (
                    <>
                        <div className="absolute inset-0 bg-gradient-to-b from-[#2A2A2A]/50 to-[#2A2A2A]"></div>
                        <div className="absolute inset-0 flex flex-col h-full w-full">
                            <p
                                className={`${hostGrotesk.className} font-light px-4 py-2 hover:cursor-text`}
                            >
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Quisquam, quos.
                            </p>
                            <div className="w-full flex justify-between px-4 py-2 mt-auto">
                                <div className="flex gap-4">
                                    <a
                                        href="https://react.dev/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <img
                                            src="/react.png"
                                            alt="React"
                                            width="25"
                                            height="25"
                                        />
                                    </a>
                                    <a
                                        href="https://react.dev/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <img
                                            src="/git.png"
                                            alt="Git"
                                            width="25"
                                            height="25"
                                        />
                                    </a>
                                    <a
                                        href="https://react.dev/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <img
                                            src="/firebase.png"
                                            alt="Firebase"
                                            width="25"
                                            height="25"
                                        />
                                    </a>
                                </div>
                                <a
                                    href="https://github.com/Evan-Ferreira/Stumble_HackTheHill2024"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <div className="flex gap-2 hover:cursor-pointer ease-in-out duration-100 font-light hover:font-semibold">
                                        <p
                                            className={`${hostGrotesk.className}`}
                                        >
                                            Learn More
                                        </p>
                                        <img
                                            src="/right-arrow-icon.svg"
                                            alt="Right Arrow"
                                            width="24"
                                            height="24"
                                        />
                                    </div>
                                </a>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Project;
