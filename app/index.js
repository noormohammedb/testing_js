module.exports = {
   add: (ar1, ar2) => {
      return ar1 + ar2;
   },
   sub: (ar1, ar2) => {
      return ar1 - ar2;
   },
   split: (ar1) => {
      return { ...ar1.split(" ") };
   },
}