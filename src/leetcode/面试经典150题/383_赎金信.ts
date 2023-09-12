/*
 * @Description:
 * @Author: Tulandbla
 * @GitHubUserName: 232295311@qq.com
 */
function canConstruct(ransomNote: string, magazine: string): boolean {
  const count = new Array(26).fill(0);
  const charCodeA = "a".charCodeAt(0);
  for (let j = 0; j < magazine.length; j++) {
    const charCode = magazine[j].charCodeAt(0);
    count[charCode - charCodeA]++;
  }
  for (let i = 0; i < ransomNote.length; i++) {
    const charCode = ransomNote[i].charCodeAt(0);

    count[charCode - charCodeA]--;
    if (charCode - charCodeA < 0) {
      return false;
    }
  }
  return true;
}
