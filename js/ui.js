var current_slide = 2;
var all_slide;

function js_next_slide(){
	all_slide = document.getElementsByClassName('slide').length;
	i = current_slide;
	if(i-2 >= 0){
		document.getElementsByClassName('slide')[i-2 ].classList.add('slide-r2');
		document.getElementsByClassName('slide')[i-2 ].classList.remove('slide-l2');
	}
	else{
		document.getElementsByClassName('slide')[i-2+all_slide ].classList.add('slide-r2');
		document.getElementsByClassName('slide')[i-2+all_slide ].classList.remove('slide-l2');
	}
	if(i-1 >= 0){	
		document.getElementsByClassName('slide')[i-1 ].classList.add('slide-l2');
		document.getElementsByClassName('slide')[i-1 ].classList.remove('slide-l1');
	}
	else{
		document.getElementsByClassName('slide')[i-1+all_slide  ].classList.add('slide-l2');
		document.getElementsByClassName('slide')[i-1+all_slide  ].classList.remove('slide-l1');
	}
	document.getElementsByClassName('slide')[i ].classList.add('slide-l1');
	document.getElementsByClassName('slide')[i ].classList.remove('slide-active');
	if(i+1 < all_slide){
		document.getElementsByClassName('slide')[i+1 ].classList.add('slide-active');
		document.getElementsByClassName('slide')[i+1 ].classList.remove('slide-r1');
	}
	else{
		document.getElementsByClassName('slide')[i+1-all_slide ].classList.add('slide-active');
		document.getElementsByClassName('slide')[i+1-all_slide ].classList.remove('slide-r1');
	}
	if(i+2 < all_slide){
		document.getElementsByClassName('slide')[i+2 ].classList.add('slide-r1');
		document.getElementsByClassName('slide')[i+2 ].classList.remove('slide-r2');
	} 
	else{
		document.getElementsByClassName('slide')[i+2-all_slide ].classList.add('slide-r1');
		document.getElementsByClassName('slide')[i+2-all_slide ].classList.remove('slide-r2');
	}
	if(i+3 < all_slide){
		document.getElementsByClassName('slide')[i+3 ].classList.add('slide-r2');
		document.getElementsByClassName('slide')[i+3 ].classList.remove('slide-l2');
	} 
	else{
		document.getElementsByClassName('slide')[i+3-all_slide ].classList.add('slide-r2');
		document.getElementsByClassName('slide')[i+3-all_slide ].classList.remove('slide-l2');
	}
	current_slide += 1;
	if(current_slide == all_slide){
		current_slide = 0;
	}
}
function js_prev_slide(){
	all_slide = document.getElementsByClassName('slide').length;
	i = current_slide;
	if(i-3 >= 0){
		document.getElementsByClassName('slide')[i-3 ].classList.add('slide-l2');
		document.getElementsByClassName('slide')[i-3 ].classList.remove('slide-r2');
	}
	else{
		document.getElementsByClassName('slide')[i-3+all_slide ].classList.add('slide-l2');
		document.getElementsByClassName('slide')[i-3+all_slide ].classList.remove('slide-r2');
	}
	if(i-2 >= 0){
		document.getElementsByClassName('slide')[i-2 ].classList.add('slide-l1');
		document.getElementsByClassName('slide')[i-2 ].classList.remove('slide-l2');
	}
	else{
		document.getElementsByClassName('slide')[i-2+all_slide ].classList.add('slide-l1');
		document.getElementsByClassName('slide')[i-2+all_slide ].classList.remove('slide-l2');
	}
	if(i-1 >= 0){	
		document.getElementsByClassName('slide')[i-1 ].classList.add('slide-active');
		document.getElementsByClassName('slide')[i-1 ].classList.remove('slide-l1');
	}
	else{
		document.getElementsByClassName('slide')[i-1+all_slide  ].classList.add('slide-active');
		document.getElementsByClassName('slide')[i-1+all_slide  ].classList.remove('slide-l1');
	}
	document.getElementsByClassName('slide')[i ].classList.add('slide-r1');
	document.getElementsByClassName('slide')[i ].classList.remove('slide-active');
	if(i+1 < all_slide){
		document.getElementsByClassName('slide')[i+1 ].classList.add('slide-r2');
		document.getElementsByClassName('slide')[i+1 ].classList.remove('slide-r1');
	}
	else{
		document.getElementsByClassName('slide')[i+1-all_slide ].classList.add('slide-r2');
		document.getElementsByClassName('slide')[i+1-all_slide ].classList.remove('slide-r1');
	}
	if(i+2 < all_slide){
		document.getElementsByClassName('slide')[i+2 ].classList.add('slide-l2');
		document.getElementsByClassName('slide')[i+2 ].classList.remove('slide-r2');
	} 
	else{
		document.getElementsByClassName('slide')[i+2-all_slide ].classList.add('slide-l2');
		document.getElementsByClassName('slide')[i+2-all_slide ].classList.remove('slide-r2');
	}
	current_slide -= 1;
	if(current_slide == -1){
		current_slide = all_slide-1;
	}
}
window.onload = function() {
	t=setTimeout('startTime()',10);

}
// таймер обратного отсчета
function startTime(){
	var tm=new Date();
	var d=tm.getDate();
	var h=tm.getHours();
	var m=tm.getMinutes();
	var s=tm.getSeconds();
	// дата окончания отсчета
	var end = new Date(2014, 5,19);
	var elapsed = end - tm;
	/*document.getElementById('cell-day').innerHTML= div(elapsed, 86400000);*/
	d = div(elapsed, 86400000); 
	elapsed = elapsed - div(elapsed, 86400000)*86400000;
	h = div(elapsed, 3600000);
	h=checkTime(h);
	elapsed = elapsed - h*3600000;
	m = div(elapsed, 60000);
	m=checkTime(m);
	elapsed = elapsed - m*60000;
	s = div(elapsed, 1000);
	s=checkTime(s);
	document.getElementById('cell-day1').innerHTML=div(d, 10);
	document.getElementById('cell-day2').innerHTML=d-div(d, 10)*10;
	document.getElementById('cell-hour1').innerHTML=div(h, 10);
	document.getElementById('cell-hour2').innerHTML=h-div(h, 10)*10;
	document.getElementById('cell-second1').innerHTML=div(s, 10);
	document.getElementById('cell-second2').innerHTML=s-div(s, 10)*10;
	document.getElementById('cell-minut1').innerHTML=div(m, 10);
	document.getElementById('cell-minut2').innerHTML=m-div(m, 10)*10;
	document.getElementById('cell-day3').innerHTML=div(d, 10);
	document.getElementById('cell-day4').innerHTML=d-div(d, 10)*10;
	document.getElementById('cell-hour3').innerHTML=div(h, 10);
	document.getElementById('cell-hour4').innerHTML=h-div(h, 10)*10;
	document.getElementById('cell-second3').innerHTML=div(s, 10);
	document.getElementById('cell-second4').innerHTML=s-div(s, 10)*10;
	document.getElementById('cell-minut3').innerHTML=div(m, 10);
	document.getElementById('cell-minut4').innerHTML=m-div(m, 10)*10;
	t=setTimeout('startTime()',500);
/*	document.getElementById('b-campaign__second').style.top = 42 + 'px';
	$('#b-campaign__second').addClass('animated_timer_end');*/

}
function div(val, by){
    return (val - val % by) / by;
}
function checkTime(i){
	if (i<10){
		i="0" + i;
	}
	return i;
}
function js_popup_close(){
	document.getElementsByClassName('popup-fild')[0].style.display = "none";
}
function js_popup_open(){
	document.getElementsByClassName('popup-fild')[0].style.display = "block";
}
function js_login_close_fon(event) {
  // получить объект событие
  event = event || window.event
  var t = event.target || event.srcElement
  
  if(t.className == "popup-fild"){
		document.getElementsByClassName('popup-fild')[0].style.display = "none";
	}		
}















