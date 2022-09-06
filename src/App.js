import Results from "./components/Results";
import SearchBar from "./components/SearchBar";

export default function App() {
  return (
    <>
      <main className="h-screen mx-4 xl:mx-auto flex flex-col justify-center items-center xl:w-1/2">
        <div className="text-center mb-4">
          <h1>Carpark Availability</h1>
          <h2>Real time update every one minute.</h2>
        </div>

        <SearchBar />
        <Results />
      </main>
    </>
  );
}
