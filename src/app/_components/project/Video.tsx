import React from 'react';

type VideoProps = {
    videoLink: string;
};

const Video = ({ videoLink }: VideoProps) => {
    return <video src={videoLink} width="100%" autoPlay muted loop />;
};

export default Video;
