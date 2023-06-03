console.log("person1: shows ticket");
console.log("person2: shows ticket");

const preMovie=async ()=>{
    const WifeBringTicket= await new Promise((resolve,reject)=>{
        setTimeout(resolve,3000,"ticket");
        
    })
    console.log(`wife: i got the ${WifeBringTicket}`);
    console.log("husband: we should go in");
    console.log("wife: we should take something to eat");
    console.log("wife: take popcorn");
    const getPopcorn= await new Promise((resolve,reject)=>resolve("popcorn"));
    console.log(`husband:i got ${getPopcorn}`);
    console.log("wife: take butter");
    const getButter=await new Promise((resolve,reject)=>resolve("butter"));
    console.log(`husband:i got ${getButter}`);
    console.log("wife: take cold drink");
    const getColdDrink=await new Promise((resolve,reject)=>resolve("cold drink"));
    console.log(`husband:i got ${getColdDrink}`);

    return WifeBringTicket;
};
preMovie().then((msg)=>console.log(`person3 show ${msg} and get in`));
console.log("person4: shows ticket");
console.log("person5: shows ticket");