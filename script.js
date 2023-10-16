// Assign general variables
let ball = document.querySelector('.ball');
let ballImg = document.querySelector('.ball_img');
let hands = document.querySelectorAll('.hand');
let text = document.querySelector('.text');
let btns = document.querySelectorAll('.btn');
let cloud = document.querySelector('.cloud');
let sound = new Audio();
let btnSound = new Audio();
sound.src = 'sounds/sound.mp3';
btnSound.src = 'sounds/btn.mp3';

// Window resizing function 
// Dynamically calculates the screen width
window.addEventListener('resize', () => {
    addElementsWidth();
});

// Width setting function for hands and cloud
function addElementsWidth() {

    // For hands
    let ballWidth = ball.offsetWidth;
    let handWidth = ballWidth * 0.75;

    // If the height of the screen is less than 415, reduce hands
    if (window.innerHeight <= 415 ) {
        handWidth = ballWidth * 0.3;
    }

    hands.forEach(hand => {
        hand.style.width = `${handWidth}px`;
    });

    // For cloud
    let cloudWidth = ballWidth * 0.5;
    cloud.style.width = `${cloudWidth}px`;
    let cloudHeight = cloudWidth;
    cloud.style.height = `${cloudHeight}px`;

    if((window.innerWidth <= 1024 && window.innerHeight > 768) || (window.innerWidth <= 540 && window.innerHeight >= 720 )){
        cloudWidth = ballWidth * 0.75;
        cloudHeight = cloudWidth;
        cloud.style.height = `${cloudHeight}px`;
        cloud.style.width = `${cloudWidth}px`;
    }
}

addElementsWidth();

// Remove buttons class
btns.forEach(btn => {
    btn.addEventListener('click', function() {
        this.classList.add('remove');
    });
});

// Variables for changing prognosies
let cloudText = document.querySelector('.cloud p')
let prognosies = 
    ["If you don't like what you're doing, you can just stop doing it.",
    'A promotion awaits you.',
    "Strive for success and look like you've already achieved it.",
    'Decide on the ultimate goal - and you will have a chance to win.',
    'Each of us is given as much good as he himself has given to others.',
    'It is better to do and regret what was done than not to do and regret what was not done.'];

let lastPrognosis = "Don't miss your chance, soon a talented person will appear in your company.";

// Random prognosis function
function randomPrognosis(arr) {
    let prognosis = arr[Math.floor(Math.random() * arr.length)];
    cloudText.innerHTML = prognosis;
};

// Btns variables
let startBtn = document.querySelector('.start_btn');
let continueBtn = document.querySelector('.one_more_btn');
let getBonusBtn = document.querySelector('.get_bonus_btn');

// Start game function
function startGame() {
    hands.forEach(hand => {
        hand.classList.add('active');
    });

    sound.play();
    btnSound.play();
    text.classList.add('active');
    randomPrognosis(prognosies);

    setTimeout(() => {
        startBtn.style.display = 'none';
    }, 800);

    setTimeout(() => {
        ballImg.classList.add('active');
        cloud.classList.add('active');
    }, 2500);

    setTimeout(() => {
        continueBtn.classList.add('active');
        hands.forEach(hand => {
            hand.classList.remove('active');
        });
    }, 4700);
};

// Continue game function
function continueGame() {
    hands.forEach(hand => {
        hand.classList.add('active');
    });

    btnSound.play();
    isAnimating = true;
    cloudText.style.opacity = 0;

    setTimeout(() => {
        continueBtn.style.display = 'none';
    }, 800);

    setTimeout(() => {
        cloudText.innerHTML = lastPrognosis;
        cloudText.style.opacity = 1;
    }, 2500)

    setTimeout(() => {
        getBonusBtn.classList.add('active');
        hands.forEach(hand => {
            hand.classList.remove('active');
        });
    }, 4500)
};


