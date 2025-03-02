import React from 'react';
import Link from 'next/link';

const Project = () => {
    return (
        <div className="">
            <Link href="https://github.com/Evan-Ferreira/Stumble_HackTheHill2024">
                <div className="relative">
                    <img src="/project1.png" alt="Project 1" width="100%" />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#2A2A2A]"></div>
                    <div className="absolute bottom-0 w-full flex px-4 py-2 gap-4">
                        <img
                            src="/react.png"
                            alt="React"
                            width="25"
                            height="25"
                        />
                        <img src="/git.png" alt="Git" width="25" height="25" />
                        <img
                            src="/firebase.png"
                            alt="Firebase"
                            width="25"
                            height="25"
                        />
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Project;
