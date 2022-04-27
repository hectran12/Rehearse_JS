// Nguyên lý hoạt động của ++ và == 
// hậu tố ko update ngay trên variable
// tiền tố update ngay trên variable
var number = 6;
var output = ++number - number++;
console.log(output)
console.log(number);