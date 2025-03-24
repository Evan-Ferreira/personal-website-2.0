import React from 'react';
import Image from 'next/image';

type SideQuestImages = {
    mobileImagePath: string;
    desktopImagePath: string;
};

const Images = ({ mobileImagePath, desktopImagePath }: SideQuestImages) => {
    return (
        <>
            <Image
                className="max-md:block hidden"
                src={mobileImagePath}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: 'auto' }}
                alt=""
            />
            <Image
                className="max-md:hidden block"
                src={desktopImagePath}
                alt=""
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: 'auto' }}
            />
        </>
    );
};

export default Images;
