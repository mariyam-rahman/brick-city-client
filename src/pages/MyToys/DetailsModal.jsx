import { Button } from "flowbite-react";
import { Modal } from "flowbite-react";

const DetailsModal = ({ show, onClose, onClick, toy }) => {
  return (
    <Modal show={show} onClose={onClose}>
      <Modal.Header>Terms of Service</Modal.Header>
      <Modal.Body>
        <section className="bg-white dark:bg-gray-900">
          <div className=" px-4 mx-auto max-w-2xl  border-2 border-neutral-300-600">
            <img src="/public/assets/logo.png" alt="" />
            <h2 className="mb-2 text-xl font-semibold leading-none text-gray-900 md:text-2xl dark:text-white">
              {toy.name}
            </h2>
            <p className="mb-4 text-xl font-extrabold leading-none text-gray-900 md:text-2xl dark:text-white">
              $2999
            </p>
            <dl>
              <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">
                Details
              </dt>
              <dd className="mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400">
                Standard glass ,3.8GHz 8-core 10th-generation Intel Core i7
                processor, Turbo Boost up to 5.0GHz, 16GB 2666MHz DDR4 memory,
                Radeon Pro 5500 XT with 8GB of GDDR6 memory, 256GB SSD storage,
                Gigabit Ethernet, Magic Mouse 2, Magic Keyboard - US.
              </dd>
            </dl>
            <dl className="flex items-center space-x-6">
              <div>
                <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">
                  Category
                </dt>
                <dd className="mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400">
                  Electronics/PC
                </dd>
              </div>
              <div>
                <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">
                  Item weight
                </dt>
                <dd className="mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400">
                  12kg
                </dd>
              </div>
            </dl>
            {/* <div className="flex items-center space-x-4"></div> */}
          </div>
        </section>
      </Modal.Body>
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
