import Image from 'next/image';
import Link from 'next/link';

const Socials = () => {
    return (
        <div className="flex flex-grow items-center gap-3">
            <Link
                href="https://www.linkedin.com/in/evan-ferreira/"
                target="_blank"
            >
                <Image
                    src="/linkedin.png"
                    alt="LinkedIn"
                    width={16}
                    height={16}
                />
            </Link>
            <Link href="https://github.com/Evan-Ferreira" target="_blank">
                <Image src="/github.png" alt="GitHub" width={16} height={16} />
            </Link>
            <Link
                href="Evan_Ferreira_Resume.pdf"
                download="/Evan_Ferreira_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
            >
                <Image src="/resume.png" alt="Resume" width={16} height={16} />
            </Link>
            <Link href="mailto:evanjfer@gmail.com" target="_blank">
                <Image src="/mail.png" alt="Mail" width={16} height={16} />
            </Link>
        </div>
    );
};

export default Socials;
