import React, { useRef } from "react";
import { Button, Hero } from "react-daisyui";
import "./CourseDetailCard.css";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useIntersection } from "../../Utilities/useIntersection";
import { useLocation } from "react-router-dom";
const CourseDetailCard = ({ course, handleCurrentlyDisplayingCourse }) => {
  const { id, name, image, longDescription, instructor, price, time } = course;

  const ref = useRef();
  // Trigger as soon as the element becomes visible

  const inViewport = useIntersection(ref, "-464px"); // Trigger if 200px is visible from the element
  if (inViewport) {
    handleCurrentlyDisplayingCourse(course);
  }
  return (
    <Hero
      className="bg-card w-10/12 my-24 mx-auto rounded-lg text-base-300 "
      ref={ref}
    >
      <Hero.Content>
        <img src={image} className="max-w-sm rounded-lg shadow-2xl" alt="#" />
        <div className="flex flex-col justify-between items-center px-16 ">
          <h1 className="text-5xl font-bold">{name}</h1>
          <i className="pt-6 self-start text-lg font-semibold">
            Why learn this?
          </i>
          <p className="pb-6 text-justify">{longDescription}</p>
          <Button className="text-accent-content self-end mt-24">
            See Details{" "}
            <AiOutlineArrowRight className="ml-2 text-xl"></AiOutlineArrowRight>
          </Button>
        </div>
      </Hero.Content>
    </Hero>
  );
};

export default CourseDetailCard;
