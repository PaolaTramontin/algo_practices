const isPartyTonight = false;
const miniGoldCoupon = false;
const saleAtTheMall = false;

if(isPartyTonight){
    console.log("i am going to party")
} else if (miniGoldCoupon){
    console.log("hole in one")
} else if (saleAtTheMall){
    console.log("buy more save more")
} else {
    console.log("looks like we are baking cooking")
}


console.log(Boolean("")) //returns false
console.log(Boolean(0)) // returns false
console.log(Boolean(!0)) //returns true
console.log(!!1) //returns true
console.log(Boolean(1)) //returns true
console.log(Boolean([])) // returns true


console.log(false == false ) //returns true
console.log(true  != true ) //retuns false because != makes true, false. so thats saying true = false
console.log(true  == !true ) //returns false
console.log(5=="5") //returns true
console.log(5==="5") //returns false








console.log(1===1) //returns true
console.log("beans" === "Beans") //returns falses
console.log("beans" == "Beans") //returns falses STILL
console.log((5+5 * 3) === ((5+5) *3)) //returns false
console.log(9 !== false) //returns true
console.log(NaN === NaN) //returns false because its never equal to anything because its unique.


console.log("Z" < "A") //returns false. because if its strings, A = 1 in the alphabet and Z is 25th so 1<25