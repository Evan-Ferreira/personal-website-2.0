import React from 'react';

type VideoProps = {
    videoLink: string;
};

const Video = ({ videoLink }: VideoProps) => {
    return <img src={videoLink} width="100%" />;
};

export default Video;
