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
    <section className="mt-44 py-32 min-h-screen border-t-2 border-base-300 text-base-300">
      <div className="flex flex-col items-center">
        <h1 className="text-5xl font-semibold text-base-300">
          Our Popular Cources
        </h1>
        <div className="flex mt-44 gap-2">
          <h2 className="w-1/2 text-5xl font-semibold border-r-2 border-base-300">
            {displayCourse.name}
          </h2>
          <p className="w-1/2 text-start font-medium px-32 border-l-2 border-base-300">
            {displayCourse.shortDescription}
          </p>
        </div>
      </div>

      <main className="flex justify-center items-center relative min-h-[75vh]">
        {allCourse.map((course, index) => {
          const { image, id } = course;
          if (index !== popCourses.length - 1) {
            return (
              <img
                key={id}
                src={image}
                className={`w-72 h-96 absolute img-${index + 1} rounded-lg`}
                alt=""
              />
            );
          } else {
            return (
              <img
                key={id}
                src={displayCourse.image}
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
          className="absolute right-96 hover:bg-transparent bg-transparent border-none"
        >
          <BsFillArrowRightCircleFill className="text-8xl text-base-300"></BsFillArrowRightCircleFill>
        </Button>
      </main>
    </section>
  );
};

export default HomePopularCourse;
