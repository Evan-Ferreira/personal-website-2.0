import React from 'react';

const Article = () => {
    return (
        <div className="w-full h-full overflow-hidden relative hover:scale-[105%] duration-150 ease-in-out group">
            <div
                className="z-10 absolute h-full w-full flex flex-col justify-between py-8 px-8 opacity-0 translate-x-4 group-hover:opacity-100 
            group-hover:translate-x-0 ease-in-out duration-300 pointer-events-none group-hover:pointer-events-auto"
            >
                <div className="flex flex-col">
                    <h2 className="text-[#E9E9E9] text-sm font-bold">2024</h2>
                    <h2 className="text-[#E9E9E9] text-3xl font-semibold mb-2">
                        Joseph The Asian
                    </h2>
                    <p className="text-[#E9E9E9] text-sm font-light">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quisquam, quos. Lorem ipsum dolor sit amet consectetur
                        adipisicing elit.
                    </p>
                </div>
                <a href="https://github.com/evanferreira/stumble">
                    <div className="flex items-center gap-2 hover:cursor-pointer ease-in-out duration-100 group/repo">
                        <p className="font-light text-md group-hover/repo:font-semibold">
                            Read More
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
            <img className="w-full" src="/project1.png" alt="" />
            <div
                className="absolute inset-0 bg-gradient-to-b from-transparent 
                via-[#2A2A2A]/10 via-20%
                via-[#2A2A2A]/25 via-35%
                via-[#2A2A2A]/45 via-50%
                via-[#2A2A2A]/65 via-65%
                via-[#2A2A2A]/85 via-80%
                to-[#2A2A2A]"
            ></div>
        </div>
    );
};

export default Article;
