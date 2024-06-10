/*

35. 班級成績的及格率
輸入一個整數陣列 / 列表，代表一個班級中所有學生的數學成績，其中成績為 0 ~ 100 之間的整數，且大於等於 60 分為及格。

你的函式能計算並回傳班級成績的及格率，使用百分比的字串格式輸出，無條件捨去到整數的部份。

輸入範例：[70, 0, 33, 60, 2, 59]
回傳："33%"

輸入範例：[65, 77, 81, 100]
回傳："100%"

輸入範例：[51, 40, 10]
回傳："0%"

*/
function getPassRate(grades) {
  let count = 0;
  for (let i = 0; i <= grades.length; i++) {
    if (grades[i] >= 60) {
      count += 1;
    }
  }

  return Math.floor((count / grades.length) * 100) + "%";
}

console.log(getPassRate([70, 0, 33, 60, 2, 59]));
