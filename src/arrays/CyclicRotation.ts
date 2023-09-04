// https://app.codility.com/programmers/lessons/2-arrays/cyclic_rotation/

function solution(A: number[], K: number): number[] {
    const len = A.length
    let result = new Array(len);

    // S1: Element at position [i] will be shifted to [(i + K) % len]
    // for (let i = 0; i < len; i++) {
    //     result[(i + K) % len] = A[i]
    // }

    // S2: pop and unshift K times
    result = A
    const times = K % A.length

    // for (let i = 0; i < times; i++) {
    //     const lastItem = result.pop()
    //     result.unshift(lastItem)
    // }

    // S3: slice 2 parts
    // result = times === 0 ? A : [...A.slice(-times), ...A.slice(0, len - times)]

    // S4: splice
    result = times === 0 ? A :  [...A.splice(-times), ...A.slice(0, len - times)]

    return result;
}

console.log(solution([3, 8, 9, 7, 6], 2));
console.log(solution([3, 8, 9, 7, 6], 5));
console.log(solution([3, 8, 9, 7, 6], 10));
console.log(solution([0, 0, 0], 1));
console.log(solution([1, 2, 3, 4], 4));