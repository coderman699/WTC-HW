const scoreList = document.getElementById("scoreList");
const highestScore = document.getElementById("highestScore");
const lowestScore = document.getElementById("lowestScore");
const averageScore = document.getElementById("averageScore");
const scoreInput = document.getElementById("scoreInput");
const addBtn = document.getElementById("addBtn");


let scores = [45, 82, 91, 60, 77, 33, 50];


function getScoreColor(score) {
    if (score >= 90) {
        return "high-score";
    } else if (score >= 50) {
        return "medium-score";
    } else {
        return "low-score";
    }
}

function displayScores() {
    scoreList.innerHTML = "";

    for (let i = 0; i < scores.length; i++) {
        const score = scores[i];

        const scoreElement = document.createElement("div");
        scoreElement.textContent = score;
        scoreElement.classList.add("score-item");
        scoreElement.classList.add(getScoreColor(score));

        scoreList.appendChild(scoreElement);
    }
}


function calculateSummary() {
    const highest = Math.max(...scores);
    const lowest = Math.min(...scores);

    let total = 0;

    for (let i = 0; i < scores.length; i++) {
        total += scores[i];
    }

    const average = total / scores.length;

    highestScore.textContent = highest;
    lowestScore.textContent = lowest;
    averageScore.textContent = average.toFixed(1);
}

function updatePage() {
    displayScores();
    calculateSummary();
}


addBtn.addEventListener("click", function () {
    const newScore = Number(scoreInput.value);

    if (scoreInput.value === "" || newScore < 0 || newScore > 100) {
        alert("Please enter a score between 0 and 100");
        return;
    }

    scores.push(newScore);

    scoreInput.value = "";

    updatePage();
});


updatePage();