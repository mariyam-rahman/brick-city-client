import bannerImg from "../../../../public/assets/hero.png";
const Banner = () => {
  return (
    <div>
      <section
        style={{ backgroundSize: "cover", height: "80vh" }}
        className="bg-white dark:bg-gray-900 bg-[url('/assets/hero.png')] "
      >
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12  ">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
              Building Dreams, One Brick at a Time!
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-900 lg:mb-8 md:text-lg lg:text-xl light:text-gray-400 font-medium">
              Explore endless brick-building adventures at our Brick City.
              Discover joy, creativity, and imagination in every block
            </p>
            <a
              href="#"
              className="inline-flex  justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900 mr-4"
            >
              Explore More
              <svg
                aria-hidden="true"
                className="ml-2 -mr-1 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
              Get More Info
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
