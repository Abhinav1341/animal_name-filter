import { data } from "./data";
import { useState } from "react";

function App() {
  const [search, setSearch] = useState("");
  return (
    <div className="text-base mt-3 p-1 flex flex-col items-center">
      {/* SearchBar */}
      <div className="mb-2 border rounded-sm">
        <input
          type="text"
          placeholder="Search Animal Here..."
          onChange={(e) => setSearch(e.target.value)}
          className=" border-stone-800 p-2 w-72 text-sm"
        />
      </div>

      {/* List of Items */}
      <table className="table-auto border-collapse w-8/12">
        <thead>
          <tr className="bg-gray-200 border-2 border-black">
            <th className="py-2 px-3 text-center border border-gray-500 w-1/6">
              S.No.
            </th>
            <th className="py-2 px-3 text-center border border-gray-500 w-2/5">
              Animal Name
            </th>
            <th className="py-2 px-3 text-center border border-gray-500">
              Scientific Name
            </th>
          </tr>
        </thead>
        <tbody>
          {data
            .filter((item) => {
              return search.toLowerCase() === ""
                ? item
                : item.animal_name.toLowerCase().includes(search);
            })
            .map((item) => (
              <tr key={item.id}>
                <td className="py-2 px-3 text-center border border-gray-500">
                  {item.id}
                </td>
                <td className="py-2 px-3 text-center border border-gray-500">
                  {item.animal_name}
                </td>
                <td className="py-2 px-3 text-center border border-gray-500">
                  {item.animal_scientific}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
