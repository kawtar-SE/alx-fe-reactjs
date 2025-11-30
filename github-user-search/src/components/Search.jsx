import { useState } from "react";
import fetchUserData from "../services/githubService";

function Search()
{
    const [username, setUsername] = useState("");
    const [location, setLocation] = useState("");
    const [minRepos, setMinRepos] = useState(0);
    const [userData, setUserData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [page, setPage] = useState(1);

    const handleSearch = async (event) =>
    {
        event.preventDefault();
        setLoading(true);
        setError(false);
        setUserData([]);
        setPage(1);

        const data = await fetchUserData(username, location, minRepos, page);
        if (data)
        {
            setUserData(data);
        }
        else
        {
            setError(true);
        }
        setLoading(false);
    };

    const handleLoadMore = async () =>
    {
        setPage(page + 1);
        const data = await fetchUserData(username, location, minRepos, page + 1);
        if (data)
        {
            setUserData((prevData) => [...prevData, ...data]);
        }
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold text-center mb-6">GitHub User Search</h1>
            <form onSubmit={handleSearch} className="space-y-4 max-w-md mx-auto">
                <input
                type="text"
                placeholder="Enter GitHub username..."
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded"
                />
                <input
                type="text"
                placeholder="Location (optional)"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded"
                />
                <input
                type="number"
                placeholder="Minimum repositories (optional)"
                value={minRepos}
                onChange={(e) => setMinRepos(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded"
                />
                <button
                type="submit"
                className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
                >
                Search
                </button>
            </form>

            {loading && <p className="text-center mt-4">Loading...</p>}
            {error && <p className="text-center mt-4 text-red-500">Looks like we cant find the user</p>}

            <div className="mt-6">
                {userData.length > 0 &&
                userData.map((user) => (
                    <div key={user.login} className="mb-4 p-4 border border-gray-200 rounded">
                        <img
                            src={user.avatar_url}
                            alt={user.login}
                            width="100"
                            className="rounded-full"
                        />
                        <h2 className="font-semibold text-xl">{user.name || "No name provided"}</h2>
                        <p>Username: {user.login}</p>
                        <p>Location: {user.location || "Not provided"}</p>
                        <p>Repositories: {user.public_repos}</p>
                        <a
                            href={user.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:underline"
                        >
                            View Profile
                        </a>
                    </div>
                ))}
            </div>

            {userData.length > 0 && (
                <button
                onClick={handleLoadMore}
                className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 mt-4"
                >
                Load More
                </button>
            )}
        </div>
    );
}

export default Search;
