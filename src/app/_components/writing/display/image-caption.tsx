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
            className={`flex flex-col justify-center items-center gap-2 mt-8 mb-4 w-full ${className}`}
        >
            <img
                alt={alt}
                src={src}
                style={{
                    width: '100%',
                    maxWidth: `${width}px`,
                    height: 'auto',
                    aspectRatio: `${width}/${height}`,
                }}
                className="object-cover"
            />
            <p className="text-sm text-[#969696] text-center w-full max-w-[90%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-[60%]">
                {caption}
            </p>
        </div>
    );
};

export default ImageCaption;
