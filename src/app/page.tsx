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
        <div className="flex bg-[#2A2A2A] h-screen w-screen pb-8 pt-32 px-48 gap-24">
            <div className="w-1/2 flex items-center max-md:hidden overflow-hidden">
                <div
                    className="w-full grid grid-cols-1 mt-auto gap-4
                justify-items-center object-contain items-center overflow-auto h-screen no-scrollbar pb-48"
                >
                    <Project
                        title="Local Reach"
                        date="2024"
                        technologies={[
                            'TensorFlow',
                            'OpenCV',
                            'Raspberry Pi',
                            'Git',
                        ]}
                        description="Acquired by Taiv (YC W20). Local Reach was a startup that used AI to 
                        help make restaurants and bars more fun and engaging. By using AI to detect and classify restaurant/bar TV content, 
                        Local Reach was able to provide a more tailored experience for customers."
                        learnMoreLink="https://thelocalreach.ca"
                        videoLink="/localreach.mp4"
                    />
                    <Project
                        title="Monkey Music"
                        date="2024"
                        technologies={[
                            'Expo',
                            'React Native',
                            'Node.js',
                            'Express',
                        ]}
                        description="Monkey Music is an app I built using Expo that allows you to download every song from your 
                        Spotify playlist onto your phone's storage. This one of my first full stack projects and it taught me a lot 
                        about mobile development and managing different APIs. "
                        learnMoreLink="https://github.com/Evan-Ferreira/monkey-music?tab=readme-ov-file"
                        videoLink="/monkey-music.mp4"
                    />
                    <Project
                        title="Stumble"
                        date="2024"
                        technologies={[
                            'Next.js',
                            'Node.js',
                            'Express',
                            'MongoDB',
                            'Git',
                        ]}
                        description="Stumble is a platform to help individuals (particularly CS students) practice their abilities to
                         talk to the opposite sex. Using a leetcode like interface, users are able to practice and grind questions/scenarios 
                         to best prep them for real life conversations."
                        learnMoreLink="https://github.com/Evan-Ferreira/Stumble_HackTheHill2024"
                        videoLink="/stumble.mp4"
                    />
                </div>
            </div>
            <div className="w-full md:w-1/2 flex flex-col justify-center items-center gap-3">
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
                        Business student who loves to build software people
                        actually care about. Also likes wrestling.
                    </p>
                    <Socials className="md:hidden mt-3" />
                </div>
                <Resume />
            </div>
        </div>
    );
}
