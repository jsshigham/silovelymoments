import "./kindWords.css";
import KindWordsTile from "../../components/KindWordsTile";

function KindWords() {
  interface TileData {
    id: string;
    photo: string;
    quote: string;
    name: string;
  }
  // I added a-f after 1-8 so thats why its different
  const quoteData: TileData[] = [
    {
      id: "a",
      photo: "/kindWordsPage/tilePhotos/tileA.jpg",
      quote: `We are BEYOND grateful to have had Siera capture our elopement day! From the very first moment we met her, she made us feel like we were not just clients, but friends. Her warmth and kindness put us at ease immediately, and that made the whole experience so much more relaxed and enjoyable. Our family at the elopement have not stopped raving about how much they loved her too. You can tell she truly cares! She has an incredible talent for making you feel comfortable in front of the camera, and she has such a natural ability to capture those authentic, intimate moments.. Every photo feels so personal, like she was able to see and capture the essence of us as a couple. We were seriously so amazed at how many beautiful shots she managed to get, and we’ve received endless compliments from friends and family about how stunning the photos turned out. She was quick, professional, and SO TALENTED. We are absolutely obsessed with the photos she captured. If you're looking for someone who is not only a talented photographer but also a kind and genuine person who truly cares about your story, we cannot recommend Siera enough. She made our day even more special. I would give her a million stars if I could!!`,
      name: "NICOLE & AUSTIN",
    },
    {
      id: "b",
      photo: "/kindWordsPage/tilePhotos/tileB.jpg",
      quote: `Siera captured the moment I got engaged and she absolutely killed it! She made my fiancé and I feel so comfortable in front of the camera. We both can be a bit awkward, but with her guidance each shot looked so natural. She executes whatever style/vibe you are going for, from helping pick outfits to the final edits. She really is amazing and anyone would be lucky to have her capture any special moment.`,
      name: "SHELBY",
    },
    {
      id: "c",
      photo: "/kindWordsPage/tilePhotos/tileC.jpg",
      quote: `My husband and I have shot with Siera several times. She is so gifted at what she does. She will make a stranger feel like a family member or best friend in a matter of minutes. This makes it so easy to take pictures with her. She knows exactly what to do to capture that special smile or candid moment that’s going to be up on your wall for years to come. Siera was the only photographer at our wedding and she managed to be everywhere at once. We got so many compliments from all our guests telling us how amazing she was. The pictures she captured that day were truly stunning! I cannot say enough good things about this girl, she is so talented!`,
      name: "HAILEY & MITCH",
    },
    {
      id: "d",
      photo: "/kindWordsPage/tilePhotos/tileD.jpg",
      quote: `I can not say enough great things about working with Siera. She makes the entire process so easy. From picking locations, to helping with outfit collaborations and even giving all of my Pinterest poses a shot- she is the absolute best. You will never feel rushed through your shoot and she is so quick about getting you your final images. We love her natural style and the way she captures our family. We are so lucky to have her capture multiple chapters in our lives and we can't wait to continue using her in the future!`,
      name: "SCIARRA, JOE, & JADE",
    },
    {
      id: "e",
      photo: "/kindWordsPage/tilePhotos/tileE.jpg",
      quote: `Siera is a fantastic photographer to work with. My husband and I worked with Siera on our first family photo shoot and we are so happy with the results! Siera's enthusiasm, patience, creativity and professionalism shone through the entire shoot. She was so easy to work with, very accommodating and AMAZING with babys. Love love love her!!`,
      name: "THERESA",
    },
    {
      id: "f",
      photo: "/kindWordsPage/tilePhotos/tileF.jpg",
      quote: `Siera, thank you so much for my beautiful engagement photos and graduation photos! Your professionalism and personalized approach made the experience truly special. You made my fiancé, who is usually quite shy, feel completely at ease in front of the camera. The photos are beautiful and perfectly capture our personalities and love. We appreciate your creativity, attention to detail, and spontaneousness. We couldn’t have asked for a better photographer which is why I booked you again for graduation pictures!`,
      name: "THE MITCHELL'S",
    },
    {
      id: ".01",
      photo: "/kindWordsPage/tilePhotos/tile1.jpeg",
      quote: `We could not recommend Siera enough! She is friendly, professional and so so talented. Siera was GREAT with my kids and made the session especially fun for my toddler. Our session was easy going, relaxing and fun! She captured the sweetest moments and I am forever grateful for the beautiful photos she took. I will be using Siera again in the spring for more family photos! 😊`,
      name: "FOX FAMILY",
    },
    {
      id: ".02",
      photo: "/kindWordsPage/tilePhotos/tile2.jpeg",
      quote:
        "Siera did an amazing job capturing my special moments of graduating college! She made the environment very warm, welcoming, and fun! She helped with everything and loved her communication skills. She is amazing in all and got the pictures back very quick. Amazing!",
      name: "MADALINE",
    },
    {
      id: ".03",
      photo: "/kindWordsPage/tilePhotos/tile3.jpeg",
      quote:
        "Siera is amazing at doing family shoots, and well any shoot. She has captured my family grow from maternity shoots, baby photos, and family shoots. I will never go to anyone else to capture our precious moments!!!",
      name: "ROSS FAMILY",
    },
    {
      id: ".04",
      photo: "/kindWordsPage/tilePhotos/tile4.jpeg",
      quote: `oh my goddddddd Siera!!!!!
      you did such a wonderful job!!
      these are fantastic!!! thank you so much<3`,
      name: "MIA VARNER",
    },
    {
      id: ".05",
      photo: "/kindWordsPage/tilePhotos/tile5.jpeg",
      quote: `Siera did an incredible job with our family pictures. Being so patient with our toddlers while capturing images that fit our family perfectly. Couldn’t recommend her more!`,
      name: "ORDWAY FAMILY",
    },
    {
      id: ".06",
      photo: "/kindWordsPage/tilePhotos/tile6.jpeg",
      quote: `Thank you so much!! They are so beautiful! Best photographer I could’ve asked for!`,
      name: "JESSE & DELANEY",
    },
    {
      id: ".07",
      photo: "/kindWordsPage/tilePhotos/tile7.jpeg",
      quote: `These came out so beautiful, you are amazing! thank you again so so much <3`,
      name: "BABY WATTS",
    },
    {
      id: ".08",
      photo: "/kindWordsPage/tilePhotos/tile8.jpeg",
      quote: `Siera did an amazing job on our family photos. This was our first family photo session as a family of three and the photos were perfect. We cannot wait to use them on our Christmas card. Siera did a great job capturing these memories with our four month old.`,
      name: "ALLIE PARDON",
    },
  ];

  return (
    <main>
      <section className="bannerSection">
        <div className="banner">
          <p className="bannerText">{`HERE’S WHAT MY CLIENTS SAY ABOUT THEIR PHOTOS`}</p>
          <a className="bannerLink" href="/contact">
            BOOK A SESSION
          </a>
        </div>
      </section>
      <section className="tileSection">
        <h2 className="tileSubtitle">KIND WORDS</h2>
        <div className="tile-grid">
          {quoteData.map((item) => (
            <KindWordsTile
              key={item.id}
              photo={item.photo}
              quote={item.quote}
              name={item.name}
              number={item.id}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

export default KindWords;
