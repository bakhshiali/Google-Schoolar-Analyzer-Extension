////////////////////////////////////////////////////////////////////////show IF
export async function displayIF() {
	IFheader()
	//////////////////////////////////////////////////////////add data
	// Get the data table element
	const table = document.getElementById('gsc_a_b');
	// Loop through each row and add a new cell
	for (let i = 0; i < table.rows.length; i++) {
		const row = table.rows[i]//.insertCell(-1);
		const cell = row.insertCell(-1)
		//extract journal name
		// Find the <td> element with class "gsc_a_t" within the row
		//const tdElement = row.querySelector('.gsc_a_t').querySelector('a');//article names
		//const tdElement = row.querySelector('.gsc_a_t').querySelector('.gs_gray');//names
		const tdElement = row.querySelector('.gsc_a_t').querySelectorAll('.gs_gray')[1];//names
		const journal = tdElement.textContent.trim();
		const filteredParts = journal.split(' ').filter(part => !/\d/.test(part));
		const journalTitle = filteredParts.join(' ').split(',')[0];
		const journalif = await logImpactFactor(journalTitle)
		cell.innerHTML = journalif;
		cell.setAttribute("class", "gsc_a_y");
		console.log(journalTitle)
		cell.append()
		//row.lastElementChild.insertAdjacentHTML('afterend', '<td class="gsc_a_y"><span class="gsc_a_h gsc_a_hc gs_ibl">1</span></td>');
	}
}
function IFheader(){
		//add head
	const table = document.getElementById('gsc_a_t');
	// Get the first row of the table header
	const headerRow = table.tHead.rows[1];
	// Insert a new cell into the header row and add text to it
	headerRow.lastElementChild.insertAdjacentHTML('afterend', '<th class="gsc_a_y" scope="col"><span class="gsc_a_h" id="gsc_a_ha">IF</span></th>');
	const headerRowe = table.tHead.rows[0];
	headerRowe.lastElementChild.insertAdjacentHTML('afterend', '<th class="gsc_a_y"></th>');
	//const cell = headerRow.insertCell(-1);
	//cell.textContent = 'IF';
	//cell.outerHTML = '<th scope="col">IF</th>';
	//headerRow.appendChild(cell);
}

// Assuming the JSON file is in the same directory as your script
const jsonFilePath = chrome.runtime.getURL('data/JCR2023IF.json');

// Function to read JSON file
async function readJsonFile(filePath) {
  const response = await fetch(filePath);
  const data = await response.json();
  //console.log(data[1])//works
  return data;
}

// Function to find and log Impact Factor by journal name
async function logImpactFactor(journalName) {
  const jsonData = await readJsonFile(jsonFilePath);
  //console.log(jsonData[1])//works
  const journal = jsonData.find(journal => journal.name.toLowerCase() == journalName.toLowerCase());
  //`Journal: ${journal.name}, Impact Factor: ${journal.impactFactor}`
  if (journal){
  return journal.impactFactor
  }else{
	  return "-"
  }
}
/*
// Example: Log the Impact Factor of a Journal
const journalIF = await logImpactFactor("Journal of Drug Delivery Science and Technology");
if (journalIF) {
	console.log(`Impact Factor: ${journalIF}`);
} else {
	console.log(`not found in the JSON file.`);
}
*/