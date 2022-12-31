const fs = require('fs');
const limit_seconds = 600 // 10phut (600/60 = 10)
const requestperLimit = 10 // 10rq/10phut
const fileData = 'data.json';
var info = ()=>{
  return {
    limit_seconds: limit_seconds,
    requestperLimit: requestperLimit,
    fileData: fileData
  }
}
function checkRequest (key) {
  var flag = false;
  var infoKey = getInfoKey(key);
  if (infoKey == false) { addKey(key); infoKey = getInfoKey(key); }
  var blockTime = new Date(infoKey.date)
  var blockrequest = new Date(infoKey.date).setMinutes(blockTime.getMinutes() + limit_seconds/60)
  if (infoKey.count >= requestperLimit) {
    if (new Date() > new Date(blockrequest)) {
      addKey(key);
      flag = true;
    } else {
      flag = false;
    }
    
  } else {
    addKey(key, mode=true, count_add=infoKey.count + 1);
    flag = true;
  }
  return flag
}

function addKey (key, mode=false, count_add=0, new_date=null) {
  var json = readData();
  var date = new Date();

  if (mode == false) {
    json[key] = {date: date, count: 0}
  } else {
    json[key] = {date: new_date == null ? json[key].date : new_date, count: count_add}
  }
  
  fs.writeFileSync(fileData, JSON.stringify(json))
}

function getInfoKey (key) {
  var json = readData();
  return json[key] == undefined ? false : json[key];
}
function readData () {
  return JSON.parse(fs.readFileSync(fileData, encoding='utf-8'));
}


module.exports = {
    checkRequest,
    getInfoKey,
    readData,
    addKey,
    info
}
