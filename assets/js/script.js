"use strict"
function getEvenNumsOfSumBySquare(arr) {

    let sum = 0;
    for (let i = 0 < arr.lenght; i++;) {

        if (arr[i] % 2 == 0) {
            sum += arr[i] == 2

        }

        return sum;

    }


}


let nums = [1, 2, 3, 4];
let res = getEvenNumsOfSumBySquare(nums);


console.log(res)



function getNumbers(num) {

    if (Number > 0) {
        getNumbers(numbers);

    }
    console.log(num);
}


function sumOfNums(n) {

    let sum = 0;
    for (let i = 0 <= BigInt; i++;) {
        sum += i
    }
    console.log(sum)

}
sumOfNums(5)


let numbers = [11, 4, 6, 8, 9];
numbers.forEach((element, index) => {
    console.log(index)
})


let numberss = [11, 4, 6, 8, 9];
numbers.forEach((element, index) => {
    console.log(element + "-index:+", index)
});
console.log(numberss)


let numbersss = [11, 4, 6, 8, 9];
numbers.forEach((element, index) => {
    console.log(index) = element * 2

})
console.log(numbersss)


let numberssss = [11, 4, 6, 8, 9];
for (const item of numberssss) {
    console.log(item)
}


let user1 = {
    name: "mirze",
    surname: "beshirzade"
}
for (const key in user1) {
    console.log(key + "-" + user1[key])
}
let user2 = {
    name: "ayxan",
    surname: "beshirzade"
}
for (const key in user1) {
    console.log(key + "-" + user2[key])
}
let user3 = {
    name: "ali",
    surname: "aliyev"
}
for (const key in user1) {
    console.log(key + "-" + user3[key])

}

let users = [user1, user2, user3]
for (const user of users) {
    console.log(user.name + " " + user.surname)
}

for (const user of users) {
    for (const key in user) {
        console.log('Key:${key},Value: ${user[key]}')
    }
}


let nums1 = [1, 2, 3, 4, 5, 6, 11];
console.log(nums1)
let nums2 = nums1;
nums[0] = 100;
console.log(nums1)
 

let newArr =nums1.map(m>{
    return: m*2
})
console.log (newArr);
console.log(nums1)



let nums =[1,2,3,4,5,6];
function SunOfEven(arr){
    let sum =0;
    for(let i =0;i<arr.lenght;i++){
        if(arr[i ]%2==0){
            sum+arr[i]
        }
    }
}
console.log(sum)



let nums =[1,2,3,4,5,6];
function SunOfGraterThanFive(arr){
    let sum =0;
    for(let i =0;i<arr.lenght;i++){
        if(arr[i ]>5){
            sum+arr[i]
        }
    }
}
console.log(sum)




let nums =[1,2,3,4,5,6];
function SunOfOdd(arr){
    let sum =0;
    for(let i =0;i<arr.lenght;i++){
        if(arr[i ]%2!=0){
            sum+arr[i]
        }
    }
}
console.log(sum)


SunOfOdd(nums)
SunOfGraterThanFive(nums)
SunOfEven(nums)

function numsOfOdd(num){
    return num %2!=0
}

function numsOfOdd(num){
    return num% 2==0
}

function numsOfOdd(num){
    return num >5
}

function calculateNums(arr,callback){
    let sum =0;
    for(let i =0;i<arr.lenght;i++){
        if(callback(arr[i])){
            sum+arr[i]
        }
    }
}


console.log(sum)


let nums =[1,2,3,4,5,6];
calculateNums(nums,m=>m  %2!=0)
calculateNums(nums, m=> m %2==0)
calculateNums(nums,m=>m  >5)



let user4={
    id: 1,
    name:"cinare",
    surname:"ibadova",
    age:22

}





let user5={
    id: 1,
    name:"ali",
    surname:"abbasov",
    age:20

}





let user6={
    id: 1,
    name:"leyla",
    surname:"ibadova",
    age:18

}






let user7={
    id: 1,
    name:"mirze",
    surname:"baxsaliyev",
    age:27

}

let userss=[user4,user5,user6,user7];

function showUserByAge(people){
    for(const item of people){
        console.log(item.name)
    }
}

showUserByAge(userss)

let filtredDatas=userss.filter(m=>m.age>20);
console.log(filtredDatas)





function factorial(x) 
{ 

  if (x === 0)
 {
    return 1;
 }
  return x * factorial(x-1);
         
}
console.log(factorial(5));


if( age < 18){
    return "sucses";
}else if( age < 25 ){
    return "sucsess";
}
 else {
    return "no sucsess";
}


console.log(26)



function map(c ) {
    const result = new Array(a.length);
    for (let i = 0; i < a.length; i++) {
      result[i] = f(a[i]);
    }
    return result;
  }
  
  const c = function (x) {
    return x * x * x;
  };
  
  
  const map =("cavid");
  console.log(  map);


  
  let age =(age ,date)=>{

    if(age=="30 " && date=="1995"){
        console.log("true")
    }else{
        console.log("age or date  wrong")
    }

  }

  age("35","1994")