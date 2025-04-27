const reverseString = function(string)
{
    let reversedStringVariable = "";
    for(let i = string.length - 1; i > -1; i--)
    {
        reversedStringVariable += string[i]
    }

    return reversedStringVariable;
};

// Do not edit below this line
module.exports = reverseString;
