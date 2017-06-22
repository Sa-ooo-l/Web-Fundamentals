
function hello(){
	console.log("Hello!!!");
}


hello();


var hey = function(){
	console.log("hey!");
}

hey();


function Saul(){
	console.log("Saul");
}

Saul();


function addTwos(){
	var x =2;
	var y =2;
	console.log(x+y);
}

addTwos();


function multiplication(){
	var q = 10
	var r = 2
	console.log(q*r);
}

multiplication();

function numberEntered(x){
	console.log("The number entered is: ", x);
}

numberEntered(5);
numberEntered(7);
numberEntered(100000);


function addAnyTwoNumbers(x,y){
	console.log("The sum is: ", x + y);
}

addAnyTwoNumbers(5,8);
addAnyTwoNumbers(124000,78965)

function fullName(x,y){
	console.log("The persons name is ", x,y);
}

fullName("Saul", "Martinez");


function petNameAndBreed(name, breed){
	var details = name + ", " + breed;
	return details;
}
	petNameAndBreed("Rufus", "Weiner Dog")


function priceOfCandy(cost,amount,tax){
	console.log("The price of candy is $",(cost*amount*tax)+(cost*amount));
}

priceOfCandy(1,10,.07);
