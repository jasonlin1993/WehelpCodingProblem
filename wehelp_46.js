/*
46. 十二生肖查詢
輸入一個正整數表示西元年份，你的函式回傳該年份所屬的生肖動物名稱。請參考以下規則：

已知西元 1912 年為「鼠」年，十二生肖依序為「鼠」、「牛」、「虎」、「兔」、「龍」、「蛇」、「馬」、「羊」、「猴」、「雞」、「狗」、「豬」。

輸入範例：1912
回傳："鼠"

輸入範例：1946
回傳："狗"

輸入範例：1855
回傳："兔"

輸入範例：2024
回傳："龍"

*/
function getChineseZodiac(year) {
  const originYear = 1912;
  let x = (year - originYear) % 12;
  if (x == 0) {
    return "鼠";
  } else if (x == 1 || x == -11) {
    return "牛";
  } else if (x == 2 || x == -10) {
    return "虎";
  } else if (x == 3 || x == -9) {
    return "兔";
  } else if (x == 4 || x == -8) {
    return "龍";
  } else if (x == 5 || x == -7) {
    return "蛇";
  } else if (x == 6 || x == -6) {
    return "馬";
  } else if (x == 7 || x == -5) {
    return "羊";
  } else if (x == 8 || x == -4) {
    return "猴";
  } else if (x == 9 || x == -3) {
    return "雞";
  } else if (x == 10 || x == -2) {
    return "狗";
  } else if (x == 11 || x == -1) {
    return "豬";
  }
}

/*
chatgpt 優化寫法
function getChineseZodiac(year) {
  const zodiacs = ["鼠", "牛", "虎", "兔", "龍", "蛇", "馬", "羊", "猴", "雞", "狗", "豬"];
  const originYear = 1912;
  const index = (year - originYear) % 12;
  return zodiacs[(index + 12) % 12];
}

*/

console.log(getChineseZodiac(1855));
