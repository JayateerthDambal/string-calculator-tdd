
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
    return numbersPart.split(delimiter)
        .map(num => parseInt(num, 10))
        .reduce((sum, num) => sum + num, 0);
}