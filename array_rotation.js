// a = the array of n
// n = intengers in the a array
//d = number of rotations to be preformed


//function that will change the array
const rotLeft = () =>{
    let d= 1
    var a = [1,2,3,4,5];
    a = a.concat(a.splice(0,d));
     console.log(a); 
    }


console.log(rotLeft())