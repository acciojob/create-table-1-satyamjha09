function insert_Row() {
    // Get the table element by ID
    const table = document.getElementById("sampleTable");

    // Create a new row element
    const newRow = document.createElement("tr");

    // Create the first cell and add the required text
    const cell1 = document.createElement("td");
    cell1.textContent = "New Cell1";

    // Create the second cell and add the required text
    const cell2 = document.createElement("td");
    cell2.textContent = "New Cell2";

    // Append the cells to the row
    newRow.appendChild(cell1);
    newRow.appendChild(cell2);

    // Insert the new row at the top of the table
    table.insertBefore(newRow, table.firstChild);
}

