import { useState } from 'react';

/**
 * Een like button component
 */
function LikeButton({ initialLikes = 0 }) {
  const [likes, setLikes] = useState(initialLikes);
  const [isLiked, setIsLiked] = useState(false);

  const handleClick = () => {
    if (isLiked) {
      setLikes(likes - 1);
      setIsLiked(false);
    } else {
      setLikes(likes + 1);
      setIsLiked(true);
    }
  };

  return (
    <div>
      <button onClick={handleClick}>
        {isLiked ? '❤️' : '🤍'} Like
      </button>
      <span>{likes} likes</span>
    </div>
  );
}

export default LikeButton;
