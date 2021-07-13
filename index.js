// run `node index.js` in the terminal

function solution(N) {
  const binary = N.toString(2);
  const indicesOfOne = [...binary].map((num, index) => {
    return num === '1' && index;
  });
  const result = indicesOfOne.filter(index => index !== false);
  let diff = 0,
    maxDiff = 0;
  for (let i = 0; i < result.length; i++) {
    diff = result[i + 1] - result[i];
    console.log({ diff, maxDiff });
    if (diff > maxDiff) {
      maxDiff = diff;
    }
  }
  return maxDiff;
}
console.log(solution(32));
