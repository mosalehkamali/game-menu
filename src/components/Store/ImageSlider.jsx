import { useState } from "react";
import './ImageSlider.css'

const slideStyles = {
  width: "50%",
  margine: "0px !important",
  height: "100%",
  borderRadius: "10px",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const rightArrowStyles = {
  position: "absolute",
  top: "50%",
  transform: "translate(0, -50%)",
  right: "32px",
  fontSize: "45px",
  color: "#fff",
  zIndex: 1,
  cursor: "pointer",
};

const textStyle ={
  position: "absolute",
  top: "35%",
  transform: "translate(0, -50%)",
  right: "70px",
  left: "52%",
  fontSize: "20px",
  color: "#fff",
  zIndex: 1,
  cursor: "", 
  fontFamily: "LogoFont"
}

const leftArrowStyles = {
  position: "absolute",
  top: "50%",
  transform: "translate(0, -50%)",
  left: "32px",
  fontSize: "45px",
  color: "#fff",
  zIndex: 1,
  cursor: "pointer",
};

const sliderStyles = {
  position: "relative",
  height: "100%",
};

const dotsContainerStyles = {
  display: "flex",
  justifyContent: "center",
};

const dotStyle = {
  margin: "0 3px",
  cursor: "pointer",
  fontSize: "20px",
};

const starStyle = {
  width: "30px",
  height: "30px",
  backgroundColor: "#EBCB00",
  clipPath: "polygon(50% 0%, 60% 33%, 100% 35%, 70% 55%, 80% 90%, 50% 67%, 20% 90%, 31% 56%, 0% 35%, 40% 33%)",
}

const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  const slideStylesWidthBackground = {
    ...slideStyles,
    backgroundImage: `url(https://blackhill360.ir${slides[currentIndex].image})`,
  };
  const text = slides[currentIndex].body;


  return (
    <div style={sliderStyles}>
      <div>
        <div onClick={goToPrevious} style={leftArrowStyles}>
          ❰
        </div>
        <div onClick={goToNext} style={rightArrowStyles}>
          ❱
        </div>
      </div>

    {/* <div className='content'> */}
      <div style={slideStylesWidthBackground}></div>
      <div style={textStyle}>{text}
      </div>

    <div className="star-box">
      <p>Rate this story</p>
      ... 4.8 
      <div style={starStyle}></div>
      <div style={starStyle}></div>
      <div style={starStyle}></div>
      <div style={starStyle}></div>
      <div style={starStyle}></div>
      </div>
      
      
    {/* </div> */}
      
      <div style={dotsContainerStyles}>
        {slides.map((slide, slideIndex) => (
          <div
            style={dotStyle}
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
          >
            ●
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;