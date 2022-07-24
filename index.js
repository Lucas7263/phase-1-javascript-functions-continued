// code your solution here
saturdayFun();
function saturdayFun(activity = 'roller-skate'){

    return `This Saturday, I want to ${activity}!`
    
}
saturdayFun('bathe my dog');

function mondayWork(activity = 'go to the office') {
    return `This Monday, I will ${activity}.`
}
mondayWork('work form home.')

function wrapAdjective(special = '*') {
    const innerFunction = function (message) {
        
        return `You are ${special}${message}${special}!`; 
      };
      return innerFunction; 
    }
    
