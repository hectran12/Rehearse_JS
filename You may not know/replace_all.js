// có thể bạn không biết cách replace all trong chuỗi?




                // cách sử dụng
                let text = "trong hoa dep chai luon dep chai", // chuỗi gốc
                    repl =  "dep chai", // kí tự muốn thay đổi
                    repl2 = "qua dep trai"; // thay đổi thành
                console.log(replace_all(text, repl, repl2)); // trả về
                
                // hàm thay đổi
                function replace_all(text, repl, repl2) {
                    const getLen = text.split(repl).length - 1;
                    for(let i = 0; i < getLen; i++) {
                        text = text.replace(repl, repl2);
                    }
                    return text;
                }
