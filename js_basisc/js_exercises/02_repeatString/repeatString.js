const repeatString = function(string, num)
{
    let final_connected_text = "";
    if(num >= 0)
    {
        for(let i = 0; i < num; i++)
            {
                final_connected_text += string;
            }
        return final_connected_text;
    }
    else
    {
        return "ERROR";
    }
};

// Do not edit below this line
module.exports = repeatString;
