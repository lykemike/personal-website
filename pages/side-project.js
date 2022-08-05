import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function SideProject() {
  return (
    <div className="flex flex-col items-center w-full">
      <div className="w-full max-w-screen-2xl">
        <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
          <div class="rounded-md overflow-hidden shadow-lg bg-white flex flex-col">
            <Image
              className="rounded-md"
              src="/side/rickandmorty.jpg"
              height={200}
              width={200}
              alt="Profile Picture"
              objectFit="cover"
              layout="responsive"
              quality={100}
            />
            <div class="px-6 py-4">
              <div className="mb-2 text-xl font-opensans">Rick and Morty website using The Rick and Morty API</div>
              <p class="text-neutral-700 text-base">
                Tech stack: React, Next.js, JavaScript, Tailwind CSS, Chakra UI GraphQL, and Apollo
              </p>
            </div>
            <div class="px-6 pt-4 pb-2 text-right mt-auto">
              <Link href="https://rick-and-morty-chakraui-graphql-ybx5dxw0p-lykemike.vercel.app/">
                <a>
                  <button className="px-2 py-1 font-semibold text-white rounded-tl-lg rounded-tr-sm rounded-bl-sm rounded-br-lg bg-sky-500 hover:bg-sky-400">
                    visit website
                  </button>
                </a>
              </Link>
            </div>
          </div>

          <div class="rounded overflow-hidden shadow-lg bg-white flex flex-col">
            <Image
              className="rounded-md"
              src="/side/pokemon.JPG"
              height={200}
              width={200}
              alt="Profile Picture"
              objectFit="cover"
              layout="responsive"
              quality={100}
            />
            <div class="px-6 py-4">
              <div className="mb-2 text-xl font-opensans">Pokémon website using PokeAPI</div>
              <p class="text-neutral-700 text-base">
                Tech stack: React, Next.js, JavaScript, Tailwind CSS, Chakra UI GraphQL, and Apollo
              </p>
            </div>
            <div class="px-6 pt-4 pb-2 text-right mt-auto">
              <Link href="https://pokedex-with-tailwind-ts-chartjs-pokeapi.vercel.app/">
                <a>
                  <button className="px-2 py-1 font-semibold text-white rounded-tl-lg rounded-tr-sm rounded-bl-sm rounded-br-lg bg-sky-500 hover:bg-sky-400">
                    visit website
                  </button>
                </a>
              </Link>
            </div>
          </div>

          {/* <div class="rounded overflow-hidden shadow-lg bg-white flex flex-col">
            <img src="http://via.placeholder.com/640x360" class="w-full" />
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">Tagline 3</div>
              <p class="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non recusandae, commodi repudiandae
                exercitationem, architecto assumenda nobis doloribus, deleniti obcaecati quaerat at quam! Rerum vitae
                quam culpa! Voluptates dolore sint.
              </p>
            </div>
            <div class="px-6 pt-4 pb-2 text-right mt-auto">
              <a href="#" class="bg-blue-500 p-2">
                try it!
              </a>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
