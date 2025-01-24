
// INFO: This function is a refactor for parsing custom delimeters
function parseDelimiter(input: string): { delimiter: string | RegExp; numbers: string } {
    if (input.startsWith('//')) {
        const delimiterEnd = input.indexOf('\n');
        return {
            delimiter: input.substring(2, delimiterEnd),
            numbers: input.substring(delimiterEnd + 1),
        };
    }
    return { delimiter: /[,\n]/, numbers: input };
}

export function add(numbers: string): number {
    if (numbers === '') return 0;

    const { delimiter, numbers: numbersPart } = parseDelimiter(numbers);
    const nums = numbersPart.split(delimiter).map(num => parseInt(num, 10));

    // Checks for negative inputs
    const negatives = nums.filter(num => num < 0);
    if (negatives.length > 0) {
        throw new Error(`negatives not allowed: ${negatives.join(', ')}`);
    }

    return nums.reduce((sum, num) => sum + num, 0);
}