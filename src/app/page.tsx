import { Host_Grotesk } from 'next/font/google';
import Resume from './_components/Resume';
import Socials from './_components/Socials';

const hostGrotesk = Host_Grotesk({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700'],
});

export default function Home() {
    return (
        <div className="flex bg-[#2A2A2A] h-screen w-screen">
            <div className="w-1/2 px-8"></div>
            <div className="w-1/2 px-8 flex flex-col justify-center items-center gap-8">
                <div className="flex-col justify-center items-start w-full">
                    <div className="flex items-center gap-8">
                        <h1
                            className={`${hostGrotesk.className}text-white tracking-widest text-4xl font-bold`}
                        >
                            EVAN FERREIRA
                        </h1>
                        <Socials />
                    </div>
                    <p className="flex text-lg text-[#969696]">
                        Software, Startups, & Side Quests
                    </p>
                    <p className="flex font-light text-[#E9E9E9] mt-2">
                        Business student who likes to build software people
                        actually care about. Also loves wrestling.
                    </p>
                </div>
                <Resume />
            </div>
        </div>
    );
}
