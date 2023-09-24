import React, { Children } from "react";
import { BiLinkExternal } from "react-icons/bi";
import { AiOutlineCode } from "react-icons/ai";
import { Link } from "react-router-dom";
import Layout from "../components/AnimatedLayout";

function ProjectLayout({ title }) {
  return (
    <Layout title={title}>
      <div className="pt-4 mx-4 flex gap-8 text-2xl mb-6">
        <div className="flex">
          Live Preview:
          <span className="grid items-center pl-2">
            <BiLinkExternal className="" />
          </span>
        </div>
        <div className="flex">
          Code:
          <span className="grid items-center pl-2">
            <AiOutlineCode />
          </span>
        </div>
      </div>
      <div className="grid grid-cols-2 mx-4 gap-4">
        <div className="img bg-white h-64"></div>
        <div className=" description gap-2">
          <div className="text-2xl pb-4">Summary:</div>
          <div>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima
            exercitationem perferendis at expedita mollitia doloribus explicabo,
            quaerat ipsa, reiciendis nesciunt veritatis veniam commodi provident
            nihil quod quasi hic autem officia!
          </div>
          <div className="text-2xl pt-8 pb-4">Tech Stack:</div>
          <div></div>
        </div>
      </div>
    </Layout>
  );
}

export default ProjectLayout;
