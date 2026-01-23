const coding=["java","python","cpp","ruby"]
// coding.forEach( function(item){
//     console.log(item)

// })

// coding.forEach((item)=>{
// console.log(item)
// })

// let printMe=(item)=>{
//     console.log(item)
// }
// coding.forEach(printMe)

// coding.forEach( (item,index,arr)=>{
//     console.log(item,index,arr);
    
// })
// What each parameter means

// forEach callback receives 3 arguments (in this order):

// item → current element being processed

// index → index of the current element

// arr → the original array (coding)

const code=[
    {
        languageName:"python",
        languageFileName:"py"
        
    },
    {
         languageName:"Ruby",
        languageFileName:"rb"
    },
    {
         languageName:"javascript",
        languageFileName:"js"
    }
]

code.forEach( (item)=>{
console.log(item.languageFileName)
console.log(item.languageName);

})
// we can access objects inside arrays by using dot operator