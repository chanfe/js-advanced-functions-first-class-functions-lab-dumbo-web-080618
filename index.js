// Code your solution in this file!
const returnFirstTwoDrivers = function (drivers){
  a = [drivers[0], drivers[1]];
  return a
}

const returnLastTwoDrivers = function(drivers){
  return drivers.slice(drivers.length-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]


const createFareMultiplier = function(int){
  return function(a){return int * a}
}
const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

const fetchSpecifiedDrivers = function(arr, func){return func(arr)}
