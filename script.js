//your JS code here. If required.
let arr=document.getElementsByTagName("li");

for(let i=0;i<arr.length;i++){
	if(arr[i].id==='level'){
		alert("The level of the element is: "+i)
	}
}