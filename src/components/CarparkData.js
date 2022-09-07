import { useState, useEffect } from "react";
import axios from "axios";

export default function CarparkData() {
  const [address, setAddress] = useState([]);
  const [lots, setLots] = useState([]);
  const [mergeData, setMergeData] = useState([]);

  const fetchAddress = async () => {
    try {
      const config = {
        method: "get",
        url: "https://data.gov.sg/api/action/datastore_search?resource_id=139a3035-e624-4f56-b63f-89ae28d4ae4c&limit=9999",
      };
      const res = await axios(config);
      const records = res.data.result.records;
      setAddress(records);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchLots = async () => {
    try {
      const config = {
        method: "get",
        url: "https://api.data.gov.sg/v1/transport/carpark-availability/",
      };
      const res = await axios(config);
      const lotsAvail = res.data.items[0].carpark_data;
      setLots(lotsAvail);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchAddress();
    fetchLots();
  }, []);

  useEffect(() => {
    const combineData = [];

    for (let i = 0; i < address.length; i++) {
      combineData.push({
        ...address[i],
        ...lots.find(lot => lot.carpark_number === address[i].car_park_no),
      });
    }

    setMergeData(combineData);
  }, [address, lots]);

  // console.log(mergeData);

  return mergeData;
}
