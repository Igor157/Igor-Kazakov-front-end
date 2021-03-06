"use strict"
    ;
// (function autoInput() {
//     (function saveInput() {
//         var inputFields = document.getElementsByTagName('input');
//         for (let i = 0; i < inputFields.length; i++) {
//             let field = inputFields[i];
//             field.onblur = function () {
//                 localStorage.setItem(field.id, field.value);
//             }
//         }
//         if (window.performance.navigation.type == '1') {
//             localStorage.clear();
//         }
//         for (let i = 0; i < inputFields.length; i++) {
//             let field = inputFields[i];
//             field.value = localStorage.getItem(field.id);
//         }
//     })();
// })();

(function autoInput() {
    (function saveInput() {
        var inputFields = document.getElementsByTagName('input');
        for (let i = 0; i < inputFields.length; i++) {
            var groupRadio = [];
            let field = groupRadio[i];
            if (field.type == "radio") {
                groupRadio.push(field);
            }
            field.onblur = function () {
                localStorage.setItem(field.id, field.value);
            }
        }
        for (var i = 0; i < groupRadio.length; i++) {
            groupRadio[i].onclick = function () {
                localStorage.setItem('radioPoint', this.value);
            }
        }
        if (localStorage.getItem('radioPoint')) {
            var radioPoint = localStorage.getItem('radioPoint');
            document.querySelector('input[name="' + name + '"][value="' + radioPoint + '"]').setAttribute('checked', 'checked');
        }
        if (window.performance.navigation.type == '1') {
            localStorage.clear();
        }
        for (let i = 0; i < inputFields.length; i++) {
            let field = inputFields[i];
            field.value = localStorage.getItem(field.id);
        }
    })();
})();





// function saveInput(id) {
//     var field = document.getElementById(id);
//     field.onblur = function () {
//         localStorage.setItem(field.id, field.value);
//     }
//     if (window.performance.navigation.type == '1') {
//         localStorage.clear();
//     }

//     field.value = localStorage.getItem(field.id);
// }

// function saveInputRadio(name) {    
//     var groupRadio = document.getElementsByName(name);
//     for (var i = 0; i < groupRadio.length; i++) {
//       groupRadio[i].onclick = function() {
//         localStorage.setItem('radioPoint', this.value);
//       }
//     }
//     if(localStorage.getItem('radioPoint')) {
//       var radioPoint = localStorage.getItem('radioPoint');
//       document.querySelector('input[name="' + name + '"][value="' + radioPoint + '"]').setAttribute('checked','checked');
//     }
//     if (window.performance.navigation.type == '1') {
//         localStorage.clear();
//     }
// }

// saveInput("startDate");
// saveInput("startTime");
// saveInput("finishDate");
// saveInput("finishTime");
// saveInputRadio("group");
// saveInput("drink");
// saveInput("music");
// console.dir(document.getElementById("radio2"))