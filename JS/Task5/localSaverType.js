(function saveInput() {
    var radioCollection = document.querySelectorAll('input[type="radio"]');
    var dateTimeCollection = document.querySelectorAll("input[type=date], input[type=time]");

    for (var i = 0; i < dateTimeCollection.length; i++) {
        dateTimeCollection[i].onblur = function () {
            localStorage.setItem(this.id, this.value);
        }
    }

    for (var i = 0; i < radioCollection.length; i++) {
        radioCollection[i].onblur = function () {
            localStorage.setItem('radioPoint', this.value);
        }
    }

    if (window.performance.navigation.type == '1') {
        localStorage.clear();
    }

    if (localStorage.getItem('radioPoint')) {
        var radioPoint = localStorage.getItem('radioPoint');
        console.dir(radioPoint)
        document.querySelector('input[type=date][value="' + radioPoint + '"]').setAttribute('checked', 'checked');
    }

    // field.value = localStorage.getItem(field.id);



    // if (window.performance.navigation.type == '1') {
    //     localStorage.clear();
    // } else {
    //     localStorage.getItem(field.id, field.value);
    // }

})();

// "use strict"
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
//         groupRadio[i].onclick = function () {
//             localStorage.setItem('radioPoint', this.value);
//         }
//     }
//     if (localStorage.getItem('radioPoint')) {
//         var radioPoint = localStorage.getItem('radioPoint');
//         document.querySelector('input[name="' + name + '"][value="' + radioPoint + '"]').setAttribute('checked', 'checked');
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