import React from 'react';

const page = () => {
    return (
        <div className="flex flex-col items-center min-h-screen pb-16 pt-24 px-48 gap-16 bg-[#2A2A2A]">
            <div className="flex flex-col w-96 items-center">
                <h3 className="text-[#969696] text-md">EVAN FERREIRA</h3>
                <h1 className="text-white text-5xl font-bold  mt-2 mb-3">
                    WRITING
                </h1>
                <p className="text-[#E9E9E9] text-sm">
                    If I'm being fully honest, I'm not a great writer and I'm
                    not sure I'm disciplined enough to consistently write.
                    However, I like to think writing during my (little) free
                    time is a good way to force myself to reflect on my thoughts
                    and experiences.
                </p>
            </div>
        </div>
    );
};

export default page;
