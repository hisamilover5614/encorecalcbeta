function placeBsBtn() {
	var importBtn = "<button id='import' class='bs-btn bs-btn-default'>Import</button>";
	$("#import-1_wrapper").append(importBtn);

	$("#import.bs-btn").click(function () {
		var pupps = document.getElementsByClassName("import-team-text")[0].value;
		addSets(pupps);
	});
}

function ExportPuppet(puppInfo) {
	var puppet = new Puppet(puppInfo);
	var EV_counter = 0;
	var EVs_Array = [];
	var finalText = "";
	finalText = doAbbreviation(puppet.name) + (puppet.item ? " @ " + puppet.item : "") + "\n";
	finalText += puppet.mark + " Mark" + "\n";
	finalText += puppet.ability ? "Ability: " + puppet.ability + "\n" : "";
	finalText += "PP: ";
	if (puppet.HPPP && puppet.HPPP > 0) { // Does HP PP exist and is it greater than 0?
		EV_counter += puppet.HPPP;
		EVs_Array.push(puppet.HPPP + " HP");
	}
	for (var stat in puppet.pp) {
		EV_counter += puppet.pp[stat];
		if (EV_counter > 130) {
			break;
		} else if (puppet.pp[stat]) {
			EVs_Array.push(puppet.pp[stat] + " " + toTPDPStat(stat));
		}
	}
	finalText += serialize(EVs_Array, " / ");
	finalText += "\n";
	var movesArray = [];
	for (var i = 0; i < 4; i++) {
		var moveName = puppet.moves[i].name;
		if (moveName !== "(No Move)") {
			finalText += "- " + moveName + "\n";
		}
	}
	finalText = finalText.trim();
	$("textarea.import-team-text").text(finalText);
}

$("#exportL").click(function () {
	ExportPuppet($("#p1"));
});

$("#exportR").click(function () {
	ExportPuppet($("#p2"));
});

function serialize(array, separator) {
	var text = "";
	for (var i = 0; i < array.length; i++) {
		if (i < array.length - 1) {
			text += array[i] + separator;
		} else {
			text += array[i];
		}
	}
	return text;
}

function getAbility(row) {
	var ability = row[1] ? row[1].trim() : '';
	if (ABILITIES_YNK.indexOf(ability) !== -1) {
		return (ability);
	} else {
		return;
	}

}

function statConverter(stat) {
	switch (stat) {
	case 'hp':
		return "hp";
	case 'atk':
	case 'fatk':
	case 'foatk':
		return "fa";
	case 'def':
	case 'fdef':
	case 'fodef':
		return "fd";
	case 'spa':
	case 'satk':
	case 'spatk':
		return "sa";
	case 'spd':
	case 'sdef':
	case 'spdef':
		return "sd";
	case 'spe':
		return "sp";
	}
}

function rankToInt(rank) {
	return ['E-', 'E', 'E+', 'D-', 'D', 'D+', 'C-', 'C', 'C+', 'B-', 'B', 'B+', 'A-', 'A', 'A+', 'S'].indexOf(rank.toUpperCase());
}

function getStats(currentpupp, rows, offset) {
	currentpupp.mark = "Red";
	var currentPP;
	var currentRank;
	var currentMark;
	currentpupp.level = 50;
	for (var x = offset; x < offset + 7; x++) {
		var currentRow = rows[x] ? rows[x].split(/[/:]/) : '';
		var ppall = {};
		var ranks = {};
		var pp;
		var j;
		switch (currentRow[0]) {
		case 'Level':
			currentpupp.level = parseInt(currentRow[1].trim());
			break;
		case 'EVs': //Both are the same
		case 'PP':
			for (j = 1; j < currentRow.length; j++) {
				currentPP = currentRow[j].trim().split(" ");
				currentPP[1] = statConverter(currentPP[1].toLowerCase());
				ppall[currentPP[1]] = parseInt(currentPP[0]);
			}
			currentpupp.pp = ppall;
			break;
		case 'IVs': //They used the IV syntax
			for (j = 1; j < currentRow.length; j++) {
				currentRank = currentRow[j].trim().split(" ");
				currentRank[1] = statConverter(currentRank[1].toLowerCase());
				ranks[currentRank[1]] = parseInt(currentRank[0]);
			}
			currentpupp.ranks = ranks;
			break;
		case 'Ranks': //They used the correct syntax
			for (j = 1; j < currentRow.length; j++) {
				currentRank = currentRow[j].trim().split(" ");
				currentRank[1] = statConverter(currentRank[1].toLowerCase());
				ranks[currentRank[1]] = rankToInt(currentRank[0]);
				if (ranks[currentRank[1]] === -1) { ranks[currentRank[1]] = 15; } //Error Prevention
			}
			currentpupp.ranks = ranks;
			break;
		}
		currentMark = rows[x] ? rows[x].trim().split(" ") : '';
		if (currentMark[1] == "Mark") {
			currentpupp.mark = currentMark[0];
		}
	}
	return currentpupp;
}

