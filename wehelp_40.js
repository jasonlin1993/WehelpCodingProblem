/*
40. 檢查方形是否有重疊的部份
輸入兩個陣列 / 列表代表兩個平面座標上的方形區塊，格式為 [x, y, w, h]，其中 x 和 y 為整數，代表方形區塊左上角的座標點；w 和 h 為正整數，代表往右下方延伸的寬度和高度。

你的函式能判斷兩個方形區塊是否有重疊的部份，若有，回傳真；否則，回傳假。其中，邊線剛好碰到的情況也算是重疊。

平面座標定義：X 軸往右是正數、往左是負數；Y 軸往上是正數、往下是負數。

輸入範例：
方形一：[0, 0, 10, 10]
方形二：[-5, 5, 5, 5]
回傳：真

輸入範例：
方形一：[10, 0, 10, 5]
方形二：[30, 5, 10, 5]
回傳：假

輸入範例：
方形一：[-5, -5, 20, 10]
方形二：[0, -10, 5, 5]
回傳：真

*/
function isOverlap(rect1, rect2) {
  // 取得第一個方形的邊界
  const [x1, y1, w1, h1] = rect1;
  const left1 = x1;
  const right1 = x1 + w1;
  const top1 = y1;
  const bottom1 = y1 - h1;

  // 取得第二個方形的邊界
  const [x2, y2, w2, h2] = rect2;
  const left2 = x2;
  const right2 = x2 + w2;
  const top2 = y2;
  const bottom2 = y2 - h2;

  // 檢查是否有重疊
  if (left1 < right2 && right1 > left2 && top1 > bottom2 && bottom1 < top2) {
    return true;
  } else {
    return false;
  }
}
