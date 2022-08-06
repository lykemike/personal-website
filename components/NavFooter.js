import { Menu } from "@headlessui/react";
import { MenuIcon } from "@heroicons/react/solid";
import moment from "moment-timezone";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const NavLinks = [
  {
    href: "/about",
    text: "about",
  },
  {
    href: "/resume",
    text: "résumé",
  },
  {
    href: "/side-project",
    text: "side project",
  },
];

const TimeZone = () => {
  const currentDay = moment().format("dddd");
  const currentDate = moment().format("MMMM D");
  const currentTime = moment().format("HH:mm A");
  const hour = parseInt(currentTime.split(":")[0]);
  let greetings = "";

  if (hour >= 4 && hour <= 10) {
    greetings = "Good morning ☀️";
  } else if (hour >= 11 && hour <= 14) {
    greetings = "Good afternoon ☀️";
  } else if (hour >= 15 && hour <= 17) {
    greetings = "Good evening 🍂";
  } else if (hour >= 18 && hour <= 24) {
    greetings = "Good night 🌙";
  } else {
    greetings = "Good night 🌙";
  }

  return (
    <div className="font-opensans text-neutral-700">
      <div className="flex space-x-1">
        <div>{`${greetings}`}</div>
        <div>{`${currentTime}`}</div>
      </div>
      <div>{`It's ${currentDay}, ${currentDate}`}</div>
    </div>
  );
};

const HomeNav = () => {
  return (
    <div className="flex space-x-2">
      <Link href="/" passHref>
        <a className="flex items-center text-lg font-extrabold" aria-label="Mike - Navigate to homepage">
          <span className="text-4xl uppercase text-neutral-800">🔰</span>
        </a>
      </Link>
      <TimeZone />
    </div>
  );
};

const LinksNav = ({ href, children }) => {
  const router = useRouter();
  const isCurrentPath = router.pathname === href;

  return (
    <Link href={href} key={href} passHref>
      <a
        className={`flex h-full items-center p-4 text-lg tracking-tight hover:bg-rose-200 hover:text-rose-700 rounded-md ${
          isCurrentPath ? "font-bold text-rose-800" : null
        }`}
      >
        {children}
      </a>
    </Link>
  );
};

export default function Navbar({ children, title }) {
  return (
    <div>
      <header className="sticky top-0 z-50 flex items-center justify-between p-4 backdrop-blur-md">
        <HomeNav />

        <div className="hidden select-none sm:flex font-opensans">
          {NavLinks.map(({ href, text }) => {
            return (
              <LinksNav key={href} href={href}>
                {text}
              </LinksNav>
            );
          })}
        </div>

        <div className="relative mx-4 mt-2 select-none sm:hidden">
          <Menu>
            <Menu.Button
              className="p-2 text-lg tracking-tight rounded shadow bg-rose-500"
              aria-label="Toggle navigation"
            >
              <MenuIcon className="w-6 h-6 text-white" />
            </Menu.Button>

            <Menu.Items className="absolute right-0 flex flex-col w-40 gap-1 mt-2 bg-[#fff9df] rounded-md shadow">
              {NavLinks.map(({ href, text }) => (
                <Menu.Item key={href}>
                  <LinksNav href={href}>{text}</LinksNav>
                </Menu.Item>
              ))}
            </Menu.Items>
          </Menu>
        </div>
      </header>

      <main className="container w-full min-h-screen p-2 mx-auto">{children}</main>

      <div className="flex flex-col items-center w-full px-8 mt-8">
        <footer className="w-full max-w-2xl">
          {/* <section className="grid grid-cols-1 my-4"></section> */}
          <div className="my-12 text-lg text-center font-opensans text-neutral-600">🔥🔰 Mike 2022 🔰🔥</div>
        </footer>
      </div>
    </div>
  );
}
