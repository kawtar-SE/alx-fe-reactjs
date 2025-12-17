import { useQuery } from "@tanstack/react-query";

const fetchPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) throw new Error("Network response was not ok");
  return response.json();
};

function PostsComponent() {
  const { data, isLoading, isError, error, refetch, isFetching } = useQuery(
    ["posts"],
    fetchPosts,
    {
      staleTime: 60000, // 1 minute
      cacheTime: 300000, // 5 minutes
    }
  );

  console.log("Fetched data:", data);

  if (isLoading) return <p>Loading posts...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div style={{ padding: "20px",backgroundColor:"brown" }}>
      <h2>Posts List</h2>
      <button
        onClick={() => refetch()}
        disabled={isFetching}
        style={{ marginBottom: "10px" }}
      >
        {isFetching ? "Refreshing..." : "Refetch Posts"}
      </button>

      <pre>{JSON.stringify(data.slice(0, 10), null, 2)}</pre>
      <ul>
        {data.slice(0, 10).map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostsComponent;
