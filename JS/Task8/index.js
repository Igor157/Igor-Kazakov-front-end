var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var xhr = new XMLHttpRequest();
var moneyDataArr = ['http://www.nbrb.by/API/ExRates/Rates/145', 'http://www.nbrb.by/API/ExRates/Rates/298?onDate=2017-10-1',
    'http://www.nbrb.by/API/ExRates/Rates/USD?ParamMode=2', "http://www.nbrb.by/API/ExRates/Rates?onDate=2016-7-6&Periodicity=0", "http://www.nbrb.by/API/ExRates/Rates/298?onDate=2016-7-5"];

xhr.onreadystatechange = function () {
    if (xhr.readyState !== 4) return;

    if (xhr.status !== 200) {
        console.log(xhr.status + ': ' + xhr.statusText);
    } else {
        console.log('Done');
        console.log(xhr.responseText);
    }
}
moneyDataArr.forEach(function (item) {
    xhr.open('GET', item, false);
    xhr.send();
    xhr.onreadystatechange();

})



