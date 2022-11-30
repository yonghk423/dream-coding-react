import React from 'react';

const VideoCard = ({ video }:any) => {
    return (
        <div>{video.snippet.title}</div>
    )
}

export default VideoCard;