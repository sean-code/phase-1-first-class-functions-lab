// // Code your solution in this file!
// //let array = ['Tom', 'Cruise', 'Terry', 'Crews']
// // const returnFirstTwoDrivers() = function anonymousFunction([]){
// //     return (['Tom', 'Cruise']);
// // }

// const  returnFirstTwoDrivers = function anonymousFunction([]){
//     return (['Antonia', 'Nuru']);
// }

// const returnLastTwoDrivers = function anonymousFunction([]){
//     return (["Amari", "Mo"])
// }
// const selectingDrivers =[returnFirstTwoDrivers,returnLastTwoDrivers];

// function createFareMultiplier(anInteger){
//     return function(fare){
//       return fare * anInteger; //multiply fare x integer
//     }
// }


const  returnFirstTwoDrivers = function anonymousFunction([]){
    return (['Antonia', 'Nuru']);
    
    }
    
    const  returnLastTwoDrivers = function anonymousFunction([]){
        return (['Amari', 'Mo']);
    
    }
    const selectingDrivers =[returnFirstTwoDrivers,returnLastTwoDrivers];
    
    function createFareMultiplier(anInteger){
        return function(fare){
          return fare*anInteger;
        };
    }
    const fareDoubler = createFareMultiplier(2);
    const fareTripler = createFareMultiplier(3);
    
    const selectDifferentDrivers = function (arrayOfDrivers, driversToReturn) {
        return driversToReturn(arrayOfDrivers);
      };