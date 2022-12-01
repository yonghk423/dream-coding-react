import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import VideoCard from "../components/VideoCard";
import { search } from "../api/youtube";
import { VideosData } from "../api/youtube";

const Videos = () => {
  const { keyword } = useParams();
  const { isLoading, error, data } = useQuery<VideosData[]>(["videos", keyword], () =>
    search(keyword)
  );
  console.log(data);
  return (
    <>
      <div>Videos {keyword ? `${keyword}` : "핫 트렌드"}</div>
      {isLoading && <p>Loading...</p>}
      {error && <p>Something is wrong</p>}
      {data && (
        <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2 gap-y-4'>
          {data?.map((ele, id: number) => (
            <VideoCard key={id} data={ele} />
          ))}
        </ul>
      )}
    </>
  );
};

export default Videos;
