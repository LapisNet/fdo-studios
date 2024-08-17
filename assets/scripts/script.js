const btns = document.querySelectorAll(".tab-btn");
const panels = document.querySelectorAll(".panel");
const title = document.querySelector("title");
document.html = document.querySelector("html");

const getHash = (url = location.href) => url.split('#')[1];

const switchTab = (name) => {
	for(let btn of btns) {
		let btnName = getHash(btn.getAttribute("href"));
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
	const hash = getHash();
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
	title.innerText = "FreeDayO | 404";
}


const main = () => {
	const date = new Date();
	let y = date.getFullYear(), month = date.getMonth() + 1, d = date.getDate();
	let day = date.getDay(), h = date.getHours(), mins = date.getMinutes();
		// let isYuZuFans = false;
	// 判断小时数,改变文字信息
	document.querySelector("#text").innerText =
	(h >=   7 && h < 12)? arrays.texts[0]:
	(h >= 12 && h < 13)? arrays.texts[1]:
	(h >= 13 && h < 15)? arrays.texts[2]:
	(h >= 15 && h < 21)? arrays.texts[3]:
	(h >= 21 && h < 23)? arrays.texts[4]:
	(h == 23 || (h >= 0 && h <= 6))? arrays.texts[5]:
	"Ciallo~(∠・ω< )⌒★";

	// 日期时间部分
	document.querySelector("#date").innerText = `${y}/${(month < 10? '0' + month: month)}/${(d < 10? '0' + d: d)} ${arrays.weekdays[day]}`;
	document.querySelector("#time").innerText = `${(h < 10? '0' + h: h)}: ${(mins < 10? '0' + mins: mins)} ${(h >= 13 && h <= 24)? "pm": "am"}`;

	// 船新夜间模式喵
	if((h <= 7 || h >= 20) || matchMedia("(prefers-color-scheme: dark)").matches) {
		document.html.setAttribute("dark", '');
	}
}

$.getJSON("assets/data/arrays.json", data => (arrays = data, main()));

setInterval(main, 60000);
