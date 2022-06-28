import React from 'react';

// import { Container } from './styles';

interface PostProps {
  author: string;
  content: string;
}

const Post: React.FC<PostProps> = ({author, content}) => {
  return (
    <div>
      <strong> {author} </strong>
      <p> {content} </p>
    </div>
  )
}

export default Post;