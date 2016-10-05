'use strict';

var pikePlace = {

  location: 'Pike Place market',
  minCust: 14,
  maxCust: 35,
  averageCups: 1.2,
  averagePounds: 0.34,
  cupsPerPound: 16, // 1 lbs is 16 cups

  hourlyCust: [],
  dailyCust: 0,

  hourlyCups: [],
  dailyCups: 0,

  hourlyPounds: [],
  dailyPounds: 0,

  hourlyBeanCups: [], // 1 lbs is 16 cups
  dailyBeanCups: 0,

  hourlyBeanBags: [],
  dailyBeanBags: 0,

  hourlyBarista: [], //need 2mins a customer
  dailyBarista: 0,

  hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm',
    '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', '9pm'],

/* parseFloat(varName.toFixed(1)) */
// ADD +1 TO HIT THE MAX ^ NUMBER OPTION TO BE INCLUDED IN RANDOM
//USE TOFIXED INSIDE OF PARENTHESIS TO AVOID CONVERSION TO STRING
//add numbers first, turn into integerts, and then use parseFlots
//first is a paremeter that we pass, vs argument

  randomNum: function(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  },
// 1st step
  projectedHourlyCust: function() {
    for (var i = 0; i < this.hours.length; i++) {
      var cust = this.randomNum(this.minCust, this.maxCust)
      this.hourlyCust.push(cust);
      this.dailyCust += cust;
    }
  },
// 2nd step
  projectedHourlyCups: function() {
    for (var i = 0; i < this.hours.length; i++) {
      var cup = this.averageCups * this.hourlyCust[i]
      this.hourlyCups.push(cup);
      this.dailyCups += cup;
    }
  },
// 3rd step
  projectedHourlyPounds: function() {
    for (var i = 0; i < this.hours.length; i++) {
      var pound = this.averagePounds * this.hourlyCust[i]
      this.hourlyPounds.push(pound);
      this.dailyPounds += pound;
    }
  },
  //
  // beans per hour cups,
  // +
  // beans for bags an hour
  // ______
  // total beans per hour
  // cups per hour / 16 = pounds of beens/hr for cups
  projectedHourlyBeans: function() {
    for (var i = 0; i < this.hours.length; i++) {
      var beans = this.hourlyCups / this.cupsPerPound
      this.hourlyBeanCups.push(beans);
      this.dailyBeanCups += beans;
    }
  },

}

pikePlace.projectedHourlyCust();
pikePlace.projectedHourlyCups();
pikePlace.projectedHourlyPounds();
pikePlace.projectedHourlyBeans();
