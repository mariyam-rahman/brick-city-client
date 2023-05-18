import Gallery from "../Gallery/Gallery";
import ShopByCategory from "../ShopByCategory/ShopByCategory";
import Banner from "../Banner/Banner";
import About from "../About/About";
import Review from "../Review/Review";

const index = () => {
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <ShopByCategory></ShopByCategory>
      <Review></Review>
      <Gallery></Gallery>
    </div>
  );
};

export default index;
