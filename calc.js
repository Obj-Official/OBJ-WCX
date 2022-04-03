var val1 = 0;
var val2 = 0;
var operation = 0;
var result = 0;
var newOp = 0;
var clearsheet = 0;
var tmp1;
var tmp2;
var signchar;
var signactive=0;
var sqrop=0;
var numbertxt=0;
var pointOn=0;
var zeroInd=0;
var plusminusval=0;
var pmvar=0;


function calc(){
	if (operation==0 && signactive==0){
	result = val1;
	document.getElementById("divdisplay2").innerHTML = val1;
	}
	if (operation==1 && sqrop==0){
	result = val1+val2;
	}else if (operation==2 && sqrop==0){
	result = val2-val1;
	}else if (operation==3 && sqrop==0){
	result = val1*val2;
	}else if (operation==4 && val1!=0 && sqrop==0){
	result = val2/val1;
	}else if(operation==4 && val1==0 && sqrop==0){
	result= "You can't divide by 0";
	}else if(operation==5 && sqrop==0){
	result = Math.pow(val2, val1);
	}
	document.getElementById("divdisplay1").innerHTML = result;
	if (operation!=0 && sqrop==0){
	document.getElementById("divdisplay2").innerHTML = val2+signchar+val1;
	}
	newOp = 1;
	clearsheet = 0;
	numbertxt=0;
	pointOn=0;
	if (signactive!=1){
	document.getElementById("sign").innerHTML = "";
	}
}

function signinactive(){
    signactive=0;
}

function signon(){
	if (signactive==1 && newOp!=1 && numbertxt==0){
	val2=val1;
	document.getElementById("divdisplay2").innerHTML = val2 + signchar;
	document.getElementById("divdisplay1").innerHTML = 0;
	signactive=0;
	sqrop=0;
	}else if(newOp==1 && signactive==1){
	val2=result;
	document.getElementById("divdisplay2").innerHTML = val2 + signchar;
	document.getElementById("divdisplay1").innerHTML = 0;
	newOp=0;
	sqrop=0;
	}else if(newOp==1 && signactive==0){
	clearAll();
	}
	pointOn = 0;
}

function activateadd(){
	clearsheet = 0;
	document.getElementById("sign").innerHTML = "+";
	signactive = 1;
	if (val1!=0 && val2!=0 && pmvar == 0 || val1==0 && zeroInd == 1 ){
	calc();
	zeroInd = 0;
	}
	operation = 1;
	signchar= "+";
	numbertxt=0;
	pmvar=0;
}

function activatesub(){
	clearsheet = 0;
	document.getElementById("sign").innerHTML = "-";
	signactive = 1;
	if (val1!=0 && val2!=0 && pmvar == 0|| val1==0 && zeroInd == 1 ){
	calc();
	zeroInd = 0;
	}
	operation = 2;
	signchar= "-";
	numbertxt=0;
	pmvar=0;
}

function activatemult(){
	clearsheet = 0;
	document.getElementById("sign").innerHTML = "×";
	signactive = 1;
	if (val1!=0 && val2!=0 && pmvar == 0 || val1==0 && zeroInd == 1 ){
	calc();
	zeroInd=0;
	}
	operation = 3;
	signchar= "×";
	numbertxt=0;
	pmvar=0;
}

function activatediv(){
	clearsheet = 0;
	document.getElementById("sign").innerHTML = "÷";
	signactive = 1;
	if (val1!=0 && val2!=0 && pmvar == 0 || val1==0 && zeroInd == 1){
	calc();
	zeroInd=0;
	}
	operation = 4;
	signchar= "÷";
	numbertxt=0;
	pmvar=0;
}

function btn1(){
	signon();
	if (clearsheet==0){
	document.getElementById("divdisplay1").innerHTML = "1";
	val1= 1;
	clearsheet=1;
	numbertxt=1;
	}else if (clearsheet==1){
	tmp1 = divdisplay1.innerText;
	tmp2 = tmp1 + "1";
	document.getElementById("divdisplay1").innerHTML = tmp2;
	val1 = Number(tmp2);
	}else{}
}

