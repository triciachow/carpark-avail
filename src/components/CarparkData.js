import { useState, useEffect } from "react";
import axios from "axios";

export default function CarparkData() {
  const [fetchData, setFetchData] = useState([]);

  const fetchApi = async () => {
    try {
      const res = await axios({
        method: "get",
        url: "https://data.gov.sg/api/action/datastore_search?resource_id=139a3035-e624-4f56-b63f-89ae28d4ae4c&limit=9999",
      });
      const records = res.data.result.records;
      setFetchData(records);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchApi();
  }, []);

  // console.log(fetchData);
  return fetchData;
}
