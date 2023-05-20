import { useEffect, useState } from "react";

import ToyItem from "./ToyItem";
import Pagination from "./Pagination";
import Filter from "./Filter";
const AllToys = () => {
  const [allToys, setAllToys] = useState([]);

  const [searchText, setSearchText] = useState("");
  const [searchedToys, setSearchedToys] = useState(allToys);
  const [selectedOrder, setSelectedOrder] = useState(null);

  const [currentPage, setCurrenPage] = useState(1);

  useEffect(() => {
    fetch(
      `http://localhost:5000/products?order=${selectedOrder}&page=${currentPage}&per_page=${10}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAllToys(data);
      });
  }, [selectedOrder, currentPage]);

  useEffect(() => {
    if (!searchText || searchText == "") {
      setSearchedToys(allToys);
    } else {
      const result = allToys.filter((toy) =>
        toy.name.toLowerCase().includes(searchText.toLowerCase())
      );
      setSearchedToys(result);
    }
  }, [searchText, allToys, selectedOrder]);

  return (
    <div>
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
                onSelectOrder={(order) => {
                  setSelectedOrder(order);
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
                        Price
                      </th>
                      <th scope="col" className="px-4 py-3">
                        Stock
                      </th>
                      <th scope="col" className="px-4 py-3">
                        Seller
                      </th>

                      <th scope="col" className="px-4 py-3">
                        Description
                      </th>
                      <th scope="col" className="px-4 py-3">
                        Action
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
              <Pagination
                currentPage={currentPage}
                changePage={setCurrenPage}
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AllToys;
