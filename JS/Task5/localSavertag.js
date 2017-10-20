function localSaver(className) {
    var fieldCollection = document.getElementsByTagName(className);
    for (var i = 0; i < fieldCollection.length; i++) {
        field = fieldCollection[i];
        console.dir(field);
        field.onblur = function save() {
            localStorage.setItem(field.className, field.value);
        }
        if (window.performance.navigation.type == '1') {
            localStorage.clear();
        } else {
            localStorage.getItem(field.className, field.value);
        }

    }
}
localSaver('input');