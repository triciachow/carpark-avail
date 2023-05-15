import SearchBar from "./SearchBar";

export default function Home() {
	return (
		<div className="bg-gray-800 md:py-4">
			<main className="w-full md:w-3/5 lg:w-4/12 md:rounded-xl mx-auto min-h-screen bg-[#fefefe]">
				<div className="px-5 bg-hero bg-cover h-[160px] pt-10 pb-5 md:rounded-t-xl">
					<span className="px-[10px] py-[5px] text-white bg-white/20 font-bold rounded drop-shadow-2xl">
						CarParkNow
					</span>

					<h1 className="text-white font-bold mt-5">
						Check availability of HDB car park 🇸🇬
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
