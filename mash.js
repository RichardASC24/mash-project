function mash(){
    return "you will live in a " + getHome() + ", travel to " + getTravelCount() + " countries," + " buy a pet " + getPet() + 
    ", work in the " + futureJobs() + " industry " + "and be very " + futureWealth() + "."
}
let handMash = mash();
console.log(handMash);

function getHome(){
    let findShelter = ['Mansion', 'Castle', 'Shack', 'House']
    let userInput = process.argv[2];
    // if there's an user input, it will take that into consideration
    if (userInput){
        findShelter.push(userInput);
    }
    function randNumGenerator(num){
        Math.floor(Math.random() * num);
        return Math.floor(Math.random() * num);
    }
    let randNum = randNumGenerator(findShelter.length);
    return findShelter[randNum];
}


function getTravelCount(){
    Math.floor(Math.random() * 101);
    return Math.floor(Math.random() * 101);
}
let travelCount = getTravelCount(101);
return travelCount


function getPet(){
    let randomPets = ['Dog', 'Cat', 'Chicken', 'Dragon']
    let userInputPet = process.argv[3];
    if (userInputPet){
        randomPets.push(userInputPet);
    }
    function randRannum(digit){
        Math.floor(Math.random() * digit);
        return Math.floor(Math.random() * digit);
    }
    if (Math.random() < 0.5){
        let randNum1 = randRannum(randomPets.length);
        return randomPets[randNum1];      
    } else {
        return userInputPet;
    }
}

function futureJobs(){
    let randomJobs = ['Engineer', 'Product Manager', 'Business', 'Doctor']
    function randNumGen4(num4){
        Math.floor(Math.random() * num4);
        return Math.floor(Math.random() * num4);
    }
    let randNum4 = randNumGen4(randomJobs.length);
    return randomJobs[randNum4];
}

function futureWealth(){
    let randomWealth = ['poor', 'rich', 'mid']
    function randNumGen5(num5){
        Math.floor(Math.random() * num5);
        return Math.floor(Math.random() * num5);
    }
    let randNum5 = randNumGen5(randomWealth.length);
    return randomWealth[randNum5];
}
