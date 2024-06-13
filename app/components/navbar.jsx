// @flow strict
import { navbarData } from "@/utils/data/navbarData";
import Link from "next/link";

function Navbar() {
  return (
    <nav className="bg-[#0d1224] fixed top-0 left-0 pt-2 z-10 w-screen shadow-md shadow-violet-600">
      <div className="bg-[#0d1224] flex items-center justify-between py-5 px-10">
        <div className="flex flex-shrink-0 items-center bg-[#0d1224]">
          <Link
            href="/"
            className=" text-[#16f2b3] text-3xl font-bold">
            KAVIT DESAI
          </Link>
        </div>

        <ul className="mt-4 flex h-screen max-h-0 w-full flex-col items-start text-sm opacity-0 md:mt-0 md:h-auto md:max-h-screen md:w-auto md:flex-row md:space-x-1 md:border-0 md:opacity-100" id="navbar-default">
          {navbarData.map((item, index) => {
            return (
              <li key={index}>
                <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href={`${item.to}`}>
                  <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">{item.navlink.toUpperCase()}</div>
                </Link>
              </li>
            )
          })}
          {/* <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#experience"><div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">EXPERIENCE</div></Link>
          </li>
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#skills"><div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">SKILLS</div></Link>
          </li>
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#education"><div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">EDUCATION</div></Link>
          </li>
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/blog"><div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">BLOGS</div></Link>
          </li>
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#projects"><div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">PROJECTS</div></Link>
          </li> */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;