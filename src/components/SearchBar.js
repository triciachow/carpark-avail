import { useEffect, useState } from "react";
import Results from "./Results";
import axios from "axios";

const dummyData = [
  {
    id: "1",
    address: "Blk 78 Redhill Close 1",
    lot: "23",
    carpark_type: "Multi-storey Car Park",
    free_parking: "SUN & PH FR 7AM - 10.30PM",
    carpark_num: "RHM4",
    night_parking: "No",
    gantry_height: "2.15",
  },
  {
    id: "2",
    address: "Blk 78 Redhill Close 2",
    lot: "34",
    carpark_type: "Multi-storey Car Park",
    free_parking: "No",
    carpark_num: "SAC4",
    night_parking: "Yes",
    gantry_height: "2.15",
  },
];

export default function SearchBar() {
  const [currentTime, setCurrentTime] = useState("");

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
          res.data.items[0].timestamp.replace("+08:00", " ").replace("T", " ")
        )
      )
      .catch(err => console.log(err));
  }, []);

  return (
    <>
      <div className="mb-4 w-3/5 text-center">
        <input
          type="text"
          className="border-b w-full p-2 text-center"
          placeholder="Search a location to begin..."
        />
        <small>Updated at: {currentTime}</small>
      </div>
      <Results data={dummyData} />
    </>
  );
}
