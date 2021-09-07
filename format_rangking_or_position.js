const ordinalSuffix = (number) => {
    let j = number % 10,
        k = number % 100;
    if (j == 1 && k != 11) {
        return `${number}st`;
    }
    if(j == 2 && k != 12) {
        return `${number}nd`;
    }
    if(j == 3 && k != 13) {
        return `${number}rd`
    }
    return `${number}th`;
}

console.log(ordinalSuffix(1));

// result value example 
// 1 = 1st
// 2 = 2nd
// 3 = 3rd
// 4 = 4th
// ....
