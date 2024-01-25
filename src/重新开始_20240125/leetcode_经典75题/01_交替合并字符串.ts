function mergeAlternately(word1: string, word2: string): string {
  // abc pgr
  let res = "";
  let i = 0;
  let j = 0;
  const n = word1.length;
  const m = word2.length;
  while (i < n || j < m) {
    if (i < n) {
      res += word1[i];
      i++;
    }
    if (j < m) {
      res += word2[j];
      j++;
    }
  }

  return res;
}
