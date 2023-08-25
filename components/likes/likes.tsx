"use client"
import React, { useState } from 'react';
import Image from 'next/image';

const LikeButton: React.FC = () => {
  const [likes, setLikes] = useState<number>(0);
  const [liked, setLiked] = useState<boolean>(false);

  const handleLikeToggle = () => {
    if (liked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setLiked(!liked);
  };

  return (
    <div>
      <Image
        src='/assets/heart.svg'
        alt='heart'
        width={24}
        height={24}
        className={`cursor-pointer object-contain ${liked ? 'text-red-500' : ''}`}
        onClick={handleLikeToggle}
      />
      <span>{likes} {likes === 1 ? '' : ''}</span>
    </div>
  );
};

export default LikeButton;
