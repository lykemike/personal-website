import Image from "next/image";
import Link from "next/link";
import React from "react";

function SideProjectCard({ title, description, image, url }) {
  return (
    <div className="flex flex-col overflow-hidden bg-white rounded-md shadow-lg">
      <div>
        <Image
          className="rounded-md"
          src={image}
          height={200}
          width={200}
          alt={image}
          objectFit="cover"
          layout="responsive"
          quality={75}
          priority={true}
          blurDataURL="URL"
          placeholder="blur"
        />
      </div>
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
}

export default SideProjectCard;
