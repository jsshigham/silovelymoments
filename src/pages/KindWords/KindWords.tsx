import "./kindWords.css";
import KindWordsTile from "../../components/KindWordsTile";

function KindWords() {
  interface TileData {
    id: string;
    photo: string;
    quote: string;
    name: string;
  }

  const quoteData: TileData[] = [
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
      photo: "/kindWordsPage/tilePhotos/tile6landscape.jpeg",
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
