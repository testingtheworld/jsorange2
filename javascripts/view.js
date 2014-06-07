/* Write your JS to modify the view here */
function View(){
	this.ageButton = document.querySelector("button.age");
	this.plantButton = document.querySelector(".plant");
	this.pickButton = document.querySelector("button.pick");
	this.orangeCountDisplay = document.querySelector(".fruit-count")

}

View.prototype = {
	plantTree: function(){
		this.removePlantButton();
		this.setTemplate();
	},

	removePlantButton: function(){
		var plantButton=document.querySelector(".plant");
		plantButton.style.display="none";
	},

	setTemplate: function(){
		document.querySelector("#orange-tree-template").style.display="inline"
	},

	addAge: function(age){
		toAdd=document.querySelector(".age")
		toAdd.innerHTML = age
	},
	orangeCountDisplayUpdate: function(count){
		this.orangeCountDisplay.innerHTML=count
	}
}