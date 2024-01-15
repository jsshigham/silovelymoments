import MomentsTile from "../../components/MomentsTile";
import "./moments.css";

function Moments() {
  interface momentData {
    id: number;
    imgPath: string;
    photoType: string;
  }
  const momentsData1: momentData[] = [
    {
      id: 1,
      imgPath: "/momentsPage/row1img1.jpeg",
      photoType: `ENGAGEMENT + COUPLES`,
    },
    {
      id: 2,
      imgPath: "/momentsPage/row1img2.jpeg",
      photoType: `FAMILY`,
    },
    {
      id: 3,
      imgPath: "/momentsPage/row1img3.jpeg",
      photoType: `MATERNITY`,
    },
    {
      id: 4,
      imgPath: "/momentsPage/row1img4.jpeg",
      photoType: `GRADUTION + PORTRAITS`,
    },
  ];

  const momentsData2: momentData[] = [
    {
      id: 5,
      imgPath: "/momentsPage/row2img1.jpeg",
      photoType: `WEDDINGS`,
    },
    {
      id: 6,
      imgPath: "/momentsPage/row2img2.jpeg",
      photoType: `BOUDOIR`,
    },
    {
      id: 7,
      imgPath: "/momentsPage/row2img3.jpeg",
      photoType: `LANDSCAPE`,
    },
    {
      id: 8,
      imgPath: "/momentsPage/row2img4.jpeg",
      photoType: `NEWBORNS`,
    },
  ];
  return (
    <main>
      <h1 className="momentsTitle">MOMENTS THAT I CAPTURE</h1>
      <section className="momentTypeSection">
        <div className="momentsTileRow">
          {momentsData1.map((moment) => (
            <MomentsTile
              photoType={moment.photoType}
              id={moment.id}
              imgPath={moment.imgPath}
            />
          ))}
        </div>
        <div className="momentsTileRow">
          {momentsData2.map((moment) => (
            <MomentsTile
              photoType={moment.photoType}
              id={moment.id}
              imgPath={moment.imgPath}
            />
          ))}
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

export default Moments;
