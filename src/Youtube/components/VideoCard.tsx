import React from 'react';

const VideoCard = ({ video }:any) => {
    console.log(video);
    return (
        <div>{video.snippet.title}</div>
    )
}

export default VideoCard;