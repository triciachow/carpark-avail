import { ExternalLink } from "lucide-react";

export default function ResultsData({ data }) {
  return (
    <>
      <div className="flex flex-col py-3 border-b">
        <div>Car Park Number: {data.car_park_no}</div>
        <div>Free Parking: {data.free_parking}</div>
        <div>Night Parking: {data.night_parking}</div>
        <div>Gantry Height: {data.gantry_height}m</div>
        <div>Car Park Type: {data.car_park_type}</div>

        <button className="self-start bg-blue-600 flex items-center justify-center rounded-md gap-x-2 text-white text-sm font-bold p-2 my-2 transition ease-in-out hover:bg-blue-800">
          <a
            href={`https://maps.google.com/?q=${data.address}`}
            target="_blank"
            rel="noreferrer"
          >
            Open in Maps
          </a>
          <ExternalLink size={18} />
        </button>
      </div>
    </>
  );
}
