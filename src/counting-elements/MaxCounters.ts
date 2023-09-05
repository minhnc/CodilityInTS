// https://app.codility.com/programmers/lessons/4-counting_elements/max_counters/

// Time complexity O(n * m)
function MaxCounters(N: number, A: number[]): number[] {
    let counters = new Array(N).fill(0)
    let maxCounter = 0

    A.forEach(v => {
        if (v > N) {
            // maxCounter instruction
            counters = new Array(N).fill(maxCounter)
        } else {
            // increase instruction
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

// Time complexity O(n + m)
function MaxCountersV2(N: number, A: number[]): number[] {
    const counters = new Array(N).fill(0)
    let maxCounterValue = 0
    let currentMaxCounter = 0

    A.forEach(instruction => {
        if (instruction > N) {
            // max counter - update currentMaxCounter to maxCounterValue
            currentMaxCounter = maxCounterValue

        } else {
            const index = instruction - 1

            if (counters[index] < currentMaxCounter) {
                // there was a maxCounter instruction before
                counters[index] = currentMaxCounter + 1
            } else {
                counters[index]++
            }

            maxCounterValue = Math.max(counters[index], maxCounterValue)
        }
    })

    // update all the counters to currentMaxCounter
    return counters.map(
        counter => counter < currentMaxCounter ? currentMaxCounter : counter
    )
}

// init:    [0, 0, 0, 0, 0]
// 3:       [0, 0, 1, 0, 0]
// 4:       [0, 0, 1, 1, 0]
// 4:       [0, 0, 1, 2, 0]
// 6:       [2, 2, 2, 2, 2]
// 1:       [3, 2, 2, 2, 2]
// 4:       [3, 2, 2, 3, 2]
// 4:       [3, 2, 2, 4, 2]

console.log(MaxCounters(5, [3, 4, 4, 6, 1, 4, 4]))
console.log(MaxCountersV2(5, [3, 4, 4, 6, 1, 4, 4]))