import { useContext } from "react";
import MyContext from "../MyContext";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

function NavBar() {
  const { screenWidth, isNavBarOpen, setIsNavBarOpen } = useContext(MyContext)!;

  let smallScreenSize = false;
  if (screenWidth < 1024) {
    smallScreenSize = true;
  }

  const links1 = [
    { title: "HOME", link: "/" },
    { title: "ABOUT", link: "/about" },
    { title: "KIND WORDS", link: "/kind-words" },
  ];
  const links2 = [
    { title: "MOMENTS", link: "/moments" },
    { title: "SESSIONS", link: "/sessions" },
    { title: "CONTACT", link: "/contact" },
  ];

  const linksAll = [...links1, ...links2];

  return (
    <header className="navBarHeader">
      {smallScreenSize ? (
        <nav className="smallNavBar ">
          <a id="navBar-title-small" href="/">
            <img
              className="logo"
              src="/si.lovelymoments_logo.png"
              alt="Si Lovely Moments Logo"
            />
          </a>
          <button
            onClick={() => setIsNavBarOpen((prev) => !prev)}
            className="navBarMenuBtn"
          >
            <AiOutlineMenu />
          </button>
          {isNavBarOpen && (
            <div className="navBarOpenContainer">
              <button
                onClick={() => setIsNavBarOpen((prev) => !prev)}
                className="navBarCloseBtn"
              >
                <AiOutlineClose />
              </button>
              <ul className=" navBarOpenMenu absolute">
                {linksAll.map(({ title, link }) => {
                  return (
                    <a
                      key={title}
                      className=" navBar-links navBarOpenLinks"
                      href={link}
                    >
                      <h1>{title}</h1>
                    </a>
                  );
                })}
              </ul>
            </div>
          )}
        </nav>
      ) : (
        <nav className="navBar">
          {links1.map((link) => (
            <a className="navBar-links" key={link.title} href={link.link}>
              {link.title}
            </a>
          ))}
          <a id="navBar-title-big" href="/">
            <img
              className="logo"
              src="/si.lovelymoments_logo.png"
              alt="Si Lovely Moments Logo"
            />
          </a>

          {links2.map((link) => (
            <a className="navBar-links" key={link.title} href={link.link}>
              {link.title}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}

export default NavBar;
