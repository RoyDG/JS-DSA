//checking sum zero - problem 1
//[-5,-4,-3,-2,0,2,4,6,8] >> input
//[-4,4] >> output

// function getSumPairZero (array){
//     for (let number of array){
//         console.log(number)
//     }
// }
// getSumPairZero([-5,-4,-3,-2,0,2,4,6,8]);

//Traversing: Traversing a Data Structure means to visit the element stored in it.
// in here i'm checking the loop is running through every element of array.
// for output check on terminal-- node sumZero

function getSumPairZero (array){
    for (let number of array){
        console.log("outer loop")
        for (let j=1; j<array.length; j++){
            console.log("inner loop")
            if (number + array[j] === 0){
                return [number, array[j]];
            }
        }
    }
}
const result = getSumPairZero([-5,-4,-3,-2,0,2,4,6,8]);
console.log(result);

//it is o(n^2) quadratic time complexity
// to check how many times loop running i console.log for outer loop and inner loop