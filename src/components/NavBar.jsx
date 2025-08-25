import { useState } from "react";
import { HiOutlineMenu, HiX } from "react-icons/hi";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full px-6 py-4 shadow-md text-emerald-200 bg-emerald-900">
      <div className="flex items-center justify-between max-w-6xl mx-auto">
        <h1 className="text-base font-semibold sm:text-xl lg:text-2xl">
          himanshuPortfolio
        </h1>

        {/* //For Desktop Users */}
        <nav className="hidden xl:block">
          <ul className="flex items-center gap-8">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about"> About Me</a>
            </li>
            <li>
              <a href="#project"> Projects</a>
            </li>
            <li>
              <a href="#contactme"> Contact Me</a>
            </li>
          </ul>
        </nav>

        {/* Mobile icon */}
        <div className=" xl:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <HiX className="w-10 h-10" />
            ) : (
              <HiOutlineMenu className="w-10 h-10 " />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="rounded-lg shadow-lg xl:hidden bg-emerald-800 ">
          <ul className="flex flex-col gap-4 p-4">
            <li>
              <a href="#home" onClick={() => setIsOpen(false)}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" onClick={() => setIsOpen(false)}>
                About Me
              </a>
            </li>
            <li>
              <a href="#project" onClick={() => setIsOpen(false)}>
                Projects
              </a>
            </li>
            <li>
              <a href="#contactme" onClick={() => setIsOpen(false)}>
                Contact Me
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

export default NavBar;
