let user1 = {
	name : 'Alex',  // key : value
	height: "5'4ft",
	isGwapo: true,
	health: 10,
	// "Matangkad ba ako" : false,     JASON
	stand: function() {
		console.log('hi');
	},
	greet: function() {
		console.log('Hello! I\'m ' + user1.name );
		console.log(user1.stand());
	},
		attack: function (target){
		console.log(this.me + " is attacking" + target.name);
		console.log(target.name + "\'s health is" + target.health);
		if(target.health==0){
			console.log(target.name + " is dead");
		}
	},
};

let user2 = {
	name : 'Mario',  // key : value
	height: "3ft",
	isGwapo: false,
	health: 10,
	// "Matangkad ba ako" : false,     JASON
	stand: function() {
		console.log('I can\'t');
	},
	greet: function() {
		console.log('Hello! I\'m ' + user2.name );
		console.log(user2.stand());
	},
		attack: function (target){
		console.log(this.me + " is attacking" + target.name);
		console.log(target.name + "\'s health is" + target.health);
		if(target.health==0){
			console.log(target.name + " is dead");
		}
	},

};


let user3 = {
	name : 'Luigi',  // key : value
	height: "3ft",
	isGwapo: false,
	health: 10,
	// "Matangkad ba ako" : false,     JASON
	stand: function() {
		console.log('I can\'t');
	},
	greet: function() {
		console.log('Hello! I\'m ' + this.name );
		console.log(this.stand());
	},
		attack: function (target){
		console.log(this.me + " is attacking" + target.name);
		console.log(target.name + "\'s health is" + target.health);
		if(target.health==0){
			console.log(target.name + " is dead");
		}
	},

};

let newUser = function(name){
	this.name = name;
	this.height = height;
	this.status = "alive";
	this.health = health;
	this.attack = function (target){
		target.health--;
		console.log(target.name + "has been attacked. " target.name + "'s health is" + target.health)
	}
}
