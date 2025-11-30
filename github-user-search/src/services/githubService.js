import axios from "axios";

const GITHUB_SEARCH_API_URL = "https://api.github.com/search/users?q";

async function fetchUserData(username, location, minRepos)
{
    try
    {
        const query = `${username ? `+${username}` : ""} ${location ? `+location:${location}` : ""} ${minRepos ? `+repos:>=${minRepos}` : ""}`;
        const response = await axios.get(`${GITHUB_SEARCH_API_URL}?q=${query}`);

        return response.data.items;
    }
    catch (error)
    {
        console.error("Error fetching users:", error);
        return null;
    }
};

export default fetchUserData;