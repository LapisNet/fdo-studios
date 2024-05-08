const tabs = ["index", "project", "member", "about", "friend", "setting"],
titles = ["主页", "项目", "成员", "关于", "友链", "设置"];

function listenFun() {
	document.getElementsByClassName("tab-btn")[0].style.display = "none";
	hash = location.hash.split('#').join('');
	if(hash == '') return 0;
	else {
		for (var i in tabs) {
			if(tabs[i] == hash) {
				page.tab(hash);
				document.getElementsByTagName("title")[0].innerHTML = "FreeDayO | " + titles[i];
				return 0;
			}
		}
		page.tab("404");
		document.getElementsByClassName("tab-btn")[0].style.display = "block";
		document.getElementsByTagName("title")[0].innerHTML = "FreeDayO | 404";
	}
}

onhashchange = onload = listenFun;
