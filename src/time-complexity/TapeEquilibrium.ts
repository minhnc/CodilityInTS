// Time Complexity: O(n)
function TapeEquilibrium(A: number[]): number {
    const sum = A.reduce((prev, curr) => prev + curr, 0)

    // at p=1
    let leftSum = A[0]
    let rightSum = sum-leftSum
    let diff = Math.abs(leftSum - rightSum)

    // loop through 2 to the end of A
    for (let i = 2; i < A.length; i++) {
        const shiftingEle = A[i - 1]
        leftSum += shiftingEle
        rightSum -= shiftingEle

        diff = Math.min(
            Math.abs(leftSum - rightSum),
            diff
        )
    }

    return diff
}

console.log(TapeEquilibrium([3, 1, 2, 4, 3]))