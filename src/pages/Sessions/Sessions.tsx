import "./sessions.css";

function Sessions() {
  const sessionTypes: string[] = [
    "FAMILY",
    "GRADUTION",
    "COUPLES",
    "NEWBORNS",
    "BOUDOIR",
    "PORTRAITS",
    "FAMILY",
    "LANDSCAPE",
    "ENGAGMENTS",
    "MATERNITY",
  ];

  return (
    <main>
      <section className="sessionsSection1">
        <h6 className="sessionsHeading">
          INQUIRE FOR SPECIFIC PACKAGES AND PRICING GUIDES
        </h6>
        <div className="section1Grid">
          <div className="section1ImgDiv">
            <img
              className="section1Img"
              src="/sessionsPage/section1Img.jpeg"
              alt="Couple on Wedding Day"
            />
          </div>

          <div className="section1TitleAndTypes">
            <h2 className="section1Title">SESSION TYPE</h2>
            <div className="section1SessionTypes">
              {sessionTypes.map((type) => (
                <span>{type}</span>
              ))}
            </div>
          </div>
          <div>
            <div className="height"></div>
            <span className="pricing">FROM: $200</span>
          </div>
        </div>
      </section>
      <section className="detailsSection">
        <p>
          <span>Includes:</span> <br />
          <br />
          High-resolution images <br />
          <br />
          All photos edited and delivered digitally <br />
          <br />
          Gallery delivered within 1-2 weeks (4-6 for weddings) <br />
          <br />
          Outfit change if wanted/needed <br />
          <br />
          Indoor and/or outdoor setting <br />
          <br />
          Fun and loving atmosphere <br />
          <br />
          Personalized questionaire
        </p>
        <p>
          <span>Add-Ons:</span> <br />
          <br />
          <span className="bold">
            Location that requires travel and/or hotel
          </span>
          <br />
          <br />
          I love to capture photos in new places <br />
          <br />
          <span className="bold">
            Additional time <br />
          </span>
          <br />
          I want to be able to make your session everything you want/need <br />
          <br />
          <span className="bold">
            Special request <br />
          </span>
          <br />
          Whether its champagne, flowers, a picnic, a sign, etc. I am your girl
        </p>
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
