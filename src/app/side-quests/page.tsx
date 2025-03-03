import React from 'react';
import SideQuest from '../_components/SideQuest';

const SideQuests = () => {
    return (
        <div className="flex flex-col items-center min-h-screen pb-16 pt-24 px-48 gap-16 bg-[#2A2A2A]">
            <div className="flex flex-col w-96 items-center">
                <h3 className="text-[#969696] text-md">EVAN FERREIRA</h3>
                <h1 className="text-white text-5xl font-bold  mt-2 mb-3">
                    SIDE QUESTS
                </h1>
                <p className="text-[#E9E9E9] text-sm">
                    I like to keep myself busy — maybe too busy. I have a lot of
                    hobbies and side projects and when I'm curious about
                    something, I dive deep into it. Here you'll find anything
                    related to software, athletics, and anything in between.
                </p>
            </div>
            <div className="grid-cols-1">
                <SideQuest></SideQuest>
            </div>
        </div>
    );
};

export default SideQuests;
