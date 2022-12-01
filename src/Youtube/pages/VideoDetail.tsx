import React from "react";
import { useLocation } from "react-router-dom";

const VideoDetail = () => {
  const {
    state: { data },
  } = useLocation();
  console.log(data);
  return <div>VideoDetail</div>;
};

export default VideoDetail;
