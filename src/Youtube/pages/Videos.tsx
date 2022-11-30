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
            data
        }:any = useQuery(['videos', keyword], () => search(keyword));
        console.log(data);
    return (
        <>
        <div>Videos {keyword ? `${keyword}` : '핫 트렌드'}</div>
        {isLoading && <p>Loading...</p>}
        {error && <p>Something is wrong</p>}
        {data?.data && (
            <ul>
               {data?.data?.items.map((ele:any) => (
                <div>{ele?.snippet?.title}</div>
               ))}
            </ul>
        )}
        </>
    )
}

export default Videos;