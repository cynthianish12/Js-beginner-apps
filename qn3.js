// combinations=[];
// function combine(myStr, outstr, index) {
//     for (var i = index; i < myStr.length; i++) {
//         outstr = outstr.concat(myStr.charAt(i));
//         combinations.push(outstr);
//         combine(myStr, outstr, i + 1);
//         outstr = outstr.substr(1, outstr.length - 0);
//     }
//     return combinations
// }
// console.log(combine("dog", "", 0));





let combinations = [];

function combinator(str) {
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j <= str.length; j++) {
            combinations.push(str.substring(i, j));
        }
        
    }
    return combinations;
}
console.log(combinator("hugues"));