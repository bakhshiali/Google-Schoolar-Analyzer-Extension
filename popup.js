// This code is a sample implementation of a Chrome extension that analyzes Google Scholar of a researcher.
//main file (GUI)

(async () => {
  //load JS in async mode with chrome.runtime
  const IFurl = chrome.runtime.getURL("./scripts/if.js");
  const IFfile = await import(IFurl);
  const summaryAlerturl = chrome.runtime.getURL("./scripts/summaryAlert.js");
  const summaryAlertfile = await import(summaryAlerturl);
  
// This code adds a button to the Google Scholar page that displays the researcher's information when clicked.
const button1 = document.createElement('button');
button1.addEventListener('click', summaryAlertfile.displayResearcherInfo);
button1.innerText = 'Summary';
// Add the button to the page
const toolbar = document.querySelector('#gs_hdr_md');
if (toolbar) {
  toolbar.appendChild(button1);
}

const button2 = document.createElement('button');
button2.addEventListener('click', summaryAlertfile.displayResearcherTotalArticles, {once: true});
button2.addEventListener('click', IFfile.displayIF, {once: true});
button2.innerText = 'Show';
// Add the button to the page
if (toolbar) {
  toolbar.appendChild(button2);
}
})();
