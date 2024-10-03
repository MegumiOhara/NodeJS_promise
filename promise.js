//Task1 - Creating own Promise
const randomNumber = () => {
    return new Promise((resolve,reject) =>{
        let result = Math.floor(Math.random()*10)+1; 
        //Generates number between 1 and 10
        if (result %2 === 0)//even number 
        { resolve (result);
        } else {
            reject (`Failed! Not an even numeber: ${result}`);
        }
    });
};



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

randomNumber()
.then((evenNumber) =>{
    console.log("Success! you rolled an even number, here is your advice:");
    fetchAdviceById(evenNumber);
})
.catch((error)=>{
    console.log(error);
})