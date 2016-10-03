
function checkpass() {
	var name = prompt("请输入姓名");
	if(name === "" || name === null) {
		alert("当前没有输入名字哦");
	} else {
		url = encodeURI("hhh.html?name=" + name);
		window.location = url;
	}
}
