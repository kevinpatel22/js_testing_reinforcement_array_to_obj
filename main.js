function arrayToObj(arr) {
   
      return arr.reduce(function (data, movie) {
         data[movie[0]] = movie[1];
         return data;
      }, {});
}

module.exports = arrayToObj;
