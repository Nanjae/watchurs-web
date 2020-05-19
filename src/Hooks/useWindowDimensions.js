import { useState, useEffect } from "react";

const getWindowDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window;

  if (width < 360) {
    return {
      windowWidth: 360,
      windowHeight: height,
    };
  } else {
    return {
      windowWidth: width,
      windowHeight: height,
    };
  }
};

export default () => {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions(getWindowDimensions());
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return windowDimensions;
};
