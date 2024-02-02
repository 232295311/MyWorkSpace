function largestAltitude(gain: number[]): number {
  let res = Number.MIN_SAFE_INTEGER;
  let sum = 0;
  for (let i = 0; i < gain.length; i++) {
    sum += gain[i];
    res = Math.max(res, sum);
  }
  return res;
}
