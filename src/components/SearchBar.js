export default function SearchBar() {
  return (
    <>
      <div className="mb-4 w-3/5">
        <input
          type="text"
          className="border-b w-full p-2"
          placeholder="Search a location to begin"
        />
        <small>Updated at:</small>
      </div>
    </>
  );
}
