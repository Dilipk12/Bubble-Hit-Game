let circle = document.querySelector(".circle");
let hit = document.querySelector(".hit");
let timer = document.querySelector(".timer");
let score = document.querySelector(".score");

let timersecond = 59;
let scorenum = 0;
let rn = 0;

const circlerandomnum = () =>{
    let item = "";
    for(let i=0; i<105; i++)
    {
    let randomnum = Math.floor(Math.random()*25);
    item += `<button class="btn">${randomnum}</button>`
    }
    circle.innerHTML = item;
}


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


const hitrandomnum = () =>{
    rn = Math.floor(Math.random()*25);
    hit.textContent = rn;
}

const increaseScore=()=>{
    scorenum = scorenum + 10;
    score.textContent = scorenum;
}


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

