if (localStorage.getItem("mode") === null || localStorage.getItem("mode") == "white") {
	document.getElementById("bwmode")
		.innerHTML = '<button onclick="checkmode()" class="mdui-btn mdui-btn-icon mdui-ripple mdui-ripple-white"><i class="mdui-icon material-icons">brightness_4</i></button>';
} else {
	document.getElementById("bwmode")
		.innerHTML = '<button onclick="checkmode()" class="mdui-btn mdui-btn-icon mdui-ripple mdui-ripple-white"><i class="mdui-icon material-icons">brightness_7</i></button>';
	document.getElementById("head")
		.className = "mdui-appbar-with-toolbar mdui-theme-accent-pink mdui-theme-primary-indigo mdui-theme-layout-dark";
	document.getElementById("mdui")
		.className = "mdui-theme-layout-dark";
	document.getElementById("bg")
		.className = "mdui-typo mdui-theme-layout-dark";
	document.getElementById("body")
		.className = "mdui-theme-layout-dark mdui-loaded";
}

function checkmode() {
	var classVal = document.getElementById("body")
		.getAttribute("class");
	if (localStorage.getItem("mode") === null) {
		localStorage.setItem("mode", "black");
	} else if (localStorage.getItem("mode") === "white") {
		localStorage.setItem("mode", "black");
		document.getElementById("bwmode")
			.innerHTML = '<button onclick="checkmode()" class="mdui-btn mdui-btn-icon mdui-ripple mdui-ripple-white"><i class="mdui-icon material-icons">brightness_7</i></button>';
		document.getElementById("head")
			.className = "mdui-appbar-with-toolbar mdui-theme-accent-pink mdui-theme-primary-indigo mdui-theme-layout-dark";
		document.getElementById("mdui")
			.className = "mdui-theme-layout-dark";
		document.getElementById("bg")
			.className = "mdui-container main-container mdui-typo mdui-theme-layout-dark";
		classVal = classVal.replace("mdui-color-grey-100", "mdui-theme-layout-dark");
		document.getElementById("body")
			.setAttribute("class", classVal);
	} else {
		document.getElementById("bwmode")
			.innerHTML = '<button onclick="checkmode()" class="mdui-btn mdui-btn-icon mdui-ripple mdui-ripple-white"><i class="mdui-icon material-icons">brightness_4</i></button>';
		localStorage.setItem("mode", "white");
		document.getElementById("head")
			.className = "mdui-appbar-with-toolbar mdui-theme-accent-pink mdui-theme-primary-indigo";
		document.getElementById("mdui")
			.className = "mdui-color-grey-100";
		document.getElementById("bg")
			.className = "mdui-container main-container mdui-typo";
		classVal = classVal.replace("mdui-theme-layout-dark", "mdui-color-grey-100");
		document.getElementById("body")
			.setAttribute("class", classVal);
	}
}