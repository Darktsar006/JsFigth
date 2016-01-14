var secondsLabel = 0;
var totalSeconds = 100; // Histoire que le combat dure 100 seconde

function setTime()
{
	if(totalSeconds === 0){
		secondsLabel = "FIN";
	}else {
		--totalSeconds;
    	secondsLabel = totalSeconds;
	}
    
}
