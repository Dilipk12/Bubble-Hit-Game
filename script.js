let circle = document.querySelector(".circle");
let hit = document.querySelector(".hit");
let timer = document.querySelector(".timer");
let score = document.querySelector(".score");

let timersecond = 59;
let scorenum = 0;
let rn = 0;

//  Code of Generate the Random Number inside the circle

const circlerandomnum = () =>{
    let item = "";
    for(let i=0; i<50; i++)
    {
    let randomnum = Math.floor(Math.random()*10);
    item += `<button class="btn">${randomnum}</button>`
    }
    circle.innerHTML = item;
}

//  Code of timer part

const timersec = () =>{
    var timerint = setInterval(() => {
        if(timersecond>0){
            timersecond--;
            timer.textContent = timersecond;
        }
        else{
            clearInterval(timerint)
            circle.innerHTML = `<h1>Game Over <br> Score : ${scorenum}</h1>`;
        }
    }, 1000);
};

// Generate the Hit Random Number

const hitrandomnum = () =>{
    rn = Math.floor(Math.random()*10);
    hit.textContent = rn;
}

// Score Increase

const increaseScore=()=>{
    scorenum = scorenum + 10;
    score.textContent = scorenum;
}

// code of Click event for Generate New Hit and Circle Number

circle.addEventListener('click', (e)=>{
    let intnum = Number(e.target.textContent);
    if(intnum === rn)
    {
        increaseScore();
        circlerandomnum();
        hitrandomnum();
    }
})


timersec();
circlerandomnum();
hitrandomnum();