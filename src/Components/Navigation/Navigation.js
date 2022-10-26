import { signOut } from "firebase/auth";
import React, { useContext } from "react";
import {
  Avatar,
  Button,
  Dropdown,
  Menu,
  Navbar,
  Swap,
  Tooltip,
} from "react-daisyui";
import { Link } from "react-router-dom";
import { MyThemeContext } from "../../Contexts/ThemeCntext/ThemeChangeContext";
import { AuthContext } from "../../Contexts/UserContext/UserContext";
import ToogleBtn from "../ToogleBtn/ToogleBtn";
import "./Navigation.css";
const Navigation = () => {
  const { changeMode } = useContext(MyThemeContext);
  const { user, logOut } = useContext(AuthContext);

  return (
    <div>
      <Navbar className="p-0 items-start">
        <Navbar.Start className="lg:hidden">
          <Dropdown>
            <Button color="ghost" tabIndex={0} className="lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </Button>
            <Dropdown.Menu tabIndex={0} className="w-52 menu-compact mt-3">
              <Dropdown.Item>Item 1</Dropdown.Item>
              <li tabIndex={0}>
                <a className="justify-between">
                  Parent
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                  </svg>
                </a>
                <ul className="p-2 bg-base-100">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <Dropdown.Item>Item 3</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
        </Navbar.Start>
        <Navbar.Center className="hidden lg:flex w-full text-base-content">
          <Menu horizontal className="p-0 w-full ">
            <Menu.Item className=" border-r-2 border-b-2 border-black grow justify-center ">
              <Link
                className="w-full h-full py-8 justify-center rounded-none active:bg-base-content"
                to={"/"}
              >
                logo name
              </Link>
            </Menu.Item>
            <Menu.Item className=" border-r-2 border-b-2 border-black grow justify-center ">
              <Link
                className="w-full h-full py-8 justify-center rounded-none active:bg-base-content"
                to={"/courses"}
              >
                Courses
              </Link>
            </Menu.Item>
            <Menu.Item className=" border-r-2 border-b-2 border-black grow justify-center ">
              <Link
                className="w-full h-full py-8 justify-center rounded-none active:bg-base-content"
                to={"/"}
              >
                FAQ
              </Link>
            </Menu.Item>
            <Menu.Item className=" border-r-2 border-b-2 border-black grow justify-center ">
              <Link
                className="w-full h-full py-8 justify-center rounded-none active:bg-base-content"
                to={"/"}
              >
                Blog
              </Link>
            </Menu.Item>
            {!user && (
              <Menu.Item className=" border-r-2 border-b-2 border-black grow justify-center ">
                <Link
                  className="w-full h-full py-8 justify-center rounded-none active:bg-base-content"
                  to={"/signin"}
                >
                  Sign in
                </Link>
              </Menu.Item>
            )}
            {!user && (
              <Menu.Item className=" border-r-2 border-b-2 border-black grow justify-center ">
                <Link
                  className="w-full h-full py-8 justify-center rounded-none active:bg-base-content"
                  to={"/signup"}
                >
                  Sign up
                </Link>
              </Menu.Item>
            )}
            {user && (
              <Menu.Item className=" border-r-2 border-b-2 border-black grow justify-center ">
                <Link
                  className="w-full h-full py-8 justify-center rounded-none active:bg-base-content"
                  to={"/"}
                  onClick={logOut}
                >
                  Sign Out
                </Link>
              </Menu.Item>
            )}
            {user && (
              <Menu.Item className=" border-r-2 border-b-2 border-black grow justify-center ">
                <Link
                  className="w-full h-full py-8 justify-center rounded-none active:bg-base-content"
                  to={"/"}
                >
                  <Tooltip message={user.displayName}>
                    <Avatar
                      src={user.photoURL}
                      shape="circle"
                      size="xs"
                      border={true}
                      online={true}
                    />
                  </Tooltip>
                </Link>
              </Menu.Item>
            )}
            <Menu.Item className=" border-b-2 border-black grow justify-center ">
              <Link
                className="w-full h-full py-8 justify-center rounded-none active:bg-base-content"
                onClick={changeMode}
              >
                <ToogleBtn></ToogleBtn>
              </Link>
            </Menu.Item>
          </Menu>
        </Navbar.Center>
      </Navbar>
    </div>
  );
};

export default Navigation;
