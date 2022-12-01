import React from "react";
import { formatAgo } from "../util/date";
import { useNavigate } from "react-router-dom";
interface Data {
  data: {
    snippet: {
      title: string;
      thumbnails: {
        medium: {
          url: string;
        };
      };
      channelId: string;
      channelTitle: string;
      publishedAt: string;
    };
  };
}

const VideoCard = ({ data }: Data) => {
  const { title, thumbnails, channelTitle, publishedAt, channelId } = data?.snippet;
  const navigate = useNavigate();
  console.log(data?.snippet);
  return (
    <li
      onClick={() => {
        navigate(`videos/watch/${channelId}`, { state: { data } });
      }}
    >
      <img className='w-full' src={thumbnails?.medium?.url} alt={title} />
      <div>
        <p className='font-semibold my-2 line-clamp-2'>{title}</p>
        <p className='text-sm opacity-80'>{channelTitle}</p>
        <p className='text-sm opacity-80'>{formatAgo(publishedAt, "ko")}</p>
      </div>
    </li>
  );
};

export default VideoCard;
