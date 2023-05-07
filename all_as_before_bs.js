function all_as_before_bs(str) {
  let aLastIndex = -1;
  let bLastIndex = -1;
  let curIndex = 0;
  for (let char of str) {
    if (char === 'a') {
      aLastIndex = curIndex;
      if (bLastIndex !== -1 && aLastIndex > bLastIndex) return false;
    }
    if (char === 'b') {
      bLastIndex = curIndex;
    }
    curIndex++;
  }
  return true;
}

string1 = 'aabbbb';
string2 = 'ababab';
string3 = 'aaaabbbb';
string4 = 'bbbaaaa';

console.log(all_as_before_bs(string1));
console.log(all_as_before_bs(string2));
console.log(all_as_before_bs(string3));
console.log(all_as_before_bs(string4));
