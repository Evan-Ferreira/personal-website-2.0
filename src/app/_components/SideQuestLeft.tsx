import React from 'react';

const SideQuestLeft = () => {
    return (
        <div className="w-full h-64 overflow-hidden relative hover:scale-[105%] duration-150 ease-in-out group">
            <div className="z-10 absolute right-0 top-0 h-full w-1/3 flex flex-col justify-between py-4 px-4 opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 ease-in-out duration-300 pointer-events-none group-hover:pointer-events-auto">
                <div className="flex flex-col gap-2">
                    <h2 className="text-white text-xl">
                        Stumble <span className="text-[#969696]">— 2024</span>
                    </h2>
                    <p className="text-[#E9E9E9] text-sm">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quisquam, quos. Lorem ipsum dolor sit amet consectetur
                        adipisicing elit.
                    </p>
                </div>
                <a href="https://github.com/evanferreira/stumble">
                    <div className="flex items-center gap-2 hover:cursor-pointer ease-in-out duration-100 group/repo">
                        <p className="font-light text-md group-hover/repo:font-semibold">
                            Repository
                        </p>
                        <img
                            src="/right-arrow-icon.svg"
                            alt="Right Arrow"
                            width="24"
                            height="24"
                            className="group-hover/repo:translate-x-7 transition-transform duration-300 ease-in-out"
                        />
                    </div>
                </a>
            </div>
            <img className="w-full" src="/project1.png" alt="" />
            <div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-[#2A2A2A]/30 via-20%
             via-[#2A2A2A]/50 via-40% via-[#2A2A2A]/70 via-70% to-[#2A2A2A]/90"
            ></div>
        </div>
    );
};

export default SideQuestLeft;
