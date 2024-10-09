var series = [1,3,4,5,6,7,8,9,10];
var missingNumber;

for (var i = 1; i <= series.length + 1; i++) {
  if (!series.includes(i)) {
    missingNumber = i;
    break;
  }
}
console.log("Missing Number:", missingNumber);
