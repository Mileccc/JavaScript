// Decimal: 0 1 2 3 4 5 6 7 8 9
// Hexadecimal: 0 1 2 3 4 5 6 7 8 9 A B C D E F
// Octal: 0 1 2 3 4 5 6 7
// Binario: 0 1
// bit: 0 1
// Byte: 8 bits
// Byte: 00000000 -> 0
// Byte: 00000001 -> 1
// Byte: 00000010 -> 2
// Byte: 00000011 -> 3
// Byte: 00000100 -> 4
// Byte: 00000101 -> 5
// Byte: 00000110 -> 6
// Byte: 00000111 -> 7
// Byte: 00001000 -> 8
// Byte: 00001001 -> 9
// Byte: 00001010 -> 10
// Byte: 00001011 -> 11
// Byte: 00001100 -> 12
// Byte: 00001101 -> 13
// Byte: 00001110 -> 14
// Byte: 00001111 -> 15
// Byte: 11111111 -> 255

console.log(1 | 3); // 00000011 -> 3
console.log(1 | 4); // 00000101 -> 5

console.log(1 & 3); // 00000001 -> 1
console.log(1 & 4); // 00000000 -> 0
