// https://app.codility.com/programmers/lessons/3-time_complexity/perm_missing_elem/

// Missing number = sumOf([1, ..., N+1]) - sumOf(input)
// CPU: O(n) | RAM: O(1)
function solution(A: number[]): number {
    // Sum of input A
    const inputSum = A.reduce((prev, curr) => prev + curr, 0)

    // Expected Array from [1, ..., A.length + 1]
    const len = A.length
    const expectedSum = (len + 1) * (len + 2) / 2

    return expectedSum - inputSum
}

console.log(solution([2, 3, 1, 5]))
console.log(solution([1, 4, 3, 2, 5]))
console.log(solution([]))