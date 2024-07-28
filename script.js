function generateTable() {
    const numberInput = document.getElementById('numberInput').value;
    const startInput = document.getElementById('startInput').value;
    const endInput = document.getElementById('endInput').value;
    const tableContainer = document.getElementById('tableContainer');

    if (numberInput === '' || numberInput <= 0 || startInput === '' || endInput === '' || startInput <= 0 || endInput <= 0 || parseInt(startInput) > parseInt(endInput)) {
        alert('Please enter valid numbers and ensure the start number is less than or equal to the end number');
        return;
    }

    let tableHTML = '<table>';
    // tableHTML += `<tr><th>${numberInput}</th><th>x</th><th>i</th><th>=</th><th>Result</th></tr>`;
    for (let i = parseInt(startInput); i <= parseInt(endInput); i++) {
        tableHTML += `<tr><td>${numberInput}</td><td>x</td><td>${i}</td><td>=</td><td>${numberInput * i}</td></tr>`;
    }
    tableHTML += '</table>';

    tableContainer.innerHTML = tableHTML;
}
