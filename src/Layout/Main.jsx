import { Outlet } from "react-router-dom";

import Header from "../Shared/Header";
import Footerr from "../Shared/Footerr";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <div className="container mx-auto">
        <Outlet></Outlet>
      </div>
      <Footerr></Footerr>
    </div>
  );
};

export default Main;
