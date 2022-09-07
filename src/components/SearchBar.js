import { useEffect, useState } from "react";
import Results from "./Results";
import axios from "axios";

export default function SearchBar() {
  const [currentTime, setCurrentTime] = useState("");
  const [query, setQuery] = useState("");

  const fetchTimestamp = async () => {
    const config = {
      method: "get",
      url: "https://api.data.gov.sg/v1/transport/carpark-availability/",
    };

    const res = await axios(config);
    setCurrentTime(
      res.data.items[0].timestamp.replace("+08:00", "").replace("T", " ")
    );
  };

  useEffect(() => {
    fetchTimestamp();
  }, []);

  const handleChange = e => {
    setQuery(e.target.value.toLowerCase());
  };

  return (
    <>
      <div className="flex flex-col mb-4 w-full gap-y-2">
        <input
          type="text"
          name="search"
          value={query}
          onChange={handleChange}
          className="border rounded-lg p-2 outline-none capitalize drop-shadow-md"
          placeholder="Search a location to begin..."
        />
        <small className="text-gray-500">Updated at: {currentTime}</small>
        <button
          className="self-start bg-blue-600 flex items-center justify-center rounded-md gap-x-2 text-white text-sm p-2 my-2 transition ease-in-out hover:bg-blue-800"
          onClick={() => window.location.reload(false)}
        >
          Refresh
        </button>
      </div>

      {query && <Results input={query} />}
    </>
  );
}
