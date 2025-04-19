import React from 'react';

const page = () => {
    return (
        <div className="flex flex-col items-center min-h-screen pb-16 pt-32 px-10 lg:px-48 gap-16 bg-[#2A2A2A]">
            <div className="flex flex-col lg:w-96 items-center">
                <h3 className="text-[#969696] text-md">EVAN FERREIRA</h3>
                <h1 className="text-white text-5xl font-bold  mt-2 mb-3">
                    WRITING
                </h1>
            </div>
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-16"></div>
        </div>
    );
};

export default page;
