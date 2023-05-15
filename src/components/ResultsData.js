export default function ResultsData({ data }) {
	return (
		<>
			<div className="flex flex-col py-3 border-b text-sm gap-y-2">
				<div>
					<span>Car Park Number:</span>{" "}
					<span className="font-semibold">{data.car_park_no}</span>
				</div>
				<div>Free Parking: {data.free_parking}</div>
				<div>Night Parking: {data.night_parking}</div>
				<div>Gantry Height: {data.gantry_height}m</div>
				<div>Car Park Type: {data.car_park_type}</div>

				<button className="mt-4 self-start bg-blue-50 flex items-center justify-center rounded gap-x-2 text-blue-600 text-sm font-semibold p-2 my-2 transition ease-in-out hover:bg-blue-100">
					<a
						href={`https://maps.google.com/?q=${data.address}`}
						target="_blank"
						rel="noreferrer"
					>
						Open in Google Maps
					</a>
				</button>
			</div>
		</>
	);
}
