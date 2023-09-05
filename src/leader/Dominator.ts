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

// https://app.codility.com/demo/results/trainingQAV7ZZ-A5U/
// Time complexity: O(n)
function Dominator2(A: number[]): number {
    let leader = 0
    let counter = 0

    for (const a of A) {
        if (counter === 0) {
            leader = a
            counter++
        } else if (a === leader) {
            counter++
        } else {
            counter--
        }
    }

    if (counter === 0) {
        return -1
    }

    let occurCount = 0
    let occurIndex = -1

    for (let i = 0; i < A.length; i++) {
        if (A[i] === leader) {
            occurCount++
            occurIndex = i
        }
    }

    return occurCount > (A.length / 2) ? occurIndex : -1
}

console.log(Dominator([3, 4, 3, 2, 3, -1, 3, 3]))
console.log(Dominator([0, 0, 1, 1, 1]))