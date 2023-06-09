import { Outlet } from "react-router-dom";

import Header from "../Shared/Header";

import Footer from "../Shared/Footer";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <div className="container mx-auto">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;
