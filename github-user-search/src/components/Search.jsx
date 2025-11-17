import { useState } from "react";
import { fetchUserData, advancedSearchUsers } from "../services/githubService";

const Search = () => {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [results, setResults] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    setError("");
    setResults([]);
    setLoading(true);

    try {
      let users = [];

      if (username && !location && !minRepos) {
        // Basic search using fetchUserData
        const user = await fetchUserData(username);
        users = [user];
      } else {
        // Advanced search using advancedSearchUsers
        users = await advancedSearchUsers(username, location, minRepos);
      }

      if (!users || users.length === 0) {
        setError("Looks like we cant find the user");
      } else {
        setResults(users);
      }
    } catch {
      setError("Looks like we cant find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-4 bg-white shadow rounded-xl">
      <form onSubmit={handleSearch} className="space-y-4">
        <input
          type="text"
          placeholder="Search username..."
          className="w-full p-3 border rounded-lg"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="text"
          placeholder="Location (optional)"
          className="w-full p-3 border rounded-lg"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

        <input
          type="number"
          placeholder="Minimum repositories (optional)"
          className="w-full p-3 border rounded-lg"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
        >
          Search
        </button>
      </form>

      {loading && <p className="mt-4">Loading...</p>}
      {error && <p className="text-red-600 mt-4">{error}</p>}

      <div className="mt-6 space-y-4">
        {results.map((user) => (
          <div
            key={user.id}
            className="p-4 border rounded-lg flex items-center space-x-4"
          >
            <img src={user.avatar_url} alt="" className="w-12 h-12 rounded-full" />
            <div>
              <p className="font-bold">{user.name || user.login}</p>
              <p>{user.location || ""}</p>
              <p>Repos: {user.public_repos || "N/A"}</p>
              <a
                href={user.html_url}
                target="_blank"
                className="text-blue-500 underline"
              >
                View Profile
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
