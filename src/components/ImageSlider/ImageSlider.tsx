import { useEffect, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { imageSliderImgs } from "./sliderData";

const TOTAL_IMAGES = 49; // Total number of images

const ImageSlider = () => {
  const [currentImg, setCurrentImg] = useState(
    Math.floor(Math.random() * TOTAL_IMAGES)
  );

  useEffect(() => {
    const intervalId = setInterval(nextImg, 3000);

    return () => clearInterval(intervalId);
  });

  const nextImg = () =>
    currentImg === TOTAL_IMAGES - 1
      ? setCurrentImg(0)
      : setCurrentImg(currentImg + 1);
  const lastImg = () =>
    currentImg === 0
      ? setCurrentImg(TOTAL_IMAGES - 1)
      : setCurrentImg(currentImg - 1);

  const minus2Slide = (currentImg - 2 + TOTAL_IMAGES) % TOTAL_IMAGES;
  const plus2Slide = (currentImg + 2) % TOTAL_IMAGES;

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
                      currentImg === 0 ? TOTAL_IMAGES - 1 : currentImg - 1
                    }.jpg`}
                    alt=""
                    onClick={() =>
                      setCurrentImg(
                        currentImg === 0 ? TOTAL_IMAGES - 1 : currentImg - 1
                      )
                    }
                  />
                  <img
                    src={`/homePage/slideShowImages/imgg${currentImg}.jpg`}
                    alt=""
                  />
                  <img
                    src={`/homePage/slideShowImages/imgg${
                      currentImg === TOTAL_IMAGES - 1 ? 0 : currentImg + 1
                    }.jpg`}
                    alt=""
                    onClick={() =>
                      setCurrentImg(
                        currentImg === TOTAL_IMAGES - 1 ? 0 : currentImg + 1
                      )
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
