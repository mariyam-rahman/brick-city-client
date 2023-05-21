import { useEffect, useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const Gallery = () => {
  const [pictures, setPictures] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/products?per_page=9")
      .then((res) => res.json())
      .then((data) => setPictures(data));
  }, []);

  return (
    <div className="my-28 ">
      <h2 className="text-4xl text-center py-20">Our Pictures</h2>

      <ResponsiveMasonry
        columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
        columnsCount={4}
      >
        <Masonry columnsCount={4}>
          {pictures.map((picture) => (
            <div key={picture.id} className="border-2 border-amber-600 rounded">
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
