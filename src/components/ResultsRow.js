import { useState } from "react";
import ResultsData from "./ResultsData";

export default function ResultsRow({ data }) {
  const dataArr = [];
  dataArr.push(data);
  // console.log(dataArr);
  const [row, setRow] = useState("");
  const [hide, setHide] = useState(true);

  const toggleShow = (e, id) => {
    const selectedRow = dataArr.find(ele => ele.id === id);
    // console.log(selectedRow.id);
    setRow(selectedRow.id);
    setHide(prev => !prev);
  };

  return (
    <>
      {dataArr?.map(data => (
        <div key={data.id} className="w-full">
          <div
            className="flex justify-between items-center border-b cursor-pointer"
            onClick={e => toggleShow(e, data.id)}
          >
            <div className="w-3/5 px-4">{data.address}</div>
            <div className="w-2/5 px-4">{data.lot}</div>
          </div>
          {hide && data.id === row ? <ResultsData data={data} /> : null}
        </div>
      ))}
    </>
  );
}
