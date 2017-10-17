

function Automobile(model, issueYear, manufacturer) {
    this._model = model;
    this._issueYear = issueYear;
    this._manufacturer = manufacturer;
}

Automobile.prototype.ride = function () {
    var InternalCombustion = function () {
        return "smth going on in engine of " + this._manufacturer + this._model;
    }.bind(this)
    console.log(InternalCombustion() + " and" + " brrrrrr");
}
Automobile.prototype.brake = function () {
    console.log(this._manufacturer + this._model + " bzzzzhhhh");
}
function Sedan(model, issueYear, manufacturer) {
    Automobile.apply(this, arguments);
}
Sedan.prototype = Object.create(Automobile.prototype);
Sedan.prototype.constructor = Sedan;
Sedan.prototype.ride = function () {
    Automobile.prototype.ride.call(this);
    console.log("but silent");
}
function Suv(model, issueYear, manufacturer) {
    Automobile.apply(this, arguments);
}

Suv.prototype = Object.create(Automobile.prototype);
Suv.prototype.constructor = Suv;
Suv.prototype.ride = function () {
    Automobile.prototype.ride.call(this);
    console.log("but off road");
}

function Vagon(model, issueYear, manufacturer) {
    Automobile.apply(this, arguments);
}
Vagon.prototype = Object.create(Automobile.prototype);
Vagon.prototype.constructor = Vagon;
Vagon.prototype.ride = function () {
    Automobile.prototype.ride.call(this);
    console.log("but with piano as a luggage");
}

var mersedesS500 = new Sedan("S500", 2015, "Mersedes");
mersedesS500.ride();
mersedesS500.brake();

var toyotaRav4 = new Suv("Rav4", 2005, "Toyota");
toyotaRav4.ride();
toyotaRav4.brake();

var volkswagenPassat = new Vagon("Passat", 1996, "Volkswagen");
volkswagenPassat.ride();
volkswagenPassat.brake();









