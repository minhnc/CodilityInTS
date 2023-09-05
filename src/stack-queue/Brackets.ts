// https://app.codility.com/programmers/lessons/7-stacks_and_queues/brackets/

// Time complexity: O(n)
function Brackets(S: string): 0 | 1 {
    const openBrackets = ['{', '(', '[']
    const closeBrackets = ['}', ')', ']']
    const bracketsMap: Record<string, string> = {
        '[': ']',
        '(': ')',
        '{': '}',
    }

    const stack: string[] = []

    for (const c of S) {
        if (openBrackets.includes(c)) {
            // Push to stack if c is a open bracket
            stack.push(c)
        } else if (closeBrackets.includes(c)) {
            // If c is a close bracket - check if the last item is a matching open bracket

            const lastItem = stack.pop() || ''
            if (bracketsMap[lastItem] !== c) {
                // un-matching
                return 0
            }

            // matching...continue
        }
    }

    // Final check - if stack is empty means all tags are properly matching
    return stack.length === 0 ? 1 : 0
}

console.log(Brackets('{[()()]}'))
console.log(Brackets('{[()()]'))
console.log(Brackets('([)()]'))