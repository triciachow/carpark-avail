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
      <small className="text-gray-400 mb-1 text-end">
        {filteredData?.length}
        {filteredData?.length > 1 ? " results" : " result"} found
      </small>
      <div className="bg-white border rounded-lg p-4 drop-shadow-md">
        <div className="flex justify-between items-center border-b w-full">
          <div className="w-3/6 font-serif text-gray-500 mr-2">Location</div>
          <div className="w-1/6 font-serif text-gray-500 mr-2">Avail</div>
          <div className="w-1/6 font-serif text-gray-500 mr-2">Capacity</div>
          <div className="w-1/6"></div>
        </div>
        {filteredData?.map((data, index) => (
          <ResultsRow key={index} data={data} />
        ))}
      </div>
    </>
  );
}
