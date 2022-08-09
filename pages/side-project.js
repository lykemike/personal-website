import { NextSeo } from "next-seo";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { SideProjects } from "../_data/_projects";

const SideProjectCard = ({ title, description, image, url }) => {
  return (
    <div className="flex flex-col overflow-hidden bg-white rounded-md shadow-lg">
      <Image
        className="rounded-md"
        src={image}
        height={200}
        width={200}
        alt={image}
        objectFit="cover"
        layout="responsive"
        quality={75}
      />
      <div className="px-6 py-4">
        <div className="mb-2 text-xl font-opensans">{title}</div>
        <p className="text-base text-neutral-700">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-2 mt-auto text-right">
        <Link href={url}>
          <a>
            <button className="px-2 py-1 font-semibold text-white rounded-tl-lg rounded-tr-sm rounded-bl-sm rounded-br-lg bg-sky-500 hover:bg-sky-400">
              visit website
            </button>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default function SideProject() {
  return (
    <div>
      <NextSeo title="Side Projects" />
      <div className="flex flex-col items-center w-full">
        <div className="w-full max-w-screen-2xl">
          <div className="grid grid-cols-1 gap-5 p-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
            {SideProjects?.map((data, index) => {
              return <SideProjectCard key={index} {...data} />;
            }).reverse()}
          </div>
        </div>
      </div>
    </div>
  );
}
