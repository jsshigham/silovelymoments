import "./contact.css";

function Contact() {
  return (
    <main>
      <section className="section1">
        <img
          src="/contactPage/sieraWithCameraStanding.jpeg"
          alt="Siera with camera"
        />
        <div className="section1Right">
          <span className="section1RightHeading">
            DON'T HESITATE, <br /> CONTACT ME FOR ANY <br /> INFORMATION
          </span>
          <p>
            <span>
              INQUIRIES: <br />
              <br />
            </span>
            <a
              href="https://unscriptedforphotographers.com/b/OwxrE2lhk9nVqJ"
              className="section1Btn"
            >
              COMPLETE THIS BOOKING FORM
            </a>
          </p>
          <p>
            <span>
              FOLLOW: <br />
              <br />
            </span>
            <a
              href={`https://www.instagram.com/si.lovelymoments?igsh=NWxhbnUyOGhianRr&utm_source=qr`}
              className="section1Btn"
            >
              INSTAGRAM @si.lovelymoments
            </a>
            <i></i>
          </p>
          <p>
            <span>
              {" "}
              PURCHASE: <br />
              <br />
            </span>
            <a
              href={`https://silovelymoments.etsy.com/`}
              className="section1Btn"
            >
              LANDSCAPES AVAILIBLE THROUGH ETSY
            </a>
          </p>
        </div>
      </section>
      <img
        className="momentsLogo"
        src="/si.lovelymoments_logo.png"
        alt="Si Lovely Moments Logo"
      />
    </main>
  );
}

export default Contact;
