import ResultsRow from "./ResultsRow";
import { data } from "./dummyData";

export default function Results({ input }) {
  const filteredData = data.filter(ele => {
    if (input === "") {
      return ele;
    } else {
      return ele.address.toLowerCase().includes(input);
    }
  });
  // console.log(filteredData);

  return (
    <>
      <div className="flex justify-between items-center border-b w-full h-8">
        <div className="w-3/5 px-4">Location</div>
        <div className="w-2/5 px-4">Empty Lots</div>
      </div>
      {filteredData?.map(data => (
        <ResultsRow key={data.id} data={data} />
      ))}
    </>
  );
}