function minCost(str, costs) {
  let totalCost = 0;
  for (let i = 0; i < str.length; i++) {
    let currentCost = costs[i];
    let j = i + 1;
    while (s[j] === s[i]) {
      //add same letter costs
      currentCost += costs[j];
      j++;
    }
    if (j > i + 1) {
      //more than one item that repeats itself
      let maxCost = Math.max(...costs.slice(i, j)); //i is the first duplicate !, j is one after the last duplicated
      //slice takes from i included until j exceluded
      totalCost += currentCost - maxCost; //we take all the cheepest costs - all the costs except for the max cost, becuase every
      //duplicate needs to be removed
      i = j - 1; //now the index should start from the new char!
    }
  }
  return totalCost;
}

function minCost(s, costs) {
  let totalCost = 0;
  for (let i = 0; i < s.length; i++) {
    let currentCost = costs[i];
    let j = i + 1;
    while (s[j] === s[i]) {
      //add same letter costs
      currentCost += costs[j];
      j++;
    }
    //here we are after a new non duplicated char has been spotted at s[j]!
    //we need to calculate the cost so far for the duplicates
    //We need to take all the costs except for the most expensive!
    if (j > i + 1) {
      //means 2 duplicates or more!
      let maxCost = Math.max(...costs.slice(i, j)); //i->j means all the duplicates. j is already one more than the last duplicated
      totalCost += currentCost - maxCost;
      i = j - 1; //jump i to after the duplicated segment!
    }
  }
  return totalCost;
}

const s = 'abaac';
const costs = [1, 2, 3, 4, 5];
console.log(minCost(s, costs)); // 3         there are 3 a's: 2 needs to be deleted

const s2 = 'abc';
const costs2 = [1, 2, 3];
console.log(minCost(s2, costs2)); // 0 because there are no duplicated letters
