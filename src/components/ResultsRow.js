import { Plus, Minus } from "lucide-react";
import { useState } from "react";
import ResultsData from "./ResultsData";

export default function ResultsRow({ data }) {
	const dataArr = [];
	dataArr.push(data);

	const [row, setRow] = useState("");
	const [show, setShow] = useState(false);

	const toggleShow = (e, id) => {
		const selectedRow = dataArr.find((ele) => ele.id === id);
		setRow(selectedRow.id);
		setShow((prev) => !prev);
	};

	// const totalLots = lotsArr
	//   .map(item => item.lots_available)
	//   .reduce((prev, next) => {
	//     return prev + (next || 0);
	//   });

	return (
		<>
			<div className="w-full">
				<div
					className="flex justify-between items-center border-b cursor-pointer py-2 text-sm leading-4"
					onClick={(e) => toggleShow(e, data.id)}
				>
					<div className="w-3/6 mr-4">{data.address}</div>
					{/* Display NA when no data is found */}
					{data?.carpark_info ? (
						<>
							<div className="w-1/6 mr-4 text-center">
								{data.carpark_info[0].lots_available}
							</div>
							{/* Calculate the % */}
							<div className="w-1/6 mr-4 text-center">
								{`${Math.round(
									parseFloat(
										data.carpark_info[0].lots_available /
											data.carpark_info[0].total_lots
									) * 100
								)}
                 %`}
							</div>
						</>
					) : (
						<>
							<div className="w-1/6 text-gray-500 mr-4">-</div>
						</>
					)}
					<div className="w-1/6 flex justify-end">
						{show ? (
							<span className="p-1 rounded bg-gray-100">
								<Minus size={14} />
							</span>
						) : (
							<span className="p-1 rounded bg-gray-100">
								<Plus size={14} className="hover:animate-bounce" />
							</span>
						)}
					</div>
				</div>
				{show && data.id === row ? <ResultsData data={data} /> : null}
			</div>
		</>
	);
}
