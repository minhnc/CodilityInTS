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
    let counters = new Array(N).fill(0)
    let maxCounter = 0
    let maxCounterInstruction = 0

    A.forEach(v => {
        if (v > N) {
            // maxCounter instruction
            maxCounterInstruction = maxCounter
        } else {
            // increase instruction
            const index = v - 1

            if (counters[index] < maxCounterInstruction) {
                // there was a maxCounter Instruction
                counters[index] = maxCounterInstruction + 1
            } else {
                counters[index]++
            }

            maxCounter = Math.max(
                counters[index],
                maxCounter
            )
        }
    })

    // The final loop to apply maxCounterInstruction to other counters
    return counters.map(
        counter => counter < maxCounterInstruction ? maxCounterInstruction : counter
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