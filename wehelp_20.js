/*
20. 檢查是否為等差數列
輸入包含至少三個整數的陣列 / 列表，你的函式能判斷其中的整數是否形成一個等差數列。若是，回傳真，若否，回傳假。

輸入範例一：[3, 2, 1]
回傳：真

輸入範例二：[0, 0, 0, 0]
回傳：真

輸入範例一：[-17, -13, -9, -5]
回傳：真

輸入範例一：[1, 3, 6]
回傳：假

*/
function checkArithmeticSequence(nums) {
  nums.sort((a, b) => a - b);
  let d = nums[1] - nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] - nums[i - 1] != d) return false;
  }
  return true;
}

console.log(checkArithmeticSequence([1, 3, 6]));
