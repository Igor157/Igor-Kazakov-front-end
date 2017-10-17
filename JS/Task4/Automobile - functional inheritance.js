function Automobile(model, issueYear, manufacturer) {
    this._model = model;
    this._issueYear = issueYear;
    this._manufacturer = manufacturer;
    var InternalCombustion = function () {
        return "smth going on in engine of " + this._manufacturer + this._model;
    }.bind(this)
    this.ride = function () {
        console.log(InternalCombustion() + " and" + " brrrrrr");
    }
    this.brake = function () {
        console.log(this._manufacturer + this._model + " bzzzzhhhh");
    }
}

function Sedan(model, issueYear, manufacturer) {
    Automobile.apply(this, arguments);
    var ParentRide= this.ride;
    this.ride = function () { 
        ParentRide.call(this); 
        console.log("but silent"); 
    }
}

function Suv(model, issueYear, manufacturer) {
    Automobile.apply(this, arguments);
    var ParentRide= this.ride;
    this.ride = function () { 
        ParentRide.call(this); 
        console.log("but off road"); 
    }
}

function Vagon(model, issueYear, manufacturer) {
    Automobile.apply(this, arguments);
    var ParentRide= this.ride;
    this.ride = function () { 
        ParentRide.call(this); 
        console.log("but with piano as a luggage"); 
    }
}

var mersedesS500 = new Sedan("S500", 2015, "Mersedes");
mersedesS500.ride();
mersedesS500.brake();

var toyotaRav4 = new Suv("Rav4", 2005, "Toyota");
toyotaRav4.ride();
toyotaRav4.brake();

var volkswagenPassat = new Vagon("Passat", 1996,"Volkswagen");
volkswagenPassat.ride();
volkswagenPassat.brake();









