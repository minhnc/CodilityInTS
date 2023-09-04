function FrogRiverOne(X: number, A: number[]): number {
    let stepCount = X

    // Position from 1 to X
    const leafPositions = new Array(X + 1).fill(false)

    for (let time = 0; time < A.length; time++) {
        const pos = A[time]

        if (!leafPositions[pos]) {
            leafPositions[pos] = true
            --stepCount

            if (stepCount === 0) {
                return time
            }
        }
    }

    return -1
}

console.log(FrogRiverOne(5, [1, 3, 1, 4, 2, 3, 5, 4]))