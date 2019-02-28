function recalc(x,bol) {

	var clientWidth = document.body.clientWidth;



	if (bol && (!clientWidth || clientWidth > x)) {

		document.documentElement.style.fontSize = "";

		return;

	};

	document.documentElement.style.fontSize = 100 * (clientWidth / x) + 'px';

};

var remCompute = function (width,device) {

	if (window.addEventListener) {

		recalc(width,device);

		var resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';

		window.addEventListener(resizeEvt, function () {recalc(width,device)}, false);

	};

};

var layOut = function(){
	var layOut = document.getElementById('layui-layer1');
	layOut.style.display = "block"
	
}
// var setRed = function(){
// 	document.getElementById('openNow').style.backgroundColor = '#cb0f0a'
// }
var layClose = function(){
	var layOut = document.getElementById('layui-layer1');
	layOut.style.display = "none"
}




// NOTE:

	// htmlҳ��body�µ����Ϸ����뷽��

	// width: Ԥ�����/Ԥ����Ӧ��ʱ��;

	// device:true(pc)   false(mobile)

	// =tureʱ  **pc����Ӧʽʱֻ����С��widthʱ�ż���**

	// =falseʱ  **mobile����ʱ�����м���**





// ����: remCompute(640,false);

// ���㷽��: 100px = 1rem; ����20px = 0.2rem;


