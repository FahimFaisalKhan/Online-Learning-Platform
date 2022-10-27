import React, { useContext } from "react";
import { Footer } from "react-daisyui";
import { MyThemeContext } from "../../Contexts/ThemeCntext/ThemeChangeContext";
const MyFooter = () => {
  const { lightMode } = useContext(MyThemeContext);
  return (
    <div>
      <Footer
        className={`p-10 ${
          !lightMode ? "bg-gradient" : "bg-gradient-dark"
        }  text-base-300`}
      >
        <div>
          <Footer.Title>Services</Footer.Title>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </div>
        <div>
          <Footer.Title>Company</Footer.Title>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </div>
        <div>
          <Footer.Title>Legal</Footer.Title>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
      </Footer>
    </div>
  );
};

export default MyFooter;
