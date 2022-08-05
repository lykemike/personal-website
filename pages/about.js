import React from "react";
import Image from "next/image";

export default function about() {
  return (
    <div className="flex flex-col items-center w-full">
      <div className="w-full max-w-screen-md">
        <div className="flex flex-col overflow-hidden rounded-md">
          <div className="text-3xl text-center uppercase font-opensans">
            While this page is in progress, here&apos;s a gif of Luffy 😅
          </div>
          <div className="grid grid-cols-1 gap-5 p-10">
            <Image
              className="rounded-md"
              src="/luffy.gif"
              height={200}
              width={200}
              alt="Profile Picture"
              objectFit="cover"
              layout="responsive"
              quality={100}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
