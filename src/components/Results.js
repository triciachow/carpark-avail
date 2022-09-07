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
      <div className="bg-white border rounded-lg p-4 drop-shadow-md">
        <div className="flex justify-between items-center border-b w-full">
          <div className="w-3/6 font-serif text-gray-500">Location</div>
          <div className="w-1/6 font-serif text-gray-500 text-end">Avail</div>
          <div className="w-1/6 font-serif text-gray-500 text-end">
            Capacity
          </div>
          <div className="w-1/6 font-serif text-gray-500 text-end"></div>
        </div>
        {filteredData?.map((data, index) => (
          <ResultsRow key={index} data={data} />
        ))}
      </div>
    </>
  );
}
