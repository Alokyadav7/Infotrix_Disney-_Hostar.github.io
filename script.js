let movies = [
    {
        name: "falcon and the winter soldier",
        des: 
        "Falcon and the Winter Soldier is a television series created by Malcolm Spellman for Marvel Studios, set within the Marvel Cinematic Universe (MCU). The show premiered in March 2021 on Disney+ and consists of six episodes",
        image: "images/slider 2.PNG"
    },
    {
        name: "loki",
        des: 
        "Loki is a fictional superhero appearing in American comic books published by Marvel Comics.",
        image: "images/slider 1.PNG"
    },
    {
        name: 'wanda vision',
        des: 
        "WandaVision is a unique and groundbreaking television series created by Jac Schaeffer for Marvel Studios, set within the Marvel Cinematic Universe (MCU). The show premiered in January 2021 on Disney+ and consists of nine episodes.",
        image: "images/slider 3.PNG"
    },
    {
        name: 'raya and the last dragon',
        des: 
        "Raya, also known as Ryza or Lady of Dragons, is an African-American martial artist, and actress best known for her role as Rayna in The Legend of Tarzan.",
        image: "images/slider 4.PNG"
    },
    {
        name: 'luca',
        des: 
        "Luca is a heartwarming animated film produced by Pixar Animation Studios and released by Walt Disney Pictures. Directed by Enrico Casarosa, the film was released in June 2021 and quickly gained popularity for its charming characters and picturesque Italian coastal setting. ",
        image: "images/slider 5.PNG"
    }
];

const carousel = document.querySelector('.carousel');
let slider = [];

let slideIndex = 0; //tracking the current slider

const createslide = () => {
    if (slideIndex >= movies.length) {
        slideIndex = 0;
    }
    
    //create dom element
    let slide = document.createElement('div');
    let imgELement = document.createElement('img');
    let content = document.createElement('div');
    let h1 = document.createElement('h1');
    let p = document.createElement('p');

    //attaching all the elements
    imgELement.appendChild(document.createTextNode(''));
    h1.appendChild(document.createTextNode(movies[slideIndex].name));
    p.appendChild(document.createTextNode(movies[slideIndex].des));
    content.appendChild(h1);
    content.appendChild(p);
    slide.appendChild(imgELement);
    if (carousel) {
        carousel.appendChild(slide);
    }
    slide.appendChild(content); // this line was added to fix the error
    slide.appendChild(content);

    //setting up the image if the webpage
    imgELement.src = movies[slideIndex].image;
    slideIndex++;

    //setting up the element classname
    slide.className = "slider"
    content.className = "slide-content";
    h1.className = "movie-title";
    p.className = ".movie-des";

    slider.push(slide);

    if (slider.length) {
        slider[0].style.marginLeft = `calc(-${100 * (slider.length-2) }% - ${
            30 * (slider.length-1)
        }px)`;
    }
}

for (i=0; i<3;  i++) {
    createslide();
}

setInterval(()=> {
    createslide();
},3000);

// vedio cards section
const videoCards = [...document.querySelectorAll(".video-card")];
videoCards.forEach((items) => {
    items.addEventListener("mouseover", () => {
        let video = items.children[1];
        video.play();
    });
    items.addEventListener("mouseleave", () => {
        let video = items.children[1];
        video.pause();
    });
});

//card sliders
let cardcontainers = [...document.querySelectorAll('.card-container')];
let prebtn = [...document.querySelectorAll('.pre-button')];
let nxtbtn = [...document.querySelectorAll('.nxt-button')];

cardcontainers.forEach( (item , i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerwidth = containerDimensions.width;

    nxtbtn[i].addEventListener('click', () => {
        item.scrollLeft += containerwidth - 2;
    })

    prebtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerwidth + 2;
    })
})



