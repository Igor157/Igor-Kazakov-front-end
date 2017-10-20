// "use strict"
// function saveInput(id) {
//     var field = document.getElementById(id);
//     console.dir(field)
//     return function () {
//         field.onblur = function () {
//             localStorage.setItem(field.className, field.value);
//         }
//         if (window.performance.navigation.type == '1') {
//             localStorage.clear();
//         } else {
//             localStorage.getItem(field.className, field.value);
//         }
//     }
// }

// var inputSaver = saveInput();
// inputSaver("startDate");
// inputSaver("startTime");
// inputSaver("finishDate");
// inputSaver("finishTime");
// inputSaver("radio1");
// inputSaver("radio2");
// inputSaver("drink");
// inputSaver("music");
// var field = document.getElementById("startDate");
// console.dir(field)

"use strict"
function saveInput(id) {
    var field = document.getElementById(id);
    field.onblur = function () {
        localStorage.setItem(field.id, field.value);
    }
    if (window.performance.navigation.type == '1') {
        localStorage.clear();
    }

    field.value = localStorage.getItem(field.id);
}

function saveInputRadio(name) {    
    var groupRadio = document.getElementsByName(name);
    for (var i = 0; i < groupRadio.length; i++) {
      groupRadio[i].onclick = function() {
        localStorage.setItem('radioPoint', this.value);
      }
    }
    if(localStorage.getItem('radioPoint')) {
      var radioPoint = localStorage.getItem('radioPoint');
      document.querySelector('input[name="' + name + '"][value="' + radioPoint + '"]').setAttribute('checked','checked');
    }
    if (window.performance.navigation.type == '1') {
        localStorage.clear();
    }
}

// (function () {
//     var radioElem = document.getElementsByClassName('ak-secect-companion__item');
//     for (var i = 0; i < radioElem.length; i++) {
//         radioElem[i].onclick = function () {
//             localStorage.setItem('radioval', this.value);
//         }
//     }
//     if (localStorage.getItem('radioval')) {
//         var radioVal = localStorage.getItem('radioval');
//         document.querySelector('input[class="ak-secect-companion__item"][value="' + radioVal + '"]').setAttribute('checked', 'checked');
//     }

// var raz = document.getElementsByName('raz');
// for (var i = 0; i < raz.length; i++) {
//   raz[i].onclick = function() {
//     localStorage.setItem('IRadioRaz', this.value);
//   }
// }
// if(localStorage.getItem('IRadioRaz')) {
//   var IRadioRaz = localStorage.getItem('IRadioRaz');
//   document.querySelector('input[name="raz"][value="' + IRadioRaz + '"]').setAttribute('checked','checked');
// }

saveInput("startDate");
saveInput("startTime");
saveInput("finishDate");
saveInput("finishTime");
saveInputRadio("group");
saveInput("drink");
saveInput("music");
console.dir(document.getElementById("radio2"))


