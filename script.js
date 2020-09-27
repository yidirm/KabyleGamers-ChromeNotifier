let buttons = document.getElementsByClassName("buttonLink");

for (let i = 0; i < buttons.length; i++) {
	const _value = buttons[i].value

	buttons[i].addEventListener(
		"click",
		function() {
			chrome.tabs.create({"url": _value})
		}
	);

};
