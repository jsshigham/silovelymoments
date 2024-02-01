import "./sessions.css";

function Sessions() {
  // const sessionTypes: string[] = [
  //   "FAMILY",
  //   "GRADUTION",
  //   "COUPLES",
  //   "NEWBORNS",
  //   "BOUDOIR",
  //   "PORTRAITS",
  //   "FAMILY",
  //   "LANDSCAPE",
  //   "ENGAGMENTS",
  //   "MATERNITY",
  // ];

  return (
    <main>
      <section className="sessionsSection1">
        <h2 className="section1Title">SESSION TYPES</h2>
        {/* <div className="section1Container"> */}
        {/* <div className="section1ImgDiv">
            <img
              className="section1Img"
              src="/sessionsPage/section1Img.jpeg"
              alt="Couple on Wedding Day"
            />
          </div> */}

        <div className="section1SessionsContainer">
          <div className="sessionDiv">
            <h4 className="sessionDivH4">Lifestyle Sessions</h4>
            <div className="lifestyleTypes">
              <span>Family</span>
              <span>Couples</span>
              <span>Maternity</span>
              <span>Newborn</span>
              <span>Graduation</span>
              <span>Engagement</span>
            </div>
            <h6 className="sessionDivH6">Includes:</h6>
            <ul className="sessionUl">
              <li>High-resolution images</li>
              <li>All photos edited and delivered digitally</li>
              <li>Gallery delivered within 2 weeks</li>
              <li>Outfit change if wanted/needed</li>
              <li>Indoor and/or outdoor setting</li>
              <li>Fun and loving atmosphere</li>
            </ul>
            <h6 className="sessionDivH6">Add on:</h6>
            <ul className="sessionUl">
              <li>Location that requires travel and/or hotel</li>
              <li>(I love to capture photos in new places)</li>
              <li>Additional time</li>
              <li>
                (I want to be able to make your session everything you
                want/need)
              </li>
              <li>Special requests</li>
            </ul>
            <h4 className="price sessionDivH4">Prices starting at $200</h4>
          </div>

          <div className="sessionDiv">
            <h4 className="sessionDivH4">
              Wedding <br />{" "}
            </h4>
            <span>Inquire for different pricing packages</span>
            <h6 className="sessionDivH6">Information:</h6>
            <ul className="sessionUl">
              <li>Planning consultation included in all packages</li>
              <li>Sneak peeks within 24 hours</li>
              <li>Gallery delivered within 4-6 weeks</li>
              <li>Balance due one month before wedding</li>
              <li>30% non-refundable deposit due at booking</li>
              <li>
                Travel not included in price (required for session 3 hours +
                away)
              </li>
            </ul>
            <h6 className="sessionDivH6">Add on:</h6>
            <ul className="sessionUl">
              <li>Boudoir Session</li>
              <li>Rehearsal dinner coverage</li>
              <li>Second shooter</li>
              <li>Extra hour(s) of coverage</li>
            </ul>
            <h4 className="price sessionDivH4">Prices start at $2,000</h4>
          </div>
          <div className="sessionDiv">
            <h4 className="sessionDivH4">Boudoir</h4>
            {/* <span>Inquire for different pricing packages</span> */}
            <h6 className="sessionDivH6">Information:</h6>
            <ul className="sessionUl">
              <li>Gallery delivered within 2 weeks</li>
              <li>Balance due two weeks before session</li>
              <li>50% non-refundable deposit due at booking</li>
              <li>
                Travel not included in price (required for session 1 hours +
                away)
              </li>
            </ul>
            <h6 className="sessionDivH6">Add on:</h6>
            <ul className="sessionUl">
              <li>
                Additional time: I want to be able to make your session
                everything you want/need
              </li>
              <li>
                Special Requests: champagne, flowers, a sign, music, veil, etc.
              </li>
            </ul>
            <h4 className="price sessionDivH4">Prices start at $400</h4>
          </div>

          {/* </div> */}
        </div>
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
