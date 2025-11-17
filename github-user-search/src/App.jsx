import { useState } from "react";

function App() {
  const [username, setUsername] = useState("");

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">GitHub User Search</h1>

      <input
        type="text"
        placeholder="Enter GitHub username..."
        className="border border-gray-400 px-3 py-2 rounded w-full"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
    </div>
  );
}

export default App;
