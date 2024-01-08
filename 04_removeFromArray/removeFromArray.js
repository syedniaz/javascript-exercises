const removeFromArray = function(arr, ...args) {
    // Iterate over each argument
    args.forEach(arg => {
        // Find the index of the argument in the array
        let index = arr.indexOf(arg);
        
        // Check if the argument is found in the array
        if (index !== -1) {
            arr.splice(index, 1); // Use splice to remove the element at the found index
        }
    });

    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
