import { Button, Navbar } from "flowbite-react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { useContext, useEffect } from "react";

const Header = () => {
  const navigate = useNavigate();
  const { signIn, user, logout } = useContext(AuthContext);
  const location = useLocation();
  console.log(location);

  return (
    <Navbar fluid={true} rounded={true} className=" bg-[#ffffff] h-20 ">
      <Navbar.Brand onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
        <img
          src="/public/assets/bg.png"
          className="mr-3 h-6 sm:h-10"
          alt=" Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Brick City
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        {user ? (
          // <button onClick={logout} className="btn">
          //   Logout
          // </button>
          "add code for user image and settings here"
        ) : (
          <Link to={"/login"}>
            <button className="btn">Login </button>
          </Link>
        )}
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Link to={"/"}>
          <Navbar.Link active={location.pathname == "/"}>HOME</Navbar.Link>
        </Link>
        <Link to={"/all-toys"}>
          <Navbar.Link
            active={location.pathname == "/all-toys"}
            to={"/all-toys"}
          >
            ALL TOYS
          </Navbar.Link>
        </Link>

        <Link to={"/add-toys"}>
          <Navbar.Link active={location.pathname == "/add-toys"}>
            ADD TOY
          </Navbar.Link>
        </Link>

        <Link to={"/my-toys"}>
          <Navbar.Link active={location.pathname == "/my-toys"}>
            MY TOYS
          </Navbar.Link>
        </Link>

        <Link to={"/blog"}>
          <Navbar.Link active={location.pathname == "/blog"}>BLOG</Navbar.Link>
        </Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
