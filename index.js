// Code your solution in this file!
//let array = ['Tom', 'Cruise', 'Terry', 'Crews']
// const returnFirstTwoDrivers() = function anonymousFunction([]){
//     return (['Tom', 'Cruise']);
// }

const  returnFirstTwoDrivers = function anonymousFunction([]){
    return (['Antonia', 'Nuru']);
}

const returnLastTwoDrivers = function anonymousFunction([]){
    return (["Amari", "Mo"])
}
const selectingDrivers =[returnFirstTwoDrivers,returnLastTwoDrivers];

function createFareMultiplier(anInteger){
    return function(fare){
      return fare * anInteger; //multiply fare x integer
    }
}


const fareDoubler = createFareMultiplier(2)// fare double is x2

const fareTripler = createFareMultiplier(3) //fare triple is x3\

const selectingDifferentDrivers = function (arrayOfDrivers){
    return driversToReturn(arrayOfDrivers);
}