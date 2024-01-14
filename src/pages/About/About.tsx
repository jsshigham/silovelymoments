// import { useContext } from "react";
// import MyContext from "../MyContext";
import "./aboutPage.css";

function About() {
  // const { screenWidth } = useContext(MyContext)!;
  return (
    <main className="aboutPage">
      <section>
        <div id="sieraWithCameraDiv">
          <img
            id="sieraWithCamera"
            src="/aboutPage/sieraWithCamera.jpeg"
            alt="Siera with Camera"
          />
        </div>
        <article id="aboutDescription">
          <h1 className="descriptionTitle">SIERA CULLINS</h1>
          <h6 className="descriptionSubtitle">{`CAPTURING LIGHT, FEELINGS & MOMENTS AND ALL THE THINGS IN BETWEEN HUMANS AND LIFE.`}</h6>
          <p className="mainText">
            {`My name is Siera & I absolutely adore documenting love! I am a full-time school psychologist for tiny humans & a part-time photographer for all humans. Also, I am currently in my fiancé & auntie era which is the best everrrr! I mainly schedule sessions for weekday golden hour & weekends any hour. My style aims towards timeless & documentary, always starting with a portrait & then just having fun with lots of movement & love. Right now my favorite sessions are families! Bring the kiddos, pets, & chaos. I LOVE IT!! I have officially added weddings to my packages & I am so excited for my 2024 booked weddings! My first solo wedding is in a month & I feel so giddy & ready! Second shooting tons of weddings in 2023 helped me grow so much & I’m so grateful for all I have learned within the photography industry! I primarily shoot in Florida and California. I currently live in Florida & I am from California & love to go back and visit. My fiancé and I are moving in June for his career (place not determined yet) so stay tuned on this wild journey we are on!`}
          </p>
          <h5 className="descriptionSubtitle">CHEERS!</h5>
        </article>
        <div id="cheersInTheWoodsDiv">
          <img
            id="cheersInTheWoods"
            src="/aboutPage/cheersInTheWoods.jpeg"
            alt="Four people cheers in the woods"
          />
        </div>
      </section>
    </main>
  );
}

export default About;
