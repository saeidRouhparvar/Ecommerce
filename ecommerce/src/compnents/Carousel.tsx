import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Box } from "@chakra-ui/react";

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === images.length ? 0 : prevIndex + 1
    );
  };
  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
    );
  };
  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <Box className="carousel">
      <img key={currentIndex} src={images[currentIndex]} />
      <Box className="slide_direction">
        <Box className="left" onClick={handlePrevious}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="20"
            viewBox="0 96 960 960"
            width="20"
          >
            <path d="M400 976 0 576l400-400 56 57-343 343 343 343-56 57Z" />
          </svg>
        </Box>
        <Box className="right" onClick={handleNext}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="20"
            viewBox="0 96 960 960"
            width="20"
          >
            <path d="m304 974-56-57 343-343-343-343 56-57 400 400-400 400Z" />
          </svg>
        </Box>
      </Box>
      <Box className="indicator">
        {images.map((_, index) => (
          <Box
            key={index}
            className={`dot ${currentIndex === index ? "active" : ""}`}
            onClick={() => handleDotClick(index)}
          ></Box>
        ))}
      </Box>
    </Box>
  );
};
export default Carousel;