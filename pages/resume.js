import Image from "next/image";
import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { HiLocationMarker, HiMailOpen, HiPhone } from "react-icons/hi";
import {
  SiAntdesign,
  SiApollographql,
  SiBootstrap,
  SiChakraui,
  SiCss3,
  SiFigma,
  SiGithub,
  SiGraphql,
  SiHtml5,
  SiJavascript,
  SiMaterialui,
  SiMysql,
  SiNextdotjs,
  SiPostgresql,
  SiPostman,
  SiPrettier,
  SiPrisma,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVisualstudiocode,
  SiXampp,
} from "react-icons/si";
import Pdf from "react-to-pdf";

const ref = React.createRef();

const options = {
  orientation: "p",
  unit: "mm",
  format: "a4",
  putOnlyUsedFonts: true,
  floatPrecision: 16,
};

export default function SideProject() {
  return (
    <div className="flex flex-col items-center w-full">
      <div ref={ref} className="w-full max-w-screen-md">
        <div className="p-2 border-[1px] rounded-sm border-neutral-500 shadow-md">
          <div className="md:grid md:grid-cols-4 md:gap-4">
            <div className="flex justify-center">
              {/* <Image
                className="rounded-sm"
                src="/resume/profile.jpg"
                height={300}
                width={200}
                alt="Profile Picture"
                objectFit="fill"
              /> */}
            </div>

            {/* Main Section */}
            <div className="col-span-3 mt-2 md:mt-0">
              <h1 className="text-xl md:text-4xl font-opensans">Michael Kevin Montolalu</h1>
              <h1 className="text-xl md:text-2xl font-opensans text-neutral-700">Software Engineer</h1>
              <div className="flex items-center space-x-2 space-y-2 text-base">
                <HiLocationMarker size="20px" />
                <span className=" text-neutral-700">Tangerang</span>
              </div>
              <div className="flex items-center space-x-2 text-base">
                <HiMailOpen size="20px" />
                <span className="text-neutral-700">montolalumichael@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2 text-base">
                <HiPhone size="20px" />
                <span className="text-neutral-700">0812 4596 5369</span>
              </div>
              <div className="flex items-center space-x-2 text-base">
                <BsLinkedin size="20px" />
                <span className="text-neutral-700">linkedin.com/in/michael-kevin-montolalu-b507881b7/</span>
              </div>
            </div>
          </div>

          <div className="mt-4 md:grid md:grid-cols-4 md:gap-4">
            {/* Summary Section */}
            <div>
              <h2 className="text-2xl font-opensans">Summary</h2>
            </div>
            <div className="col-span-3">
              <p className="text-sm text-justify md:text-base">
                I&apos;m an undergraduate Software Engineer student at Binus University. I am a positive, enthusiastic
                and competent Web Developer with a diverse range of skills, qualities and attribute. I have experience
                in both frontend and backend.
              </p>
            </div>

            {/* Experience Section */}
            <div className="mt-4 md:mt-0">
              <h2 className="text-2xl font-opensans">Experience</h2>
            </div>
            <div className="col-span-3">
              <div>
                <h3 className="text-lg font-opensans">PT. Zegen Solusi Mandiri</h3>
                <h2 className="text-base font-opensans text-neutral-700">Frontend develolper — Part-time</h2>
                <h2 className="text-base font-light text-neutral-700">Mar 2022 — May 2022</h2>

                <p>
                  • Design and developed BTN Smart
                  <br />• Identified and corrected bugs in BTN Smart
                  <br />• Design and developed Customer relationship management (CRM)
                  <br />• Worked in scrum environment
                </p>
              </div>

              <div className="mt-2">
                <h3 className="text-lg font-opensans">PT. Hexaon Business Mitrasindo</h3>
                <h2 className="text-base font-opensans text-neutral-700">Fullstack develolper — Internship</h2>
                <h2 className="text-base font-light text-neutral-700">Feb 2021 — Mar 2022</h2>
                <p>
                  • Develop a web accounting application
                  <br />• Assist in the design cycle of an accounting application
                  <br />• Researched tech stack that will be used for the project
                  <br />• Build RESTful APIs that were used throughout the application using Next.js API
                  <br />• Maintained code quality
                  <br />• Worked in scrum environment
                  <br />• Developed web application using Next.js, JavaScript, PostgreSQL, Prisma, Material UI, Tailwind
                  CSS, Ant Design and Charting Libraries
                </p>
              </div>
            </div>

            {/* Skills */}
            <div className="mt-4 md:mt-0">
              <h2 className="text-2xl font-opensans">Tech Stack</h2>
            </div>
            <div className="col-span-3">
              <div className="md:grid md:grid-cols-2 md:gap-4">
                <div>
                  <div className="text-lg font-opensans">Web Development</div>
                  <div>
                    <p className="flex items-center">
                      <SiHtml5 className="w-5 h-5 mr-1" />
                      HTML
                    </p>
                    <p className="flex items-center">
                      <SiCss3 className="w-5 h-5 mr-1" />
                      CSS
                    </p>
                    <p className="flex items-center">
                      <SiJavascript className="w-5 h-5 mr-1" />
                      JavaScript
                    </p>
                    <p className="flex items-center">
                      <SiTypescript className="w-5 h-5 mr-1" />
                      TypeScript
                    </p>
                    <p className="flex items-center">
                      <SiReact className="w-5 h-5 mr-1" />
                      React.js
                    </p>
                    <p className="flex items-center">
                      <SiNextdotjs className="w-5 h-5 mr-1" />
                      Next.js
                    </p>

                    <p className="flex items-center">
                      <SiTailwindcss className="w-5 h-5 mr-1" />
                      Tailwind CSS
                    </p>
                    <p className="flex items-center">
                      <SiMaterialui className="w-5 h-5 mr-1" />
                      Material UI
                    </p>
                    <p className="flex items-center">
                      <SiBootstrap className="w-5 h-5 mr-1" />
                      React Bootstrap
                    </p>
                    <p className="flex items-center">
                      <SiAntdesign className="w-5 h-5 mr-1" />
                      Ant Design
                    </p>
                    <p className="flex items-center">
                      <SiChakraui className="w-5 h-5 mr-1" />
                      Chakra UI
                    </p>
                    <p className="flex items-center">
                      <SiPrisma className="w-5 h-5 mr-1" />
                      Prisma ORM
                    </p>
                    <p className="flex items-center">
                      <SiGraphql className="w-5 h-5 mr-1" />
                      GraphQl
                    </p>
                    <p className="flex items-center">
                      <SiApollographql className="w-5 h-5 mr-1" />
                      Apollo
                    </p>
                  </div>
                </div>

                <div>
                  <div className="text-lg font-opensans">Development Tools</div>
                  <div>
                    <p className="flex items-center">
                      <SiMysql className="w-5 h-5 mr-1" />
                      MySql
                    </p>
                    <p className="flex items-center">
                      <SiPostgresql className="w-5 h-5 mr-1" />
                      PostgreSql
                    </p>
                    <p className="flex items-center">
                      <SiVisualstudiocode className="w-5 h-5 mr-1" />
                      Visual Studio Code
                    </p>
                    <p className="flex items-center">
                      <SiGithub className="w-5 h-5 mr-1" />
                      Github
                    </p>
                    <p className="flex items-center">
                      <SiPrettier className="w-5 h-5 mr-1" />
                      Prettier
                    </p>
                    <p className="flex items-center">
                      <SiFigma className="w-5 h-5 mr-1" />
                      Figma
                    </p>
                    <p className="flex items-center">
                      <SiPostman className="w-5 h-5 mr-1" />
                      Postman
                    </p>
                    <p className="flex items-center">
                      <SiXampp className="w-5 h-5 mr-1" />
                      Xampp
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end mt-8">
          <Pdf options={options} targetRef={ref} filename="resume_michael_kevin_montolalu.pdf">
            {({ toPdf }) => (
              <button
                onClick={toPdf}
                className="p-2 font-semibold tracking-wide uppercase transition-all delay-100 rounded-tr-sm rounded-bl-sm shadow-sm shrink-0 hover:-translate-y-1 rounded-tl-2xl rounded-br-2xl bg-rose-500 text-neutral-800 hover:shadow-lg hover:bg-rose-400"
              >
                Download Résumé
              </button>
            )}
          </Pdf>
        </div>
      </div>
    </div>
  );
}
