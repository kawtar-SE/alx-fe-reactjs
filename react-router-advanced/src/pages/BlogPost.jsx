import { useParams } from 'react-router-dom';

const BlogPost = () => {
  const { id } = useParams(); // Get the dynamic URL parameter

  return (
    <div style={{ padding: '20px' }}>
      <h1>Blog Post</h1>
      <p>Displaying content for post ID: <strong>{id}</strong></p>
    </div>
  );
};

export default BlogPost;
