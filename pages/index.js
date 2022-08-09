import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { NextSeo } from "next-seo";

export default function Home() {
  return (
    <div>
      <NextSeo title="Mike's Personal Website" />
      <main className="flex flex-col items-center w-full">
        <section>
          <div className="w-full max-w-2xl text-center">
            <h1 className="text-5xl font-bold font-opensans text-neutral-900">Hi there! My name is Mike</h1>

            <p className="pt-4 font-semibold leading-8 tracking-normal text-neutral-800">
              Welcome to my personal website short intro — I&apos;m a undergraduate software engineer from Binus
              University. I like discovering and learning about new technologies and business issues.😄
            </p>
          </div>
        </section>

        <section className="w-full max-w-screen-md p-8 mt-8">
          <h2 className="text-4xl font-semibold font-opensans">Experience ✨</h2>

          <div className="grid grid-cols-1 gap-8 pt-4 mt-4">
            <div className="transition-all duration-500 shadow hover:scale-105 hover:shadow-xl">
              <div className="flex items-center bg-white rounded-md border-neutral-100">
                <div className="relative w-24 h-24 m-4 transition-all duration-500 shrink-0">
                  <Image src="/exprience/zegen.png" alt={`hbm logo`} layout="fill" />
                </div>
                <div className="w-full my-4 mr-4">
                  <div className="flex flex-col md:flex-row md:justify-between">
                    <span className="text-lg font-semibold tracking-tight font-ibmplex">PT. Zegen Solusi Mandiri</span>
                    <span className="invisible tracking-tight text-neutral-700 md:visible">Mar 2022 — May 2022</span>
                  </div>

                  <div className="flex flex-col md:flex-row">
                    <span className="tracking-tight text-neutral-700">Frontend Developer • Part-time</span>
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

            <div className="transition-all duration-500 shadow hover:scale-105 hover:shadow-xl">
              <div className="flex items-center bg-white rounded-md">
                <div className="relative w-24 h-24 m-4 transition-all duration-500 shrink-0">
                  <Image src="/exprience/hbm.png" alt={`hbm logo`} layout="fill" />
                </div>
                <div className="w-full my-4 mr-4">
                  <div className="flex flex-col md:flex-row md:justify-between">
                    <span className="text-lg font-semibold tracking-tight font-ibmplex">
                      PT. Hexaon Business Mitrasindo
                    </span>
                    <span className="invisible tracking-tight text-neutral-700 md:visible">Feb 2021 — Mar 2022</span>
                  </div>

                  <div className="flex flex-col md:flex-row">
                    <span className="tracking-tight text-neutral-700">Fullstack Developer • Internship</span>
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
        </section>
      </main>
    </div>
  );
}
