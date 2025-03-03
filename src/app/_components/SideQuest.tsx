import React from 'react';

const SideQuest = () => {
    return (
        <div className="w-full h-56 overflow-hidden relative">
            <div className="z-10 absolute right-0 top-0 h-full w-1/3 flex flex-col justify-between py-4 px-4">
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
                <div className="flex items-center gap-2 hover:cursor-pointer ease-in-out duration-100 font-light hover:font-semibold">
                    <p className="font-light text-xs">Repository</p>
                    <img
                        src="/right-arrow-icon.svg"
                        alt="Right Arrow"
                        width="24"
                        height="24"
                    />
                </div>
            </div>
            <img className="w-full" src="/project1.png" alt="" />
            <div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-[#2A2A2A]/50 via-10%
             via-[#2A2A2A]/70 via-30% via-[#2A2A2A]/90 via-60% to-[#2A2A2A]"
            ></div>
        </div>
    );
};

export default SideQuest;
