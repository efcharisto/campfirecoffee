'use strict';

var pikePlace = {

  location: 'Pike Place market',
  minCust: 14,
  maxCust: 35,
  averageCups: 1.2,
  averagePounds: 0.34,
  cupsPerPound: 16, // 1 lbs is 16 cups
  timePerCust: 30, // 2min of time per client. 60min / 2min = 30

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

  totalDailyBeans: 0, //lbs used for daily cups + daily coffee bag sales.

  hourlyBarista: [], //need 2mins a customer
  dailyBarista: 0,

  hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm',
    '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', '9pm'],

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
      var cup = Math.ceil(this.averageCups * this.hourlyCust[i])
      this.hourlyCups.push(cup);
      this.dailyCups += cup;
    }
  },
// 3rd step
  projectedHourlyPounds: function() {
    for (var i = 0; i < this.hours.length; i++) {
      var pound = Math.ceil(this.averagePounds * this.hourlyCust[i])
      this.hourlyPounds.push(pound);
      this.dailyPounds += pound;
    }
  },

  projectedHourlyBeans: function() {
    for (var i = 0; i < this.hours.length; i++) {
      var beansHourCup = parseFloat(Math.ceil(this.hourlyCups[i] / this.cupsPerPound))
      this.hourlyBeanCups.push(beansHourCup);
      this.dailyBeanCups += beansHourCup;

      this.hourlyBeanBags.push(parseFloat(this.hourlyPounds[i]));
      this.dailyBeanBags += parseFloat(this.hourlyPounds[i]);

      this.totalDailyBeans = this.dailyBeanCups + this.dailyBeanBags;
    }
  },

  projectedBaristas: function() {
    for (var i = 0; i < this.hours.length; i++) {
      var barista = Math.ceil(this.hourlyCust[i] / this.timePerCust)
      this.hourlyBarista.push(barista);
      this.dailyBarista += barista;
    }
  },

  storeOutput: function() {
console.log(this.location);
for (var i=0; i < this.hours.length; i++){
  console.log(this.hours[i] + ': ' + this.dailyCust + ' is daily client total. ' + this.dailyCups +
  ' is daily number of cups. ' + this.dailyPounds + ' is daily number of lbs total. '
  + this.totalDailyBeans + ' is overall daily beans needed for everything.');
}

  },

}//this is the last bracket

//   Pike Place Market
// 6:00am: 86.4 lbs [23 customers, 27.6 cups (1.4 lbs), 85 lbs to-go]
// 7:00am: 191.1 lbs [51 customers, 61.2 cups (3.1 lbs), 188 lbs to-go]

pikePlace.projectedHourlyCust();
pikePlace.projectedHourlyCups();
pikePlace.projectedHourlyPounds();
pikePlace.projectedHourlyBeans();
pikePlace.projectedBaristas();
pikePlace.storeOutput();

// notes to self:
// parseFloat(varName.toFixed(1))
// USE TOFIXED INSIDE OF PARENTHESIS TO AVOID CONVERSION TO STRING
// add numbers first, turn into integerts, and then use parseFlots
// first is a paremeter that we pass, vs argument
