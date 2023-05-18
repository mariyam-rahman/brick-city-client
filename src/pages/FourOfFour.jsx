import { Button } from "flowbite-react";
import { Link } from "react-router-dom";
const FourOfFour = () => {
  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center">
            <img
              className="h-80 mx-auto"
              src="https://img.freepik.com/free-vector/thoughtful-woman-with-laptop-looking-big-question-mark_1150-39362.jpg?w=740&t=st=1684430320~exp=1684430920~hmac=65220f6640f2746e08e4d28a58552a9e7ad1e16a22ca1d67c9a40043a86f904f"
            />
            <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">
              404
            </h1>
            <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">
              Somethings missing.
            </p>
            <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
              Sorry, we can't find that page. You'll find lots to explore on the
              home page.{" "}
            </p>

            <div className="inline-flex text-white bg-primary-600 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4">
              <Link to={"/"}>
                <Button>Back to Homepage</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FourOfFour;
