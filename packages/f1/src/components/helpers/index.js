// capitalise first letter of each word
const capitalise = (str) => {
  let ret = "";
  str.split(" ").map((x) => {
    ret += x.charAt(0).toUpperCase() + x.slice(1) + " ";
  });
  return ret;
};

export default capitalise;
