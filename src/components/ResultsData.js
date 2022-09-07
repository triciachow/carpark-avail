export default function ResultsData({ data }) {
  return (
    <>
      <div className="flex flex-col p-4 gap-y-2">
        <div>Car Park Type: {data.car_park_type}</div>
        <div>Free Parking: {data.free_parking}</div>
        <div>Car Park Number: {data.car_park_no}</div>
        <div>Night Parking: {data.night_parking}</div>
        <div>Gantry Height: {data.gantry_height}</div>
        <div>Open in Maps</div>
      </div>
    </>
  );
}
