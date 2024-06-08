/*
27. 檢查兩個區間是否重疊
輸入兩個陣列 / 列表，分別代表兩個整數區間的最小值和最大值 [min1, max1] 和 [min2, max2]，你的函式能判斷兩個整數區間是否重疊，包含最小或最大值落在同一個整數的狀況。

可以假設每個區間的最大值一定大於最小值。

輸入範例：[5, 10]，[9, 11]
回傳：真

輸入範例：[-5, 5]，[8, 10]
回傳：假

輸入範例：[-5, 5]，[-6, -5]
回傳：真

*/
function isOverlapping(range1, range2) {
  let range1Min = range1[0];
  let range1Max = range1[1];
  let range2Min = range2[0];
  let range2Max = range2[1];

  return range1Min <= range2Max && range2Min <= range1Max;
}

console.log(isOverlapping([-5, 5], [8, 10]));
