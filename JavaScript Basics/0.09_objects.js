var player = {
	//Properties
	name 			: "",
	life			: 100,
	damage			: 0, //attackPoints
	hasSword		: true,
	hasGun			: false,
	rank		    : ["soldier", "mage", "thief", "rogue", "bard", "transformer", "spartan", "barbarian"],
	potion			: 75,
	drink           : true,

	//Methods
	challenge		:function (){
		console.log("Would thoust care to duel good sir?")
	},
	fightMe			:function(){
		console.log("Would thee like to fight," + this.name + "?");
	},
	attack          :function(target){
		var target= "George"
		console.log(this.name + " attacked " + target + " for " + this.damage + " hp");
		//*target.life -= this.damage;*//
	},
	pickedUpGun		: function(){
		if(this.hasGun === true){
			console.log(this.name + "picked up the gun");
		}
	},
	drinkPotion		:function(){
		if(this.drink === true){
			console.log(this.name + " drank a potion, recieved " + this.potion + " hp")
		}
	},
};

var saul = Object.create(player);
saul.name = "saul";
saul.life = 120;
saul.damage = 30;
saul.rank = "rogue";
saul.hasSword = true;
saul.drink = true;
saul.challenge();
saul.fightMe();
saul.attack();
saul.drinkPotion();


console.log(saul.name);
console.log(saul.life);
console.log(saul.rank);
console.log(saul.hasSword);