// Write your code below
var vacationSpots = ['','','']
console.log(vacationSpots[0])
console.log(vacationSpots[1])
console.log(vacationSpots[2])
for(var i = 0; i<100; ++i){
  console.log(vacationSpots[i])
}
//1
for(let i = 5; i<11; ++i){
    console.log(i)
  }
  //2
for (let counter = 3; counter >= 0; counter--){
    console.log(counter);
  }
  ///3
  const vacationSpots = ['Bali', 'Paris', 'Tulum'];
for(let i = 0 ; i<vacationSpots.length; ++i){
  console.log('I would love to visit '+ vacationSpots[i])
}
//4
const bobsFollowers = ["Alish","Ali","Edil"]
var tinasFollowers = ["Alish","Ali",'Kyran']
const mutualFollowers = [];
for(var i = 0; i<bobsFollowers.length; ++i){
  for(var j = 0; j<tinasFollowers.length; ++j){
    if(tinasFollowers[j]== bobsFollowers[i]){
      mutualFollowers.push(tinasFollowers[j])
    }
  }
}
//6
var cupsOfSugarNeeded = 9;
var cupsAdded = 0;
do{
  cupsAdded++;
}while(cupsAdded<cupsOfSugarNeeded);
//8
const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];

// Write you code below
for (let i = 0; i < rapperArray.length; i++){
  console.log(rapperArray[i]);
  if (rapperArray[i] === 'Notorious B.I.G.'){
    break;
  }
}

console.log("And if you don't know, now you know.");
//9
