/*
 * @Description:
 * @Author: Tulandbla
 * @GitHubUserName: 232295311@qq.com
 */
function compress(chars: string[]): number {
  //必须在chars原数组上进行操作，如["a","a","b","b","b","b","b","b","b","b","b","b","b","b","a","a"]要变成["a","2","b","1","2","a","2"]

  let write = 0; //写指针，定义写的位置，最终只返回0~write位置的数组
  let read = 0; //读指针，负责遍历
  const n = chars.length;
  while (read < n) {
    const curr = chars[read];
    let counter = 0; //计数
    while (read < n && chars[read] === curr) {
      counter++;
      read++;
    }
    chars[write] = curr; //修改原数组，当前计数完哪个字符啦
    write++;
    if (counter !== 1) {
      //如果大于1，进行替换
      const str = String(counter);
      for (let i = 0; i < str.length; i++) {
        chars[write] = str[i];
        write++;
      }
    }
  }
  return write; //返回前write个数就可以
}
