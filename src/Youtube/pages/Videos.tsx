import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import VideoCard from '../components/VideoCard';
const Videos = () => {
    const { keyword } = useParams();
    const {
            isLoading, 
            error, 
            data:videos
        } = useQuery(
        ['videos', keyword], async () => {
            return fetch(`/videos/${keyword ? 'search' : 'popular'}.json`)
            .then((res) => res.json())
            .then((data) => data.items);               
        });
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