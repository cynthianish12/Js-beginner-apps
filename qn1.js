// function number_reverse(number) {
//     var reverse=number.toString().split('').reverse().join('')
//     var result=parseInt(reverse)*Math.sign(number)
//     return result
// }
// console.log(number_reverse(-32243))
var num = -4235;
var reverse = num.toString().split('').reverse().join('');
var result = parseInt(reverse)*Math.sign(num);
console.log(result);