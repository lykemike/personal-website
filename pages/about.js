import Image from "next/image";
import React from "react";
import ExperienceProjectCard from "../components/ExperienceProjectCard";
import { ExperienceProjects } from "../_data/_projects";

About.title = "About";
export default function About({ data }) {
  return (
    <div>
      <div className="flex flex-col items-center w-full">
        <div className="w-full max-w-screen-md">
          <div className="flex flex-col overflow-hidden rounded-md">
            <div className="text-3xl text-center uppercase font-opensans">
              {/* While this page is in progress, here&apos;s a gif of Luffy 😅 */}
            </div>
            <div className="flex justify-center p-5">
              {/* <Image className="rounded-md" src="/luffy.gif" height={230} width={500} alt="luffy" quality={75} /> */}

              <section className="w-full max-w-screen-md p-8 mt-8">
                <h2 className="text-4xl font-semibold font-opensans">Experience ✨</h2>

                {data?.map((data, index) => (
                  <ExperienceProjectCard key={index} {...data} />
                ))}
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  let reverseData = ExperienceProjects.map((data) => data).reverse();

  return {
    props: {
      data: reverseData,
    },
    revalidate: 3600,
  };
}
