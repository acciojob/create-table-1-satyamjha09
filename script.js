function insert_Row() {

	var table = document.getElementById("sampleTable");


	var newRow = table.insertRow(0);

	var Cell1 = newRow.insertCell(0);
	var Cell2 = newRow.insertCell(1);

	Cell1.innerHTML = "New Cell1"
	Cell2.innerHTML = "New Cell2"
}


