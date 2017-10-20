"use strict"
function saveInput(className) {
    var field;
    var fieldCollection = document.getElementsByClassName(className);
    return function() {
        for (var i = 0; i < fieldCollection.length; i++) {
            field = fieldCollection[i];
            console.dir(field);
            field.onblur = function() {
                localStorage.setItem(field.id, field.value);
            }
            if (window.performance.navigation.type == '1') {
                localStorage.clear();
            } else {
                localStorage.getItem(field.id, field.value);
            }

        }
    }
}
var saveInput1 = saveInput("ik-event-form__date-input");
saveInput1();
var saveInput2 = saveInput("hw-radio-buttons__choice");
saveInput2();
