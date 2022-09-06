import { useState } from "react";
import ResultsData from "./ResultsData";

export default function ResultsRow({ data }) {
  const [show, setShow] = useState("");
  const [hide, setHide] = useState(true);

  const toggleShow = (e, id) => {
    const selectedRow = data.find(ele => ele.id === id);
    // console.log(selectedRow.id);

    setShow(selectedRow.id);
    setHide(prev => !prev);
  };

  return (
    <>
      {data.map(data => {
        return (
          <div key={data.id} className="w-full cursor-pointer">
            <div
              className="flex justify-between items-center border-b h-8"
              onClick={e => toggleShow(e, data.id)}
            >
              <div className="w-3/5 px-4">{data.address}</div>
              <div className="w-2/5 px-4">{data.lot}</div>
            </div>
            {hide && data.id === show ? <ResultsData data={data} /> : null}
          </div>
        );
      })}
    </>
  );
}
