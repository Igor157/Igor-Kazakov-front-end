var count = prompt("Please, enter the count of simple numbers")
var arrSimple = [];
for (var i = 2; arrSimple.length < count; i++) {
    for (var j = 2; j < i; j++) {
        if (i % j === 0) break;
    }              
    if (i === j) arrSimple.push(i);
}
alert(arrSimple);
