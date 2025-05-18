import React from 'react';

interface ImageProps {
    src: string;
    alt?: string;
    caption?: string;
    className?: string;
}

const Image = ({ src, alt, caption, className }: ImageProps) => {
    return (
        <div
            className={`flex flex-col justify-center items-center gap-2 mt-12 mb-8 ${className}`}
        >
            <img src={src} alt={alt} />
            <p className="text-sm text-[#969696] text-left -p-x-4">{caption}</p>
        </div>
    );
};

export default Image;
