
const numberWithCommas = (
    number
) => {
    return number.toString().replace(
        /\B(?=(\d{3})+(?!\d))/g, ","
    );
}

console.log(numberWithCommas(1000000));

// result value
//  1,000,000