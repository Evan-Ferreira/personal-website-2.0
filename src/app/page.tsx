import { Host_Grotesk } from 'next/font/google';
import Resume from './_components/Resume';
const hostGrotesk = Host_Grotesk({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700'],
});

export default function Home() {
    return (
        <div className="flex bg-black h-screen w-screen">
            <div className="w-1/2 px-8"></div>
            <div className="w-1/2 px-8 flex flex-col justify-center items-center gap-4">
                <div className="flex-col justify-center items-start w-full">
                    <h1
                        className={`${hostGrotesk.className}text-white tracking-widest text-4xl font-bold`}
                    >
                        EVAN FERREIRA
                    </h1>
                    <p className="flex font-light text-[#E9E9E9 italic">
                        Software, Startups, & Side Quests
                    </p>
                </div>
                <Resume />
            </div>
        </div>
    );
}
