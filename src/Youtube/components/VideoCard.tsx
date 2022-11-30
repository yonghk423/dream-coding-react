import React from 'react';

const VideoCard = ({ data }:any) => {
    console.log(data);
    return (
        <li>
            {data?.snippet?.title}
        </li>
    )
}

export default VideoCard;