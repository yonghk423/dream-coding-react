import React from 'react';
interface Data {
    data: {
        snippet: {
            title: string;
        }
    }
}

const VideoCard = ({ data }:Data) => {
    console.log(data);
    return (
        <li>
            {data?.snippet?.title}
        </li>
    )
}

export default VideoCard;