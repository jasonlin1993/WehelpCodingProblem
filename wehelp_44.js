/*
44. 費式數列的第 N 個數
輸入一個非負整數 N，你的函式能取得費式數列中的第 N 個整數並回傳。費式數列定義如下：

第 0 個數 = 1
第 1 個數 = 1
第 N 個數 = 第 N-1 個數 + 第 N-2 個數
根據以上定義，得到 1、1、2、3、5、8、13、21、34、55 以此類推，即費式數列 / 。( Fibonacci Sequence )

輸入範例：0
回傳：1

輸入範例：4
回傳：5

輸入範例：9
回傳：55

注意事項：
你必須實作一個時間複雜度為 O(N) 的演算法，否則將會因執行逾時而失敗。

*/
function getFibNumber(n) {
  //   if (n <= 1) return 1;
  //   return getFibNumber(n - 1) + getFibNumber(n - 2);

  let a = 1,
    b = 1,
    c,
    i;
  if (n == 0) return a;
  for (i = 2; i <= n; i++) {
    c = a + b;
    a = b;
    b = c;
  }
  return b;
}

console.log(getFibNumber(9));
