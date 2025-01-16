/* Chef Mario's Recipe Book 
Chef Mario was in the middle of writing his cookbook masterpiece
when he spilled coffee on his keyboard! Now all his recipes have repeat
ingredients.

Help save Chef Mario's cookbook by writing a function that takes in an array 
and returns a new array with all the duplicates removed. 

Example input: ["🌈 rainbow", "🦄 unicorn", "🍭 lollipops", "🦄 unicorn", "🍭 lollipops"];
Example output: ["🌈 rainbow", "🦄 unicorn", "🍭 lollipops"];
*/ 

const eggScrambleRecipe = [
    "🥓 bacon",
    "🥓 bacon", 
    "🍳 eggs",
    "🫑 green peppers",
    "🧀 cheese",
    "🌶️ hot sauce",
    "🥓 bacon",
    "🥦 broccoli", 
    "🧀 cheese",
    "🥦 broccoli", 
    "🌶️ hot sauce"
]

function removeDupesFromArray(arr){
    const removedDuplicates = [...new Set(arr)] // the speread operator is necessary to take the content of the set and put it in array
    return removedDuplicates
}

// alternative solution
// const trackDupes = {};
    
// return arr.filter(item => {
//     if(!trackDupes[item]){
//         trackDupes[item] = true;
//         return true;
//     }
//     return false;
// });

console.log(removeDupesFromArray(eggScrambleRecipe));