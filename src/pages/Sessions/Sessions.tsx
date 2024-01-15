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
    </main>
  );
}

export default Sessions;
