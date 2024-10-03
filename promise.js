//Task1 - Creating own Promise
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

//Task 2 - fetching data from an API 

const fetchAdviceById = (id) => {
    fetch(`https://api.adviceslip.com/advice/${id}`)
    .then((response) => {
        if(!response.ok){
            throw new Error("Network response was not ok");
        }
        return response.json();
    })
    .then((data) => {
        const advice = data.slip.advice;
        console.log(`Advice (ID:${id}): ${advice}`);
    })
    .catch((error) => {
        console.error("Error fetching advice", error)
    });
};

fetchAdviceById(12);