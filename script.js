let homeScoreEl = document.getElementById("home-score-el")
let guestScoreEl = document.getElementById("guest-score-el")

let homeContainer = document.querySelector(".home")
let guestContainer = document.querySelector(".guest")

let homeScore = 0
let guestScore = 0


// HOME FUNCTIONS

function homeOne(){
    homeScore += 1
    homeScoreEl.innerText = homeScore
    highlight()
}

function homeTwo(){
    homeScore += 2
    homeScoreEl.innerText = homeScore
    highlight()
}

function homeThree(){
    homeScore += 3
    homeScoreEl.innerText = homeScore
    highlight()
}


// GUEST FUNCTIONS

function guestOne(){
    guestScore += 1
    guestScoreEl.innerText = guestScore
    highlight()
}

function guestTwo(){
    guestScore += 2
    guestScoreEl.innerText = guestScore
    highlight()
}

function guestThree(){
    guestScore += 3
    guestScoreEl.innerText = guestScore
    highlight()
}


// NEW GAME

function newgame(){

    homeScore = 0
    guestScore = 0

    homeScoreEl.innerText = homeScore
    guestScoreEl.innerText = guestScore

    homeContainer.classList.remove("leader")
    guestContainer.classList.remove("leader")
}


// HIGHLIGHT LEADING TEAM

function highlight(){

    // remove old highlight first
    homeContainer.classList.remove("leader")
    guestContainer.classList.remove("leader")

    // add highlight to leader
    if(homeScore > guestScore){
        homeContainer.classList.add("leader")
    }

    else if(guestScore > homeScore){
        guestContainer.classList.add("leader")
    }
}