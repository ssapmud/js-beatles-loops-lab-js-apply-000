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