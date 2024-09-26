import React from "react";
import logo from "../assets/logo.png";
import search1 from "../assets/search.gif";
import search2 from "../assets/search.svg";
import cross from "../assets/cross.svg";
import hamburger from "../assets/hamburger.svg";

const Navbar = () => {
  const [isHovered, setIsHovered] = React.useState(false);
  const [isHamburger, setIsHamburger] = React.useState(true);
  const isMenu = React.useRef(null);
  const [isDesktop, setIsDesktop] = React.useState(window.innerWidth >= 640);
  const [isMobile, setIsMobile] = React.useState(window.innerWidth < 640);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
      setIsDesktop(window.innerWidth >= 640);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleMouseOver = () => {
    if (isDesktop) {
      setIsHovered(true);
    }
  };

  const handleMouseOut = () => {
    if (isDesktop) {
      setIsHovered(false);
    }
  };

  const showInput = () => {
    const input = document.getElementById("search-input");
    if (isMobile) {
      if (input.style.display === "block") {
        input.style.display = "none";
      } else {
        input.style.display = "block";
        input.focus();
      }
    }
  };


  function handleHamburger() {
    setIsHamburger(!isHamburger);
  }

  React.useEffect(() => {
    showMenu();
  }, [isHamburger]);

  function showMenu() {
    if (!isHamburger) {
      isMenu.current.style.display = "block";
    } else {
      isMenu.current.style.display = "none";
    }
  }

  return (
    <div className="NavbarContainer bg-violet-500 top-0 left-0 right-0 relative">
      <nav className="flex items-center justify-between mx-4">
        <div className="logoContainer">
          <img className="w-[50px] h-[50px]" src={logo} alt="logo" />
        </div>
        <div className="listSeachContainer flex gap-5 items-center">
          <div className="searchInput w-[30px] sm:w-[350px] flex justify-center items-center text-black sm:bg-white sm:border rounded-full p-1 cursor-pointer">
            <div className="border border-transparent h-[40px] sm:h-[28px] sm:border-none absolute sm:relative right-0 sm:top-0 top-[70px] w-full">
              <input
                id="search-input"
                className="w-[95vw] sm:m-0 m-auto sm:w-full h-[40px] sm:h-full pl-2 sm:block sm:relative sm:rounded-l-full outline-none cursor-pointer"
                type="text"
                placeholder="Search"
                style={{ display: isDesktop ? "block" : "none" }}
              />
            </div>
            <div
              className="searchImageContainer w-[35px]"
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            >
              <img
                className="w-[28px]"
                src={isHovered ? search1 : search2}
                onClick={showInput}
                alt="search"
              />
            </div>
          </div>
          <ul className="sm:flex gap-4 text-sm font-semibold hidden">
            <li className="cursor-pointer text-slate-300 hover:text-white">Home</li>
            <li className="cursor-pointer text-slate-300 hover:text-white">About</li>
            <li className="cursor-pointer text-slate-300 hover:text-white">Contact us</li>
          </ul>
          <div className="HamburgerCross flex" onClick={handleHamburger}>
            {isHamburger ? (
              <img
                className="w-[24px] block sm:hidden"
                src={hamburger}
                alt="hamburger menu"
              />
            ) : (
              <img
                className="w-[24px] block sm:hidden"
                src={cross}
                alt="cross icon"
              />
            )}
          </div>
          <ul
            ref={isMenu}
            className="sm:flex flex-col gap-4 text-[14px] font-semibold absolute top-[45px] right-[10px] border-xl py-3 px-3 w-[100px] bg-white border border-gray-600"
          >
            <li>Home</li>
            <li>About</li>
            <li>Contact us</li>
            <li>Blog</li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;