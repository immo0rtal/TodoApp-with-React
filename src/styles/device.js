const size = {
  mobileL: "590px",
  tablet: "900px",
  laptop: "1024px",
};

export default {
  mobileL: `(max-width: ${size.mobileL})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
};
