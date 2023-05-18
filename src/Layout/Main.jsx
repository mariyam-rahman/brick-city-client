import { Outlet } from "react-router-dom";

import Header from "../Shared/Header";
import Footerr from "../Shared/Footerr";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <Footerr></Footerr>
    </div>
  );
};

export default Main;
