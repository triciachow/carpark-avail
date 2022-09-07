export default function ResultsData({ data }) {
  return (
    <>
      <div className="flex flex-col py-2 gap-y-2">
        <div>Car Park Type: {data.car_park_type}</div>
        <div>Free Parking: {data.free_parking}</div>
        <div>Car Park Number: {data.car_park_no}</div>
        <div>Night Parking: {data.night_parking}</div>
        <div>Gantry Height: {data.gantry_height}</div>
        <div>
          <a
            href={`https://maps.google.com/?q=${data.address}`}
            target="_blank"
          >
            Open in Maps
          </a>
        </div>
      </div>
    </>
  );
}
