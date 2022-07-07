let datahocsinh, datahocsinh_clone;
datahocsinh = [];
datahocsinh_clone = [];
let Session;
// test function
function test() {
    console.log("Active");
}

// repeat khoang cach
function khoangcach (value) {
    value.innerHTML = "&nbsp".repeat(parseInt(value.className))
}

// getElement

function getPhantu (id) {
    return document.querySelectorAll("#"+id);
}

// action cach 
function actionSpace (arr){
    arr.forEach(phantu => {
        khoangcach(phantu);
    });
}


// function hoc sinh
function themhocsinh () {
    const edit = getPhantu("edit")[0];
    if(edit.value == "Chỉnh sửa") {
        console.log("Session is " + Session);
        editStudent(Session);
        edit.value = "Thêm học sinh";
    } else {
        // get all element student info in a your input
        let first, last, lop;
        first = getPhantu("fname")[0].value;
        last  = getPhantu("lname")[0].value;
        lop   = getPhantu("lop")[0].value;

        // check
        let check_first, check_last, check_lop;
        check_first = first == "" || first == undefined;
        check_last  = last  == "" || last  == undefined;
        check_lop   = lop   == "" || lop   == undefined;
        if(check_first == true || check_last == true) {
            show_nocation("Bạn chưa ghi tên và họ!", "red");
        } else {
            //=======================add student==================
            show_nocation("Bạn đã thêm thành công học sinh", "green");
            datahocsinh.push(getHocSinh(first, last, lop));
            datahocsinh_clone.push(getHocSinh(first, last, lop));
            show_hocsinh();
        }
    }
    
    

}


function show_hocsinh () {
    // clear element
    let element;
    element = getPhantu("customers")[0];
    element.innerHTML = "";
    element.innerHTML = `
        <tr>
            <th>Họ và tên</th>
            <th>Lớp</th>
            <th>Ngày thêm</th>
            <th>Thao tác</th>
        </tr>
    `;

    //========= show student =========
    datahocsinh.forEach(phantu => {
        element.innerHTML += `
            <tr id=${phantu.stt}>
                <td>${phantu.fullName}</td>
                <td>${phantu.class}</td>
                <td>${phantu.ngayThem + " vào phút " + phantu.getDateObject.getMinutes() + " " + phantu.getDateObject.getSeconds() + " giây!"}</td>
                <td>
                    <button onclick="removeStudent(${phantu.stt})">Xóa</button>
                    <button onclick="editStudent(${phantu.stt})">Chỉnh sửa</button>
                </td>         
            </tr>
        `;
    });
}

function removeStudent(stt) {
    const student = getElementWithIndex(stt);
    const ask = confirm("Bạn chắc chứ?");
    if(ask) {
        delete datahocsinh[stt];
        datahocsinh_clone = datahocsinh;
        restTable();
        show_hocsinh();
        show_nocation("Xóa thành công " + student.fullName + " khỏi danh sách học sinh");
    } else {
        show_nocation("Bạn đã hủy","red");
    }
}


function editStudent(stt) {
    const edit = getPhantu("edit")[0];
    if(edit.value == "Chỉnh sửa") {
        console.log("Chỉnh sửa thành công");
        datahocsinh[stt].ho  = getPhantu("fname")[0].value;
        datahocsinh[stt].ten = getPhantu("lname")[0].value;
        datahocsinh[stt].lop = getPhantu("lop")[0].value;
        datahocsinh[stt].fullName = datahocsinh[stt].ho + " " + datahocsinh[stt].ten;
        datahocsinh[stt].stt = stt;
        datahocsinh_clone[stt] = datahocsinh[stt];
        show_nocation("Đổi thông tin thành công!","green");
        restTable();
        show_hocsinh();
    } else {
        const student = getElementWithIndex(stt);
        console.log("Đã lưu session");
        Session = stt;
        getPhantu("fname")[0].value = student.ho;
        getPhantu("lname")[0].value = student.ten;
        getPhantu("lop")[0].value   = student.class;
        edit.value = "Chỉnh sửa";
    }
    
    
}

function sapxepNgayThem() {
    const ask = parseInt(prompt("Nhập số 1. sắp xếp nhỏ tới lớn , 2. lớn tới nhỏ: "));
    datahocsinh.sort(function (a, b) {
        let x, y;
        x = a.getDateObject.getTime();
        y = b.getDateObject.getTime();
        if(ask == 1) {
            return x - y;
        } else {
            return y - x;
        }
        
    });
    show_hocsinh();
}
function getElementWithIndex(stt) {

    let obj;
    datahocsinh.forEach (phantu => {
        if (phantu.stt == stt) {
            obj = phantu;
            return '';
        }
    });

    return obj;
}


function sapxep_theoten () {
    const Options = parseInt(prompt("Nhập 1. sắp xếp từ lớn tới nhỏ , nhập 2. sắp xếp từ nhỏ tới lớn: "));
    datahocsinh.sort(function (a, b) {
        //====== sort
        let element_1, element_2;
        element_1 = a.fullName;
        element_2 = b.fullName;
        if (Options == 1) {
            if(element_1 > element_2) {
                return -1;
            }
            if(element_1 < element_2) {
                return 1;
            }
            console.log("Sắp xếp nhỏ tới lớn");
        } else {
            if(element_1 > element_2) {
                return 1;
            }
            if(element_1 < element_2) {
                return -1;
            }
            console.log("Sắp xếp lớn tới nhỏ");
        }
        
    });
    show_nocation("Sắp xếp thành công","green");
    show_hocsinh();
}


function restTable () {
    datahocsinh = [];
    datahocsinh = datahocsinh.concat(datahocsinh_clone);
    show_hocsinh();
    show_nocation("Reset thành công!","orange");
}

function show_nocation (message, color) {
    let getElement = getPhantu("thongbao")[0];
    getElement.innerHTML = "";
    getElement.innerHTML = message;
    getElement.style.color = color;
}


function getHocSinh (first, last, lop) {
    //=======================get Date===================
    const date = new Date();
    const dateInfo = "Ngày " + date.getDay() + " tháng " + date.getMonth() + " năm " + date.getFullYear();
    //=======================return object student======
    const length = datahocsinh.length;
    return {
        ho: first,
        ten: last,
        fullName: first + " " + last,
        class: lop,
        stt: length,
        ngayThem: dateInfo,
        getDateObject: date
    };
}