function restoreIpAddresses(s: string): string[] {
  // 输入：s = "25525511135"                             s = "101023"
  // 输出：["255.255.11.135","255.255.111.35"]   ["1.0.10.23","1.0.102.3","10.1.0.23","10.10.2.3","101.0.2.3"]
  if (s.length < 4 || s.length > 12) {
    return [];
  }
  const res: string[] = [];
  let currPath = "";
  let pointNum = 0; //currPath里有多少个pointNum
  backTracking(0);
  return res;
  //组合问题，用start。 //只有将整个s都分割了才算成功
  function backTracking(start) {
    //TODO:
    if (pointNum === 3) {
      //pointNum===3说明currPath里面已经有3个逗号了，剩下最后一段直接加进去
      if (isRightFulIPSegment(s, start, s.length - 1)) {
        res.push(currPath + s.substring(start, s.length));
      }
      return;
    }
    for (let i = start; i < Math.min(s.length, start + 3); i++) {
      //从start到i 最长三位
      if (
        isRightFulIPSegment(s, start, i) &&
        i + 1 + 3 * (3 - pointNum) >= s.length
      ) {
        //如果从start到i合法，并且currPath能和没被分割的字符组成合法IP地址
        currPath += s.substring(start, i + 1) + "."; //'25.' '255.'
        pointNum++;
        console.log(currPath);
        backTracking(i + 1);
        currPath = currPath.substring(0, currPath.length - (i - start + 2));
        pointNum--;
      } else {
        continue; //跳出本轮迭代
      }
    }
  }

  function isRightFulIPSegment(s: string, start: number, end: number) {
    //判断s从start到end，是否是合法IP地址的整数（0~255且不能有前置0）。用于检查合法IP地址里的一段
    s = s.substring(start, end + 1);
    if (!/\d+/g.test(s)) {
      //如果不全是数字
      return false;
    }
    if (Number(s) < 0 || Number(s) > 255) {
      //如果不在0~255
      return false;
    }
    if (Number(s) > 0 && s[0] === "0") {
      //如果有前置0
      return false;
    }
    return true;
  }
}
