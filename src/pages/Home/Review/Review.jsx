import { Carousel } from "flowbite-react";

const Review = () => {
  return (
    <div>
      <h2 className="text-4xl text-center py-10">What Customer Says</h2>
      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 p-10">
        <Carousel>
          <div className="flex h-full items-center justify-center bg-white dark:bg-gray-700 dark:text-white border-2 border-orange-400">
            <section className="bg-white dark:bg-gray-900">
              <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
                <figure className="max-w-screen-md mx-auto">
                  <svg
                    className="h-12 mx-auto mb-3 text-orange-400 dark:text-gray-600"
                    viewBox="0 0 24 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                      fill="currentColor"
                    />
                  </svg>
                  <blockquote className="text-xl italic font-semibold text-gray-900 dark:text-white">
                    <p>
                      "I recently had the pleasure of visiting Brick City, a
                      captivating toy store that truly transported me back to my
                      childhood. From the moment I stepped through the doors, I
                      was engulfed in a world of wonder and excitement. As an
                      avid toy collector and enthusiast, I can confidently say
                      that Brick City is a haven for both young and old alike."
                    </p>
                  </blockquote>
                  <figcaption className="flex items-center justify-center mt-6 space-x-3">
                    <img
                      className="w-6 h-6 rounded-full"
                      src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
                      alt="profile picture"
                    />
                    <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                      <div className="pr-3 font-medium text-gray-900 dark:text-white">
                        Renda Gough
                      </div>
                      <div className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">
                        CEO, Toy Zen
                      </div>
                    </div>
                  </figcaption>
                </figure>
              </div>
            </section>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Review;
