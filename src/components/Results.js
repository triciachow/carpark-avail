import ResultsRow from "./ResultsRow";
import CarparkData from "./CarparkData";

export default function Results({ input }) {
  const mergeData = CarparkData();

  const filteredData = mergeData?.filter(ele => {
    if (input === "") {
      return ele;
    } else {
      return ele.address.toLowerCase().includes(input);
    }
  });

  return (
    <>
      <div className="flex justify-between items-center border-b w-full">
        <div className="w-3/5 font-bold">Location</div>
        <div className="w-1/5 font-bold text-end">Avail</div>
        <div className="w-1/5 font-bold text-end">Capacity</div>
      </div>
      {filteredData?.map((data, index) => (
        <ResultsRow key={index} data={data} />
      ))}
    </>
  );
}
