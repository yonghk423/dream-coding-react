import React from 'react';
import { format } from 'timeago.js';
import { formatAgo } from '../util/date';
interface Data {
    data: {
        snippet: {
            title: string;
            thumbnails: {
                medium: {
                    url:string;    
                }
            }
            channelTitle:string;
            publishedAt:string;
        }
    }
}

const VideoCard = ({ data }:Data) => {
    const { title, thumbnails, channelTitle, publishedAt} = data?.snippet;
    console.log(thumbnails);
    return (
        <li>
            <img className='w-full' src={thumbnails?.medium?.url} alt={title} />
            <div>
                <p className='font-semibold my-2 line-clamp-2'>{title}</p>
                <p className='text-sm opacity-80'>{channelTitle}</p>
                <p className='text-sm opacity-80'>{formatAgo(publishedAt, 'ko')}</p>
            </div>
        </li>
    )
}

export default VideoCard;