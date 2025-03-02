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
            <Link href="https://github.com/Evan-Ferreira/Stumble_HackTheHill2024">
                <div
                    className="relative hover:scale-[105%]"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <img src="/project1.png" alt="Project 1" width="100%" />
                    {isHovered && (
                        <>
                            <div className="absolute inset-0 bg-gradient-to-b from-[#2A2A2A]/50 to-[#2A2A2A]"></div>
                            <div className="absolute inset-0 flex flex-col h-full w-full">
                                <p
                                    className={`${hostGrotesk.className} font-light px-4 py-2`}
                                >
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Quisquam, quos.
                                </p>
                                <div className="w-full flex justify-between px-4 py-2 mt-auto">
                                    <div className="flex gap-4">
                                        <img
                                            src="/react.png"
                                            alt="React"
                                            width="25"
                                            height="25"
                                        />
                                        <img
                                            src="/git.png"
                                            alt="Git"
                                            width="25"
                                            height="25"
                                        />
                                        <img
                                            src="/firebase.png"
                                            alt="Firebase"
                                            width="25"
                                            height="25"
                                        />
                                    </div>
                                    <div className="flex gap-2">
                                        <p
                                            className={`${hostGrotesk.className} font-light`}
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
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </Link>
        </div>
    );
};

export default Project;
