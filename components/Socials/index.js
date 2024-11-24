import React from "react";
import Button from "../Button";

import yourData from "../../data/portfolio.json";

const Socials = ({ className, contacts, showIcon }) => {

  return (
    <div className={`${className} flex flex-wrap mob:flex-nowrap link`}>
      {contacts?.items.map((social, index) => (
        <Button key={index} onClick={() => window.open(social.fields.link)}>
          {showIcon ? <img
              alt={social.fields.title}
              className="h-8 w-8 hover:scale-110 transition-all ease-out duration-300"
              src={social.fields.icon.fields.file.url}
          /> : social.fields.title}

        </Button>
      ))}
    </div>
  );
};

export default Socials;
