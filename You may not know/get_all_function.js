// có thể bạn không biết cách get all function trên id của một thẻ script?
 function getAllFunctions(id_script) {
     let contentJS, counFunction, spFunctions, listFunctions, sttFunction, regExp;
     regExp = /function ([a-z])/gi;
     contentJS = document.getElementById(id_script).innerHTML.trim().replace(/\n/g, "");
     counFunction = contentJS.match(regExp).length;
     spFunctions = contentJS.split(regExp);
     listFunctions = [];
     sttFunction = 0;
     spFunctions.forEach(function(value, index) {
         value = value.indexOf("(") != -1 ? value.split("(")[0].trim() : "";
         if (value) {
             value = value.indexOf("=") == -1 ? value : "";
             if (value) {
                 let reg, str, newFunction;
                 reg = contentJS.split(value)[0];
                 str = reg[reg.length - 1];
                 newFunction = str + value;
                 sttFunction++;
                 listFunctions.push(newFunction);
             }
         }
     });
     listFunctions.id = id_script;

     return listFunctions;
 }

getAllFunctions("test");
