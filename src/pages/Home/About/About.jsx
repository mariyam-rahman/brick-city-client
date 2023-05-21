import img from "../../../../public/assets/about1.jpg";
import img2 from "../../../../public/assets/about2.jpg";
import img3 from "../../../../public/assets/about3.jpg";
import img4 from "../../../../public/assets/about4.jpg";
const About = () => {
  return (
    <div className="mt-8">
      <h2 className="text-4xl text-center"> About Us</h2>
      <section className="bg-white dark:bg-gray-900">
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-4xl font-extrabold text-gray-900 dark:text-white leading-tight">
              Discover the Ultimate <span className="text-[#ee4b2b]">LEGO</span>{" "}
              Destination!
            </h2>
            <p className="mb-4">
              Welcome to our Brick City Lego Store, where imagination knows no
              bounds! Step into a world of endless possibilities and embark on a
              brick-building adventure like no other. With a vast selection of
              LEGO sets, from classic themes to the latest releases.
            </p>
            <p>
              Our store is your ultimate destination for all things about LEGO.
              Get ready to build, play, and create unforgettable memories with
              the iconic bricks that have sparked joy in generations of builders
              worldwide.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 items-stretch ">
            <img
              className="w-full rounded-lg"
              src={img}
              alt="office content 1"
            />
            <img
              className=" w-full rounded-lg"
              src={img2}
              alt="office content 2"
            />
            <img
              className=" w-full rounded-lg"
              src={img3}
              alt="office content 2"
            />
            <img
              className=" w-full rounded-lg"
              src={img4}
              alt="office content 2"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
