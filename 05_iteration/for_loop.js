// for (let index = 0; index <= 10; index++) {
//     console.log(index);
//     ;
    
// }

// for (let i=0; i<=10;i++){
//     console.log(`value of ${i}`);
    
//     for (let j = 0; j<=10; j++) {
    
//         console.log(`value of ${i} and value of ${j}`);
        
//     }
// }

// let myArray=["flash","superman","batman"]
// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
//     console.log(element);
    
    
// }

// for (let i = 0; i < 10; i++) {
//      if (i==5) {
//         console.log("detected 5");
//         break;
//      }

//     console.log(`value of ${i}`); 
//     // this is break statement . it breaks the loop when the condition gets satisfied and 
//     // ends the loop there only.
    
    
// }

for (let i = 0; i < 10; i++) {
   if (i==5) {
    console.log("detected 5")
    continue
   };
    console.log(`value of ${i}`)
}// continue allows the loop to run even when the condition gets satistfied .