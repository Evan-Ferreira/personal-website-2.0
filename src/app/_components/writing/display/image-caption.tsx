import React from 'react';

interface ImageProps {
    src: string;
    alt: string;
    caption?: string;
    className?: string;
    width: number;
    height: number;
}

const ImageCaption = ({
    src,
    alt,
    caption,
    className,
    width,
    height,
}: ImageProps) => {
    return (
        <div
            className={`flex flex-col justify-center items-center gap-2 mt-8 mb-4 ${className}`}
        >
            <img
                alt={alt}
                src={src}
                style={{ width: `${width}px`, height: `${height}px` }}
                className="object-cover"
            />
            <p
                style={{ width: `${width + 50}px` }}
                className="text-sm text-[#969696] text-left"
            >
                {caption}
            </p>
        </div>
    );
};

export default ImageCaption;
