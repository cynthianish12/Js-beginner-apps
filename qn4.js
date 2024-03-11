const alphabetic_order = (str) => {
    var alphabet = str.split('').sort().join('');
    return alphabet;
}
console.log(alphabetic_order("benondushime"));