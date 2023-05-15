import ResultsRow from "./ResultsRow";
import CarparkData from "./CarparkData";
import carparkicon from "../asset/carpark-icon.svg";

export default function Results({ input }) {
	const mergeData = CarparkData();

	const filteredData = mergeData?.filter((ele) => {
		if (input === "") {
			return ele;
		} else {
			return ele.address.toLowerCase().includes(input);
		}
	});

	return (
		<>
			{filteredData?.length < 1 ? (
				<div className="px-5 w-full mt-10">
					<img src={carparkicon} alt="Car park icon" className="mx-auto" />
					<h2 className="text-gray-400 leading-10 text-center">
						Oh no, we couldn't find any car parks. <br />
						Please try searching again.
					</h2>
				</div>
			) : (
				<div className="py-5">
					<h4 className="text-gray-400 my-4 text-[10px]">
						{filteredData?.length}
						{filteredData?.length > 1 ? " results" : " result"} found
					</h4>
					<div className="">
						<div className="flex justify-between items-center border-b w-full pb-2">
							<div className="w-3/6">
								<span className="text-gray-600 bg-gray-100 px-1 py-[2px] text-sm rounded-sm mr-2">
									Location
								</span>
							</div>
							<div className="w-1/6">
								<span className="text-gray-600 bg-gray-100 px-1 py-[2px] text-sm rounded-sm mr-2">
									Lots
								</span>
							</div>
							<div className="w-1/6">
								<span className="text-gray-600 bg-gray-100 px-1 py-[2px] text-sm rounded-sm mr-2">
									Capacity
								</span>
							</div>
							<div className="w-1/6"></div>
						</div>
						{filteredData?.map((data, index) => (
							<ResultsRow key={index} data={data} />
						))}
					</div>
				</div>
			)}
		</>
	);
}
