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
      <div className="flex justify-between items-center border-b w-full">
        <div className="w-3/5 font-bold">Location</div>
        <div className="w-1/5 font-bold">Free Lots</div>
        <div className="w-1/5 font-bold">Capacity</div>
      </div>
      {filteredData?.map(data => (
        <ResultsRow key={data.id} data={data} />
      ))}
    </>
  );
}
