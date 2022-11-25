import { navList } from "../offlineData/nav";
import { useRouter } from "next/router";

// import categories data from database

export default function Nav() {
  const handleClick = () => {
    console.log("nav clicked");
  };
  return (
    <nav className="mb-10">
      <ul className="relative flex gap-10 sm:gap-20 px-5 mt-12 sm:mt-0 opacity-80 overflow-x-scroll scrollbar-hide">
        {/* loop*/}
        {navList.genres.map(({ id, name }) => {
          return (
            <li
              className="text-lg hover:scale-125 
              transition duration-100 transform hover:text-white whitespace-nowrap active:text-red-500"
              key={id}
              onClick={handleClick}
            >
              {name}
            </li>
          );
        })}
      </ul>
      <div className="absolute top-0 right-0 bg-red-800"></div>
    </nav>
  );
}
