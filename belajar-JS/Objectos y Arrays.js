//object
const user = { firstname : "Toyek", lastname : 'gendeng'}
console.log(`halo aku ${user.firstname}`);
//init array
const arr = ["matamu",12];

//print array
console.log(arr[1]);

//insert value(push) to array
arr.push('ngepush');
console.log(arr);
for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    console.log(`${i+1} ${element}`);
    
}
//foreach
arr.forEach(element => {
    console.log(element);
});

//pop --> remove value last index
arr.pop();
console.log(arr);

//shift ---> remove value first index
//unshift ---> add value first index
arr.shift();
arr.unshift('ndasmu');
console.log(arr);

//spread operator
console.log(...arr);
let arr2 = ['abc',123123];
const array = [...arr,...arr2];
console.log(...array);

//destructing array & object
const profile = { firstname : "ndasmu", lastname : "asu", age : 12}
console.log(profile.firstname);
// const {firstname,lastname} = profile;
// console.log(firstname);
const {firstname,lastname,id = "default values"} = profile;
console.log(id);