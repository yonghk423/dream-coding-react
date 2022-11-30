import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import VideoCard from '../components/VideoCard';
import { search } from '../api/youtube';
const Videos = () => {
    const { keyword } = useParams();
    const {
            isLoading, 
            error, 
            data:videos
        } = useQuery(['videos', keyword], () => search(keyword));
    return (
        <>
        <div>Videos {keyword ? `${keyword}` : '핫 트렌드'}</div>
        {isLoading && <p>Loading...</p>}
        {error && <p>Something is wrong</p>}
        {videos && (
            <ul>
                {videos.map((video:any) => (
                    <VideoCard key={video.id} video={video} />
                ))}
            </ul>
        )}
        </>
    )
}

export default Videos;