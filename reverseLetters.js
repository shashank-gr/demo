const revLetters = function (s) {
  let ans = s
    .split(" ")
    .map((word) => {
      return word.split("").reverse().join("");
    })
    .join(" ");
  return ans;
};

const revWords = (s) => {
  return s.split(" ").reverse().join(" ");
};
console.log(revWords("Hi How Are You"));
