/*
Carolyn Lea
<<<<<<< HEAD
MiU 1109
=======
MiU 1108
>>>>>>> master
Project 1
September 1, 2011
*/

function getItems(){
	
			var getListDiv = document.getElementById('list');
			
			for (var i=0, len = localStorage.length; i < len; i++) {
			  var key = localStorage.key(i);
			  var value = localStorage.getItem(key);	
			  value = value.split(';');		  
			  var dungeon_name = value[0];
			  var dungeon_type = value[1];
			  var location = value[2];
			  var date_found = value[3];
			  var populated_1 = value[4];
			  var populated_2 = value[5];
			  var friendly_1 = value[6];
			  var friendly_2 = value[7];
			  var occupant = value[8];
			  var loot_rating = value[9];
			  var notes = value[10];
			  
			  var newDiv = document.createElement("div");
			  for ( var ii = 0, allLength = value.length; ii < allLength; ii++ ){
			    var newParas = document.createElement("p");
			    var itemTxt = document.createTextNode(value[ii]);
			    newParas.appendChild(itemTxt);
			    newDiv.appendChild(newParas);
			    getListDiv.appendChild(newDiv);
			  }

			var newImg = document.createElement("img");
			var setSrc = newImg.setAttribute("src", "images/" + dungeon_type + ".png");
			newDiv.appendChild(newImg);
			
			var deleteLink = document.createElement("a");
			var setHref = deleteLink.setAttribute("href", "#");
			var setOnclick = deleteLink.setAttribute("onclick", "deleteItem(" + key +");");
			var deleteText = document.createTextNode("deleteItem");
			deleteLink.appendChild(deleteText);
			newDiv.appendChild(deleteLink);
			
			var editLink = document.createElement("a");
			var setEditHref = editLink.setAttribute("href", "#");
			var setEditOnclick = editLink.setAttribute("onclick", "editItem(" + key +");");
			var editText = document.createTextNode("editItem");
			editLink.appendChild(editText);
			newDiv.appendChild(editLink);
			
			var options = document.getElementById('options');
			options.style.display = "block";
			
	
			}

};



function storeItems(id){
  var newDate = new Date();
  var itemId = newDate.getTime();
  var values = new Array();

	var dungeon_name = document.getElementById('dungeon_name').value;
	var dungeon_type = document.getElementById('dungeon_type').value;
	var location = document.getElementById('location').value;
	var date_found = document.getElementById('date_found').value;
	var populated_1 = document.getElementById('populated_1').value;
	var populated_2 = document.getElementById('populated_2').value;
	var friendly_1 = document.getElementById('friendly_1').value;
	var friendly_2 = document.getElementById('friendly_2').value;
	var occupant = document.getElementById('occupant').value;
	var loot_rating = document.getElementById('loot_rating').value;
	var notes = document.getElementById('notes').value;
	
	values.push(dungeon_name);
	values.push(dungeon_type);
	values.push(location);
	values.push(date_found);
	values.push(populated_1);
	values.push(populated_2);
	values.push(friendly_1);
	values.push(friendly_2);
	values.push(occupant);
	values.push(loot_rating);
	values.push(notes);
	
	localStorage.setItem(itemId, values.join(';'));
	//localStorage.setItem('appDungeonType', dungeon_type);
	//localStorage.setItem('appLocation', location);
	//localStorage.setItem('appDateFound', date_found);
	//localStorage.setItem('appPopulated', populated);
	//localStorage.setItem('appFriendly', friendly);
	//localStorage.setItem('appSelOne', selOne);
	//localStorage.setItem('appSelTwo', selTwo);
	//localStorage.setItem('appLootRating', loot_rating);
	//localStorage.setItem('appNoLootHere', no_loot_here);
	//localStorage.setItem('appNotes', notes);
		
};


function clearlocal(){
	localStorage.clear();
	return false;
};


function editItem(id){
	var value = localStorage.getItem(id);
	var itemId = id;
	value = value.split(';');
	var dungeon_name = value[0];
	var dungeon_type = value[1];
	var location = value[2];
	var date_found = value[3];
	var populated_1 = value[4];
	var populated_2 = value[5];
	var friendly_1 = value[6];
	var friendly_2 = value[7];
	var occupant = value[8];
	var loot_rating = value[9];
	var notes = value[10];
	
	document.getElementById('dungeon_name').value = dungeon_name;
	document.getElementById('dungeon_type').value = dungeon_type;
	document.getElementById('location').value = location;
	document.getElementById('date_found').value = date_found;
	if (populated_1 == "on"){
		document.getElementById('populated_1').setAttribute("checked", "checked");
	}else{
		document.getElementById('populated_2').setAttribute("checked", "checked");
	}
	if (friendly_1 == "on"){
		document.getElementById('friendly_1').setAttribute("checked", "checked");
	}else{
		document.getElementById('friendly_2').setAttribute("checked", "checked");
	}
	document.getElementById('occupant').value = occupant;
	document.getElementById('loot_rating').value = loot_rating;
	document.getElementById('notes').value = notes;
	
	var editItem = document.getElementById('editItem');
	editItem.style.display = "block";
	var submit = document.getElementById('submit');
	submit.style.display = "none";
	document.getElementById('editItem').onclick = function(){
			var dungeon_name = document.getElementById('dungeon_name').value;
			var dungeon_type = document.getElementById('dungeon_type').value;
			var location = document.getElementById('location').value;
			var date_found = document.getElementById('date_found').value;
			var populated_1 = document.getElementById('populated_1').value;
			var populated_1 = document.getElementById('populated_2').value;
			var friendly_2 = document.getElementById('friendly_1').value;
			var friendly_2 = document.getElementById('friendly_2').value;
			var occupant = document.getElementById('occupant').value;
			var loot_rating = document.getElementById('loot_rating').value;
			var notes = document.getElementById('notes').value;

			var viewForm = [
				dungeon_name,
				dungeon_type,
				location,
				date_found,
				populated_1,
				populated_2,
				friendly_1,
				friendly_2,
				occupant,
				loot_rating,
				notes
				];
				
			localStorage.setItem(itemId, viewForm.join(';'));
			window.location.reload();	
	}
	
};

function deleteItem(id){
	var ask = confirm ("Are you sure?");
	if (ask){
		localStorage.removeItem(id);
		window.location.reload();
	}else{
		alert("Item not removed!");
	}
};

