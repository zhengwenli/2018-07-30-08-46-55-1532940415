module.exports = function main(a) {
  // Write your code here
  var sum = 0;
  while(a != 0){
    sum += a % 10;
    a = (a - a % 10) / 10;
  }
  return sum;
};
