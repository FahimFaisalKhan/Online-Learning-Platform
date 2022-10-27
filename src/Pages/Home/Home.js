import React, { useContext } from "react";
import { Avatar, Button, Hero, Stats } from "react-daisyui";
import cover from "../../Static/Images/cover.png";
import me from "../../Static/Images/me.jpg";
import "./Home.css";
import underline from "../../Static/Images/underline.svg";
import HomePopularCourse from "../../Components/HomePoplularCorse/HomePopularCourse";
import { useLoaderData } from "react-router-dom";

import { MyThemeContext } from "../../Contexts/ThemeCntext/ThemeChangeContext";

const Home = () => {
  const courses = useLoaderData();
  const { lightMode } = useContext(MyThemeContext);

  return (
    <section>
      <header className="flex items-center flex-col lg:flex-row container mx-auto py-24 ">
        <div className=" w-8/12 lg:w-1/2 lg:px-5 flex flex-col justify-center items-start text-base-content ">
          <h3 className="font-bold">— Your Best Choice</h3>
          <div className="relative">
            <h1 className="text-start text-4xl lg:text-6xl font-bold leading-snug ">
              Programing <br /> In Simple Words
            </h1>
            <img
              src={underline}
              alt=""
              className="absolute top-full left-20 w-5/12"
            />
          </div>

          <p className="text-start mt-10 font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            labore quam, a neque libero quos corrupti nemo deleniti iusto
            aperiam accusantium rerum placeat laborum hic dicta commodi alias
            nobis quisquam nulla minus doloremque repellat obcaecati
            perspiciatis architecto! Mollitia, molestiae corrupti.
          </p>
          <Button className="bg-base-content text-base-100 hover:text-base-content mt-5 px-12 btn-shadow">
            Learn More
          </Button>
        </div>
        <div className="w-8/12 lg:w-1/2 flex justify-center items-center relative mt-44 lg:mt-0">
          <img className="block w-96" src={cover} alt="" />
          <Stats
            className={`stats-vertical lg:stats-horizontal rounded-md lg:p-5 shadow absolute cover-stat ${
              lightMode ? "bg-stats" : "bg-gradient-dark"
            }  text-base-content`}
          >
            <Stats.Stat>
              <Stats.Stat.Item
                className="font-semibold text-3xl lg:text-4xl"
                variant="value"
              >
                15
              </Stats.Stat.Item>
              <Stats.Stat.Item variant="title">Courses</Stats.Stat.Item>
            </Stats.Stat>

            <Stats.Stat>
              <Stats.Stat.Item className="font-semibold " variant="value">
                466
              </Stats.Stat.Item>
              <Stats.Stat.Item variant="title">Members</Stats.Stat.Item>
            </Stats.Stat>
          </Stats>
          <Hero className="absolute w-1/2 text-base-content cover-comment">
            <Hero.Overlay
              className={`rounded-md ${
                lightMode ? "bg-stats" : "bg-gradient-dark"
              }  "`}
            />
            <Hero.Content className="text-start w-44 lg:w-[auto]">
              <div className="max-w-md">
                <div className="flex  flex-col lg:flex-row items-start lg:items-center gap-3">
                  <Avatar src={me} shape="circle" size={45}></Avatar>
                  <div>
                    <h1 className="text-md font-semibold ">Fahim Faisal</h1>
                    <h3 className="text-xs font-semibold text-base-content">
                      JS developer
                    </h3>
                  </div>
                </div>

                <p className="py-2 text-sm ">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut
                  assumenda excepturi exercitationem quasi.
                </p>
              </div>
            </Hero.Content>
          </Hero>
        </div>
      </header>
      <HomePopularCourse courses={courses}></HomePopularCourse>
    </section>
  );
};

export default Home;
