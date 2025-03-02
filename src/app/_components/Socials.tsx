import Image from 'next/image';
import Link from 'next/link';

type SocialsProps = {
    className?: string;
};

const Socials = ({ className }: SocialsProps) => {
    return (
        <div className={`flex flex-grow items-center gap-3 ${className}`}>
            <Link
                href="https://www.linkedin.com/in/evan-ferreira/"
                target="_blank"
            >
                <div className="relative w-[24px] h-[24px]">
                    <Image
                        src="/linkedin.png"
                        alt="LinkedIn"
                        layout={'fill'}
                        objectFit={'contain'}
                    />
                </div>
            </Link>
            <Link href="https://github.com/Evan-Ferreira" target="_blank">
                <div className="relative w-[24px] h-[24px]">
                    <Image
                        src="/github.png"
                        alt="GitHub"
                        layout={'fill'}
                        objectFit={'contain'}
                    />
                </div>
            </Link>
            <Link
                href="Evan_Ferreira_Resume.pdf"
                download="/Evan_Ferreira_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
            >
                <div className="relative w-[24px] h-[24px]">
                    <Image
                        src="/resume.png"
                        alt="Resume"
                        layout={'fill'}
                        objectFit={'contain'}
                    />
                </div>
            </Link>
            <Link href="mailto:evanjfer@gmail.com" target="_blank">
                <div className="relative w-[24px] h-[24px]">
                    <Image
                        src="/mail.png"
                        alt="Mail"
                        layout={'fill'}
                        objectFit={'contain'}
                    />
                </div>
            </Link>
        </div>
    );
};

export default Socials;
