// add solution here
function theBeatlesPlay(arrOfMus, arrOfIns) {
  let empty = [];
  for (let i = 0; i < arrOfMus.length; i++) {
    empty = empty.push(`${arrOfMus[i]} plays ${arrOfIns[i]},`)
  }
  return empty
}