const fibonacci = function(a) {
    let num = parseInt(a) 
    let fiboArray = []
    let n1 = 1;
    let n2 = 1;
    let numSum;

    for(let i = 1; i < 100; i++)
    {
        fiboArray.push(n1)
        numSum = n1 + n2
        n1 = n2
        n2 = numSum

    }
    if(num == 0)
    {
        return 0
    }
    else if(num < 0)
    {
        return "OOPS"
    }
    else{
        return fiboArray[num-1]
    }
};

// Do not edit below this line
module.exports = fibonacci;
