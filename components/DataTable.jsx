"use client";
import { GetData } from "@/actions";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

const PersonTable = () => {
  const [people, setPeople] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(4); // Number of items per page
  const searchParams = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("bg"));

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = people
    .slice(indexOfFirstItem, indexOfLastItem)
    .filter((item) => item.bloodGroup === search);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  useEffect(() => {
    (async () => {
      await GetData()
        .then((data) => {
          setPeople(data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    })();
  }, [currentPage, itemsPerPage, search]);
  return (
    <div className="overflow-x-auto text-black">
      <h2 className="text-lg font-semibold mb-4">Person Table</h2>
      <div className="shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Name
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Mobile Number
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Location
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Blood Group
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {currentItems.length <= 0
              ? Array.from({ length: 4 }).map((_, i) => (
                  <tr key={i}>
                    <td
                      colSpan={4}
                      className="px-6 py-4 text-center whitespace-nowrap"
                    >
                      No data available
                    </td>
                  </tr>
                ))
              : currentItems.map((person) => (
                  <tr key={person.mobile}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {person.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {person.mobile}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {person.location}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {person.bloodGroup}
                    </td>
                  </tr>
                ))}
          </tbody>
        </table>
      </div>

      {/* Pagination controls */}
      <div className="flex justify-end mt-4">
        <button
          onClick={() => paginate(currentPage - 1)}
          className={`px-4 py-2 mx-1 rounded-md ${
            currentPage === 1
              ? "bg-gray-200 text-gray-500 cursor-not-allowed"
              : "bg-blue-500 text-white hover:bg-blue-600"
          }`}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <button
          onClick={() => paginate(currentPage + 1)}
          className={`px-4 py-2 mx-1 rounded-md ${
            indexOfLastItem >= people.length
              ? "bg-gray-200 text-gray-500 cursor-not-allowed"
              : "bg-blue-500 text-white hover:bg-blue-600"
          }`}
          disabled={indexOfLastItem >= people.length}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PersonTable;
