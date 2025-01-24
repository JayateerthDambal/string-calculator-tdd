export function add(numbers: string): number {
    if (numbers === '') return 0;

    return numbers.split(/[,\n]/)
        .map(num => parseInt(num, 10))
        .reduce((sum, num) => sum + num, 0);
}