function ageindays() {
	var birthyear= prompt('what year were you born... Good friend?');
	var ageindayss=(2020  - birthyear)*365;
	var h1 = document.createElement('h1');
	var textAnswer=document.createTextNode('you are ' + ageindayss +' days old ');
	h1.setAttribute('id', 'ageindays');
	h1.appendChild(textAnswer);
	document.getElementById('flex-box-result').appendChild(h1);
	
} 

function reset() {
	document.getElementById('ageindays').remove();


} 
