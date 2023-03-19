"use strict";
//Creating function for max and min
function getRandom(max, min) {
    return Math.floor(Math.random() * (max - min) + min);
}
// Creating function to do math for me
const seattle = {
    min: 23,
    max: 65,
    avg: 6.3,
    location: "seattle",
    hoursofoperation: [
        "6am",
        "7am",
        "8am",
        "9am",
        "10am",
        "11am",
        "12pm",
        "1pm",
        "2pm",
        "3pm",
        "4pm",
        "5pm",
        "6pm",
        "7pm",
    ],
    customersPerHour: function () {
        return getRandom(this.max, this.min);
        // method 
    },
    cookiesPerHour: [],
    // array datat type
    getCookies: function () {
        for (let i = 0; i < this.hoursofoperation.length; i++) {
            // console.log("seattle avg cookies/sale", this.avg);
            // console.log("seattle avg customers/hour", this.customersPerHour());

            // change the names from london!!
            let randomammountofcustomers = this.customersPerHour()
            // console.log ("seattle customersperhour", randomammountofcustomers)

            let cookiesSold = this.avg * randomammountofcustomers
            this.cookiesPerHour.push(Math.floor(cookiesSold))

            // console log to check random ammount of ppl  
            // this.cookiesPerHour.push(Math.round(this.avg * this.customersPerHour()));
        }
        //  console.log(this.cookiesPerHour);
        return this.cookiesPerHour;
    },
    /* totalsales() {
         let sum = 0;
         for (let i = 0; < this.hoursofoperation.length; i++) {}
             sum += this.getCookies()[i];
 
         }
         return sum
     }*/
}



let seatData = document.getElementById("seattleData");

for (let i = 0; i < seattle.hoursofoperation.length; i++) {
    let seattlelist = document.createElement("li");
    seattlelist.innerHTML = `${seattle.hoursofoperation[i]}:${seattle.getCookies()[i]} cookies`;
    seatData.append(seattlelist);

}

/*let seattotal = document.createElement("li");
seattotal.innerHTML = `${seattle.totalsales()} cookies`;
seatData.append(seattotal);*/

const Tokyo = {
    min: 3,
    max: 24,
    avg: 1.2,
    location: "Tokyo",
    hoursofoperation: [
        "6am",
        "7am",
        "8am",
        "9am",
        "10am",
        "11am",
        "12pm",
        "1pm",
        "2pm",
        "3pm",
        "4pm",
        "5pm",
        "6pm",
        "7pm",
    ],
    customersPerHour: function () {
        return getRandom(this.max, this.min);
    },
    cookiesPerHour: [],
    getCookies: function () {
        for (let i = 0; i < this.hoursofoperation.length; i++) {
            // console.log("Tokyo avg coocies/sale", this.avg);
            //console.log("Tokyo avg customers/hour", this.customersPerHour());
            this.cookiesPerHour.push(this.avg * this.customersPerHour());
        }
        return this.cookiesPerHour;
    },
};

let Toky = document.getElementById("tokyoData");

for (let i = 0; i < Tokyo.hoursofoperation.length; i++) {
    let Tokyolist = document.createElement("li");
    Tokyolist.innerHTML = `${Tokyo.hoursofoperation[i]}:${Tokyo.getCookies()[i]} cookies`;
    Toky.append(Tokyolist);

}

const Dubai = {
    min: 11,
    max: 38,
    avg: 3.7,
    location: "Dubai",
    hoursofoperation: [
        "6am",
        "7am",
        "8am",
        "9am",
        "10am",
        "11am",
        "12pm",
        "1pm",
        "2pm",
        "3pm",
        "4pm",
        "5pm",
        "6pm",
        "7pm",
    ],
    customersPerHour: function () {
        return getRandom(this.max, this.min);
    },
    cookiesPerHour: [],
    getCookies: function () {
        for (let i = 0; i < this.hoursofoperation.length; i++) {
            //console.log("Dubai avg coocies/sale", this.avg);
            //console.log("Dubai avg customers/hour", this.customersPerHour());
            this.cookiesPerHour.push(this.avg * this.customersPerHour());
        }
        return this.cookiesPerHour;
    },
}

let Dubi = document.getElementById("dubaiData");

for (let i = 0; i < Dubai.hoursofoperation.length; i++) {
    let Dubailist = document.createElement("li");
    Dubailist.innerHTML = `${Dubai.hoursofoperation[i]}:${Dubai.getCookies()[i]} cookies`;
    Dubi.append(Dubailist);

}




const paris = {
    min: 20,
    max: 38,
    avg: 2.3,
    location: "paris",
    hoursofoperation: [
        "6am",
        "7am",
        "8am",
        "9am",
        "10am",
        "11am",
        "12pm",
        "1pm",
        "2pm",
        "3pm",
        "4pm",
        "5pm",
        "6pm",
        "7pm",
    ],
    customersPerHour: function () {
        return getRandom(this.max, this.min);
    },
    cookiesPerHour: [],
    getCookies: function () {
        for (let i = 0; i < this.hoursofoperation.length; i++) {
            //console.log("paris avg coocies/sale", this.avg);
            //console.log("paris avg customers/hour", this.customersPerHour());
            this.cookiesPerHour.push(this.avg * this.customersPerHour());
        }
        return this.cookiesPerHour;
    },
};

let pari = document.getElementById("parisData");

for (let i = 0; i < paris.hoursofoperation.length; i++) {
    let Parislist = document.createElement("li");
    Parislist.innerHTML = `${paris.hoursofoperation[i]}:${paris.getCookies()[i]} cookies`;
    pari.append(Parislist);

}

const Lima = {
    min: 2,
    max: 16,
    avg: 4.6,
    location: "lima",
    hoursofoperation: [
        "6am",
        "7am",
        "8am",
        "9am",
        "10am",
        "11am",
        "12pm",
        "1pm",
        "2pm",
        "3pm",
        "4pm",
        "5pm",
        "6pm",
        "7pm",
    ],
    customersPerHour: function () {
        return getRandom(this.max, this.min);
    },
    cookiesPerHour: [],
    getCookies: function () {
        for (let i = 0; i < this.hoursofoperation.length; i++) {
            //console.log("lima avg coocies/sale", this.avg);
            //console.log("lima avg customers/hour", this.customersPerHour());
            this.cookiesPerHour.push(this.avg * this.customersPerHour());
        }
        return this.cookiesPerHour;
    },
};

let Limb = document.getElementById("limaData");

for (let i = 0; i < Lima.hoursofoperation.length; i++) {
    let limalist = document.createElement("li");
    limalist.innerHTML = `${Lima.hoursofoperation[i]}:${Lima.getCookies()[i]} cookies`;
    Limb.append(limalist);
}
let Table = document.getElementById("sales")


