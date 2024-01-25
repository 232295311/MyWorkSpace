/*
 * @Description:
 * @Author: Tulandbla
 * @GitHubUserName: 232295311@qq.com
 */
function addBinary(a: string, b: string): string {
  let res = "";
  let i = a.length - 1; //"1010"
  let j = b.length - 1; //"1011"
  //a和b的长度可能不一致
  let carry = 0; //进位
  while (i >= 0 || j >= 0 || carry === 1) {
    const numA = a[i] === undefined ? 0 : Number(a[i]);
    const numB = b[j] === undefined ? 0 : Number(b[j]);
    let tempRes = 0;
    const lastCarry = carry;
    // console.log(numA ,numB ,lastCarry)
    if (numA + numB + lastCarry === 3) {
      carry = 1;
      tempRes = 1;
    } else if (numA + numB + lastCarry === 2) {
      carry = 1;
      tempRes = 0;
    } else if (numA + numB + lastCarry === 1) {
      carry = 0;
      tempRes = 1;
    } else {
      carry = 0;
      tempRes = 0;
    }

    res = String(tempRes) + res;
    i--;
    j--;
  }
  return res;
}
