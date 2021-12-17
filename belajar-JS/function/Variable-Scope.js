const init = () =>{
    const name = 'Toyek'
    const greet = ()=>{
        console.log(`Hello ${name}`);
    }
    greet()
}
init()

function hello (){
    let name = 'Arif'
    function salam (){
        console.log(`p ${name}`);
    }
    return salam;
}

let myFunction = hello();
myFunction()