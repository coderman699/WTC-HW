
const toggle_btn = document.getElementById("toggle-btn");
const moreText = document.getElementById("moreText");

toggle_btn.addEventListener("click", function () {
    if (moreText.classList.contains("hidden")) {
        moreText.classList.remove("hidden");
        toggle_btn.textContent = "Show More";
    } else {
        moreText.classList.add("hidden");
        toggle_btn.textContent = "Show More ";
    }
});