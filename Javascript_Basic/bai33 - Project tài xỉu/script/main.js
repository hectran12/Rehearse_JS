let Money;
let giatricuoi, setLoop, stt, checktx, playbutton; // play
let whatchoose, dat_tien = 200; // tài xỉu 
Money = 1000;
showMoney();

let imagetx = {
    image_name : "anh",
    so_image: 5,
    sonut : [
        18, 21, 26, 21, 23
    ],
    type: "jpg",
    path_folder: "image"
};

function play() {
    if(checkMoney() == true && checkdat() == true) {
        playbutton = true;
        stt = 0;
        setLoop = setInterval(()=>{
            if(stt == 4) {
                if(giatricuoi > 2) {
                    checktx = true;
                } else {
                    checktx = false;
                }
                setWin();
                clearInterval(setLoop);
            }
            giatricuoi = randomXucSac();
            stt++;
        },1000);

    } else {
        alert("Không đủ tiền hoặc chưa đặt tài/xỉu");
    }
    function setWin() {
        var setTitle = function(title){
            document.getElementById("result").innerHTML = title;
            return title;
        };

        var result  = checktx == true ? setTitle("KẾT QUẢ LÀ XỈU!") : setTitle("KẾT QUẢ LÀ TÀI!");
        console.log(result);
        if(checktx == whatchoose) {
            console.log("Bạn đã thăng");
            alert("Bạn đã thằng và được cộng " + dat_tien);
            Money += dat_tien;
            showMoney();
        } else {
            alert("Bạn đã thua và bị trừ " + dat_tien);
            Money -= dat_tien;
            showMoney();
        }
        
        checktx = undefined; whatchoose = undefined; playbutton = undefined;
    }
}

function vanmoi() {
    if(playbutton) {
        alert("Đang trong ván, khổng thể cancel");
    } else {
        document.getElementById("rest").innerHTML = `
        <img id="image_rand" src="image\\home.jpg" alt="Đẹp chai" style="width:100%">
        <div class="container">
        <p id="playbutton"><button onclick="play()">Chơi</button></p>
        </div>
        `;
    }
}
function checkdat() {
    return whatchoose == undefined ? false : true;
}

function dattien() {
    const value = parseInt(document.getElementById("money").value);
    if(Money >= value) {
        console.log("Bạn đang đặt: " + value);
        dat_tien = value;
    } else {
        alert("Bạn đã vượt mức tiền hiện có!!");
    }
}

function allin() {
    dat_tien = Money;
    document.getElementById("money").value = Money;
    console.log("Bạn đã all in");
}
function dat(value) {
    if(value == 1) {
        whatchoose = true; // xỉu
        document.getElementById("result").innerHTML = "Bạn đang đặt xỉu";
    } else if(value == 2) {
        whatchoose = false; // tài
        document.getElementById("result").innerHTML = "Bạn đang đặt tài";
    } else {
        console.log("À thằng này dám hách à?");
        if(confirm("Đi mà gặp chính phủ")) {
            window.location = "https://chinhphu.vn/";
        } else {
            alert("Không gặp chính phủ à?");
            alert("Thế thì gặp Minh Béo");
            window.location = "https://www.youtube.com/watch?v=RtqEMhBfWAk&ab_channel=D%C6%AF%C6%A0NGMINHPROMOTIONOFFICIAL";
        }
    }
}

function checkMoney() {
    if(Money < 200) {
        if(confirm("Bạn không đủ tiền, có muốn reset hong?")) {
            resetMoney();
            return true;
        } else {
            return false;
        }
    } else {
        return true;
    }
}
function randomXucSac() {
    const num  = getRandom(1,imagetx.so_image);
    const path = imagetx.path_folder + "\\" + imagetx.image_name + num + "." + imagetx.type;
    document.getElementById("image_rand").src = path;
    setTitel(num);
    return num;
}

function setTitel (number) {
    let title;
    title = "Số nút là " + imagetx.sonut[number-1] + "!";
    document.getElementById("playbutton").innerHTML = title;
}
function resetMoney(){
    console.log("Rest money thành công!");
    Money = 1000;
    showMoney();
}

function showMoney(){
    document.getElementById("tien").innerHTML = "Tiền: " + Money;
}