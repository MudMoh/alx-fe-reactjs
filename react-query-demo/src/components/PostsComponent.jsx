import { useQuery } from "@tanstack/react-query";

function fetchPosts() {
	return fetch("https://jsonplaceholder.typicode.com/posts").then((res) =>
		res.json()
	);
}

function PostsComponent() {
	const {
		data: posts,
		isLoading,
		isError,
		error,
		refetch,
		isFetching,
	} = useQuery({
		queryKey: ["posts"],
		queryFn: fetchPosts,
		staleTime: 1000 * 60, // 1 minute cache
	});

	return (
		<div style={{ maxWidth: 600, margin: "2rem auto" }}>
			<h2>Posts</h2>
			<button onClick={() => refetch()} disabled={isFetching}>
				{isFetching ? "Refreshing..." : "Refetch Posts"}
			</button>
			{isLoading ? (
				<p>Loading...</p>
			) : isError ? (
				<p style={{ color: "red" }}>Error: {error.message}</p>
			) : (
				<ul>
					{posts.slice(0, 10).map((post) => (
						<li key={post.id}>
							<strong>{post.title}</strong>
							<p>{post.body}</p>
						</li>
					))}
				</ul>
			)}
		</div>
	);
}

export default PostsComponent;
