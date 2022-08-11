import Image from "next/image";
import Link from "next/link";
import React from "react";

function ExperienceProjectCard({ title, position, type, duration, url, image }) {
  return (
    <div className="grid grid-cols-1 gap-8 pt-4 mt-4">
      <div className="transition-all duration-500 shadow hover:scale-105 hover:shadow-xl">
        <div className="flex items-center bg-white rounded-md border-neutral-100">
          <div className="relative w-24 h-24 m-4 transition-all duration-500 shrink-0">
            <Image src={image} alt={image} layout="fill" />
          </div>
          <div className="w-full my-4 mr-4">
            <div className="flex flex-col md:flex-row md:justify-between">
              <span className="text-lg font-semibold tracking-tight font-ibmplex">{title}</span>
              <span className="invisible tracking-tight text-neutral-700 md:visible">{duration}</span>
            </div>

            <div className="flex flex-col md:flex-row">
              <span className="tracking-tight text-neutral-700">
                {position} • {type}
              </span>
            </div>

            <div className="flex justify-end mt-2">
              <Link href="/resume">
                <a>
                  <button className="px-2 py-1 font-semibold text-white rounded-tl-lg rounded-tr-sm rounded-bl-sm rounded-br-lg bg-rose-500 hover:bg-rose-400">
                    read summary
                  </button>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExperienceProjectCard;
