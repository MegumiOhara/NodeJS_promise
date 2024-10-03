//Task1 - Creating own Promise
const randomNumber = () => {
    return new Promise((resolve,reject) =>{
        let result = Math.floor(Math.random()*10)+1; 
        //Generates number between 1 and 10
        if (result %2 === 0)//even number 
        { resolve (result);
        } else {
            reject (`Failed! Not an even numeber: ${result} , try again`);
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
        document.getElementById('advice').innerText= `you got a ${id}, your advice: ${advice}`;
    })
    .catch((error) => {
        document.getElementById('advice').innerText = `Error fetching advice: ${error}`;
    });
};


document.getElementById('fetchAdviceBtn')
.addEventListener('click', () => {
    randomNumber()
    .then((evenNumber) =>{
        fetchAdviceById(evenNumber);
    })
    .catch((error)=>{
        document.getElementById('advice').innerText = error;
    });
});