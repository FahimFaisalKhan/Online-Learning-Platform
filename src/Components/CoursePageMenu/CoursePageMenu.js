import React, { useContext } from "react";
import { Menu } from "react-daisyui";
import { TiTick } from "react-icons/ti";
import { MyThemeContext } from "../../Contexts/ThemeCntext/ThemeChangeContext";
import "./coursePageMenu.css";
const CoursePageMenu = ({ topics }) => {
  const { lightMode } = useContext(MyThemeContext);
  const chunkSize = 3;

  const topicsFormated = [];
  for (let i = 0; i < topics.length; i += chunkSize) {
    const chunk = topics.slice(i, i + chunkSize);
    topicsFormated.push(chunk);
  }

  const text_bg_cls = lightMode
    ? "bg-clip-text text-transparent bg-gradient-to-r from-[#d6bdab] to-[#a88690]"
    : "bg-clip-text text-transparent bg-gradient-to-r from-[#414141] to-[#000000]";
  return (
    <div>
      <div className="flex flex-col w-full justify-around p-4 items-start font-sans component-preview bg-base-content font-medium  container mx-auto rounded-sm">
        {topicsFormated.map((topics, index) => {
          return (
            <Menu key={index} className="gap-4">
              {topics.map((topic, i) => {
                return (
                  <Menu.Item key={i}>
                    <div className="flex items-start">
                      <TiTick
                        className={`text-xl text-base-content ${
                          lightMode ? "bg-[#d6bdab]" : "bg-[#000000]"
                        }  rounded-sm mt-1`}
                      ></TiTick>
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
