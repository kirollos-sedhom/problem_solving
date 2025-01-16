import shoppingCart from "./data.js";

/*  
Use reduce() to total the groceries. 
Then find a method that will round the total to 2 decimal places.

Example output: 73.44
*/

function total(arr){
    let total = arr.reduce(add, 0)
    function add(previous,item){
    
        
        return previous + item.price
    }
    return total.toFixed(2);
}

console.log(total(shoppingCart));
