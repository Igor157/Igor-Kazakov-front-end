var count = prompt("Please, enter the count of simle numbers")
var arrSimple = [1]; 
nextNumber:
    for (var i = 2; true; i++) {
        for (var j = 2; j < i; j++) {
            if (i % j == 0) continue nextNumber;
        }
        if (arrSimple.length < count)
        arrSimple.push(i);
        else break; 
    }
alert(arrSimple)