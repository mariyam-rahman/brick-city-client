import React from "react";

const ToyItem = ({ toy }) => {
  // console.log({ toy });
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

      <td className="px-4 py-3 max-w-[12rem] truncate">{toy?.description}</td>
    </tr>
  );
};

export default ToyItem;
