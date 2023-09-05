// https://app.codility.com/demo/results/trainingYJGPFH-URB/

/**
 * Time complexity: O(n)
 *
 * @param A fish sizes
 * @param B fish directions:
 *      - 0: upstream
 *      - 1: downstream
 */
function Fish(A: number[], B: number[]): number {
    let survivors = 0;
    const stack: number[] = []

    for (let i = 0; i < A.length; i++) {
        const current = A[i]
        const direction = B[i]

        if (direction === 1) {
            // downstream
            stack.push(current)
        } else {
            // upstream - loop through stack and compare with current fish

            while (stack.length > 0) {
                const f = stack.pop() || -1

                if (f > current) {
                    // all smaller fishes will be eaten. Only bigger fish will be pushed back to stack
                    stack.push(f)
                    break
                }
            }

            if (stack.length === 0) {
                // all fishes in stack are eaten by current fish :)
                survivors++
            }
        }
    }

    return survivors + stack.length
}

console.log(Fish([4, 3, 2, 1, 5], [0, 1, 0, 0, 0]))