/*
5. 找到最大公因數
輸入兩個正整數，你的函式能找到並回傳這兩個正整數的最大公因數。

輸入範例一：6 和 4
回傳：2

輸入範例二：5 和 16
回傳：1

輸入範例一：12 和 6
回傳：6
*/

/*
    @param n1:{Integer}
    @param n2:{Integer}
    @return :{Boolean}
*/
function findGCD(x, y) {
  while (Math.max(x, y) % Math.min(x, y) != 0) {
    if (x > y) {
      x %= y;
    } else {
      y %= x;
    }
  }
  return Math.min(x, y);
}

console.log(findGCD(6, 4));
