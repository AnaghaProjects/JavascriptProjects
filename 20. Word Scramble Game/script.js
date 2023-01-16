const words = [
    {
        word: "addition",
        hint: "The process of adding numbers"
    },
    {
        word: "meeting",
        hint: "Event in which people come together"
    },
    {
        word: "number",
        hint: "Math symbol used for counting"
    },
    {
        word: "exchange",
        hint: "The act of trading"
    },
    {
        word: "canvas",
        hint: "Piece of fabric for oil painting"
    },
    {
        word: "garden",
        hint: "Space for planting flower and plant"
    },
    {
        word: "position",
        hint: "Location of someone or something"
    },
    {
        word: "feather",
        hint: "Hair like outer covering of bird"
    },
    {
        word: "comfort",
        hint: "A pleasant feeling of relaxation"
    },
    {
        word: "tongue",
        hint: "The muscular organ of mouth"
    },
    {
        word: "expansion",
        hint: "The process of increase or grow"
    },
    {
        word: "group",
        hint: "A number of objects or persons"
    },
    {
        word: "taste",
        hint: "Ability of tongue to detect flavour"
    },
    {
        word: "store",
        hint: "Large shop where goods are traded"
    },
    {
        word: "field",
        hint: "Area of land for farming activities"
    },
    {
        word: "friend",
        hint: "Person other than a family activities"
    },
    {
        word: "pocket",
        hint: "A bag for carrying small items"
    },
    {
        word: "needle",
        hint: "A thin and sharp metal pin"
    },
    {
        word: "expert",
        hint: "Person with extensive knowledge"
    },
    {
        word: "statement",
        hint: "A declaration of something"
    },
    {
        word: "second",
        hint: "One-sixtieth of a minute"
    },
    {
        word: "library",
        hint: "Place containing collection of books"
    }
];
const wordText = document.querySelector(".word"),
hintText = document.querySelector(".hint span"),
timeText = document.querySelector(".time b"),
inputField = document.querySelector("input"),
refreshBtn = document.querySelector(".refresh-word"),
checkBtn = document.querySelector(".check-word");

let correctWord, timer;

const initTimer = maxTime => {
    clearInterval(timer);
    timer = setInterval(() =>{
        if(maxTime > 0) {
            maxTime--;
            return timeText.innerHTML = maxTime
        }
        clearInterval(timer);
        alert(`Time off! ${correctWord.toUpperCase()} was a correct word`);
        initGame(); // calling initGame function, so the game restart 
    },1000)
}
const initGame = () => {
    timeText.innerHTML = 30;
    initTimer(30); //calling initTimer function with passing 30 as max time 
    
    let randomObj = words[Math.floor(Math.random() * words.length)]; //getting random object form words
    let wordArray = randomObj.word.split(""); // splitting each letter of random word
    for (let i = wordArray.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1)); //getting random number
        // shuffling and swiping wordArray letters randomly
        [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]]; 
    }
    wordText.innerHTML = wordArray.join(""); //passing shuffled word as word text
    hintText.innerHTML = randomObj.hint;
    correctWord = randomObj.word.toLowerCase(); // storing shown word for checking
    inputField.value = ""; //making input field emplty
    inputField.setAttribute("maxlength", correctWord.length); //setting input maxlength attr value to word length
}

const checkWord = () => {
    let userWord = inputField.value.toLocaleLowerCase(); // getting user value
    //if user didn't enter anything
    if(!userWord) return alert(`Please enter a word`);

    //if user word doesn't matched with the correct word
    if(userWord !== correctWord) return alert(`Oops ${userWord} is not a correct word`);
    
    //if above two if conditions are failed then show congrats alert because user word is correct
    alert(`Congrates ${userWord.toUpperCase()} is a correct word`);
    clearInterval(timer);
    initGame()
}

initGame();
refreshBtn.addEventListener("click", initGame);
checkBtn.addEventListener("click", checkWord);