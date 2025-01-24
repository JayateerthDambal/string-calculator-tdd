export function add(numbers: string): number {
    if (numbers === '') return 0;

    // Default delimiter (comma or newline)
    let delimiter: string | RegExp = /[,\n]/;
    let numbersPart = numbers;

    // Check: custom delimiter syntax: "//[delimiter]\n..."
    if (numbers.startsWith('//')) {
        const delimiterEnd = numbers.indexOf('\n');
        delimiter = numbers.substring(2, delimiterEnd); // Extracts custom delimiter
        numbersPart = numbers.substring(delimiterEnd + 1); // Gets numbers part
    }

    // Spilts using delimeter and returns the sum of all the numbers
    return numbersPart.split(delimiter)
        .map(num => parseInt(num, 10))
        .reduce((sum, num) => sum + num, 0);
}