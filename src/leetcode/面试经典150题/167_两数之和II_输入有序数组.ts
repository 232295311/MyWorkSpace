function twoSum(numbers: number[], target: number): number[] {
  const res: any[] = [];
  let i = 0;
  let j = numbers.length - 1;
  while (i < j) {
    if (numbers[i] + numbers[j] > target) {
      j--;
    } else if (numbers[i] + numbers[j] < target) {
      i++;
    } else {
      res.push(numbers[i]);
      res.push(numbers[j]);
    }
  }
  return res;
}
