var a = 1;
var b = 2;
var c;
for(var i = 0; i<10; i++){
    c = a + b;
    a = b;
    b = c;
    console.log(c);
}
