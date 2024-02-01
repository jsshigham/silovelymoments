import { useEffect, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { imageSliderImgs } from "./sliderData";

const ImageSlider = () => {
  const [currentImg, setCurrentImg] = useState(Math.floor(Math.random() * 94));

  useEffect(() => {
    const intervalId = setInterval(nextImg, 3000);

    return () => clearInterval(intervalId);
  });

  const nextImg = () =>
    currentImg === 93 ? setCurrentImg(0) : setCurrentImg(currentImg + 1);
  const lastImg = () =>
    currentImg === 0 ? setCurrentImg(93) : setCurrentImg(currentImg - 1);

  let minus2Slide: number;
  let plus2Slide: number;
  if (currentImg === 0) {
    minus2Slide = 92;
  } else if (currentImg === 1) {
    minus2Slide = 93;
  } else {
    minus2Slide = currentImg - 2;
  }

  if (currentImg === 93) {
    plus2Slide = 1;
  } else if (currentImg === 92) {
    plus2Slide = 0;
  } else {
    plus2Slide = currentImg + 2;
  }

  return (
    <section className="sliderSection">
      <div className="slidesDiv1">
        {imageSliderImgs.map((image, index) => {
          return (
            <div
              className={index === currentImg ? "imgDiv active" : "imgDiv"}
              key={index}
            >
              {index === currentImg && (
                <img
                  className="currentImgLg"
                  src={`/homePage/slideShowImages/${image}`}
                  alt=""
                />
              )}
            </div>
          );
        })}
      </div>
      <div className="slidesDiv2">
        <IoIosArrowBack onClick={lastImg} className="arrow" />

        {imageSliderImgs.map((image, index) => {
          return (
            <div
              className={index === currentImg ? "imgDiv2 active" : "imgDiv2"}
              key={image}
            >
              {index === currentImg && (
                <>
                  <img
                    src={`/homePage/slideShowImages/imgg${minus2Slide}.jpg`}
                    alt=""
                    onClick={() => setCurrentImg(minus2Slide)}
                  />
                  <img
                    src={`/homePage/slideShowImages/imgg${
                      currentImg === 0 ? 93 : currentImg - 1
                    }.jpg`}
                    alt=""
                    onClick={() =>
                      setCurrentImg(currentImg === 0 ? 93 : currentImg - 1)
                    }
                  />
                  <img
                    src={`/homePage/slideShowImages/imgg${currentImg}.jpg`}
                    alt=""
                  />
                  <img
                    src={`/homePage/slideShowImages/imgg${
                      currentImg === 93 ? 0 : currentImg + 1
                    }.jpg`}
                    alt=""
                    onClick={() =>
                      setCurrentImg(currentImg === 93 ? 0 : currentImg + 1)
                    }
                  />
                  <img
                    src={`/homePage/slideShowImages/imgg${plus2Slide}.jpg`}
                    alt=""
                    onClick={() => setCurrentImg(plus2Slide)}
                  />
                </>
              )}
            </div>
          );
        })}

        <IoIosArrowForward onClick={nextImg} className="arrow" />
      </div>
    </section>
  );
};

export default ImageSlider;
