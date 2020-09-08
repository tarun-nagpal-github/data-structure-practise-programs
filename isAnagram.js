var string1 = "tarun";
var string2 = "atrun";

function sort(string){
   return string.split("").sort().join();
}

function isAnagram(string1, string2){
  return sort(string1) == sort(string2);
}

const result = isAnagram("tarun", "atrun");

console.log(result);

