import SearchBar from "./SearchBar";

export default function Home() {
	return (
		<div className="bg-gray-800 md:py-4">
			<main className="w-full lg:w-4/12 mx-auto min-h-screen bg-[#fefefe]">
				<div className="p-5 bg-gradient-to-b from-blue-800 to-gray-800 bg-cover h-[180px] justify-center flex flex-col gap-y-2">
					<span className="w-[120px] px-[10px] py-[5px] text-white bg-white/20 font-bold rounded drop-shadow-2xl">
						CarParkNow
					</span>

					<h1 className="text-white font-bold">
						Check HDB Parking Availability
					</h1>
				</div>
				<SearchBar />
				<div className="h-[340px] flex flex-col justify-end px-5 text-gray-300 text-[10px] leading-4 text-center my-5">
					<p>Developed by Tricia Chow</p>
					<p>
						Disclaimer: This website has no association with HDB and was
						developed as a personal project.
					</p>
				</div>
			</main>
			{/* <main className="flex flex-col h-full mx-4 my-6 md:mx-auto xl:mx-auto xl:w-2/5 md:w-3/5">
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
      </main> */}
		</div>
	);
}
