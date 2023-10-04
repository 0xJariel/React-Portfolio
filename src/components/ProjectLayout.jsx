import React, { Children } from "react";
import { BiLinkExternal } from "react-icons/bi";
import { AiOutlineCode } from "react-icons/ai";
import Layout from "./AnimatedLayout";

function ProjectLayout({ title, img, summary, link, code }) {
  return (
    <Layout title={title}>
      <div className="pt-4 mx-4 flex gap-8 text-2xl mb-6">
        <div className="flex">
          Live Preview:
          <span className="grid items-center pl-2">
            <a rel={"external"} href={link} target="_blank">
              <BiLinkExternal className="" />
            </a>
          </span>
        </div>
        <div className="flex">
          Code:
          <span className="grid items-center pl-2">
            <a rel="external" href={code} target="_blank">
              <AiOutlineCode />
            </a>
          </span>
        </div>
      </div>
      <div className="grid grid-cols-2 mx-4 gap-8">
        <div class="aspect-w-16 aspect-h-9">
          <img src={img} alt="Furnitto Home" class="object-cover" />
        </div>
        <div className=" description gap-2">
          <div className="text-2xl pb-4">Summary:</div>
          <p>{summary}</p>
          <div className="text-2xl pt-8 pb-4">Tech Stack:</div>
          <div></div>
        </div>
      </div>
    </Layout>
  );
}

export default ProjectLayout;
