import SearchBar from "./SearchBar";
import image from "../asset/car.svg";

export default function Home() {
  return (
    <>
      <main className="flex flex-col h-full mx-4 my-6 md:mx-auto xl:mx-auto xl:w-2/5 md:w-3/5">
        <div className="gap-y-4 mb-4">
          <h1 className="font-serif text-4xl text-blue-600 font-semibold">
            / HDB
            <br /> Carpark Availability
          </h1>
          <h2 className="text-sm text-gray-500">
            Real time update every one minute.
          </h2>
        </div>

        <SearchBar />
        <img
          className="w-2/4 self-center my-6"
          src={image}
          alt="Car illustration"
        />

        <div className="text-gray-400 text-sm text-center my-6">
          <p>Developed by Tricia Chow</p>
          <p>
            Data retrieved from <a href="https://data.gov.sg/">Data.gov.sg</a>
          </p>
          <p>
            Disclaimer: <br /> This website has no association with HDB.
            <br />
            This was developed as a personal side project.
          </p>
        </div>
      </main>
    </>
  );
}
