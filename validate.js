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

function validateForm() {
  var getDungName = document.forms[0]["dungeon_name"].value;
  if (getDungName == "") {
    alert("Dungeon Name Please");
    document.getElementById("dungeon_name").style.border = "1px solid red";
    return false;
  } else {
    document.getElementById("dungeon_name").style.border = "1px solid #ccc";
  }
  
  var getDateFound = document.forms[0]["date_found"].value;
  if (getDateFound == "") {
    alert("Date Found Please");
    document.getElementById("date_found").style.border = "1px solid red";
    return false;
  } else {
    document.getElementById("date_found").style.border = "1px solid #ccc";
  }
  
  var getNotes = document.forms[0]["notes"].value;
  if (getNotes == "") {
    alert("Add Notes Please");
    document.getElementById("notes").style.border = "1px solid red";
    return false;
  } else {
    document.getElementById("notes").style.border = "1px solid #ccc";
  }
  storeItems();
  }
