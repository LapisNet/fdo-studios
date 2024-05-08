console.log("[page.js] page.js has been loaded.");

const 我不知道该叫什么函数 = function() {
	const weekDays = ["星期天", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
	let timeText = document.getElementById("time-text"), date = document.getElementById("date"), time = document.getElementById("time");
	let currentTime = new Date();
	let y = currentTime.getFullYear(), month = currentTime.getMonth() + 1, d = currentTime.getDate();
	let day = currentTime.getDay();
	let h = currentTime.getHours(), mins = currentTime.getMinutes();
		let isYuZuFans = false;
	// 判断小时数,改变文字信息
	if(h == 23 || (h >= 0 && h <= 6)) {
		timeText.innerHTML = "已经很晚啦,早点休息哟 (ᴗ˳ᴗ).zZ"
	}
	if(h >= 7) {
		isYuZuFans? timeText.innerHTML = "Ciallo～(∠・ω< )⌒★": timeText.innerHTML = "早上好啊,今天也是活力满满的一天呐! ~~~ヾ(＾∇＾)♪";
	}
	if(h >= 12) {
		timeText.innerHTML = "是时候吃午饭啦! ( ˘▽˘)っ🍲"
	}
	if(h >= 13) {
		timeText.innerHTML = "午饭后稍微休息一下吧 q(＞◡＜)b"
	}
	if(h >= 15) {
		timeText.innerHTML = "嘿嘿..草莓牛奶.. (´ ˘ `).｡oO ( ♡ )"
	}
	if(h >= 21) {
		timeText.innerHTML = "夜晚的星星,很美丽呢 (☆▽☆)y"
	}
	// 日期时间部分
	date.innerHTML = (y + '/' + (month < 10? '0' + month: month) + '/' + (d < 10? '0' + d: d) + ' ' + weekDays[day]);
	time.innerHTML = ((h < 10? '0' + h: h) + ':' + (mins < 10? '0' + mins: mins) + (h >= 13? " pm": " am"));

	// 船新夜间模式喵
	if(h <= 7 || h >= 20 /* || true */) {
		document.querySelector("html").setAttribute("dark", '');
	}
}


const page = {
	tab: function(btnName) {
		const btns = document.getElementsByClassName("tab-btn");
		const panels = document.getElementsByClassName("panel");
		for(btn of btns) {
			btnN = btn.getAttribute("href").replace('#', '');
			pressed = btn.getAttribute("pressed");
			if(pressed && btnN === btnName) {return;}
			if(!pressed && btnN === btnName) {
				btn.setAttribute("pressed", '');
			}
			else {
				btn.removeAttribute("pressed");
			}
		}
		for(panel of panels) {
			panelN = panel.getAttribute("name");
			if(panelN === btnName) {
				panel.style.display = "block";
			}
			else {
				panel.style.display = "none";
			}
		}
	}
}

setInterval("我不知道该叫什么函数();", 60000);
