var num = prompt ("Please,enter the number of Fibonacci numbers");
var arr = [0];
var a = 0;
var b = 1;
var arr = [a, b];
for (var i = 2; i < num; i++) {
    res = a + b;
    a = b;
    b = res;
    arr.push(res);
}
alert (arr);

