

var elevatorUp = true;
var elevatorDown = true;
var elevatorBroken = false;
var elevatorIsStuckWhileWeAreOnIt = true;
var elevatorNumber = 13;

if(elevatorBroken === true){
console.log("Out of Service!");
	} else {
	console.log("Ready to Service!");
}

if (elevatorIsStuckWhileWeAreOnIt){
	console.log("Oh no! We are stuck!");
}

if (elevatorBroken || elevatorDown){
	console.log("Oh no!!!");
} 

if (elevatorNumber && elevatorIsStuckWhileWeAreOnIt) {
	console.log("13 is an unlucky number")
}





