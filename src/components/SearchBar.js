import { useEffect, useState } from "react";
import Results from "./Results";
import axios from "axios";
import carparkicon from "../asset/carpark-icon.svg";

export default function SearchBar() {
	const [currentTime, setCurrentTime] = useState("");
	const [query, setQuery] = useState("");

	const fetchTimestamp = async () => {
		const config = {
			method: "get",
			url: "https://api.data.gov.sg/v1/transport/carpark-availability/",
		};

		const res = await axios(config);
		setCurrentTime(
			res.data.items[0].timestamp.replace("+08:00", "").replace("T", " ")
		);
	};

	useEffect(() => {
		fetchTimestamp();
	}, []);

	const handleChange = (e) => {
		setQuery(e.target.value.toLowerCase());
	};

	return (
		<>
			<div className="p-5 flex flex-col gap-y-2 w-full">
				<input
					type="text"
					name="search"
					value={query}
					onChange={handleChange}
					className="border rounded p-2 outline-none text-sm focus:border-blue-500"
					placeholder="&#128269; e.g.Bishan"
				/>

				<div className="flex justify-between w-full">
					<div className="text-gray-400 text-[12px]">
						Updated at: {currentTime}
					</div>
				</div>
			</div>

			{query ? (
				<div className="px-5 w-full">
					<button
						className="w-full bg-blue-700 flex items-center justify-center rounded text-white text-[12px] px-4 py-2 transition ease-in-out hover:bg-blue-800 drop-shadow-sm mb-4"
						onClick={() => window.location.reload(false)}
					>
						Reset
					</button>
					<Results input={query} />
				</div>
			) : (
				<div className="px-5 w-full mt-10">
					<img src={carparkicon} alt="Car park icon" className="mx-auto" />
					<h2 className="text-gray-400 text-sm leading-8 text-center">
						Oh no, we couldn't find any car parks. <br />
						Please try searching again.
					</h2>
				</div>
			)}
		</>
	);
}