function getItem(currentRow, j) {
	for (;j < currentRow.length; j++) {
		var item = currentRow[j].trim();
		if (ITEMS_YNK.indexOf(item) != -1) {
			return item;
		}
	}
	return;
}

function getMoves(currentpupp, rows, offset) {
	var movesFound = false;
	var moves = [];
	for (var x = offset; x < offset + 12; x++) {
		if (rows[x]) {
			if (rows[x][0] == "-") {
				movesFound = true;
				var move = rows[x].substr(2, rows[x].length - 2).replace("[", "").replace("]", "").replace("  ", "");
				moves.push(move);
			} else {
				if (movesFound == true) {
					break;
				}
			}
		}
	}
	currentpupp.moves = moves;
	return currentpupp;
}

function addToDex(pupp) {
	var dexObject = {};
	var dexObjectPrime = {};
	if (SETDEX_YNK[pupp.name] == undefined) SETDEX_YNK[pupp.name] = {};
	if (pupp.ab !== undefined) { dexObject.ability = pupp.ab; }
	dexObject.level = pupp.level;
	dexObject.pp = pupp.pp;
	dexObject.ranks = pupp.ranks;
	dexObject.moves = pupp.moves;
	dexObject.mark = pupp.mark;
	dexObject.item = pupp.item;
	dexObject.isCustomSet = pupp.isCustomSet;
	var customsets;
	if (localStorage.customsets) {
		customsets = JSON.parse(localStorage.customsets);
	} else {
		customsets = {};
	}
	if (!customsets[pupp.name]) {
		customsets[pupp.name] = {};
	}
	customsets[pupp.name][pupp.nameProp] = dexObject;
	//Replicate the set for puppets with alternate formes, where applicable
	console.log(pupp.name + " / " + pupp.ab);
	if (pupp.name === "Extra Rika" && pupp.ab === "Mode Shift") {
		if (!customsets["Extra Rika (Shifted)"]) { customsets["Extra Rika (Shifted)"] = {}; }
		customsets["Extra Rika (Shifted)"][pupp.nameProp] = dexObject;
	} else if (pupp.name === "Power Yukari" && pupp.ab === "Placid") {
		if (!customsets["Power Yukari (Serious)"]) { customsets["Power Yukari (Serious)"] = {}; }
		dexObjectPrime = Object.assign({}, dexObject); //We need a duplicate such that the ability can be modified; in this case Object.assign is ok to use
		dexObjectPrime.ab = "Serious";
		customsets["Power Yukari (Serious)"][pupp.nameProp] = dexObjectPrime;
	} else if (pupp.name === "Defense Keine" && pupp.ab === "Were-Hakutaku") {
		if (!customsets["Defense Keine (Hakutaku)"]) { customsets["Defense Keine (Hakutaku)"] = {}; }
		customsets["Defense Keine (Hakutaku)"][pupp.nameProp] = dexObject;
	} else if (pupp.name === "Extra Hecatia" && pupp.ab === "Three Bodies") {
		if (!customsets["Extra Hecatia (Focus)"]) { customsets["Extra Hecatia (Focus)"] = {}; }
		if (!customsets["Extra Hecatia (Spread)"]) { customsets["Extra Hecatia (Spread)"] = {}; }
		customsets["Extra Hecatia (Focus)"][pupp.nameProp] = dexObject;
		customsets["Extra Hecatia (Spread)"][pupp.nameProp] = dexObject;
	}
	updateDex(customsets);
}

