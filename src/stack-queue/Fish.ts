// https://app.codility.com/demo/results/trainingABF6PR-37Y/

/**
 * Time complexity: O(n)
 *
 * @param A fish sizes
 * @param B fish directions:
 *      - 0: upstream
 *      - 1: downstream
 */
function Fish(A: number[], B: number[]): number {
    const upstream: number[] = []
    const downstream: number[] = []

    for (let i = 0; i < A.length; i++) {
        const current = A[i]
        const direction = B[i]

        if (direction === 1) {
            // downstream
            downstream.push(current)
        } else {
            // upstream - loop through downstream[] and compare with current fish

            if (downstream.length === 0) {
                // no fish in downstream
                upstream.push(current)
            } else {
                while (downstream.length > 0) {
                    const f = downstream.pop() || -1

                    if (f > current) {
                        // all smaller fishes will be eaten. Only bigger fish will be pushed back to downstream
                        downstream.push(f)
                        break
                    }
                }
            }
        }
    }

    return upstream.length + downstream.length
}