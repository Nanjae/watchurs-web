import Theme from "./Theme";

export const hex2rgba = (hex, alpha = 1) => {
  const [r, g, b] = hex.match(/\w\w/g).map(x => parseInt(x, 16));
  return `rgba(${r},${g},${b},${alpha})`;
};

export const deepBlueColor = hex2rgba(Theme.deepBlueColor, 0.5);
export const darkBlueColor = hex2rgba(Theme.darkBlueColor, 0.5);
export const lightOrangeColor = hex2rgba(Theme.lightOrangeColor, 0.1);
