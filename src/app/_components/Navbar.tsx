'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

const Navbar = () => {
    const router = useRouter();

    return (
        <div className="flex flex-row absolute bg-transparent w-full justify-evenly items-center gap-18 max-md:gap-12 mt-10 px-48 max-md:px-10">
            <p
                className="text-[#969696] text-sm font-semibold tracking-widest hover:text-[#F9F9F9] hover:cursor-pointer"
                onClick={() => router.push('/side-quests')}
            >
                SIDE QUESTS
            </p>
            <p
                className="text-[#969696] text-sm font-semibold tracking-widest hover:text-[#F9F9F9] hover:cursor-pointer"
                onClick={() => router.push('/')}
            >
                HOME
            </p>
            <p
                className="text-[#969696] text-sm font-semibold tracking-widest hover:text-[#F9F9F9] hover:cursor-pointer"
                onClick={() => router.push('/writing')}
            >
                WRITING
            </p>
        </div>
    );
};

export default Navbar;
