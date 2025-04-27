const sumAll = function(from, to)
{
    let summed = 0;
    let bothIntAndPositive = Number.isInteger(from) && Number.isInteger(to) && from >=0 && to >= 0;
    if(bothIntAndPositive)
    {
        if(from > to)
        {
            for(let i = to; i <= from; i++)
                {
                    summed += i;
                    console.log(i);
                }
            
                return summed;
        }
        else
        {
            for(let i = from; i <= to; i++)
                {
                    summed += i;
                    console.log(i);
                }
            
                return summed;
        }
    }

    else
    {
        return "ERROR"
    }
};

// Do not edit below this line
module.exports = sumAll;