// import { useContext } from "react";
// import MyContext from "../MyContext";
import ImageSlider from "../../components/ImageSlider/ImageSlider";
import "./homePage.css";

function Home() {
  // const { screenWidth } = useContext(MyContext)!;

  const section2Images = [
    { title: "img1", alt: "Wedding Couple with close up on flowers" },
    { title: "img2", alt: "Baby lying on a bed" },
    { title: "img3", alt: "Man holding a woman in a corn field" },
  ];
  const section3ImagesSmall = [
    { title: "imgSmall1", alt: "Kids playing in a park" },
    { title: "imgSmall2", alt: "Daughter next to pregnant mother" },
    { title: "imgSmall3", alt: "Couple lost in each others eyes at the bay" },
  ];

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
        {section2Images.map((image) => (
          <img
            key={image.title}
            className="section2Img"
            src={`/homePage/section2/${image.title}.jpeg`}
            alt={image.alt}
          />
        ))}
      </section>
      <a className="homePageBookASessionBtn" href="/contact">
        BOOK A SESSION
      </a>
      <section className="homePageSection3">
        <div className="homePageSection3ImageLarge">
          <img
            src="/homePage/section3/imgLarge.jpeg"
            alt="A family sitting down and enjoying the beach at sunset"
            id="section3ImgLarge"
          />
        </div>
        <div className="homePageSection3ImagesSmall">
          {section3ImagesSmall.map((image) => (
            <img
              key={image.title}
              className="section3ImgSmall"
              src={`/homePage/section3/${image.title}.jpeg`}
              alt={image.alt}
            />
          ))}
        </div>
      </section>
      <span className="homePageText">MOMENTS WORTH EVERYTHING</span>
      <img
        src="/homePage/section4/imgLarge.jpeg"
        alt="Father, Mother, Daughter and Son enjoying the beach"
        id="section4ImgLarge"
      />
      <span className="homePageText">CAPTURE THE LOVE</span>
      <ImageSlider />
    </main>
  );
}

export default Home;
