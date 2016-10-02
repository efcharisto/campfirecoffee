'use strict';

var pikePlace = {

  location: 'Pike Place market',
  minCust: 14,
  maxCust: 35,
  averageCups: 1.2, // 1 lbs is 16 cups
  averagePounds: 0.34,
  hourlyCust: [],
  dailyCust: 0,
  hourlyCups: [],
  dailyCups: 0,
  hourlyPounds: [],
  dailyPounds: 0,
  hourlyBarista: [], //need 2mins a customer
  dailyBarista: 0,

  hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm',
    '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', '9pm'],

  randomNum: function(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  },

  projectedHourlyCust: function() {
    for (var i = 0; i < this.hours.length; i++) {
      var cust = this.randomNum(this.minCust, this.maxCust)
      this.hourlyCust.push(cust);
      this.dailyCust += cust;
    }
  },

  projectedHourlyCups: function() {
    for (var i = 0; i < this.hours.length; i++) {
      var cup = this.averageCups * this.hourlyCust[i]
      this.hourlyCups.push(cup);
      this.dailyCups += cup;
    }
  },

}
pikePlace.projectedHourlyCust();
pikePlace.projectedHourlyCups();

/* var x = 1.555
undefined
x.toFixed(1)
"1.6"
parseFloat(x.toFixed(1))
1.6 */
