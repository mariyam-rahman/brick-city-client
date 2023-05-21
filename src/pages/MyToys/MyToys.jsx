import { useContext, useEffect, useState } from "react";
import ToyItem from "./ToyItem";
import { AuthContext } from "../../providers/AuthProvider";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import UpdateModal from "./UpdateModal";

const MyToys = () => {
  const [toys, setToys] = useState([]);
  const { user } = useContext(AuthContext);

  const [showUpdateModal, setShowUpdateModal] = useState(false);

  // const [selectedToy, setSelectedToy] = useState(false);

  const navigate = useNavigate();

  const updateProduct = async (id, updatedData) => {
    const res = await fetch(
      `${import.meta.env.VITE_API_BASE_URL}/product/${id}`,
      {
        method: "PUT",
        body: JSON.stringify(updatedData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = await res.json();
    console.log(data);

    Swal.fire({
      icon: "success",
      title: "Update Successful",
      text: "Toy updated successfully!",
    });

    const newToys = toys.map((e) => {
      if (e._id === id) {
        return { ...e, ...updatedData };
      } else {
        return e;
      }
    });
    setToys(newToys);
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ok, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await fetch(`http://localhost:5000/product/${id}`, {
            method: "DELETE",
          });

          const data = await res.json();

          if (data.deletedCount === 1) {
            Swal.fire("Deleted!", "Your Toy has been deleted.", "success");

            setToys(toys.filter((t) => t._id !== id));
          } else {
            Swal.fire("Not Success", "error");
            throw new Error("Failed to delete the toy.");
          }
        } catch (error) {
          console.log(error);
          Swal.fire("Error", error.message, "error");
        }
      }
    });
  };

  useEffect(() => {
    if (!user) {
      navigate("/login", { state: { redirectTo: `/my-toys` } });
    }
  }, [user, navigate]);

  useEffect(() => {
    fetch(`http://localhost:5000/products?sellerEmail=${user?.email}`, {
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
                      onDelete={() => handleDelete(toy._id)}
                      updateProduct={updateProduct}
                    ></ToyItem>
                  ))}
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
