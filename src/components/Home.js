import SearchBar from "./SearchBar";

export default function Home() {
  return (
    <>
      <main className="h-screen mx-4 xl:mx-auto flex flex-col items-center xl:w-1/2">
        <div className="text-center mb-4">
          <h1>Carpark Availability</h1>
          <h2>Real time update every one minute.</h2>
        </div>

        <SearchBar />
      </main>
    </>
  );
}
