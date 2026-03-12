const promiseOne=new Promise(function(resolve, reject){
        setTimeout(function(){
            console.log('Async task is completed');
            resolve();
        },1000)
})

promiseOne.then(function(){
    console.log('Promise consumed');
    
})//then will only work when promise is completed
//value returned by promise bydefault comes to then .

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Async task 2');
        resolve()
    },1000)
}).then(function(){
    console.log('Async task 2 completed');
    
})//we can directly apply then at promise without storing it in another variable.

const promiseThree=new Promise(function(resolve,reject){
         setTimeout(function(){
            resolve({username:'Abhinav swarnkar',password:'chai'})
            
         },1000)
})
promiseThree.then(function(user){
    console.log(user);
    
})
//by this way we can pass values to promise and then handle it using then .
// The reason we pass values inside resolve() is because resolve() sends the result of the Promise to .then().
// Think of resolve() as returning the final result of an asynchronous task.

const promiseFour=new Promise(function(resolve,reject){
setTimeout(function(){
       let error=true;

    if (!error) {
        resolve({username:'ayush',rollno:53})
    }else{
        reject('Error:something went wrong')
    }
},1000)
})
promiseFour.then(function(user){
    console.log(user);
    return user.username
    
}).then(function(username){
    console.log(username);
    
}).catch(function(error){
console.log(error);

}).finally(function(){
    console.log('promises have been resolved or rejected');
    
})

const promiseFive=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true;
        if (!error) {
            resolve({username:'Hitesh',password:1234})
        }else{
            reject('error:js went wrong')
        }
    },1000)
})

async function consumePromise() {
   try {
     const response=await promiseFive
    console.log(response);
    
   } catch (error) {
    console.log(error);
    
   }
}
consumePromise()
// we need to call the async function manually.
// await takes the promise and wait until the promise is resolved .

// async function getAllUsers() {
//   try {
//       const response=await fetch("https://jsonplaceholder.typicode.com/users")
//     const data = await response.json()
//     console.log(data);
    
//   } catch (error) {
//     console.log('error:', error);
    
//   }
// }
// getAllUsers()


fetch('https://jsonplaceholder.typicode.com/users').then((response)=>{
    return response.json()
}).then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log(error);
    
})