/* Write your code for the plain-old-js-objects-spec here */

FRUIT_BEARING_AGE=2
MAX_AGE=20

function createTree(){
 	age: 0,
 	height:0,
 	rangeCount:0

}

createTree.prototype = {
	dropOrange: function(){},
	grow: function(){
 		this.age+=1;
 		this.height=+10;
 		this.isAlive=true;
 		if (this.age >= FRUIT_BEARING_AGE){
	 		var randomAge=Math.floor((Math.random() * 10) + 1);
	 		this.orangeCount=this.orangeCount + randomAge;
	 		this.dropOrange()
 		};
 		if(this.age>MAX_AGE){
 			this.isAlive=false;
 		};

	}
}


// function createTree(){
//  return {
//  	age: 0,
//  	height:0,
//  	orangeCount:0,
//     dropOrange: function(){
//     	return{

//     	}
//  	},
//  	grow: function(){
//  		this.age+=1;
//  		this.height=+10;
//  		this.isAlive=true;
//  		if (this.age >= FRUIT_BEARING_AGE){
// 	 		var randomAge=Math.floor((Math.random() * 10) + 1);
// 	 		this.orangeCount=this.orangeCount + randomAge;
// 	 		this.dropOrange()
//  		};
//  		if(this.age>MAX_AGE){
//  			this.isAlive=false;
//  		};


//  	}
//   }

// };

function pickOrange(){
	return {
		diameter: Math.floor((Math.random() * 10) + 1)

	}
}

// tree1 = new createTree();
// tree1.grow()
// console.log(tree1.orangeCount)


