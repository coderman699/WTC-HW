const numberInput = document.getElementById("numberInput");
const generateBtn = document.getElementById("generateBtn");
const resultBox = document.getElementById("resultBox");

generateBtn.addEventListener("click", function () {

    const number = Number(numberInput.value);

    resultBox.className = "result-box";

    if (numberInput.value === "") {
        resultBox.textContent = "Please enter a number.";
        resultBox.classList.add("error");
        return;
    }

    let tableHTML = `
        <table>
            <thead>
                <tr>
                    <th>Expression</th>
                    <th>Result</th>
                </tr>
            </thead>
            <tbody>
    `;

    for (let i = 1; i <= 10; i++) {
        tableHTML += `
            <tr>
                <td>${number} × ${i}</td>
                <td>${number * i}</td>
            </tr>
        `;
    }

    tableHTML += `
            </tbody>
        </table>
    `;

    resultBox.innerHTML = tableHTML;
});