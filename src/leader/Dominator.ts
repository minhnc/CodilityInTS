// https://app.codility.com/demo/results/trainingYUVB82-5YE/

// Time complexity: O(n)
function Dominator(A: number[]): number {
    const stack: number[] = []

    for (const a of A) {
        if (stack.length === 0) {
            stack.push(a)
        } else {
            const top = stack.pop()

            if (top === a) {
                stack.push(top, a)
            }
        }
    }

    if (stack.length === 0) {
        return -1
    }

    let count = 0
    let lastOccur = 0
    const top = stack.pop()

    for (let i = 0; i < A.length; i++) {
        if (top === A[i]) {
            count++
            lastOccur = i
        }
    }

    return count > (A.length / 2) ? lastOccur : -1
}

console.log(Dominator([3, 4, 3, 2, 3, -1, 3, 3]))
console.log(Dominator([0, 0, 1, 1, 1]))