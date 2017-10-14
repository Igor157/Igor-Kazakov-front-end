function memoraizeArguments() {
    var memoryArr = [];
    return function () {
        if (arguments.length == 0)
            return memoryArr;
        else {
            var args = [];
            for (var i = 0; i < arguments.length; i++) {
                args[i] = arguments[i];
            }
            memoryArr.push(args);
        }
    }
}

var argumentsCounter = memoraizeArguments();
argumentsCounter(1, 2, 4);
argumentsCounter(5, 6, 7);
argumentsCounter("string");
alert(argumentsCounter());

