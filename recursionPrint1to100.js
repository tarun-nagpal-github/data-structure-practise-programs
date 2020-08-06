function printNum(start){
    console.log(start);
    if(start != 100){
          printNum(start + 1);
    }
}

printNum(1);
