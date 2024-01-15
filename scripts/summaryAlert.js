
// This function extracts the name of the researcher from the Google Scholar page.
function getResearcherName() {
  const nameElement = document.querySelector('#gsc_prf_in');
  return nameElement ? nameElement.textContent : null;
}

// This function extracts the number of citations of the researcher from the Google Scholar page.
function getResearcherCitations() {
  const citationsElement = document.querySelector('#gsc_rsb_st > tbody > tr:nth-child(1) > td:nth-child(2)');
  return citationsElement ? citationsElement.textContent : null;
}

// This function extracts the h-index of the researcher from the Google Scholar page.
function getResearcherHIndex() {
  const hIndexElement = document.querySelector('#gsc_rsb_st > tbody > tr:nth-child(2) > td:nth-child(2)');
  return hIndexElement ? hIndexElement.textContent : null;
}

// This function extracts the i10-index of the researcher from the Google Scholar page.
function getResearcheri10Index() {
  const i10IndexElement = document.querySelector('#gsc_rsb_st > tbody > tr:nth-child(3) > td:nth-child(2)');
  return i10IndexElement ? i10IndexElement.textContent : null;
}

// This function extracts the total number of articles published by the researcher from the Google Scholar page.
function getResearcherTotalArticles() {
  
  // click on "SHOW MORE"
  clickMore()
  const table = document.getElementById('gsc_a_b');
  const totalArticlesElement = document.getElementById('gsc_a_nn');
  //console.log(totalArticlesElement);
  return totalArticlesElement ? totalArticlesElement.textContent : null;
}

// This function displays the researcher's name, number of citations, h-index, and i10-index in an alert box.
export function displayResearcherInfo() {
  const name = getResearcherName();
  const citations = getResearcherCitations();
  const hIndex = getResearcherHIndex();
  const i10Index = getResearcheri10Index();
  const totalArticles = getResearcherTotalArticles()
  if (name && citations && hIndex && i10Index) {
    const message = `Researcher: ${name}\nCitations: ${citations}\nh-index: ${hIndex}\ni10-index: ${i10Index}\nTotal Articles: ${totalArticles.split("–",2)[1]}`;
    alert(message);
  } else {
    alert('Could not extract researcher information from the page.');
  }
}
export function displayResearcherTotalArticles(){
	const tableTbody = document.getElementById('gsc_rsb_st').getElementsByTagName('tbody')[0];
	const newRow = tableTbody.insertRow(-1)
	//Article cell
	var newCell = newRow.insertCell(-1);
	newCell.setAttribute("class", "gsc_rsb_sc1");
	newCell.innerHTML='Articles'
	//var newText = document.createTextNode('Articles');
	newCell.append();
	
	//Article No. cell
	newCell = newRow.insertCell(-1);
	newCell.setAttribute("class", "gsc_rsb_std");
	newCell.innerHTML= getResearcherTotalArticles().split("–",2)[1]
	newCell.append();

}