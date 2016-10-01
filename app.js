'use strict';

var pikePlace = {

  location: 'Pike Place market',
  minCust: 14,
  maxCust: 35,
  averageCups: 1.2, // 1 lbs is 16 cups
  averagePounds: 0.34,
  hourlyCust: [],
//dailyCust: [],
  hourlyCups: [],
  hourlyPounds: [],
  dailyCups: [],
  dailyPounds: [],
  hourlyBarista: [], //need 2mins a customer
  dailyBarista: [],

  hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm',
    '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', '9pm'],

  randomNum: function(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  },

  projectedHourlyCust: function() {
    for (var i = 0; i < this.hours.length; i++) {
      this.hourlyCust.push(this.randomNum(this.minCust, this.maxCust));
    }
  },

  projectedHourlyCups: function() {
    for (var i = 0; i < this.hours.length; i++) {
      this.hourlyCups.push(this.averageCups * this.randomNum(this.minCust, this.maxCust));
    }
  },

}
pikePlace.hourlyCust;
