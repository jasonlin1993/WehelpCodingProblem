/*
29. 撲克牌比點數、花色大小
假設在一個撲克牌遊戲中，點數由小到大的排序是 2、3、4、...、10、J、Q、K、A。若點數相同，則考慮花色，花色由小到大的排序是 C ( 梅花 )、D ( 方塊 )、H ( 紅心 )、S ( 黑桃 )。

輸入兩個字串，依序代表兩張撲克牌的點數和花色，你的函式可以判斷是否第一張比第二張大，若是，回傳真；否則，回傳假。

輸入範例："KC"、"3H"
回傳：真

輸入範例："JS"、"QS"
回傳：假

輸入範例："2S"、"2D"
回傳：真

輸入範例："10C"、"10H"
回傳：假

*/
function comparePokerCard(c1, c2) {
  // let pokerOne = c1.match(/\d+|[A-Za-z]/g);

  // let pokerTwo = c2.match(/\d+|[A-Za-z]/g);

  const [value1, suit1] = c1.match(/\d+|[A-Za-z]/g);
  const [value2, suit2] = c2.match(/\d+|[A-Za-z]/g);

  const values = {
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    10: 10,
    J: 11,
    Q: 12,
    K: 13,
    A: 14,
  };

  const pokerSuits = {
    C: 1,
    D: 2,
    H: 3,
    S: 4,
  };

  if (values[value1] !== values[value2]) {
    return values[value1] > values[value2];
  } else {
    return pokerSuits[suit1] > pokerSuits[suit2];
  }

  // if (values[pokerOne[0]] < values[pokerTwo[0]]) return false;

  // if (values[pokerOne[0]] > values[pokerTwo[0]]) {
  //   return true;
  // } else if (values[pokerOne[0]] == values[pokerTwo[0]]) {
  //   if (pokerSuits[pokerOne[1]] > pokerSuits[pokerTwo[1]]) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }
}
console.log(comparePokerCard("KC", "3H"));
console.log(comparePokerCard("JS", "QS"));
console.log(comparePokerCard("2S", "2D"));
console.log(comparePokerCard("10C", "10H"));
