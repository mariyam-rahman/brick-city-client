import { Avatar, Button, Dropdown, Navbar } from "flowbite-react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { useContext, useEffect } from "react";

import { Tooltip } from "react-tooltip";
const Header = () => {
  const navigate = useNavigate();
  const { signIn, user, logout } = useContext(AuthContext);
  const location = useLocation();
  console.log(location);

  return (
    <Navbar fluid={true} rounded={true} className=" bg-[#ffffff] h-20 ">
      <Navbar.Brand onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
        <img src="/assets/logo.png" className="mr-3 h-6 sm:h-10" alt=" Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Brick City
        </span>
      </Navbar.Brand>
      <Tooltip id="my-tooltip" />

      <div className="flex md:order-2">
        {user ? (
          // <button onClick={logout} className="btn">
          //   Logout
          // </button>

          <a
            data-tooltip-id="my-tooltip"
            data-tooltip-content={user?.displayName}
          >
            <Dropdown
              className="block"
              arrowIcon={false}
              inline={true}
              data-tooltip-id="my-tooltip"
              data-tooltip-content="Hello world!"
              label={
                <Avatar
                  alt="User settings"
                  // img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                  onClick={(e) => {
                    console.log(e);
                  }}
                  img={
                    user && user.photoURL
                      ? user.photoURL
                      : "https://www.w3schools.com/howto/img_avatar.png"
                  }
                  rounded={true}
                />
              }
            >
              <Dropdown.Header>
                <span className="block text-sm">{user?.displayName}</span>
                <span className="block truncate text-sm font-medium">
                  {user?.email}
                </span>
              </Dropdown.Header>

              <Dropdown.Divider />
              <Dropdown.Item onClick={logout}>Sign out</Dropdown.Item>
            </Dropdown>
          </a>
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
