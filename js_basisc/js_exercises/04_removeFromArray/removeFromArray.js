const removeFromArray = function(array, ...args)
{
    let newArray = [];
    for(let i in array){
        let getDeleted = false;
        for(let j in args){
            if(array[i] == args[j] && typeof array[i] == typeof args[j]){
                getDeleted = true;
            }
        }

        if(!getDeleted){
            newArray.push(array[i]);
        }
    }

    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
