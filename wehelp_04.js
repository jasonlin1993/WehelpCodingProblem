/*
4. 找到第二大的整數
輸入包含至少兩個不同整數的陣列 / 列表，找到並回傳其中第二大的整數。

輸入範例一：[1, 3, 3, 2, 5, -2]
回傳：3

輸入範例二：[-5, -10, -8, 1, -1]
回傳：-1

輸入範例一：[0, 2]
回傳：0

*/

/*
    @param nums:{[Integer]}
    @return :{Integer}
*/

nums = [1, 3, 3, 2, 5, -2];
function findSecond(nums) {
  let findMaxInt = nums[0];
  let findSecondLargestInt = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > findMaxInt) {
      findSecondLargestInt = findMaxInt;
      findMaxInt = nums[i];
    } else if (nums[i] < findMaxInt && nums[i] > findSecondLargestInt) {
      findSecondLargestInt = nums[i];
    }
  }
  return findSecondLargestInt;
}

console.log(findSecond([-5, -10, -8, 1, -1]));
