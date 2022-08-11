import Image from "next/image";
import React from "react";

About.title = "About";
export default function About() {
  return (
    <div>
      <div className="flex flex-col items-center w-full">
        <div className="w-full max-w-screen-md">
          <div className="flex flex-col overflow-hidden rounded-md">
            <div className="text-3xl text-center uppercase font-opensans">
              While this page is in progress, here&apos;s a gif of Luffy 😅
            </div>
            <div className="flex justify-center p-5">
              <Image className="rounded-md" src="/luffy.gif" height={230} width={500} alt="luffy" quality={75} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
