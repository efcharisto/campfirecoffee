'use strict';

var pikePlace = {
  location: 'Pike Place market',
  hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm',
  '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', '9pm'],
  minCust: 14,
  maxCust: 35,
  cupsCust: 1.2, // 1 lbs is 16 cups
  poundCust: 0.34,
  hourCups: ;
  hourPounds: ;
  dailyCups ;
  dailyPounds: ;
  workersHourly: ; //need 2mins a customer
  workersDaily: ;

}
//function randomCust = Math.Random() * (maxCust - minCust) + minCust; 
  function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
