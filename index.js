// add solution here
function theBeatlesPlay(arrOfMus, arrOfIns) {
  let empty = [];
  for (let i = 0; i < arrOfMus.length; i++) {
    empty.push(`${arrOfMus[i]} plays ${arrOfIns[i]}`);
  }
  return empty;
}

function johnLennonFacts(facts) {
    const arr=[];
    let i = 0;
    while(facts.length > i){
      arr.push(`${facts[i]}!!!`)
      i++
    }
    return arr
  }
  
  function iLoveTheBeatles(number) {
    let emptyArray = [];
    let i = 0;
    
    do {
     emptyArray = emptyArray.push("I love the Beatles!");
     i++
    }while(i < 15)
    return emptyArray
  }