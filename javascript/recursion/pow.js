function powRecursion(num, power){
    if(power == 1){
        return num
    }
    return num * powRecursion(num, power-1)
}

console.log(powRecursion(2, 3))