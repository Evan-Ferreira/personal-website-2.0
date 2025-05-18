import React from 'react';

interface ImportantBlockProps {
    text: string;
}

const ImportantBlock = ({ text }: ImportantBlockProps) => {
    return (
        <div className="bg-[#969696] p-4 rounded-lg flex items-center justify-center">
            <p className="text-white text-lg font-semibold">{text}</p>
        </div>
    );
};

export default ImportantBlock;
