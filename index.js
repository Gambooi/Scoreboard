let homeScore = 0
let awayScore = 0

let homeScoreEl = document.getElementById("score-home")
let awayScoreEl = document.getElementById("score-away")

function oneHome() {
    homeScore += 1
    homeScoreEl.textContent = homeScore
}

function twoHome() {
    homeScore += 2
    homeScoreEl.textContent = homeScore
}

function threeHome() {
    homeScore += 3
    homeScoreEl.textContent = homeScore
}

function oneAway() {
    awayScore += 1
    awayScoreEl.textContent = awayScore
}

function twoAway() {
    awayScore += 2
    awayScoreEl.textContent = awayScore
}

function threeAway() {
    awayScore += 3
    awayScoreEl.textContent = awayScore
}

function resetScore() {
    homeScore = 0
    awayScore = 0
    homeScoreEl.textContent = homeScore
    awayScoreEl.textContent = awayScore
}