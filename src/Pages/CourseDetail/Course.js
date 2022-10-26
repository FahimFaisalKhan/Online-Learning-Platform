import React from "react";
import { Badge, Button, Hero, Stats } from "react-daisyui";
import { useActionData, useLoaderData } from "react-router-dom";
import CoursePageAccrodion from "../../Components/CoursePageAccordion/CoursePageAccrodion";
import CoursePageMenu from "../../Components/CoursePageMenu/CoursePageMenu";
import me from "../../Static/Images/me.jpg";
import "./Course.css";
const Course = () => {
  const course = useLoaderData();

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
    <section>
      <Hero
        className="min-h-[70vh] text-accent-content"
        style={{
          backgroundImage: `url(http://localhost:5000${image})`,
        }}
      >
        <Hero.Overlay />
        <Hero.Content className="text-center w-full justify-start">
          <div className="text-start">
            <h1 className="text-5xl font-bold">{name}</h1>
            <p className="py-6 text-info-content text-xl font-semibold ">
              {shortDescription}
            </p>
            <div className="flex flex-col">
              <Stats className="stats-vertical lg:stats-horizontal shadow bg-card w-full text-base-300 rounded-sm">
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
              <Stats className="stats-vertical lg:stats-horizontal shadow bg-card  text-base-300 mt-5 w-4/6 rounded-sm">
                <Stats.Stat>
                  <Stats.Stat.Item variant="title">Students</Stats.Stat.Item>
                  <Stats.Stat.Item variant="value">{students}</Stats.Stat.Item>
                </Stats.Stat>

                <Stats.Stat>
                  <Stats.Stat.Item variant="title">Total hours</Stats.Stat.Item>
                  <Stats.Stat.Item variant="value">{time}</Stats.Stat.Item>
                </Stats.Stat>
              </Stats>
              <Stats className="stats-vertical lg:stats-horizontal shadow bg-card w-2/6 text-base-300 mt-5 rounded-sm">
                <Stats.Stat>
                  <Stats.Stat.Item
                    variant="value"
                    className="flex items-center py-3"
                  >
                    <Badge
                      size="lg"
                      color="warning"
                      className="hover:bg-primary hover:text-accent-content"
                    >
                      {tag}
                    </Badge>
                  </Stats.Stat.Item>
                </Stats.Stat>
              </Stats>
            </div>
          </div>
        </Hero.Content>
      </Hero>
      <div>
        <h2 className="mt-32 text-info-content underline decoration-double decoration-base-300  text-4xl font-bold mb-10 underline-offset-8">
          What you'll learn
        </h2>
        <CoursePageMenu topics={learnings}></CoursePageMenu>
      </div>

      <div className="container mx-auto py-32">
        <h2 className="mt-32 text-info-content underline decoration-double decoration-base-300  text-4xl font-bold mb-10 underline-offset-8">
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
    </section>
  );
};

export default Course;
