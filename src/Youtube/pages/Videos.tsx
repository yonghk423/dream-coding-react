import React from 'react';
import { useParams } from 'react-router-dom';
const Videos = () => {
    const { keyword } = useParams();
    return (
        <div>Videos {keyword ? `${keyword}` : '핫 트렌드'}</div>
    )
}

export default Videos;