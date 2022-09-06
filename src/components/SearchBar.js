import { useEffect, useState } from "react";
import Results from "./Results";
import axios from "axios";

export default function SearchBar() {
  const [currentTime, setCurrentTime] = useState("");
  const [query, setQuery] = useState("");

  // Fetch timestamp of updated time
  useEffect(() => {
    const config = {
      method: "get",
      url: "https://api.data.gov.sg/v1/transport/carpark-availability/",
    };

    axios(config)
      .then(res =>
        setCurrentTime(
          // Reformat timing
          res.data.items[0].timestamp.replace("+08:00", "").replace("T", " ")
        )
      )
      .catch(err => console.log(err));
  }, []);

  const handleChange = e => {
    setQuery(e.target.value.toLowerCase());
    // console.log(query);
  };

  return (
    <>
      <div className="mb-4 w-3/5 text-center">
        <input
          type="search"
          name="search"
          value={query}
          onChange={handleChange}
          className="border-b w-full p-2 text-center outline-none"
          placeholder="Search a location to begin..."
        />
        <small>Updated at: {currentTime}</small>
      </div>
      <Results input={query} />
    </>
  );
}
