/*

18. 將數字用固定小數位數的格式輸出
輸入一個數字，可能是整數或浮點數，你的函式必須將這個數字轉換為固定顯示 2 個小數位數的字串格式。

若輸入的數字超過 2 個小數位數，則以四捨五入處理。

輸入範例：0
回傳：0.00

輸入範例：5.4658
回傳：5.47

輸入範例：-3.123
回傳：-3.12

輸入範例：100.1
回傳：100.10
*/

function formatFloat(n) {
  let rounded = (Math.round(n * 100) / 100).toFixed(2);
  let roundedText = rounded.toString();
  return roundedText;
}

console.log(formatFloat(0));
