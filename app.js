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
    //Randomiser
    cardData.sort(() => Math.random() - 0.5);
    //Nothing is returned so need to...
    return cardData
};

//Card Generator function
const cardGenerator = () => {
    const cardData = randomize();
    //Generate HTML
    cardData.forEach((item) => {
        const card = document.createElement("div");
        const face = document.createElement("img");
        const back = document.createElement("div");
    //Add classes to new elements
        card.classList = "card";
        face.classList = "face";
        back.classList = "back";
    //Attach the info(img) to the cards
        face.src = item.imgSrc;
    //Attach the cards to the section
        section.appendChild(card);
        card.appendChild(face);
        card.appendChild(back);
    }); 
};

cardGenerator();

