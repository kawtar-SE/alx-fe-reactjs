import { useQuery } from "react-query";

const fetchPosts = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts"
  );
  return res.json();
};

function PostsComponent() {
  const {
    data,
    isLoading,
    isError,
    refetch,
  } = useQuery("posts", fetchPosts);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error</p>;

  return (
    <div>
      <h1>Posts</h1>

      <button onClick={() => refetch()}>
        Refetch Posts
      </button>

      <ul>
        {data.slice(0, 5).map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default PostsComponent;

