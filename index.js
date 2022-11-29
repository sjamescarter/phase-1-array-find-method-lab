const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    //...
];

function superbowlWin(array){
    let win = array.find(cb);
    if(win !== undefined){
    return win.year
    }
}

function cb(item){
  return item.result === "W"
}
