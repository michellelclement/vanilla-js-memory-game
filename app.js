//Grab a couple of things
const section = document.querySelector('section');
const playerLivesCount = document.querySelector('span');
const playerLives = 5;


//Link text 
playerLivesCount.textContent = playerLives;

//Generate the data to use for the cards
const getData = () => [
    { imgSrc: "images/beatles.jpeg", name: "beatles" },
    { imgSrc: "images/blink182.jpeg", name: "blink 182" },
    { imgSrc: "images/fkatwigs.jpeg", name: "fka twigs" },
    { imgSrc: "images/fleetwood.jpeg", name: "fleetwood" },
    { imgSrc: "images/joy-division.jpeg", name: "joy division" },
    { imgSrc: "images/ledzep.jpeg", name: "ledzep" },
    { imgSrc: "images/metallica.jpeg", name: "metallica" },
    { imgSrc: "images/pinkfloyd.jpeg", name: "pinkfloyd" },
    { imgSrc: "images/beatles.jpeg", name: "beatles" },
    { imgSrc: "images/blink182.jpeg", name: "blink 182" },
    { imgSrc: "images/fkatwigs.jpeg", name: "fka twigs" },
    { imgSrc: "images/fleetwood.jpeg", name: "fleetwood" },
    { imgSrc: "images/joy-division.jpeg", name: "joy division" },
    { imgSrc: "images/ledzep.jpeg", name: "ledzep" },
    { imgSrc: "images/metallica.jpeg", name: "metallica" },
    { imgSrc: "images/pinkfloyd.jpeg", name: "pinkfloyd" },
];

//Randomise funcion
const randomize = () => {
    const cardData = getData();
    console.log(cardData);
};

randomize();