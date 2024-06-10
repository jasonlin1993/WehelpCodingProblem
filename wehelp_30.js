/*
30. 二十四小時的推移
二十四小時的表示法中，整數 0 ~ 23 代表一天內的小時數。

輸入一個 0 ~ 23 之間的整數，代表目前的小時數；以及一個任意整數，代表小時數的推移量。你的函式能夠計算並回傳經過推移後的小時數 ( 使用二十四小時表示法 )。

輸入範例：2、5
回傳：7

輸入範例：16、10
回傳：2

輸入範例：1、-5
回傳：20

輸入範例：3、-30
回傳：21

輸入範例：23、100
回傳：3

*/
/*
    @param current:{Integer}
    @param offset:{Integer}
    @return :{Integer}
*/
function addHours(current, offset) {
  let ans = current + offset;
  while (ans > 24 || ans >= 0) {
    ans -= 24;
    if (ans < 24 && ans > 0) {
      return ans;
    }
  }

  while (ans <= 0) {
    ans += 24;
    if (ans >= 0) {
      return ans;
    }
  }
}

/*

function addHours(current, offset) {
  const hoursInDay = 24;
  let ans = (current + offset) % hoursInDay;
  if (ans < 0) {
    ans += hoursInDay;
  }
  return ans;
}
 */

console.log(addHours(2, 5));
console.log(addHours(16, 10));
console.log(addHours(1, -5));
console.log(addHours(3, -30));
console.log(addHours(23, 100));
