import { Button, Modal } from "flowbite-react";
import { useState } from "react";

const UpdateModal = ({ show, onClose, toy, updateProduct }) => {
  const submit = () => {};

  const [productData, setProductData] = useState({ ...toy });

  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const ratings = form.ratings.value;
    const description = form.description.value;
    const price = form.price.value;
    const category = form.category.value;
    const quantity = form.quantity.value;
    const toyUpdateForm = {
      name,
      ratings,
      description,
      price,
      category,
      quantity,
    };
    console.log({ toyUpdateForm });

    updateProduct(toy._id, toyUpdateForm);
  };

  // console.log(productData);
  return (
    <Modal show={show} onClose={onClose}>
      <Modal.Header>Update Product</Modal.Header>
      <Modal.Body>
        <form onSubmit={handleUpdate} action="#">
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <div className="sm:col-span-2">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Toy Name
              </label>
              <input
                type="text"
                name="name"
                defaultValue={productData.name}
                id="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 focus:outline-none"
                placeholder="Toy Name"
                required=""
              />
            </div>

            <div className="w-full">
              <label
                htmlFor="ratings"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Ratings
              </label>
              <input
                defaultValue={productData.rating}
                type="text"
                name="ratings"
                id="ratings"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="4.00"
                required=""
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="price"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Price
              </label>
              <input
                type="text"
                defaultValue={productData.price}
                name="price"
                id="price"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="$2999"
                required=""
              />
            </div>
            <div>
              <label
                htmlFor="category"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Category
              </label>
              <select
                defaultValue={productData.category}
                id="category"
                name="category"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              >
                <option value="" disabled selected>
                  Select category
                </option>
                <option value="City Builders">City Builders</option>
                <option value="Vehicles">Vehicles</option>
                <option value="Mechanical Parts">Mechanical Parts</option>
                <option value="Space Exploration">Space Exploration</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="quantity"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Available Quantity
              </label>
              <input
                defaultValue={productData.stock}
                type="number"
                name="quantity"
                id="quantity"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="12"
                required=""
              />
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="description"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Description
              </label>
              <textarea
                defaultValue={productData.description}
                id="description"
                rows="8"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Your description here"
              ></textarea>
            </div>
          </div>
          <button
            type="submit"
            className="items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium  text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-red-900 hover:bg-blue-800 w-full"
          >
            Update
          </button>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default UpdateModal;
