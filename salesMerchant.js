// Alex works at a clothing store. There is a large pile of socks that must be paired by color for sale. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.For example, there are  socks with colors . There is one pair of color  and one of color . There are three odd socks left, one of each color. The number of pairs is .

// It must return an integer representing the number of matching pairs of socks that are available.


// n = 9 //total number of socks
 

// function sockMerchant(n, ar) {
//     ar = [10,20,20,10,10,30,50,10,20] 
//     var res = 0;
//          ar.sort();
//         for(let i=0; i<ar.length;i++){
//             if(ar[i] == ar[i+1]){
//                 i++;
//                       res++;
//                }
//         }
//     return res;
//     }

//     console.log(sockMerchant())




//     //OR 





//     function sockMerchant(n, ar) {
//         n=9
//         ar = [2,2,2,3,4,5,5,6]
//         let socks = {};
//         let pairs = 0;
            
//             for (let one of ar) {
//           socks[one] = socks[one] + 1 || 1;
//             //this is where the separation of the pairs
//             if (socks[one] % 2 === 0) {
//               pairs += 1;
//             }
//           }
//         return pairs;
//         }
        
//         console.log(sockMerchant())




const sockMerchant =(n, arr) =>{
//   n= 9
//  arr = [10,20,20,10,10,30,50,10,20]
 let tracker = {}
 let sum = 0
 let otherSum = 0
 let answer = 0
 let superAnswer = 0
 for(let i=0; i<arr.length; i++){
   if(arr[i] in tracker){
     tracker[arr[i]] +=1
   } else{
     tracker[arr[i]] =1
   }
 }
 for(key in tracker){
    console.log(tracker)
  if(tracker[key]%2 !==0){
  tracker[key] = tracker[key]-1
    // console.log(tracker)
    sum += tracker[key]
  } else {
    otherSum += tracker[key]
  }
 } answer = sum + otherSum
  superAnswer = answer/2
  return superAnswer

}

console.log(sockMerchant(10, [1,1,3,1,2,1,3,3,3,3]))
//  sockMerchant(7, [1,2,1,2,1,3,2])
// sockMerchant(15, [6,5,2,3,5,2,2,1,1,5,1,3,3,3,5])
// console.log(sockMerchant())