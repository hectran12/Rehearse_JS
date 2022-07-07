// cấu trúc
let z , y , x;

// sum

x = 5;
y = 6
z = x + y;

function showResult () {
    document.getElementById("change_result").innerHTML = z;
}

function changeNumber () {
    const value = Number.parseInt(document.getElementById("input_number").value);
    document.getElementById("change_result").innerHTML = value + 100;
}

function showName () {
    const ho = document.getElementById("ho").value;
    const ten = document.getElementById("ten").value;
    document.getElementById("change_result").innerHTML = ho + " " + ten;
}
