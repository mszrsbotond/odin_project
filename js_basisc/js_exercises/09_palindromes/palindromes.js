const palindromes = function (word) {
    let splitString = word.split("")
    let reverseArray = splitString.reverse()
    let joinArray = reverseArray.join("")
    if(joinArray == word)
    {
        return true
    }
    else
    {
        return false
    }
};

// Do not edit below this line
module.exports = palindromes;
