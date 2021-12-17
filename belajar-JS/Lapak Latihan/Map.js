const myMap = new Map([
    ['1','String key'],
    [1,'number key'],
    [true,true],
])
console.log(myMap);
console.log(myMap.size);
console.log(myMap.get(1));
myMap.set(2,"tarung");
console.log(myMap);
console.log(myMap.size);
console.log(myMap.get(2));

let a = [1,2,3,4,3,2,1,5,5,6,0];
const setNum = new Set(a);
console.log(setNum);
setNum.add(3);
setNum.add(12);
console.log(...setNum);
console.log(a[0]+a[6]);

let visitsCountMap = new WeakMap();

function countUser (user){
    let count = visitsCountMap.get(user) || 0;
    visitsCountMap.set(user,count +1);
}

let jonas = {name : "Jonas"}
let toyek = {name : "Toyek"}
let bambang = {name : "Bambang"}
countUser(toyek);
countUser(bambang);
countUser(jonas);

jonas = null;

console.log(visitsCountMap);