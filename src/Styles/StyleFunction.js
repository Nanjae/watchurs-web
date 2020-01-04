import Theme from "./Theme";

export const hex2rgba = (hex, alpha = 1) => {
  const [r, g, b] = hex.match(/\w\w/g).map(x => parseInt(x, 16));
  return `rgba(${r},${g},${b},${alpha})`;
};

export const deepBuleColor = hex2rgba(Theme.deepBlueColor, 0.6);
export const darkBuleColor = hex2rgba(Theme.darkBlueColor, 0.6);
