import React from "react";
import {useTheme} from "next-themes";

const WorkCard = ({ img, name, description, onClick, skills }) => {
  const { theme  } = useTheme();
  return (
      <div
          className="overflow-hidden rounded-lg p-2 laptop:p-4 first:ml-0 link"
          onClick={onClick}
      >
        <div
            className="relative rounded-lg overflow-hidden transition-all ease-out duration-300 h-48 mob:h-auto"
            style={{height: "600px"}}
        >
          <img
              alt={name}
              className="h-full w-full object-cover hover:scale-110 transition-all ease-out duration-300"
              src={img}
          />
        </div>
        <h1 className="mt-5 text-3xl font-medium">
          {name ? name : "Project Name"}
        </h1>
        <h2 className="text-xl opacity-50">
          {description ? description : "Description"}
        </h2>
        <h3 className={`pt-3 flex text-2xl gap-3 items-center justify-end w-fit`}>
          {skills?.map((skill) => <span key={skill.fields.name} title={skill.fields.name} className={`flex py-1 px-2 rounded-md bg-white`}>
            <img
              className="h-8 w-8 filter"
              src={skill.fields.icon.fields.file.url}
              alt={skill.fields.name}
            />
          </span>)}
        </h3>
      </div>
  );
};

export default WorkCard;
