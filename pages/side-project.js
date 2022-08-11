import React from "react";
import SideProjectCard from "../components/SideProjectCard";
import { SideProjects } from "../_data/_projects";

SideProject.title = "Side Project";

export default function SideProject({ data }) {
  return (
    <div>
      <div className="flex flex-col items-center w-full">
        <div className="w-full max-w-screen-2xl">
          <div className="grid grid-cols-1 gap-5 p-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
            {data?.map((data, index) => (
              <SideProjectCard key={index} {...data} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  let reverseData = SideProjects.map((data) => data).reverse();

  return {
    props: {
      data: reverseData,
    },
  };
}
