

const scoreInput = document.getElementById("scoreInput");
const checkBtn = document.getElementById("checkBtn");
const resultBox = document.getElementById("resultBox");

checkBtn.addEventListener("click", function () {
    const score = Number(scoreInput.value);
    resultBox.className = "result-box";

    if (scoreInput.value === "") {
        resultBox.textContent = "Please enter your score.";
        resultBox.classList.add("error");
        return
    }
    if (score >= 90) {
        resultBox.textContent = "Grade A - Excellent!";
        resultBox.classList.add("grade-a");
    }
    else if (score >= 80) {
        resultBox.textContent = "Grade B - Very Good!";
        resultBox.classList.add("grade-b");
    }
    else if (score >= 70) {
        resultBox.textContent = "Grade C - Good!";
        resultBox.classList.add("grade-c");
    }
    else if (score >= 60) {
        resultBox.textContent = "Grade D - Fair!";
        resultBox.classList.add("grade-d");
    }
    else if (score >= 50) {
        resultBox.textContent = "Grade E - Poor!";
        resultBox.classList.add("grade-e");
    }
    else {
        resultBox.textContent = "Grade F - Failed!";
        resultBox.classList.add("grade-f");
    }
})