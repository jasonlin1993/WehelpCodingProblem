/*
37. 找出眾數
輸入一個非負整數陣列 / 列表，其中包含的非負整數在 0 ~ 20 之間，找出並回傳其中的眾數：即出現次數最多的整數值。

你可以假設不會同時有多個眾數出現。

輸入範例：[1, 2, 1, 3, 1]
回傳：1

輸入範例：[6, 0, 8, 8, 10]
回傳：8

輸入範例：[0, 2, 0, 1, 1, 20, 0]
回傳：0


*/

/*
    @param ns:{[Integer]}
    @return :{Integer}
*/
function findMode(ns) {
  ns.sort((a, b) => a - b);
  let count = 1;
  let max = 0;
  let el;

  for (let i = 1; i < ns.length; i++) {
    if (ns[i] === ns[i - 1]) {
      count++;
    } else {
      count = 1;
    }
    if (count > max) {
      max = count;
      el = ns[i];
    }
  }
  return el;
}

console.log(findMode([0, 2, 0, 1, 1, 20, 0]));
