export function add(numbers: string): number {
    if (numbers === '') return 0; // Handle empty string
    return parseInt(numbers, 10);  // Parses the Single INput
}