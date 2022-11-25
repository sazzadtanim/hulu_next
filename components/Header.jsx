import React from "react";
import HeaderItem from "./HeaderItem";
import { HomeIcon, HeartIcon, ServerIcon,AcademicCapIcon, CalculatorIcon, CakeIcon, UserGroupIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

export default function Header() {
  return (
    <header className="flex flex-col sm:flex-row justify-between items-center mx-5">
      <div className="flex flex-grow justify-evenly max-w-2xl">
        {/* Hero Icons as Components */}
        <HeaderItem title="HOME" Icon={HomeIcon} />
        <HeaderItem title="TRENDING" Icon={HeartIcon} />
        <HeaderItem title="VERIFIED" Icon={ServerIcon} />
        <HeaderItem title="SEARCH" Icon={AcademicCapIcon} />
        <HeaderItem title="COLLECTION" Icon={UserGroupIcon} />
        <HeaderItem title="ACCOUNT" Icon={CakeIcon} />
        {/* <HeaderItem title="sazzad" Icon={BadgeCheckIcon} /> */}
      </div>
      {/* logo */}
      <Image
        className="w-25"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Hulu_Logo.svg/799px-Hulu_Logo.svg.png?20211009175749"
        width={100}
        height={32}
        alt="logo"
      />
    </header>
  );
}
