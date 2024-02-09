enum Camp {
  R = "Radiant",
  D = "Dire",
}
function predictPartyVictory(senate: string): string {
  //就是一轮中，先出现的R可以取消掉senate字符串里的1个D，第3个D可以取消掉字符串里的任一个R.
  //不可以用计数R和D出现次数的方式，比如RRRRDDDD可以将D全部弃权。

  //用两个队列分别存储R和D出现的下标Index
  const RQueue: number[] = [];
  const DQueue: number[] = [];
  const n = senate.length;
  for (let i = 0; i < senate.length; i++) {
    if (senate[i] === "R") {
      RQueue.push(i);
    } else if (senate[i] === "D") {
      DQueue.push(i);
    }
  }

  while (RQueue.length > 0 && DQueue.length > 0) {
    if (RQueue[0] < DQueue[0]) {
      //比较首元素下标，小的代表先执行权利，大的会被弃权。
      DQueue.shift();
      //然后小的下标要弹出+n再重新加入队列中，代表了新的一轮的投票
      const temp = RQueue.shift()! + n;
      RQueue.push(temp);
    } else {
      RQueue.shift();
      const temp = DQueue.shift()! + n;
      DQueue.push(temp);
    }
  }
  return RQueue.length > 0 ? Camp.R : Camp.D;
}
