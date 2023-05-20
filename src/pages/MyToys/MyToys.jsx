import { useContext, useEffect, useState } from "react";
import ToyItem from "./ToyItem";
import { AuthContext } from "../../providers/AuthProvider";
import { useNavigate } from "react-router-dom";
import UpdateModal from "./UpdateModal";

const MyToys = () => {
  const [toys, setToys] = useState([]);
  const { user } = useContext(AuthContext);

  const [showUpdateModal, setShowUpdateModal] = useState(false);

  const [selectedToy, setSelectedToy] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login", { state: { redirectTo: `/my-toys` } });
    }
  }, []);

  console.log(toys);

  useEffect(() => {
    fetch(`http://localhost:5000/products?sellerEmail=${user.email}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setToys(data);
      });
  }, []);

  return (
    <div>
      <h2 className="text-4xl text-center font-semibold py-16">My Toys</h2>
      <div>
        {/* Start block */}
        <section className="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5 antialiased ">
          <div className="mx-auto max-w-screen-2xl px-4 lg:px-12    ">
            <div className="overflow-x-auto border-red-800  bg-white">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="p-4"></th>
                    <th scope="col" className="p-4">
                      Product
                    </th>
                    <th scope="col" className="p-4">
                      Category
                    </th>
                    <th scope="col" className="p-4">
                      Quantity
                    </th>
                    <th scope="col" className="p-4">
                      Ratings
                    </th>
                    <th scope="col" className="p-4">
                      Price
                    </th>

                    <th scope="col" className="p-4">
                      Last Update
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {toys.map((toy) => (
                    <ToyItem
                      key={toy._id}
                      toy={toy}
                      onClickUpdate={() => {
                        setShowUpdateModal(true);
                      }}
                    ></ToyItem>
                  ))}
                  <UpdateModal
                    show={showUpdateModal}
                    onClose={() => {
                      setShowUpdateModal(false);
                    }}
                  ></UpdateModal>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MyToys;
