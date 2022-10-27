import React, {
  createRef,
  forwardRef,
  useContext,
  useEffect,
  useState,
} from "react";
import { Badge, Button, Hero, Stats, Tooltip } from "react-daisyui";
import { Link, useActionData, useLoaderData } from "react-router-dom";
import CoursePageAccrodion from "../../Components/CoursePageAccordion/CoursePageAccrodion";
import CoursePageMenu from "../../Components/CoursePageMenu/CoursePageMenu";
import Pdf from "react-to-pdf";
import { FaDownload } from "react-icons/fa";
import "./Course.css";
import { MyThemeContext } from "../../Contexts/ThemeCntext/ThemeChangeContext";

const Course = () => {
  const { lightMode } = useContext(MyThemeContext);
  const course = useLoaderData();
  const ref = createRef();

  const {
    id,
    name,
    chapters,
    instructor,
    price,
    rating,
    shortDescription,
    image,
    students,
    tag,
    time,
    learnings,
  } = course;

  return (
    <section className="">
      <Hero
        ref={ref}
        className="min-h-[70vh] text-base-content"
        style={{
          backgroundImage: `url(http://localhost:5000${image})`,
        }}
      >
        <Hero.Overlay />
        <Hero.Content className="text-center w-full justify-start  relative ">
          <div className="text-start">
            <h1 className="text-5xl font-bold">{name}</h1>

            <p className="py-6 text-base-content text-xl font-semibold ">
              {shortDescription}
            </p>
            <div className="flex flex-col">
              <Stats
                className={`stats-vertical lg:stats-horizontal shadow ${
                  lightMode ? "bg-card" : "bg-gradient-dark"
                } w-full  text-base-content rounded-sm`}
              >
                <Stats.Stat>
                  <Stats.Stat.Item variant="title">Instructor</Stats.Stat.Item>
                  <Stats.Stat.Item variant="value">
                    {instructor}
                  </Stats.Stat.Item>
                </Stats.Stat>

                <Stats.Stat>
                  <Stats.Stat.Item variant="title">Rating</Stats.Stat.Item>
                  <Stats.Stat.Item variant="value">{rating}/5</Stats.Stat.Item>
                </Stats.Stat>

                <Stats.Stat>
                  <Stats.Stat.Item variant="title">Price</Stats.Stat.Item>
                  <Stats.Stat.Item variant="value">{price}</Stats.Stat.Item>
                </Stats.Stat>
              </Stats>
              <Stats
                className={`stats-vertical lg:stats-horizontal shadow ${
                  lightMode ? "bg-card" : "bg-gradient-dark"
                }  text-base-content mt-5 w-4/6 rounded-sm`}
              >
                <Stats.Stat>
                  <Stats.Stat.Item variant="title">Students</Stats.Stat.Item>
                  <Stats.Stat.Item variant="value">{students}</Stats.Stat.Item>
                </Stats.Stat>

                <Stats.Stat>
                  <Stats.Stat.Item variant="title">Total hours</Stats.Stat.Item>
                  <Stats.Stat.Item variant="value">{time}</Stats.Stat.Item>
                </Stats.Stat>
              </Stats>
              <Stats
                className={`stats-vertical lg:stats-horizontal shadow ${
                  lightMode ? "bg-card" : "bg-gradient-dark"
                } w-2/6 text-base-300 mt-5 rounded-sm`}
              >
                <Stats.Stat>
                  <Stats.Stat.Item
                    variant="value"
                    className="flex items-center py-3"
                  >
                    <Badge
                      size="lg"
                      color="warning"
                      className="hover:bg-primary hover:text-base-300"
                    >
                      {tag}
                    </Badge>
                  </Stats.Stat.Item>
                </Stats.Stat>
              </Stats>
            </div>
          </div>
          <Pdf
            targetRef={ref}
            filename="code-example.pdf"
            x={-30}
            y={50}
            scale={0.6}
          >
            {({ toPdf }) => (
              <Tooltip
                className="absolute top-5 left-44 md:left-auto md:right-16 2xl:right-auto 2xl:left-44"
                message="Download Course Banner"
              >
                <Button
                  className="text-2xl bg-transparent hover:bg-transparent border-none text-base-content"
                  onClick={toPdf}
                >
                  <FaDownload></FaDownload>
                </Button>
              </Tooltip>
            )}
          </Pdf>
        </Hero.Content>
      </Hero>
      <div>
        <h2 className="mt-32 text-base-content underline decoration-double decoration-base-content  text-4xl font-bold mb-10 underline-offset-8">
          What you'll learn
        </h2>
        <CoursePageMenu topics={learnings}></CoursePageMenu>
      </div>

      <div className="container mx-auto py-32">
        <h2 className="mt-32 text-base-content underline decoration-double decoration-base-content  text-4xl font-bold mb-10 underline-offset-8">
          Course content
        </h2>
        {chapters.map((chapter, index) => {
          return (
            <CoursePageAccrodion
              key={index}
              chapter={chapter}
            ></CoursePageAccrodion>
          );
        })}
      </div>
      <Link to={`/checkout/${id}`}>
        <Button
          size="lg"
          className="mt-10 mb-56 btn-shadow-2 capitalize"
          color="primary"
        >
          Get Premium Access
        </Button>
      </Link>
    </section>
  );
};

export default Course;
