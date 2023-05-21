import { Button } from "flowbite-react";
import { Modal } from "flowbite-react";
import { useLocation, useNavigate } from "react-router-dom";

const DetailsModal = ({ show, onClose, toy }) => {
  const navigate = useNavigate();
  const location = useLocation();

  // const handleLoginRedirect = () => {
  //   onClose();
  //   navigate("/login", { state: { redirectTo: location.pathname } });
  // };
  return (
    <Modal show={show} onClose={onClose}>
      <Modal.Header>LEGO {toy.name}</Modal.Header>
      <Modal.Body>
        <section className="bg-white dark:bg-gray-900">
          <div className=" px-4 mx-auto max-w-2xl  border-2 border-neutral-300-600">
            <img src={toy.imageUrl || "/public/assets/logo.png"} alt="" />
            <h2 className="mb-2 text-xl font-semibold leading-none text-gray-900 md:text-2xl dark:text-white">
              {toy.name}
            </h2>
            <p className="mb-4 text-xl font-extrabold leading-none text-gray-900 md:text-2xl dark:text-white">
              ${toy.price}
            </p>
            <dl>
              <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">
                Details
              </dt>
              <dd className="mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400">
                {toy.description}
              </dd>
            </dl>
            <dl className="flex items-center space-x-6">
              <div>
                <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">
                  Category
                </dt>
                <dd className="mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400">
                  {toy.category}
                </dd>
              </div>
              <div>
                <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">
                  Stock
                </dt>
                <dd className="mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400">
                  {toy.stock}
                </dd>
              </div>
            </dl>
            <dl className="flex items-center space-x-6">
              <div>
                <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">
                  Seller Name
                </dt>
                <dd className="mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400">
                  {toy.sellerName}
                </dd>
              </div>
              <div>
                <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">
                  Seller Email
                </dt>
                <dd className="mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400">
                  {toy.sellerEmail}
                </dd>
              </div>
            </dl>
            {/* <div className="flex items-center space-x-4"></div> */}
          </div>
        </section>
      </Modal.Body>

      {/* <Modal.Footer>
        <Button onClick={handleLoginRedirect}>Login to View Details</Button>
      </Modal.Footer> */}
      {/* <Modal.Footer>
        <Button onClick={onClick}>I accept</Button>
        <Button color="gray" onClick={onClick}>
          Decline
        </Button>
      </Modal.Footer> */}
    </Modal>
  );
};

export default DetailsModal;
