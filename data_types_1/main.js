//string
var lastName = "Trọng \'";
var firstName = "Hòa\'";
console.log(lastName+firstName);
gettype(lastName);

//number
var numberA = 13;
console.log(numberA);
gettype(numberA);

//boolean
var isOn = false;
console.log(isOn);
gettype(isOn);

//undefined
var taoroibokhong;
console.log(taoroibokhong);
gettype(taoroibokhong);

//NaN
var isNaN = NaN;
console.log(isNaN);
gettype(isNaN);

//Null
var isNothing = null;
console.log(isNothing);
gettype(isNothing);

//symbol
var simp = Symbol("id");
console.log(simp);
gettype(simp);

//function in variables 
var myFunction = function(){
    alert("My lord!");
    return "Chức năng hiện My lỏd";
}
console.log("Đã bật: "+myFunction());
gettype(myFunction);

//Object
var myObj = {
    name : 'Trong Hoa',
    age : 10,
    work : 'Online',
    status : true,
    chucnangcuagai : function(){
        console.log("Chức năng cua gái hiện đéo tồn tại!");
    }
};
myObj.chucnangcuagai();
console.log(myObj.name);
gettype(myObj);

//list
var myGirlFriends = [
    "Ha thu",
    "Ha chi",
    "Ha cha ma",
    "Ban mai"
];
console.log(myGirlFriends[0]);
gettype(myGirlFriends);


function gettype (check){
    console.log("Kiểu dữ liệu: "+typeof check);
}