function solve(num1, num2, num3) {
    let sum = num1 + num2 + num3;
    let type
    if (sum % 1 === 0) {
        type = "Integer"
    } else {
        type = "Float"
    }
    console.log(`${sum} - ${type}`);

    /////////////////////////////


    type = (sum % 1 == 0) ? "Integer" : "Float"
    console.log(`${sum} - ${type}`);
    ////////////////////////////////////////
    sum % 1 === 0 ?
        sum += " - Integer" :
        sum += " - Float"
    console.log(sum)
}
solve(9, 100, 1.1)