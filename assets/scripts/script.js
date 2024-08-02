const btns = document.querySelectorAll(".tab-btn");
const panels = document.querySelectorAll(".panel");
const title = document.querySelector("title");

const switchTab = (name) => {
	for(let btn of btns) {
		let btnName = btn.getAttribute("href").replace('#', '');
		let pressed = btn.getAttribute("pressed");
		if(pressed && btnName === name) continue;
		if(!pressed && btnName === name) btn.setAttribute("pressed", '');
		else btn.removeAttribute("pressed");
	}
	for(let panel of panels) {
		let panelName = panel.getAttribute("name");
		panel.style.display = (panelName === name)? "block": "none";
	}
}

onhashchange = () => {
	const hash = location.hash.replace('#', '');
	btns[0].style.display = "none";
	if(hash == '') return;
	else {
		for(let tab in arrays.tabs) {
			if(arrays.tabs[tab] === hash) {
				switchTab(hash);
				title.innerText = `FreeDayO | ${arrays.titles[tab]}`;
				return;
			}
		}
	}
	switchTab("404");
	btns[0].style.display = "block";
	title.innerText = "FreeDayO | 404 Not Found";
}


const 我不知道该叫什么函数 = () => {
	const date = document.getElementById("date"),
	time = document.getElementById("time"),
	text = document.getElementById("text");
	let currentTime = new Date();
	let y = currentTime.getFullYear(), month = currentTime.getMonth() + 1, d = currentTime.getDate();
	let day = currentTime.getDay();
	let h = currentTime.getHours(), mins = currentTime.getMinutes();
		// let isYuZuFans = false;
	// 判断小时数,改变文字信息
	text.innerText = (h >= 7)? arrays.texts[0]:
	(h >= 12)? arrays.texts[1]:
	(h >= 13)? arrays.texts[2]:
	(h >= 15)? arrays.texts[3]:
	(h >= 21)? arrays.texts[4]:
	(h == 23 || (h >= 0 && h <= 6))? arrays.texts[5]:
	"Ciallo~(∠・ω< )⌒★";

	// 日期时间部分
	date.innerText = `${y}/${(month < 10? '0' + month: month)}/${(d < 10? '0' + d: d)} ${arrays.weekdays[day]}`;
	time.innerText = `${(h < 10? '0' + h: h)}: ${(mins < 10? '0' + mins: mins)} ${(h >= 13? "pm": "am")}`;

	// 船新夜间模式喵
	if(h <= 7 || h >= 20 || matchMedia("(prefers-color-scheme: dark)").matches) {
		document.querySelector("html").setAttribute("dark", '');
	}
}

$.get("assets/data/arrays.json", data => {arrays = data; 我不知道该叫什么函数();});

setInterval(我不知道该叫什么函数, 60000);
