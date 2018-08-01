module.exports = function main(a) {
  // Write your code here
  var sum = 0;
  while(a != 0){
    sum += a % 10;
    a = (a / 10).toFixed(0);
  }
  return sum;
};
