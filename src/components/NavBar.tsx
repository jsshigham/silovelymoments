import { useContext } from "react";
import MyContext from "../MyContext";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

function NavBar() {
  const { screenWidth, isNavBarOpen, setIsNavBarOpen } = useContext(MyContext)!;

  let smallScreenSize = false;
  if (screenWidth < 1024) {
    smallScreenSize = true;
  }

  console.log(screenWidth);

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

  const titleDecor = [
    "•",
    "•",
    "•",
    "•",
    "•",
    "•",
    "•",
    "•",
    "•",
    "•",
    "•",
    "•",
    "•",
    "•",
  ];

  return (
    <header className="navBarHeader">
      {!smallScreenSize ? (
        <div className="navBar">
          {links1.map((link) => (
            <a className="navBar-links" key={link.title} href={link.link}>
              {link.title}
            </a>
          ))}
          <a className="navBar-links" id="navBar-title-big" href="/">
            {titleDecor.map((decor) => (
              <span className="navBar-links" id="navBarDecor">
                {decor}
              </span>
            ))}
          </a>

          {links2.map((link) => (
            <a className="navBar-links" key={link.title} href={link.link}>
              {link.title}
            </a>
          ))}
        </div>
      ) : (
        <div className="smallNavBar ">
          <a className="navBar-links" id="navBar-title-small" href="/">
            {titleDecor.map((decor) => (
              <span className="navBar-links" id="navBarDecor">
                {decor}
              </span>
            ))}
          </a>
          <button
            onClick={() => setIsNavBarOpen((prev) => !prev)}
            className=" navBarMenuBtn"
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
              <ul className=" navBarOpenMenu absolute  flex flex-col gap-3 items-start w-72 rounded bg-otfMaroon top-10 p-5">
                {linksAll.map(({ title, link }) => {
                  return (
                    <a
                      key={title}
                      className=" navBar-links navBarOpenLinks hover:bg-otfImageGrey p-2 rounded flex justify-between w-full items-center"
                      href={link}
                    >
                      <h1>{title}</h1>
                    </a>
                  );
                })}
              </ul>
            </div>
          )}
        </div>
      )}
    </header>
  );
}

export default NavBar;
