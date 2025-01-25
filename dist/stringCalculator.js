function escapeRegExp(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
// INFO: This function is a refactor for parsing custom delimeters
function parseDelimiter(input) {
    if (input.startsWith('//[')) {
        const closingBracketIndex = input.indexOf(']\n');
        if (closingBracketIndex === -1) {
            return { delimiter: /[,\n]/g, numbers: input };
        }
        const delimitersSection = input.substring(3, closingBracketIndex);
        const delimiters = delimitersSection.split('][');
        const regexPattern = delimiters
            .map(d => escapeRegExp(d))
            .join('|');
        return {
            delimiter: new RegExp(regexPattern, 'g'),
            numbers: input.substring(closingBracketIndex + 2)
        };
    }
    if (input.startsWith('//')) {
        const delimiterEnd = input.indexOf('\n');
        if (delimiterEnd === -1) {
            return { delimiter: /[,\n]/g, numbers: input };
        }
        const delimiter = input.substring(2, delimiterEnd);
        return {
            delimiter: new RegExp(escapeRegExp(delimiter), 'g'),
            numbers: input.substring(delimiterEnd + 1)
        };
    }
    // Default delimiters: comma or newline
    return { delimiter: /[,\n]/g, numbers: input };
}
function parseNumber(numStr) {
    const num = parseInt(numStr, 10);
    return num > 1000 ? 0 : num;
}
export function add(numbers) {
    if (numbers === '')
        return 0;
    const { delimiter, numbers: numbersPart } = parseDelimiter(numbers);
    const nums = numbersPart.split(delimiter).map(parseNumber);
    const negatives = nums.filter(num => num < 0);
    if (negatives.length > 0) {
        throw new Error(`negatives not allowed: ${negatives.join(', ')}`);
    }
    return nums.reduce((sum, num) => sum + num, 0);
}
