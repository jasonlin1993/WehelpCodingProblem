/*
47. 計算包含幾個關鍵字
輸入一個包含大小寫英文字母的字串，再輸入一個關鍵字，你的函式能計算並回傳輸入字串中包含幾個關鍵字。

計算時，不考慮字母的大小寫，且不重覆計算字母有重疊的關鍵字。

輸入範例：""、"ac"
回傳：0

輸入範例："kKjaeAcxAC"、"ac"
回傳：2

輸入範例："abababazz"、"Aba"
回傳：2

*/
function countKeywords(string, subString) {
  const lowerStr = string.toLowerCase();
  const lowerKeyword = subString.toLowerCase();

  const regex = new RegExp(lowerKeyword, "g");

  const matches = lowerStr.match(regex);

  if (!matches) {
    return 0;
  }
  return matches.length;
}
console.log(countKeywords("kKjaeAcxAC", "ac"));
