import React, { useContext, useRef } from "react";
import { Button, Hero } from "react-daisyui";
import "./CourseDetailCard.css";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useIntersection } from "../../Utilities/useIntersection";
import { Link, useLocation } from "react-router-dom";
import { MyThemeContext } from "../../Contexts/ThemeCntext/ThemeChangeContext";
const CourseDetailCard = ({ course, handleCurrentlyDisplayingCourse }) => {
  const { id, name, image, longDescription, instructor, price, time } = course;
  const { lightMode } = useContext(MyThemeContext);
  const ref = useRef();
  // Trigger as soon as the element becomes visible

  const inViewport = useIntersection(ref, "-400px"); // Trigger if 200px is visible from the element
  if (inViewport) {
    handleCurrentlyDisplayingCourse(course);
  }
  return (
    <Hero
      className={`${
        lightMode ? "bg-card" : "bg-gradient-dark"
      }  w-10/12 my-24 mx-auto rounded-lg text-base-content `}
      ref={ref}
    >
      <Hero.Content className="flex-col xl:flex-row ">
        <img
          src={`https://asignment-10-server.vercel.app${image}`}
          className=" lg:max-w-sm rounded-lg shadow-2xl"
          alt="#"
        />
        <div className="flex flex-col justify-between items-center px-2 lg:px-16 ">
          <h1 className="text-3xl lg:text-5xl font-bold">{name}</h1>
          <i className="pt-6 self-start text-lg font-semibold">
            Why learn this?
          </i>
          <p className="pb-6 text-sm lg:text-lg text-justify">
            {longDescription}
          </p>
          <Link to={`/${id}`} className=" self-end mt-24">
            <Button className="text-base-300 hover:text-base-content hover:bg-base-300  bg-base-content  capitalize">
              See Details
              <AiOutlineArrowRight className="ml-2 text-xl"></AiOutlineArrowRight>
            </Button>
          </Link>
        </div>
      </Hero.Content>
    </Hero>
  );
};

export default CourseDetailCard;
