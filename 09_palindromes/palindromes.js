const palindromes = function (str) {
    str = str.toLowerCase();
    str = str.replace(/[^a-z0-9]/g, "");
    let reverseStr = str.split("").reverse().join("");
    return str === reverseStr;
};

// Do not edit below this line
module.exports = palindromes;
