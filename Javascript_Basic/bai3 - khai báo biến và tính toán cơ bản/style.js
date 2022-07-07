
// khai báo biến

var x , y , z;

x = 5 , y = 6 , z = x + y;

console.log(z);

// khai báo một cục biến

let a = 9, u = 10, k = a + u;

alert(k);

// khai báo hằng

function tinh () {
    const a = document.getElementById("so1").innerHTML;
    const b = document.getElementById("so2").innerHTML;
    const c = parseInt(a) + parseInt(b);
    document.getElementById("change_result").innerHTML = c.toString();
}