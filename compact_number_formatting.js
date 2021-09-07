
const compactNumber = (value) => {
    const suffixes = ["", "k", "m", "b", "t"];
    const suffixNum = Math.floor((""+value).length/3);
    
    let shortValue = 
        parseFloat(
            (suffixNum != 0 ? (value / Math.pow(1000,suffixNum)) : value).toPrecision(2)
        );
    if (shortValue % 1 != 0) {
        shortValue = shortValue.toFixed(1);
    }

    return shortValue+suffixes[suffixNum];
}

console.log(compactNumber(2000000000));

// result value example
// 20000 = 20k
// 20000 = 0.2m
// 200000 = 2m
// 2000000 = 20m
// 20000000 = 0.2b
// 200000000 = 2b
        
