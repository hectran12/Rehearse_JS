function click() {
    // theo quy tắc thì khi khai báo biến trong javascript , không được
    // cho nó hoa chữ đầu
    var firtName , lastName , age , work;
    let myCar , myWife , myBank;
    const myHouse = "Hà Nội";
    const myLegit = 100;

    //var
    firtName = "Nguyễn";
    lastName = "Hồng";
    age = 20;
    work = "freelancer";

    // let
    myCar = "Lambogini";
    myWife = "Ngọc";
    myBank = "Viettel";

    // const result
    const result_const = myCar + " " + myWife + " " + myBank;
    // var result
    var result_var = firtName + " " + lastName + " " + age + " " + work;
    
    alert(result_const + " " + result_var);

}