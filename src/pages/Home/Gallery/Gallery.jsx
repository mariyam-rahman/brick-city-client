import { useEffect, useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const Gallery = () => {
  const [pictures, setPictures] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_BASE_URL}/products?per_page=9`)
      .then((res) => res.json())
      .then((data) => setPictures(data));
  }, []);

  return (
    <div className="my-28 bg-orange-50 md:px-32  sm:px-10 pb-12">
      <h2 className="text-4xl text-center py-20">Our Pictures</h2>

      <ResponsiveMasonry
        columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
        columnsCount={4}
      >
        <Masonry columnsCount={4}>
          {pictures.map((picture) => (
            <div
              data-aos="zoom-in"
              key={picture.id}
              className="border-2 border-amber-600 rounded m-3 "
            >
              <img
                className="h-auto max-w-full rounded-lg"
                src={picture.imageUrl}
                alt=""
              />
            </div>
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
};

export default Gallery;