function btn2(){
	signon();
	if (clearsheet==0){
	document.getElementById("divdisplay1").innerHTML = "2";
	val1= 2;
	clearsheet=1;
	numbertxt=1;
	}else if (clearsheet==1){
	tmp1 = divdisplay1.innerText;
	tmp2 = tmp1 + "2";
	document.getElementById("divdisplay1").innerHTML = tmp2;
	val1 = Number(tmp2);
	}else{}
}

function btn3(){
	signon();
	if (clearsheet==0){
	document.getElementById("divdisplay1").innerHTML = "3";
	val1= 3;
	clearsheet=1;
	numbertxt=1;
	}else if (clearsheet==1){
	tmp1 = divdisplay1.innerText;
	tmp2 = tmp1 + "3";
	document.getElementById("divdisplay1").innerHTML = tmp2;
	val1 = Number(tmp2);
	}else{}
}

function btn4(){
	signon();
	if (clearsheet==0){
	document.getElementById("divdisplay1").innerHTML = "4";
	val1= 4;
	clearsheet=1;
	numbertxt=1;
	}else if (clearsheet==1){
	tmp1 = divdisplay1.innerText;
	tmp2 = tmp1 + "4";
	document.getElementById("divdisplay1").innerHTML = tmp2;
	val1 = Number(tmp2);
	}else{}
}

function btn5(){
	signon();
	if (clearsheet==0){
	document.getElementById("divdisplay1").innerHTML = "5";
	val1= 5;
	clearsheet=1;
	numbertxt=1;
	}else if (clearsheet==1){
	tmp1 = divdisplay1.innerText;
	tmp2 = tmp1 + "5";
	document.getElementById("divdisplay1").innerHTML = tmp2;
	val1 = Number(tmp2);
	}else{}
}

function btn6(){
	signon();
	if (clearsheet==0){
	document.getElementById("divdisplay1").innerHTML = "6";
	val1= 6;
	clearsheet=1;
	numbertxt=1;
	}else if (clearsheet==1){
	tmp1 = divdisplay1.innerText;
	tmp2 = tmp1 + "6";
	document.getElementById("divdisplay1").innerHTML = tmp2;
	val1 = Number(tmp2);
	}else{}
}

function btn7(){
	signon();
	if (clearsheet==0){
	document.getElementById("divdisplay1").innerHTML = "7";
	val1= 7;
	clearsheet=1;
	numbertxt=1;
	}else if (clearsheet==1){
	tmp1 = divdisplay1.innerText;
	tmp2 = tmp1 + "7";
	document.getElementById("divdisplay1").innerHTML = tmp2;
	val1 = Number(tmp2);
	}else{}
}

function btn8(){
	signon();
	if (clearsheet==0){
	document.getElementById("divdisplay1").innerHTML = "8";
	val1= 8;
	clearsheet=1;
	numbertxt=1;
	}else if (clearsheet==1){
	tmp1 = divdisplay1.innerText;
	tmp2 = tmp1 + "8";
	document.getElementById("divdisplay1").innerHTML = tmp2;
	val1 = Number(tmp2);
	}else{}
}

function btn9(){
	signon();
	if (clearsheet==0){
	document.getElementById("divdisplay1").innerHTML = "9";
	val1= 9;
	clearsheet=1;
	numbertxt=1;
	}else if (clearsheet==1){
	tmp1 = divdisplay1.innerText;
	tmp2 = tmp1 + "9";
	document.getElementById("divdisplay1").innerHTML = tmp2;
	val1 = Number(tmp2);
	}else{}
}

function btn0(){
	signon();
	zeroInd = 1;
	if (clearsheet==0){
	val1=0;
	clearsheet=1;
	numbertxt=1;
	}else if (clearsheet==1){
	tmp1 = divdisplay1.innerText;
	tmp2 = tmp1 + "0";
	document.getElementById("divdisplay1").innerHTML = tmp2;
	val1 = Number(tmp2);
	}else{}
}

