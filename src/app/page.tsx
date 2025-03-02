import { Host_Grotesk } from 'next/font/google';
import Resume from './_components/Resume';
const hostGrotesk = Host_Grotesk({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700'],
});

export default function Home() {
    return (
        <div className="flex bg-black h-screen w-screen">
            <div className="w-1/2 px-4"></div>
            <div className="w-1/2 px-4 flex flex-col justify-center items-center">
                <div className="flex-col justify-center items-center">
                    <h1
                        className={`${hostGrotesk.className}text-white tracking-widest text-4xl font-bold`}
                    >
                        EVAN FERREIRA
                    </h1>
                    <div className="flex font-light text-[#E9E9E9]">
                        <p className="">Software, Startups, Side Quests</p>
                    </div>
                </div>
                <Resume />
            </div>
        </div>
    );
}
