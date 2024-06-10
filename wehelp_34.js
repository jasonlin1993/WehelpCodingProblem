/*
34. 計算百分比
輸入兩個非負整數，第一個代表完成的工作項目數量，第二個代表總共有多少工作項目。你的函式能計算出工作項目的完成率，並且用百分比的字串格式輸出，無條件捨去到整數的部份。

輸入範例：0、20
回傳："0%"

輸入範例：21、40
回傳："52%"

輸入範例：3、11
回傳："27%"

輸入範例：60、60
回傳："100%"

*/
/*
    @param completed:{Integer}
    @param total:{Integer}
    @return :{String}
*/
function toPercentage(completed, total) {
  return Math.floor((completed / total) * 100) + "%";
}

console.log(toPercentage(21, 40));
