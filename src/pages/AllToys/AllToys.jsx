import { useEffect, useState } from "react";

import ToyItem from "./ToyItem";
import Pagination from "./Pagination";
import Filter from "./Filter";
const AllToys = () => {
  const [allToys, setAllToys] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/products?`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAllToys(data);
      });
  }, []);

  const [searchText, setSearchText] = useState("");
  const [searchedToys, setSearchedToys] = useState(allToys);

  useEffect(() => {
    if (!searchText || searchText == "") {
      setSearchedToys(allToys);
    } else {
      const result = allToys.filter((toy) => toy.name.includes(searchText));
      setSearchedToys(result);
    }
  }, [searchText, allToys]);

  return (
    <div>
      <h2>this is toy details </h2>
      <div>
        {/* Start block */}
        <section className="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5 antialiased">
          <div className="mx-auto max-w-screen-xl px-4 lg:px-12">
            {/* Start coding here */}
            <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
              <Filter
                searchText={searchText}
                handleSearch={(text) => {
                  setSearchText(text);
                }}
              />
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" className="px-4 py-4">
                        Product name
                      </th>
                      <th scope="col" className="px-4 py-3">
                        Category
                      </th>
                      <th scope="col" className="px-4 py-3">
                        Brand
                      </th>
                      <th scope="col" className="px-4 py-3">
                        Description
                      </th>
                      <th scope="col" className="px-4 py-3">
                        Price
                      </th>
                      <th scope="col" className="px-4 py-3">
                        <span className="sr-only">Actions</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {searchedToys.map((toy) => (
                      <ToyItem key={toy._id} toy={toy} />
                    ))}
                  </tbody>
                </table>
              </div>
              <Pagination />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AllToys;
