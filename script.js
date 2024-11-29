function insert_Row() {
    // Get the table element by ID
    const table = document.getElementById("sampleTable");

    // Create a new row
    const newRow = document.createElement("tr");

    // Create the first cell and set its text
    const cell1 = document.createElement("td");
    cell1.textContent = "New Cell1";

    // Create the second cell and set its text
    const cell2 = document.createElement("td");
    cell2.textContent = "New Cell2";

    // Append cells to the new row
    newRow.appendChild(cell1);
    newRow.appendChild(cell2);

    // Insert the new row as the first row in the table
    const firstRow = table.getElementsByTagName("tr")[0]; // Get the first row
    table.insertBefore(newRow, firstRow); // Insert the new row before the first row
}

