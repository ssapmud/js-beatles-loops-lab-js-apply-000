// add solution here
function theBeatlesPlay(arrOfMus, arrOfIns) {
  let empty = [];
  for (let i = 0; i < arrOfMus.length; i++) {
    empty.push(`${arrOfMus[i]} plays ${arrOfIns[i]}`);
  }
  return empty;
}

function johnLennonFacts(arrOfFacts) {
  const facts = [];
  let i = 0;
  while (arrOfFacts.length > i) {
    facts.push(`${arrOfFacts[i]}!!!`)
    i++
  }
  return facts;
}