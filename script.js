function reroll(){
	statStrength = 3*(Math.floor(Math.random() * (6 - 1 + 1) + 1));
	statDexterity = 3*(Math.floor(Math.random() * (6 - 1 + 1) + 1));
	statCharisma = 3*(Math.floor(Math.random() * (6 - 1 + 1) + 1));
	
	maxStat = Math.max(statStrength, statDexterity, statCharisma)
	minStat = Math.min(statStrength, statDexterity, statCharisma)
	
	if (maxStat <= 9){
		carreerStats = minStat - 2
	} else if (maxStat == 10) {
		carreerStats = minStat + 5
	} else if (maxStat == 11) {
		carreerStats = minStat + 13
	} else if (maxStat == 12) {
		carreerStats = minStat + 22
	} else if (maxStat == 13) {
		carreerStats = minStat + 23
	} else if (maxStat == 14) {
		carreerStats = minStat + 42
	} else if (maxStat == 15) {
		carreerStats = minStat + 52
	} else if (maxStat == 16) {
		carreerStats = minStat + 62
	} else if (maxStat == 17) {
		carreerStats = minStat + 72
	} else if (maxStat == 18) {
		carreerStats = minStat + 82
	} 
	
	document.getElementById("statStrength").innerHTML = statStrength;
	document.getElementById("statDexterity").innerHTML = statDexterity;
	document.getElementById("statCharisma").innerHTML = statCharisma;
	document.getElementById("statMoney").innerHTML = Math.floor(Math.random() * (6 - 1 + 1) + 1);
	document.getElementById("statHP").innerHTML = Math.floor(Math.random() * (6 - 1 + 1) + 1);
	document.getElementById("carreerStats").innerHTML = carreerStats;
	document.getElementById("carreerD100").innerHTML = Math.floor(Math.random() * (100 - 1 + 1) + 1);
};

document.onload = reroll();

document.getElementById("button").addEventListener("click", reroll());