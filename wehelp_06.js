/*
6. 找到最小公倍數
輸入兩個正整數，你的函式能找到並回傳這兩個正整數的最小公倍數。

輸入範例一：6 和 4
回傳：12

輸入範例二：5 和 16
回傳：80

輸入範例一：12 和 6
回傳：12

 */
/*
    @param n1:{Integer}
    @param n2:{Integer}
    @return :{Boolean}
*/
function findLCM(n1, n2) {
  let LargestInt = Math.max(n1, n2);
  let smallInt = Math.min(n1, n2);

  let i = LargestInt;
  while (i % smallInt !== 0) {
    i += LargestInt;
  }

  return i;
}

console.log(findLCM(5, 16));
