function inIframe () {
    try {
        return window.self !== window.top;
    } catch (e) {
        return true;
    }
}
$(document).ready(function(){
	if(inIframe())
	{
		var pre= document.getElementsByTagName("pre");
if(pre)
{
	var value=pre[0].innerHTML;
	window.parent.postMessage({value:value},"*");
}
//window.addEventListener("message", receiveMessage, false);

//function receiveMessage(event)
setTimeout(function(){
location.reload(true);
},50);

	}
});