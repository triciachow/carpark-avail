import ResultsRow from "./ResultsRow";

export default function Results() {
  return (
    <>
      <div className="flex justify-between items-center border w-full h-8">
        <div className="w-3/5 px-4">Location</div>
        <div className="w-2/5 px-4">Empty Lots</div>
      </div>
      <ResultsRow />
    </>
  );
}
