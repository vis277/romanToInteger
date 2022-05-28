/**
 * split the input string
 * iterate in the loop to read it's value by converting it to number
 * start from last
 * if incoming number value is less than previous value we will perform adding operation else if less we will perform sunstraction
 * 
 */



/**
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(s) {
    let obj={
    I:1,
    V:5,
    X:10,
    L:50,
    C:100,
    D:500,
    M:1000,
}

let arr=s.split('');

let stack=[];
    
stack[0]=obj[arr[arr.length-1]];
    
let sum=stack[0];

for(let i=arr.length-2;i>=0;i--){
   
    if(stack[0]>obj[arr[i]]){
sum=sum-obj[arr[i]];
stack.pop();
stack.push(obj[arr[i]]);

    }
    else{
        sum=sum+obj[arr[i]];
        stack.pop();
stack.push(obj[arr[i]]);

    }
}
  
    return sum
};
console.log(romanToInt("MCMXCIV"));