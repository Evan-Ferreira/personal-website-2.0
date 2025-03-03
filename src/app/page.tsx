import { Host_Grotesk } from 'next/font/google';
import Resume from './_components/Resume';
import Socials from './_components/Socials';
import Project from './_components/Project';

const hostGrotesk = Host_Grotesk({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700'],
});

export default function Home() {
    return (
        <div className="flex bg-[#2A2A2A] h-screen w-screen pb-8 pt-24 px-48 gap-16">
            <div className="w-1/2 flex items-center max-md:hidden overflow-hidden">
                <div
                    className="w-full grid grid-cols-1 mt-auto gap-4
                justify-items-center object-contain items-center overflow-auto h-screen no-scrollbar pb-48"
                >
                    <Project
                        title="Stumble"
                        date="2024"
                        technologies={['React', 'Firebase', 'Git']}
                        description="A social media platform for sharing and discovering new music."
                        learnMoreLink="https://github.com/Evan-Ferreira/Stumble_HackTheHill2024"
                        videoLink="/project1.png"
                    />
                    <Project
                        title="Stumble"
                        date="2024"
                        technologies={['React', 'Firebase', 'Git']}
                        description="A social media platform for sharing and discovering new music."
                        learnMoreLink="https://github.com/Evan-Ferreira/Stumble_HackTheHill2024"
                        videoLink="/project1.png"
                    />
                    <Project
                        title="Stumble"
                        date="2024"
                        technologies={['React', 'Firebase', 'Git']}
                        description="A social media platform for sharing and discovering new music."
                        learnMoreLink="https://github.com/Evan-Ferreira/Stumble_HackTheHill2024"
                        videoLink="/project1.png"
                    />
                    <Project
                        title="Stumble"
                        date="2024"
                        technologies={['React', 'Firebase', 'Git']}
                        description="A social media platform for sharing and discovering new music."
                        learnMoreLink="https://github.com/Evan-Ferreira/Stumble_HackTheHill2024"
                        videoLink="/project1.png"
                    />
                </div>
            </div>
            <div className="w-full md:w-1/2 flex flex-col justify-start items-center gap-6">
                <div className="flex-col justify-center items-start w-full">
                    <div className="flex items-center gap-8">
                        <h1
                            className={`${hostGrotesk.className}text-white tracking-widest text-4xl font-bold`}
                        >
                            EVAN FERREIRA
                        </h1>
                        <Socials className="max-md:hidden" />
                    </div>
                    <p className="flex text-lg text-[#969696]">
                        Software, Startups, & Side Quests
                    </p>
                    <p className="flex font-light text-[#E9E9E9] mt-2">
                        Business student who likes to build software people
                        actually care about. Also loves wrestling.
                    </p>
                    <Socials className="md:hidden mt-3" />
                </div>
                <Resume />
            </div>
        </div>
    );
}
