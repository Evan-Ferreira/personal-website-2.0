import React from 'react';
import Article from '../_components/Article';

const page = () => {
    return (
        <div className="flex flex-col items-center min-h-screen pb-16 pt-32 px-16 lg:px-48 gap-16 bg-[#2A2A2A]">
            <div className="flex flex-col w-96 items-center">
                <h3 className="text-[#969696] text-md">EVAN FERREIRA</h3>
                <h1 className="text-white text-5xl font-bold  mt-2 mb-3">
                    WRITING
                </h1>
                <p className="text-[#E9E9E9] text-sm">
                    I'm not a great writer and I barely have the time to write
                    lol. However, I like to think that forcing myself to write
                    during my (little) free time is forces me to intentionally
                    reflect on my thoughts and experiences.
                </p>
            </div>
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-16">
                <Article
                    title="Article 1"
                    description="Description 1"
                    link="https://www.google.com"
                    imagePath="/project1.png"
                    date="2024-01-01"
                />
                <Article
                    title="Article 2"
                    description="Description 2"
                    link="https://www.google.com"
                    imagePath="/project1.png"
                    date="2024-01-01"
                />
                <Article
                    title="Article 3"
                    description="Description 3"
                    link="https://www.google.com"
                    imagePath="/project1.png"
                    date="2024-01-01"
                />
                <Article
                    title="Article 4"
                    description="Description 4"
                    link="https://www.google.com"
                    imagePath="/project1.png"
                    date="2024-01-01"
                />
            </div>
        </div>
    );
};

export default page;