function btnpoint(){
	signon();
	if (clearsheet==0){
	document.getElementById("divdisplay1").innerHTML = "0.";
	val1= 0.;
	clearsheet=1;
	numbertxt=1;
	}else if (clearsheet==1 && pointOn==0){
	tmp1 = divdisplay1.innerText;
	tmp2 = tmp1 + ".";
	document.getElementById("divdisplay1").innerHTML = tmp2;
	val1 = Number(tmp2);
	}else{}
	pointOn = 1;
}

function btnsqr(){
	if (val1!=0 && val2==0 && result==0){
	document.getElementById("divdisplay1").innerHTML = val1*val1;
	document.getElementById("divdisplay2").innerHTML = "("+ val1 +")²";
	clearsheet=0
	result=Number(divdisplay1.innerText);
	newOp=1;
	}else if(result!=0){
	document.getElementById("divdisplay1").innerHTML = result*result;
	document.getElementById("divdisplay2").innerHTML = "("+ result +")²";
	clearsheet=0
	result=Number(divdisplay1.innerText);
	newOp=1;
	sqrop=1;
	}
}

function btnsqrt(){
	if (val1!=0 && val2==0 && result==0){
	document.getElementById("divdisplay1").innerHTML = Math.sqrt(val1);
	document.getElementById("divdisplay2").innerHTML = "√"+ val1 ;
	clearsheet=0
	result=Number(divdisplay1.innerText);
	newOp=1;
	}else if(result!=0){
	document.getElementById("divdisplay1").innerHTML = Math.sqrt(result);
	document.getElementById("divdisplay2").innerHTML = "√"+ result ;
	clearsheet=0
	result=Number(divdisplay1.innerText);
	newOp=1;
	sqrop=1;
	}
}

function btnpow(){
	clearsheet = 0;
	document.getElementById("sign").innerHTML = "^";
	signactive = 1;
	if (val1!=0 && val2!=0 ){
	calc();
	}
	operation = 5;
	signchar= "^";
	numbertxt=0;
}

function btnplusminus(){
	if (val1!=0 && val2==0 && result==0){
	plusminusval =Number(divdisplay1.innerText);
	document.getElementById("divdisplay1").innerHTML = plusminusval*-1;
	clearsheet=0
	val1=Number(divdisplay1.innerText);
	newOp=0;
	numbertxt=0;
	pmvar = 1;
	}else if (val1!=0 && val2!=0 && result==0){
	plusminusval =Number(divdisplay1.innerText);
	document.getElementById("divdisplay1").innerHTML = plusminusval*-1;
	clearsheet=0
	val1=Number(divdisplay1.innerText);
	newOp=0;
	numbertxt=0;
	pmvar =1;
	}else if(val1!=0 && val2!=0 && result!=0){
	plusminusval =Number(divdisplay1.innerText);
	document.getElementById("divdisplay1").innerHTML = plusminusval*-1;
	clearsheet=0
	val1=Number(divdisplay1.innerText);
	result=val1;
	newOp=0;
	numbertxt=0;
	pmvar=1;
	}else if(result!=0 ){
	plusminusval =Number(divdisplay1.innerText);
	document.getElementById("divdisplay1").innerHTML = plusminusval*-1;
	clearsheet=0
	val1=Number(divdisplay1.innerText);
	result = val1;
	newOp=0;
	numbertxt=0;
	pmvar=1;
	}
}

function clearAll(){
	val1 = 0;
	val2 = 0;
	operation = 0;
	newOp = 0;
	clearsheet = 0;
	tmp1 = "";
	tmp2 = "";
	signactive = 0;
	result = 0;
	sqrop=0;
	numbertxt=0;
	pointOn = 0;
	document.getElementById("divdisplay1").innerHTML = 0;
	document.getElementById("divdisplay2").innerHTML = "";
	document.getElementById("sign").innerHTML = "";
}
