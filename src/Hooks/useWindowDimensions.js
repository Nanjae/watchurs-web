import { useState, useEffect } from "react";

const getWindowDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window;
  if (width < 360) {
    const bgHeight = 202.5;
    return {
      windowWidth: 360,
      windowHeight: height,
      bgHeight,
      headerHeight: 114,
      mainHeight: bgHeight - 114
    };
  } else if (width < 900) {
    const bgHeight = width * 0.5625;
    return {
      windowWidth: width,
      windowHeight: height,
      bgHeight,
      headerHeight: 114,
      mainHeight: bgHeight - 114
    };
  } else {
    const bgHeight = width * 0.5625;
    return {
      windowWidth: width,
      windowHeight: height,
      bgHeight,
      headerHeight: 225,
      mainHeight: bgHeight - 225
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
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
};
