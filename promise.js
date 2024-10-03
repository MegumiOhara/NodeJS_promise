const randomNumber = () => {
    return new Promise((resolve,reject) =>{
        let result = Math.floor(Math.random()*10)+1; 
        //Generates number between 1 and 10
        if (result %2 === 0)//even number 
        { resolve (`Success! You rolled an even number : ${result}`);
        } else {
            reject (`Failed! Not an even numeber: ${result}`);
        }
    });
};

randomNumber()
.then((message) =>{
    console.log(message);
})
.catch((error)=>{
    console.log(error);
})