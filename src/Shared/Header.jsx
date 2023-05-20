import { Button, Navbar } from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <Navbar fluid={true} rounded={true}>
      <Navbar.Brand onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
        <img
          src="/public/assets/logo3.png"
          className="mr-3 h-6 sm:h-9"
          alt=" Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Brick City
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Link to={"/login"}>
          <Button>Login</Button>
        </Link>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Link to={"/"}>Home</Link>
        <Link to={"/all-toys"}>All Toys</Link>
        <Link to={"/add-toys"}>Add A Toy</Link>
        <Link to={"/my-toys"}>My Toys</Link>
        <Link to={"/blog"}>Blog</Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
