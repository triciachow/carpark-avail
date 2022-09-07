import ResultsRow from "./ResultsRow";
import CarparkData from "./CarparkData";

export default function Results({ input }) {
  const fetchData = CarparkData();

  const filteredData = fetchData?.filter(ele => {
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
        <div className="w-1/5 font-bold">Free Lots</div>
        <div className="w-1/5 font-bold">Capacity</div>
      </div>
      {filteredData?.map((data, index) => (
        <ResultsRow key={index} data={data} />
      ))}
    </>
  );
}
