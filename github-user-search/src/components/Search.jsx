import { useState } from "react";
import { fetchUserData } from "../services/githubService";

function Search() {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username) return;

    setLoading(true);
    setError("");
    setUser(null);

    try {
      const data = await fetchUserData(username);
      setUser(data);
    } catch (err) {
      setError("Looks like we cant find the user");   // EXACT text required
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6">
      <form onSubmit={handleSubmit} className="mb-6">

        <input
          type="text"
          placeholder="Enter GitHub username..."
          className="border p-2 rounded w-full mb-4"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        {/* REQUIRED BUTTON */}
        <button
          type="submit"
          className="bg-blue-600 text-white p-2 rounded w-full"
        >
          Search
        </button>

      </form>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {user && (
        <div className="mt-4 p-4 border rounded shadow bg-white">
          <img
            src={user.avatar_url}
            alt="avatar"
            className="w-24 rounded-full mb-4"
          />
          <h2 className="text-xl font-semibold">{user.name || user.login}</h2>
          <a
            href={user.html_url}
            target="_blank"
            className="text-blue-500 underline"
          >
            View Profile
          </a>
        </div>
      )}
    </div>
  );
}

export default Search;
