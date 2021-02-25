// var smallerNumbersThanCurrent = function(nums) {
//     let object = {}
//     let times = 0
//     let answerArr = []

//     for(let i=0; i<nums.length; i++){
//         object[nums[i]] = 0
//         if(nums[i] > nums[i+1]){
//             for (nums[i] in object){
//                 object[nums[i]] +=1
//             } 
//         } else{
//             for (nums[i] in object){
//                 object[nums[i]] +=0
//             } 
//         }
//       } console.log(object)
// };


// console.log(smallerNumbersThanCurrent([8,1,2,2,3]))




var smallerNumbersThanCurrent = function(nums) {
    let object = {}
    for(let i=0; i<nums.length; i++){
        for(nums[i] in object){
            if(nums[i]> nums[i+1]) {
                object[nums[i]] +=1
              } else{
                object[nums[i]] =0
              }
        }
           
      } console.log(object)
};

console.log(smallerNumbersThanCurrent([8,1,2,2,3]))
