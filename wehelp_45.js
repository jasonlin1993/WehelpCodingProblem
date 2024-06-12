/*
45. 關鍵字推薦
輸入一個包含小寫英文字母的字串陣列 / 列表，代表所有可能的潛在關鍵字；再輸入一個英文字串，代表目前的提示字。

你的函式能從所有潛在的關鍵字中，找到並回傳以目前提示字為前綴的所有關鍵字陣列 / 列表。須按照字母順序由小到大排列，但長度短的關鍵字要排前面。

輸入範例：["abc", "xyz", "zzz", "ac", "aa"]、"a"
回傳：["aa", "ac", "abc"]

輸入範例：["xyz", "ooo", "test", "cba"]、"k"
回傳：[]

輸入範例：["test", "zbz", "pply", "zbaa", "zxy"]、"zb"
回傳：["zbz", "zba

*/
function suggestKeywords(candidates, prompt) {
  return candidates
    .filter((element) => element.startsWith(prompt))
    .sort((a, b) => a.length - b.length || a.localeCompare(b));
}

console.log(suggestKeywords(["abc", "xyz", "zzz", "ac", "aa"], "a"));
