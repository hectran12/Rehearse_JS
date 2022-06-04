
var a = 'a' && 'b' && 'c';
console.log(a)


// Lấy cái cuối là c

/**
  null 
  0
  ''
  NaN
  False
  undefined
**/


//break
var b = null && 'b' && 'c';
console.log(b)
// ngưng ngây null vì thuộc dạng ko giá trị


// ||
var c = 'a' || 'b'; // lấy hẳn giá trị đầu
console.log(c);

// break
var d = NaN || 'b'; // Bỏ qua lấy giá trị cuối
console.log(d);

// check 
var a  = 3;
var b = 4;
var h = a < b && b > a;
console.log(h);