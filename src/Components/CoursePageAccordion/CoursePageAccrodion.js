import React from "react";
import { Table } from "react-daisyui";
import "./CoursePageAccordion.css";
const CoursePageAccrodion = ({ chapter }) => {
  const { name, topics } = chapter;
  return (
    <div
      tabIndex={0}
      className="collapse collapse-arrow border-2 border-base-300 bg-transparent rounded-sm border-0-except-last-child text-base-300 "
    >
      <div className="collapse-title text-2xl font-bold border-b-2 border-base-300 border-0-except-last-child bg-[#d8bdc5]">
        {name}
      </div>
      <div className="collapse-content px-0">
        <Table className="w-full ">
          <Table.Body>
            {topics.map((topic, index) => {
              return (
                <tr
                  key={index}
                  className="flex border-t-2 border-primary font-medium"
                >
                  <th className="w-1/12 rounded-none bg-transparent">
                    <p>{index + 1}</p>
                  </th>

                  <td className="grow text-center rounded-none bg-transparent">
                    <p className="mr-36">{topic}</p>
                  </td>
                </tr>
              );
            })}
          </Table.Body>
        </Table>
      </div>
    </div>
  );
};

export default CoursePageAccrodion;
