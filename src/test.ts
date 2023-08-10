type Fn = (...params: any[]) => Promise<any>;

function timeLimit(fn: Fn, t: number): Fn {
  const promise1 = new Promise((resolve) =>
    setTimeout(() => {
      resolve({ rejected: "Time Limit Exceeded", time: t });
    }, t)
  );
  return async function (...args) {
    await Promise.race([promise1, fn(...args)]).then((res) => res);
  };
}

/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */
