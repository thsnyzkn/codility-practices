// run `node index.js` in the terminal

function binaryGap(N) {
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
//My solution
function cyclicRotation(A, K) {
  return A.map((_, i, arr) =>
    i - K + arr.length < arr.length ? arr[i - K + arr.length] : arr[i - K]
  );
}

//Awesome solution
function cyclicRotationSolution(A, K) {
  K = K % A.length;
  const sliceIndex = A.length - K;
  return [...A.slice(sliceIndex), ...A.slice(0, sliceIndex)];
}
function oddOccurences(A) {
  // write your code in JavaScript (Node.js 8.9.4)

  if (A.length % 2 === 0) {
    return A[0];
  }
  for (let i = 0; i < A.length; i++) {
    if (A.slice(1).indexOf(A[0]) > -1) {
      const indx = A.slice(1).indexOf(A[0]);
      A.splice(0, 1);
      A.splice(indx, 1);
    }
  }
  return A[0];
}
