import type { Metadata } from 'next';
import { Geist, Geist_Mono, Host_Grotesk } from 'next/font/google';
import './globals.css';
import Navbar from './_components/Navbar';
const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
});

const hostGrotesk = Host_Grotesk({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
    title: 'Evan Ferreira',
    description:
        'Business student who loves to build software people actually care about. Also likes wrestling.',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} ${hostGrotesk.className} antialiased`}
            >
                <Navbar />
                {children}
            </body>
        </html>
    );
}
