// add solution here
function theBeatlesPlay(arrOfMus, arrOfIns) {
  let empty = [];
  for (let i = 0; i < arrOfMus.length; i++) {
    empty.push(`${arrOfMus[i]} plays ${arrOfIns[i]}`);
  }
  return empty;
}

function johnLennonFacts(arrOfFacts) {
  while (arrOfFacts > 0) {
    arrOfFacts++;
    arrOfFacts += "!!!";
  }
}