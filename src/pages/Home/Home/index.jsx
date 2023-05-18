import Gallery from "../Gallery/Gallery";
import ShopByCategory from "../ShopByCategory/ShopByCategory";
import Banner from "../Banner/Banner";
import About from "../About/About";

const index = () => {
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <ShopByCategory></ShopByCategory>
      <Gallery></Gallery>
    </div>
  );
};

export default index;
