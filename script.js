const downloadBtn = document.querySelector('.download-btn');
//link for google`s file
const fileLink = "https://drive.google.com/uc?export=download&id=1aYiaLn3YOjL-_o5QBCy7tU1epqA6gZoi";


const initTimer = () => {
	// if downloadBtn contains disable-timer class only then if conditional code will run
	if (downloadBtn.classList.contains('disable-timer')) {
		return (location.href = fileLink);
	}

		//getting data-timer attribute from HTML
		let timer = downloadBtn.dataset.timer;
	downloadBtn.classList.add("timer");
	downloadBtn.innerHTML = `Your file will download in <b>${timer}</b> seconds`;

	// creating initCounter variable with setInterval function
	const initCounter = setInterval(() => {

		if (timer > 0) {
			timer--;
			return downloadBtn.innerHTML = `Your file will download in <b>${timer}</b> seconds`;
		}
		clearInterval(initCounter);
		location.href = fileLink;
		downloadBtn.textContent = "Your files is downloading...";

		setTimeout(() => {
			downloadBtn.classList.replace('timer', 'disable-timer');
			downloadBtn.innerHTML = `<span class="icon material-symbols-rounded">vertical_align_bottom</span>
			<span class="text">Download again</span>`;
		}, 3000);

	}, 1000); // 10000 miliseconds = 1s
};


downloadBtn.addEventListener("click", initTimer);