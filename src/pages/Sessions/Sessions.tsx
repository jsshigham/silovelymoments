import { useState, useEffect } from "react";
import "./sessions.css";

function Sessions() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <main>
      <section className="sessionsSection1">
        <h2 className="section1Title">SESSION TYPES</h2>

        <div className="section1SessionsContainer">
          <img
            id="pricingImage"
            src={
              isMobile
                ? "/public/sessionsPage/pricingPortrait.png"
                : "/public/sessionsPage/pricingLandscape.png"
            }
            alt="Description of the different services offered"
          />
        </div>
        <h6 className="disclaimer">*Inquire for different pricing packages</h6>
      </section>

      <section className="backgroundImgSection">
        <span className="bottomTextSm">MEMORIES WORTH EVERYTHING</span>
        <p className="bottomTextLg">
          I WOULD LOVE TO CAPTURE ALL OF YOUR LOVELY MOMENTS
        </p>
        <a className="bottomTextLink" href="/contact">
          CONTACT ME
        </a>
      </section>
    </main>
  );
}

export default Sessions;
