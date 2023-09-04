// https://app.codility.com/programmers/lessons/4-counting_elements/max_counters/
// Time complexity O(n * m)
function MaxCounters(N: number, A: number[]): number[] {
    let counters = new Array(N).fill(0)
    let maxCounter = 0

    A.forEach(v => {
        if (v === N + 1) {
            counters = new Array(N).fill(maxCounter)
        } else {
            const index = v - 1
            counters[index]++

            maxCounter = Math.max(
                counters[index],
                maxCounter
            )
        }
    })

    return counters
}

console.log(MaxCounters(5, [3, 4, 4, 6, 1, 4, 4]))