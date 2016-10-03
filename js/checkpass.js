
function GetRequest() {
	var url = location.search; //获取url中"?"符后的字串
	var params = url.substring(1, url.length);
	paramsarray = params.split('=');
	return paramsarray;
}

function checkPass() {
	var content = document.getElementById("wrap");
	request = GetRequest();
	encodeName = decodeURI(request[1]);
	if(hex_md5(encodeName) === "3155b09d05632283a7ccaf8c70b44533") {
		content.style.display = "block";
	} else {
		if(request.length != 2) {
			document.write("<p style='color:red'; margin:0 auto>您当前对该页面无权访问！！！<span id='time'>10</span>秒后回到<a href='index.html'>主界面</a></p>");
		} else {
			document.write("<p style='color:red'; margin:0 auto>密码错误！您当前对该页面无权访问！！！<span id='time'>10</span>秒后回到<a href='index.html'>主界面</a></p>");
		}
		
		var time = document.getElementById("time"),
			i = 9,
			count = 1,
			timer = setInterval(function() {
			if(i <= 0) {
				clearInterval(timer);
				window.location = "index.html";
			}
			time.innerHTML = i--;
		},1000);
	}

}

checkPass();

