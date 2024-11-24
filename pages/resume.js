import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Cursor from "../components/Cursor";
import Header from "../components/Header";
import ProjectResume from "../components/ProjectResume";
import Socials from "../components/Socials";
import Button from "../components/Button";
import { useTheme } from "next-themes";
// Data
import { name, showResume } from "../data/portfolio.json";
import { resume } from "../data/portfolio.json";
import data from "../data/portfolio.json";
import {getAllContentByModelTypeId, TTypeId} from "../utils/contentfull";


export const getServerSideProps = async () => {
  const [my] = await Promise.all([
    getAllContentByModelTypeId(TTypeId.My),
  ]);

  const props = {
    my: my.items[0],
  };

  return {
    props,
  };
};

const Resume = ({ my }) => {
  const router = useRouter();
  const theme = useTheme();
  const [mount, setMount] = useState(false);

  // useEffect(() => {
  //   setMount(true);
  //   if (!showResume) {
  //     router.push("/");
  //   }
  // }, []);
  console.log(my)
  return (
    <>
      {process.env.NODE_ENV === "development" && (
        <div className="fixed bottom-6 right-6">
          <Button onClick={() => router.push("/edit")} type={"primary"}>
            Edit Resume
          </Button>
        </div>
      )}
      {data.showCursor && <Cursor />}
      <div
          className={`container mx-auto mb-10 h-[calc(100vh-100px)] ${
              data.showCursor && "cursor-none"
          }`}
      >
        <Header isBlog name={my.fields.name}/>
          <object data={my.fields.cv.fields.file.url}
                  type="application/pdf" className="w-full h-full">
              <p>Unable to display PDF file. <a
                  href={my.fields.cv.fields.file.url}>Download</a> instead.
              </p>
          </object>
          {/*<Document file={my.fields.cv.fields.file.url}/>*/}
      </div>
    </>
  );
};

export default Resume;
