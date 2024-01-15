// click on "SHOW MORE" when the page is loading (full load)
window.onload = clickMore();
function clickMore(){
	const button = document.getElementById('gsc_bpf_more');
	for(let i=0;i<5;i++){
	// Wait until the button is enabled
	const intervalId = setInterval(() => {
		if (!button.disabled) {
		// Click on the button
		button.click();
		// Stop checking the button's status
		clearInterval(intervalId);
		}
	}, 200);
}}