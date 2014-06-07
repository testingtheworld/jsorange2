// Write your Orange Tree code here - you may use constructor functions 
FRUIT_BEARING_AGE=2
MAX_AGE=20

window.onload = function() {
  var view = new View()
  tree = new Tree()
  var controller = new Controller(view, tree)
  controller.bindListeners()
}

function Controller(view, tree){
	this.view=view;
	this.tree=tree;

}

Controller.prototype = {
	bindListeners: function(){
		this.bindPlant();
		this.bindAge();
		this.pickOrange();
	},

	bindPlant: function(){
		this.view.plantButton.addEventListener('click', this.plant.bind(this));

	},

	bindAge: function(){
		this.view.ageButton.addEventListener('click', this.age.bind(this));
	},

	pickOrange: function(){
		this.view.pickButton.addEventListener('click', this.pick.bind(this));
	},

	plant: function(){
		this.view.plantTree();
	},

	age: function(){
		this.tree.grow()
		this.view.addAge(this.tree.age)
		this.view.orangeCountDisplayUpdate(this.tree.numberInBasket())
	},
	pick: function(){
		this.tree.pickOrange()
		this.view.orangeCountDisplayUpdate(this.tree.numberInBasket())
	}
}




function Tree(){
 	this.age = 0,
 	this.height=0,
 	this.orangeCount=0,
 	this.orangeBasket=[]

}

Tree.prototype = {
	dropOrange: function(){
		return this.orangeBasket[0]
	},
	grow: function(){
 		this.age+=1;
 		this.height=+10;
 		this.isAlive=true;
 		if (this.age >= FRUIT_BEARING_AGE){
	 		var randomAge=Math.floor((Math.random() * 10) + 1);
	 		for(var i=0;i<randomAge;i++){
	 			this.orangeBasket.push(new Orange());
	 		}
	 		this.orangeCount=this.orangeCount + randomAge;
	 		this.dropOrange()
 		};
 		if(this.age>MAX_AGE){
 			this.isAlive=false;
 		};

	},
	pickOrange: function(){
		return this.orangeBasket.shift()
	},
	numberInBasket: function(){
		return this.orangeBasket.length
	}
}

function Orange(){
	this.diameter =Math.floor((Math.random() * 10) + 1);
}

