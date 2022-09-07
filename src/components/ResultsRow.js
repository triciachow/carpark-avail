import { useState } from "react";
import ResultsData from "./ResultsData";

export default function ResultsRow({ data }) {
  const dataArr = [];
  dataArr.push(data);
  // console.log(dataArr);
  const [row, setRow] = useState("");
  const [show, setShow] = useState(false);

  const toggleShow = (e, id) => {
    const selectedRow = dataArr.find(ele => ele.id === id);
    // console.log(selectedRow.id);
    setRow(selectedRow.id);
    setShow(prev => !prev);
  };

  return (
    <>
      {dataArr?.map((data, index) => (
        <div key={index} className="w-full">
          <div
            className="flex justify-between items-center border-b cursor-pointer"
            onClick={e => toggleShow(e, data.id)}
          >
            <div className="w-3/5">{data.address}</div>
            <div className="w-1/5">{data.lot}</div>
            <div className="w-1/5">80% full</div>
          </div>
          {show && data.id === row ? <ResultsData data={data} /> : null}
        </div>
      ))}
    </>
  );
}
