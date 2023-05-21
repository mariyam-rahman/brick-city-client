import { Button } from "flowbite-react";
import { useContext, useEffect, useState } from "react";
import DetailsModal from "../MyToys/DetailsModal";
import { AuthContext } from "../../providers/AuthProvider";
import { useNavigate, useLocation } from "react-router-dom";

const ToyItem = ({ toy }) => {
  const location = useLocation();
  const [viewDetails, setViewDetails] = useState(false);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  console.log({ location });

  const handleViewDetails = () => {
    if (user) {
      setViewDetails(true);
    } else {
      navigate("/login", {
        state: { redirectTo: "/all-toys", showDetailsModalFor: toy._id },
      });
    }
  };

  useEffect(() => {
    if (user && location?.state?.showDetailsModalFor == toy._id) {
      setViewDetails(true);
    }
  }, [location, user]);

  return (
    <tr className="border-b dark:border-gray-700">
      <th
        scope="row"
        className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {toy.name}
      </th>
      <td className="px-4 py-3">{toy.category}</td>
      <td className="px-4 py-3">$ {toy?.price}</td>
      <td className="px-4 py-3">{toy?.stock}</td>
      <td className="px-4 py-3">{toy?.sellerName}</td>

      <td className="px-4 py-3 max-w-[12rem] truncate">{toy?.description}</td>
      <td className="px-4 py-3 max-w-[12rem] truncate">
        <Button className="button" onClick={handleViewDetails}>
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
