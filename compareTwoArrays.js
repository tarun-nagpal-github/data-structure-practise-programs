var record = [1,2,3,4];
var newRecord = [1,2,3,4];

function compareTwoArrays(record, newRecord){
  for (var i = 0; i<=record.length; i++){
      if(!isValueInArray(record[i])){
        return "NO They No are not Same";
      }
  }
  return "Yes They are Same";
}

function isValueInArray(value) {
    for(var j = 0; j<=newRecord.length; j++){
     if(value == newRecord[j]){
        return true;
     }
  }
  return false;
}

console.log(compareTwoArrays(record, newRecord));  