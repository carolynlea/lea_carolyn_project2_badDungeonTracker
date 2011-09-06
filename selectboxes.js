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

function doChange(srcList, targetId){
	
	var val = srcList.options[srcList.selectedIndex].value;
	var targetList = document.getElementById(targetId);
	alert("You have chosen " + val + ".  Press ok to continue.");
	removeAll(targetList);
	if(val == 'animal')
	{
		addOption('bears', targetList);
		addOption('crabs', targetList);
		addOption('fish', targetList);
		addOption('lions', targetList);
		addOption('rats', targetList);
		addOption('wolves', targetList);	

	}
	else if(val == 'human')
	{
		addOption('bandits', targetList);
		addOption('conjurers', targetList);
		addOption('marauders', targetList);
		addOption('necromancers', targetList);
		addOption('quest giver', targetList);
		addOption('trainer', targetList);
	}
	else if(val == 'mythic')
	{
		addOption('goblins', targetList);
		addOption('imps', targetList);
		addOption('minotaurs', targetList);
		addOption('ogres', targetList);
		addOption('unicorn', targetList);
	}
	else if(val == 'undead')
	{
		addOption('skeletons', targetList);
		addOption('vampires', targetList);
		addOption('wraiths', targetList);
		addOption('zombies', targetList);
	}
 };

function addOption(value, list){
	
	var o = new Option(value);
	try
	{
		list.add(o);
	}
	catch(listing)
	{
		list.add(o, null);
	}
};

function removeAll(list){
	
	for(var i = 0, limit = list.options.length; i < limit - 1; ++i)
	{
		list.remove(1);
	}
};





