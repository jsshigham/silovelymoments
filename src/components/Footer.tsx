import { MdOutlineCopyright, MdOutlineArrowUpward } from "react-icons/md";

export const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer>
      <div className="footerDiv">
        <MdOutlineCopyright /> <p>{year} si.lovelymoments</p>{" "}
      </div>
      <button className="scrollBtn" onClick={scrollToTop}>
        <MdOutlineArrowUpward />
      </button>
    </footer>
  );
};