function updateDex(customsets) {
	for (var puppet in customsets) {
		for (var moveset in customsets[puppet]) {
			if (!SETDEX_YNK[puppet]) SETDEX_YNK[puppet] = {};
			SETDEX_YNK[puppet][moveset] = customsets[puppet][moveset];
		}
	}
	console.log(customsets);
	localStorage.customsets = JSON.stringify(customsets);
}

function addSets(pupps) {
	var rows = pupps.split("\n");
	var currentRow;
	var currentpupp;
	var addedpuppets = 0;
	for (var i = 0; i < rows.length; i++) {
		currentRow = rows[i].split(/[()@]/);
		for (var j = 0; j < currentRow.length; j++) {
			//Most people use a different syntax than what the calculator supports (EYuuka, SReisen, PUdonge), so we'll parse it here
			if (PUPPETDEX_YNK[parseAbbreviation(currentRow[j].trim())] !== undefined) {
				currentRow[j] = parseAbbreviation(currentRow[j].trim());
				currentpupp = PUPPETDEX_YNK[currentRow[j].trim()];
				currentpupp.name = currentRow[j].trim();
				currentpupp.item = getItem(currentRow, j + 1);
				if (j === 1 && currentRow[0].trim()) {
					currentpupp.nameProp = currentRow[0].trim();
				} else {
					currentpupp.nameProp = "Custom Set";
				}
				currentpupp.isCustomSet = true;
				currentpupp.ability = getAbility(rows[i + 1].split(":"));
				currentpupp = getStats(currentpupp, rows, i + 1);
				currentpupp = getMoves(currentpupp, rows, i);
				addToDex(currentpupp);
				addedpuppets++;
			}
		}
	}
	if (addedpuppets > 0) {
		alert("Successfully imported " + addedpuppets + " set(s)");
		$(bothPuppets("#importedSetsOptions")).css("display", "inline");
	} else {
		alert("No sets imported, please check your syntax and try again");
	}
}

function parseAbbreviation(pupp) {
	//Letter 1: Style / Else: Puppet
	var parsed = "";
	switch (pupp[0]) {
	case 'P':
		parsed = "Power ";
		break;
	case 'D':
		parsed = "Defense ";
		break;
	case 'S':
		parsed = "Speed ";
		break;
	case 'A':
		parsed = "Assist ";
		break;
	case 'E':
		parsed = "Extra ";
		break;
	default:
		parsed = "Normal "; //could be that they just label it as Udonge instead of NUdonge...
	}
	parsed += pupp.substring(1);
	return parsed;
}
function doAbbreviation(pupp) {
	pupp = pupp.trim().split(" ");
	var parsed = "";
	switch (pupp[0]) {
	case 'Power':
		parsed = "P";
		break;
	case 'Defense':
		parsed = "D";
		break;
	case 'Speed':
		parsed = "S";
		break;
	case 'Assist':
		parsed = "A";
		break;
	case 'Extra':
		parsed = "E";
		break;
	default:
		parsed = "N";
	}
	parsed += pupp[1]; //Please note that we're excluding alternate formes, like Shifted/etc. because they aren't REALLY needed (potentially could be changed)
	return parsed;
}

$(bothPuppets("#clearSets")).click(function () {
	if (confirm("Are you sure you want to delete your custom sets? This action cannot be undone.")) {
		localStorage.removeItem("customsets");
		alert("Custom Sets successfully cleared. Please refresh the page.");
		$(bothPuppets("#importedSetsOptions")).hide();
		loadDefaultLists();
	}
});

$(bothPuppets("#importedSets")).click(function () {
	var puppID = $(this).parent().parent().prop("id");
	var showCustomSets = $(this).prop("checked");
	if (showCustomSets) {
		loadCustomList(puppID);
	} else {
		loadDefaultLists();
	}
});

$(document).ready(function () {
	var customSets;
	placeBsBtn();
	if (localStorage.customsets) {
		customSets = JSON.parse(localStorage.customsets);
		updateDex(customSets);
		$(bothPuppets("#importedSetsOptions")).css("display", "inline");
	} else {
		loadDefaultLists();
	}
});