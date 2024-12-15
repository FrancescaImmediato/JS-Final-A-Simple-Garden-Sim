document.body.style.backgroundSize = "cover";
let wholeBG = document.body.style.backgroundImage;
const moonButton = document.getElementById("moon");
const sunButton = document.getElementById("sun");
//sun bg picture
const sunBg = "url('daySky.jpg')"
//night bg picture
const moonBg = "url('nightSky.jpg')";
//is the sun shining?
let sunshine=false;
//starting background 
document.body.style.backgroundImage = moonBg ;

//SET UP FOR FLOWER "GROWTH"

function completeSimGrowth () {
  let flowersContainer = document.getElementById('flowers');
  
  function moveFlowers() { 
    flowersContainer.classList.add('visible');
   }
if (allSeedsPlanted){
 console.log('SEEDS DONE');
}else console.log("NEED MORE SEEDS");
if (hasRained){
 console.log('IT HAS RAINED');
}else {console.log("HAS NOT RAINED")};
if (sunshine){
 console.log('THE SUN HAS SHINED ');
} else {console.log("NEEDS SUN")};
if (allSeedsPlanted && sunshine && hasRained){
 console.log('LETS GO');
 moveFlowers();
 };
};
//Changing background to night
moonButton.addEventListener("click", function (e){
  document.body.style.backgroundImage = moonBg;
  sunshine = false;
  console.log("the sun has shined: " + sunshine);
});
//setting background to day
sunButton.addEventListener("click", function (e){
  document.body.style.backgroundImage = sunBg ;
  sunshine = true;
  console.log("the sun has shined: " + sunshine);
  completeSimGrowth();
});


// Are ALL seeds Planted? + telling player to plant them 
let allSeedsPlanted = false;
let seed1event3=false;
let seed2event3 = false;
let seed3event3 = false;
let seed4event3 = false;
let seed5event3 = false;
function isItTrue (){
  if (seed1event3 && seed2event3 && seed3event3 && seed4event3 && seed5event3) {
    allSeedsPlanted = true;
    console.log("It is " +allSeedsPlanted + " that all seeds are planted");
    instructions.textContent = "All flowers need water, sunshine, and love "
    } else{
      instructions.textContent = "Please plant all 5 seeds before proceeding.";
      console.log("It is " +allSeedsPlanted + " that all seeds are planted");
    }

  }


let instructions = document.getElementById("instructions");
//whole screen 
let rainContainer = document.getElementById("sim")
let wateringCan = document.getElementById("water")

//Make seeds (1-5) draggable to seeds spots

//seed 1
const seed1 = document.getElementById("soloSeed1")
const dropZone1 = document.getElementById("space-dropper1");

  seed1.addEventListener("dragstart", function(event) {
    console.log(event);
  });
  dropZone1.addEventListener('dragover', function(event){
    event.preventDefault();
  })
  dropZone1.addEventListener('drop', function(event){
    dropZone1.prepend(seed1);
    if (event.dataTransfer.types.includes("text/plain")) {
      seed1event3 = true;
      isItTrue();
      completeSimGrowth();
    }
  })

//seed 2
const seed2 = document.getElementById("soloSeed2")
const dropZone2 = document.getElementById("space-dropper2");

  seed2.addEventListener("dragstart", function(event) {
    console.log(event);
  });
  dropZone2.addEventListener('dragover', function(event){
    event.preventDefault();
  })
  dropZone2.addEventListener('drop', function(event){
    dropZone2.prepend(seed2);
    if (event.dataTransfer.types.includes("text/plain")) {
      seed2event3 = true;
      isItTrue();
      completeSimGrowth();
    }
  })

//seed 3
const seed3 = document.getElementById("soloSeed3")
const dropZone3 = document.getElementById("space-dropper3");

  seed3.addEventListener("dragstart", function(event) {
    console.log(event);
  });
  dropZone3.addEventListener('dragover', function(event){
    event.preventDefault();
  })
  dropZone3.addEventListener('drop', function(event){
    dropZone3.prepend(seed3);
    if (event.dataTransfer.types.includes("text/plain")) {
      seed3event3 = true;
      isItTrue();
      completeSimGrowth();
    }
  })

  //seed 4

const seed4 = document.getElementById("soloSeed4")
const dropZone4 = document.getElementById("space-dropper4");

  seed4.addEventListener("dragstart", function(event) {
    console.log(event);
  });
  dropZone4.addEventListener('dragover', function(event){
    event.preventDefault();
  })
  dropZone4.addEventListener('drop', function(event){
    dropZone4.prepend(seed4);
    seed4event3 = true;
    if (event.dataTransfer.types.includes("text/plain")) {
      seed4event3 = true;
      isItTrue();
      completeSimGrowth();
    }
  })

//seed 5
const seed5 = document.getElementById("soloSeed5")
const dropZone5 = document.getElementById("space-dropper5");

  seed5.addEventListener("dragstart", function(event) {
    console.log(event);
  });
  dropZone5.addEventListener('dragover', function(event){
    event.preventDefault();
  })
  dropZone5.addEventListener('drop', function(event){
    dropZone5.prepend(seed5);
    if (event.dataTransfer.types.includes("text/plain")) {
      seed5event3 = true;
      isItTrue();
      completeSimGrowth();
    }
  })



//Has it rained yet?
let hasRained = false;
  //raindrop animation provided by codepen  https://dev.to/j471n/colorful-rain-with-js-514j put into a function with listener 
  // background Colors for the raindrop
  wateringCan.addEventListener('mousedown', function raining () {
    hasRained = true;
    completeSimGrowth();
    let background = [
      "linear-gradient(transparent, aqua)",
      "linear-gradient(transparent, white)",
    ];

    const amount = 100; // amount of raindrops
    let i = 0;

    // Looping and creating the raindrop then adding to the rainContainer
    while (i < amount) {
      //  Creating and Element
      const drop = document.createElement("i");
      //   CSS Properties for raindrop
      const raindropProperties = {
        width: Math.random() * 5 + "px",
        positionX: Math.floor(Math.random() * window.innerWidth) + "px",
        delay: Math.random() * -20 + "s",
        duration: Math.random() * 5 + "s",
        bg: background[Math.floor(Math.random() * background.length)],
        opacity: Math.random() + 0.2
      };
      //   Setting Styles for raindrop
      drop.style.width = raindropProperties.width;
      drop.style.left = raindropProperties.positionX;
      drop.style.animationDelay = raindropProperties.delay;
      drop.style.animationDuration = raindropProperties.duration;
      drop.style.background = raindropProperties.bg;
      drop.style.opacity = raindropProperties.opacity;
      //   Appending the raindrop in the raindrop container
      rainContainer.prepend(drop);
      i++;
    }
    console.log("hasRained"+hasRained)
  }
)

completeSimGrowth();


