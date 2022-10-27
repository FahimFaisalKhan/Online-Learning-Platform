import React, { useEffect, useState } from "react";
import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";
import { Button } from "react-daisyui";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
// import Slide from "react-reveal/Slide";
import "./HomePopularCourse.css";
const HomePopularCourse = ({ courses }) => {
  const popCourses = courses.slice(0, 4);

  const [allCourse, setAllCourse] = useState(popCourses);
  const [displayCourse, setDisplayCourse] = useState(
    popCourses[popCourses.length - 1]
  );
  const [animation, setAnimation] = useState(false);
  useEffect(() => {
    setDisplayCourse(allCourse[allCourse.length - 1]);
  }, [allCourse]);
  const handleChange = () => {
    setAnimation(true);

    setTimeout(() => {
      const lastImg = allCourse.pop();
      allCourse.unshift(lastImg);
      const newOrder = [...allCourse];
      setAllCourse(newOrder);
      setAnimation(false);
    }, 600);
  };

  return (
    <section className="mt-44 py-32 min-h-screen border-t-2 border-base-content text-base-content">
      <div className="flex flex-col items-center">
        <h1 className="text-5xl font-semibold text-base-content">
          Our Popular Cources
        </h1>
        <div className="flex flex-col lg:flex-row mt-44 gap-2 items-center justify-center">
          <h2 className="w-8/12 lg:w-1/2 text-5xl font-semibold border-b-2 lg:border-b-0 lg:border-r-2 border-base-content pb-5 lg:pb-[auto] lg:py-9 xl:py-6 ">
            {displayCourse.name}
          </h2>
          <p className="w-8/12 lg:w-1/2 text-start font-medium lg:px-32 border-t-2 lg:border-t-0 lg:border-l-2 border-base-content pt-5 lg:pt-[auto] lg:py-3 ">
            {displayCourse.shortDescription}
          </p>
        </div>
      </div>

      <main className="flex justify-center items-center relative min-h-[75vh] mt-8">
        {allCourse.map((course, index) => {
          const { image, id } = course;
          if (index !== popCourses.length - 1) {
            return (
              <img
                key={id}
                src={`https://asignment-10-server.vercel.app${image}`}
                className={`w-72 h-96 absolute img-${index + 1} rounded-lg`}
                alt=""
              />
            );
          } else {
            return (
              <img
                key={id}
                src={`https://asignment-10-server.vercel.app${displayCourse.image}`}
                className={`w-72 h-96 absolute img-dis ${
                  animation && "move-img-dis"
                } rounded-lg`}
                alt=""
              />
            );
          }
        })}
        <Button
          onClick={handleChange}
          className="absolute bottom-[-5rem] right-88  xl:bottom-[auto] xl:right-56 2xl:right-[25%] hover:bg-transparent bg-transparent border-none "
        >
          <BsFillArrowRightCircleFill className="text-8xl text-base-content "></BsFillArrowRightCircleFill>
        </Button>
      </main>
    </section>
  );
};

export default HomePopularCourse;
