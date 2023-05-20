import { Button } from "flowbite-react";
import React, { useState } from "react";

import DetailsModal from "../MyToys/DetailsModal";

const ToyItem = ({ toy }) => {
  // console.log({ toy });
  const [viewDetails, setViewDetails] = useState(false);
  return (
    <tr className="border-b dark:border-gray-700">
      <th
        scope="row"
        className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {toy.name}
      </th>
      <td className="px-4 py-3">{toy.category}</td>
      <td className="px-4 py-3">{toy?.price}</td>
      <td className="px-4 py-3">{toy?.stock}</td>
      <td className="px-4 py-3">{toy?.sellerName}</td>

      <td className="px-4 py-3 max-w-[12rem] truncate">{toy?.description}</td>
      <td className="px-4 py-3 max-w-[12rem] truncate">
        <Button
          className="button"
          onClick={() => {
            setViewDetails(true);
          }}
        >
          View Details
        </Button>
      </td>
      <DetailsModal
        show={viewDetails}
        onClose={() => setViewDetails(false)}
        toy={toy}
      />
    </tr>
  );
};

export default ToyItem;
