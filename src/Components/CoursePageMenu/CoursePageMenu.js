import React from "react";
import { Menu } from "react-daisyui";
import { TiTick } from "react-icons/ti";
import "./coursePageMenu.css";
const CoursePageMenu = ({ topics }) => {
  const chunkSize = 3;

  const topicsFormated = [];
  for (let i = 0; i < topics.length; i += chunkSize) {
    const chunk = topics.slice(i, i + chunkSize);
    topicsFormated.push(chunk);
    // do whatever
  }
  console.log(topicsFormated);
  const text_bg_cls =
    "bg-clip-text text-transparent bg-gradient-to-r from-[#d6bdab] to-[#a88690]";
  return (
    <div>
      <div className="flex w-full justify-around p-4 items-start font-sans component-preview bg-base-300 font-medium  container mx-auto rounded-sm">
        {topicsFormated.map((topics, index) => {
          return (
            <Menu key={index} className="gap-4">
              {topics.map((topic, i) => {
                return (
                  <Menu.Item key={i}>
                    <div className="flex items-start">
                      <TiTick className="text-xl text-base-300 bg-[#d6bdab]  rounded-sm mt-1"></TiTick>
                      <p className={text_bg_cls}>{topic}</p>
                    </div>
                  </Menu.Item>
                );
              })}
            </Menu>
          );
        })}
      </div>
    </div>
  );
};

export default CoursePageMenu;
