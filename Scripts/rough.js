// // let btn=document.getElementById("btn");
// // btn.addEventListener("click",()=>{
// //     alert("Booking successful!");
// // })

// let username={
//     name:"jawahar",
//     age:22,
//     loc:"chennai",
//     num:1234567890,

// }
// // for(key in username)
// //     {
// // console.log(key + "-" + username[key]);
// //     }

//     // let a=
//     // {
//     //     name:"jawahar",
//     //     age:22,
//     //     loc:"chennai",
//     //     num:1234567890,
//     // }
//     // let b=a;
//     // console.log(a,b);
//     // b.name="Jeevan";
//     // console.log(a,b);


// function Addition(c)
// {
// this.a=10;
// this.b=20;
// this.add=function(c)
// {
//     return this.a+this.b+c;
// }
// }
// let obj=new Addition();
// console.log(obj.add(5));

// function add(n)
// {
//     if(n==0) return 0;
//     return n + add(n-1);
// }
// console.log(add(5));

// let arr=new Array(10);
// arr.fill(0);
// console.log(arr);
// arr.unshift(1);
// console.log(arr);
// arr.push(2);


// arr.shift();
// arr.pop();
// console.log(arr.pop());
// console.log(arr);

// class User
// {
//     #name;
//     constructor(name)
//     {
//         this.#name=name;
//     }
//     get Name()
//     {
//         return this.#name;
//     }
//     set Name(name)
//     {
//         this.#name=name;
//     }
// }
// let user1=new User("jawahar");
// console.log(user1.Name);
// user1.Name = "Jeevan";
// console.log(user1.Name);

let fun=(aa)=>{
    console.log("This is an arrow function");
    return aa;
}

console.log(fun(34));


const pr=new Promise((resolve,reject)=>
{
    fetch("http://localhost:3000/signup")
    if(resolve)
    {
        console.log("Data fetched successfully");
    }
    else
    {
        console.log("Error while fetching data");
    }
})

pr.then((res)=>res.json())
  .then((data)=>console.log(data));