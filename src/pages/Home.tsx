// import { useContext } from "react";
// import MyContext from "../MyContext";
import "./homePage.css";

function Home() {
  // const { screenWidth } = useContext(MyContext)!;

  return (
    <main className="homePage">
      <section className="homeSection1">
        <img
          className="logo"
          src="/si.lovelymoments_logo.png"
          alt="Si Lovely Moments Logo"
        />
      </section>
      <section className="homePageSection2">
        <img className="section2Img" src="/homePage/section2img1.jpeg" alt="" />
        <img className="section2Img" src="/homePage/section2img2.jpeg" alt="" />
        <img className="section2Img" src="/homePage/section2img3.jpeg" alt="" />
      </section>
      <a className="homePageSection3" href="/contact">
        Book a Session
      </a>
    </main>
  );
}

export default Home;
