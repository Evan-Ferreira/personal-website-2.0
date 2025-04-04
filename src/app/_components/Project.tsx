'use client';

import React, { useState, useEffect } from 'react';
import { Host_Grotesk } from 'next/font/google';
import Video from './project/Video';

const hostGrotesk = Host_Grotesk({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700'],
});

type ProjectProps = {
    title: string;
    date: string;
    technologies: Technology[];
    description: string;
    learnMoreLink: string;
    videoLink: string;
};

type Technology =
    | 'React'
    | 'Firebase'
    | 'Git'
    | 'Raspberry Pi'
    | 'TensorFlow'
    | 'OpenCV'
    | 'Expo'
    | 'React Native'
    | 'Node.js'
    | 'Express'
    | 'MongoDB'
    | 'Next.js';

const technologyInfo: Record<
    Technology,
    { name: string; icon: string; redirect: string }
> = {
    React: {
        name: 'React',
        icon: '/react.png',
        redirect: 'https://react.dev/',
    },
    Firebase: {
        name: 'Firebase',
        icon: '/firebase.png',
        redirect: 'https://firebase.google.com/',
    },
    Git: {
        name: 'Git',
        icon: '/git.png',
        redirect: 'https://git-scm.com/',
    },
    'Raspberry Pi': {
        name: 'Raspberry Pi',
        icon: '/raspberrypi.svg',
        redirect: 'https://www.raspberrypi.org/',
    },
    TensorFlow: {
        name: 'TensorFlow',
        icon: '/tensorflow.svg',
        redirect: 'https://www.tensorflow.org/',
    },
    OpenCV: {
        name: 'OpenCV',
        icon: '/opencv.svg',
        redirect: 'https://opencv.org/',
    },
    Expo: {
        name: 'Expo',
        icon: '/expo.svg',
        redirect: 'https://expo.dev/',
    },
    'React Native': {
        name: 'React Native',
        icon: '/react-native.svg',
        redirect: 'https://reactnative.dev/',
    },
    'Node.js': {
        name: 'Node.js',
        icon: '/node.svg',
        redirect: 'https://nodejs.org/',
    },
    Express: {
        name: 'Express',
        icon: '/express.svg',
        redirect: 'https://expressjs.com/',
    },
    MongoDB: {
        name: 'MongoDB',
        icon: '/mongodb.svg',
        redirect: 'https://www.mongodb.com/',
    },
    'Next.js': {
        name: 'Next.js',
        icon: '/nextjs.svg',
        redirect: 'https://nextjs.org/',
    },
};

const Project = ({
    title,
    date,
    technologies,
    description,
    learnMoreLink,
    videoLink,
}: ProjectProps) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isDesktop, setIsDesktop] = useState(true);

    useEffect(() => {
        const handleResize = () => {
            setIsDesktop(window.innerWidth >= 1024);
        };

        handleResize(); // Initial check
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    if (!isDesktop) {
        return null;
    }

    return (
        <div className="flex object-contain flex-col">
            <div className="flex items-center">
                <h3
                    className={`${hostGrotesk.className} text-[#F9F9F9] text-lg font-light`}
                >
                    {title} <span className="text-[#969696]">— {date}</span>
                </h3>
            </div>
            <div
                className="relative hover:scale-[105%] mt-2 hover:cursor-default ease-in-out duration-150"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <Video videoLink={videoLink} />
                {isHovered && (
                    <>
                        <div className="absolute inset-0 bg-[#2a2a2acb]"></div>
                        <div className="absolute inset-0 flex flex-col h-full w-full">
                            <p
                                className={`text-[#F9F9F9] ${hostGrotesk.className} font-light px-6 py-2 hover:cursor-text`}
                            >
                                {description}
                            </p>
                            <div className="w-full flex justify-between py-2 px-6 mt-auto">
                                <div className="flex gap-4">
                                    {technologies.map((technology, index) => (
                                        <a
                                            key={index}
                                            href={
                                                technologyInfo[
                                                    technology as Technology
                                                ].redirect
                                            }
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <img
                                                src={
                                                    technologyInfo[
                                                        technology as Technology
                                                    ].icon
                                                }
                                                alt={
                                                    technologyInfo[
                                                        technology as Technology
                                                    ].name
                                                }
                                                width="25"
                                                height="25"
                                            />
                                        </a>
                                    ))}
                                </div>
                                <a
                                    href={learnMoreLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <div className="flex gap-2 hover:cursor-pointer ease-in-out duration-100 font-light hover:font-semibold mr-3 group">
                                        <p
                                            className={`text-[#F9F9F9] ${hostGrotesk.className}`}
                                        >
                                            Learn More
                                        </p>
                                        <img
                                            src="/right-arrow-icon.svg"
                                            alt="Right Arrow"
                                            width="24"
                                            height="24"
                                            className="group-hover:translate-x-3 transition-transform duration-300 ease-in-out"
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
