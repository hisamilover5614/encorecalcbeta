function CALCULATE_ALL_MOVES_ALL(p1, p2, field) {
	checkWeatherResist(p1, field);
	checkWeatherResist(p2, field);
	checkBibliophilia(p1);
	checkBibliophilia(p2);
	checkItemless(p1);
	checkItemless(p2);
	checkStatBoost(p1, p2);
	p1.stats[FD] = getModifiedStat(p1.rawStats[FD], p1.boosts[FD]);
	p1.stats[SD] = getModifiedStat(p1.rawStats[SD], p1.boosts[SD]);
	p1.stats[SP] = getFinalSpeed(p1, field.getWeather(), field.getTerrain());
	p2.stats[FD] = getModifiedStat(p2.rawStats[FD], p2.boosts[FD]);
	p2.stats[SD] = getModifiedStat(p2.rawStats[SD], p2.boosts[SD]);
	p2.stats[SP] = getFinalSpeed(p2, field.getWeather(), field.getTerrain());
	checkDeploy(p1, p2);
	checkDeploy(p2, p1);
	checkAggression(p1, p2);
	checkAggression(p2, p1);
	checkPhalanx(p1, p2);
	checkPhalanx(p2, p1);
	p1.stats[FA] = getModifiedStat(p1.rawStats[FA], p1.boosts[FA]);
	p1.stats[SA] = getModifiedStat(p1.rawStats[SA], p1.boosts[SA]);
	p2.stats[FA] = getModifiedStat(p2.rawStats[FA], p2.boosts[FA]);
	p2.stats[SA] = getModifiedStat(p2.rawStats[SA], p2.boosts[SA]);
	var side1 = field.getSide(1);
	var side2 = field.getSide(0);
	checkSecretCeremony(p1, field);
	checkSecretCeremony(p2, field);
	checkInfiltrator(p1, side1);
	checkInfiltrator(p2, side2);
	var results = [[], []];
	var p1Will = false;
	var p2Will = false;
	for (var i = 0; i < 4; i++) {
		if (!p1.moves[i] || p1.moves[i].name === "(No Move)") { p1Will = true; }
		if (!p2.moves[i] || p2.moves[i].name === "(No Move)") { p2Will = true; }
		if (p1Will && p2Will) { break; }
	}
	for (var i = 0; i < 4; i++) {
		results[0][i] = getDamageResult(p1, p2, p1.moves[i], side1, p2Will);
		results[1][i] = getDamageResult(p2, p1, p2.moves[i], side2, p1Will);
	}
	return results;
}

function CALCULATE_MOVES_OF_ATTACKER_ALL(attacker, defender, field) {
	checkWeatherResist(attacker, field);
	checkWeatherResist(defender, field);
	checkBibliophilia(attacker, field.getWeather());
	checkBibliophilia(defender, field.getWeather());
	checkSecretCeremony(p1, field);
	checkSecretCeremony(p2, field);
	checkItemless(attacker);
	checkItemless(defender);
	attacker.stats[SP] = getFinalSpeed(attacker, field.getWeather(), field.getTerrain());
	defender.stats[FD] = getModifiedStat(defender.rawStats[FD], defender.boosts[FD]);
	defender.stats[SD] = getModifiedStat(defender.rawStats[SD], defender.boosts[SD]);
	defender.stats[SP] = getFinalSpeed(defender, field.getWeather(), field.getTerrain());
	checkDeploy(attacker, defender);
	checkDeploy(defender, attacker);
	checkAggression(attacker, defender);
	checkPhalanx(attacker, defender);
	attacker.stats[FA] = getModifiedStat(attacker.rawStats[FA], attacker.boosts[FA]);
	attacker.stats[SA] = getModifiedStat(attacker.rawStats[SA], attacker.boosts[SA]);
	defender.stats[FA] = getModifiedStat(defender.rawStats[FA], defender.boosts[FA]);
	var defenderSide = field.getSide(~~(mode === "one-vs-all"));
	checkInfiltrator(attacker, defenderSide);
	var results = [];
	var ironWill = false;
	for (var i = 0; i < 4; i++) {
		if (!defender.moves[i] || defender.moves[i].name === "(No Move)") {
			ironWill = true;
			break;
		}
	}
	for (var i = 0; i < 4; i++) {
		results[i] = getDamageResult(attacker, defender, attacker.moves[i], defenderSide, ironWill);
	}
	return results;
}

function getDamageResult(attacker, defender, move, field, ironWill) {
	var description = {
		"attackerName": attacker.name,
		"moveName": move.name,
		"defenderName": defender.name
	};

	//0 damage
	if (move.bp === 0) {
		return {"damage": [0], "description": buildDescription(description)};
	}
	if (field.isProtected && !move.bypassesProtect) {
		description.isProtected = true;
		return {"damage": [0], "description": buildDescription(description)};
	}

	//Ability acquisition/nullification
	var atkAbility = attacker.ability;
	var defAbility = defender.ability;
	var atkYoumaMod = "";
	var defYoumaMod = "";
	if (attacker.ability === "Bibliophilia" && attacker.name === "Extra Kosuzu" && attacker.item.indexOf("Youma Scroll: ") !== -1) { //Bibliophile handler
		atkYoumaMod = attacker.item.substr(14);
		atkAbility = atkYoumaMod === "Red" ? "Imposing Stance" : atkYoumaMod === "Blue" ? "Known Limits" : atkYoumaMod === "Black" ? "Unbound" : atkYoumaMod === "White" ? "Wariness" : "Bibliophilia";
		description.attackerAbility = "Bibliophilia (" + atkYoumaMod + ")";
	}
	if (defender.ability === "Bibliophilia" && defender.name === "Extra Kosuzu" && defender.item.indexOf("Youma Scroll: ") !== -1) { //Bibliophile handler
		defYoumaMod = defender.item.substr(14);
		defAbility = defYoumaMod === "Red" ? "Imposing Stance" : defYoumaMod === "Blue" ? "Known Limits" : defYoumaMod === "Black" ? "Unbound" : defYoumaMod === "White" ? "Wariness" : "Bibliophilia";
		description.defenderAbility = "Bibliophilia (" + defYoumaMod + ")";
	}
	if (defAbility === "Invalidate") { //Invalidate has higher priority since it's considered activated on switching in
		atkAbility = "";
		description.defenderAbility = defAbility;
	}
	if (["Drunkard", "Unbound", "Brute Force", "Invalidate"].indexOf(atkAbility) !== -1 || field.terrain === "Kohryu") {
		defAbility = "";
		if (atkYoumaMod === "" && field.terrain !== "Kohryu") {
			description.attackerAbility = atkAbility;
		}
	}

	//Auto-crit flag
	var isCritical = (move.isCrit && defAbility !== "Indomitable" && defender.item !== "Dragon Amulet" && move.usedTimes === 1);

	//Weather/Terrain-based type modification
	if (move.name === "Heavenly Blessing" || move.name === "Heavenly Influence") {
		move.type = field.weather === "Calm" ? "Wind" :
		            field.weather === "Aurora" ? "Light" :
		            field.weather === "Heavy Fog" ? "Dark" :
		            field.weather === "Dust Storm" ? "Earth" :
		            field.weather === "Sunshower" ? "Warped" : "Void";
		description.weather = field.weather;
		description.moveType = move.type;
	} else if (move.name === "Earthly Blessing" || move.name === "Earthly Influence") {
		move.type = field.terrain === "Suzaku" ? "Fire" :
		            field.terrain === "Genbu" ? "Water" :
		            field.terrain === "Seiryu" ? "Nature" :
		            field.terrain === "Kohryu" ? "Earth" :
		            field.terrain === "Byakko" ? "Steel" : "Void";
		description.terrain = field.terrain;
		description.moveType = move.type;
	}

	//Form ability handler
	var formCheck = ["Stream Form", "Natural Form", "Unyielding Form", "Gale Form", "Bright Form", "Midnight Form", "Ghost Form", "Desolation Form", "General's Form", "Hellfire Form", "Thunder Form", "Miasma Form", "Imaginary Form", "Recital Form", "Twisted Form"].indexOf(atkAbility);
	var formBoosted = false;
	if (formCheck !== -1 && move.type === "Void") {
		move.type = ["Water", "Nature", "Steel", "Wind", "Light", "Dark", "Nether", "Earth", "Fighting", "Fire", "Electric", "Poison", "Illusion", "Sound", "Warped"][formCheck];
		formBoosted = true;
	}

	//Flat Speed correction
	if ([atkAbility, defender.ability].indexOf("Flat Speed") !== -1 && move.hasPriority) {
		move.hasPriority = false;
		if (atkAbility === "Flat Speed") {
			description.attackerAbility = atkAbility;
		} else {
			description.defenderAbility = defender.ability;
		}
	}

	//Type Effectiveness Calculation
	var typeEffect1 = getMoveEffectiveness(move, defender.type1, atkAbility === "Common Senseless" || atkAbility === "Eastern Expanse" && field.terrain === "Seiryu");
	var typeEffect2 = defender.type2 ? getMoveEffectiveness(move, defender.type2, atkAbility === "Common Senseless" || atkAbility === "Eastern Expanse" && field.terrain === "Seiryu") : 1;
	var typeEffectiveness = typeEffect1 * typeEffect2;
	if (atkAbility === "Common Senseless" || atkAbility === "Eastern Expanse" && field.terrain === "Seiryu") {
		description.attackerAbility = atkAbility;
	}

	//Cursed Doll Handling
	if (defender.item === "Cursed Doll" && typeEffectiveness === 0) {
		if (typeChart[move.type][defender.type1] === 0) {
			typeEffectiveness = typeChart[move.type][defender.type2] === 0 ? 1 : typeEffect2;
		} else if (typeChart[move.type][defender.type2] === 0) {
			typeEffectiveness = typeEffect1;
		}
	}
	
	//Crystal Mirror Handling
	if (attacker.item === "Crystal Mirror" && field.terrain === "Byakko" && typeEffectiveness === 0){
		typeEffectiveness = 1;
		description.attackerItem = attacker.item;
	}
	
	//Immunity Handling
	if (typeEffectiveness === 0) { //Immunity handling
		return {"damage": [0], "description": buildDescription(description)};
	}
	if (field.isGhost && move.type === "Fighting") {
		description.defenderGhost = true;
		return {"damage": [0], "description": buildDescription(description)};
	}
	if (move.type === "Earth" && defender.item === "Floating Stone") {
		description.defenderItem = defender.item;
		return {"damage": [0], "description": buildDescription(description)};
	}
	//Reverse effectiveness, Seiryu handling
	if (field.terrain === "Seiryu") {
		typeEffectiveness = 1;
	} else if (typeEffectiveness !== 1) {
		if (field.isReversed) { //Element Reverse
			typeEffectiveness = 1 / typeEffectiveness;
			description.defenderReversed = true;
		}
		if (defAbility === "Affinity Twist") {
			typeEffectiveness = 1 / typeEffectiveness;
			description.defenderAbility = defAbility;
		}
	}
	var whenHitByA = { //There's one for almost every type
		"Cloak of Darkness": "Dark",
		"Benefit of Fire": "Fire",
		"Grace of Water": "Water",
		"Force of Nature": "Nature",
		"Air Cushion": "Earth",
		"Metallurgy": "Steel",
		"Smooth Sailing": "Wind",
		"Electromagnetic": "Electric",
		"Absorbent": "Light",
		"Negative Aura": "Dark",
		"Appeased Spirit": "Nether",
		"Strict Dosage": "Poison",
		"Master's Defense": "Fighting",
		"Unwavering Heart": "Illusion",
		"Sound Absorb": "Sound",
		"In Sync": "Warped",
	};
	if ((defAbility === "Frail Health" && (typeEffectiveness <= 1 && !(move.type === "Dream"))) ||
        (whenHitByA[defAbility] && move.type === whenHitByA[defAbility]) ||
        (move.hasPriority && defAbility === "Intuition") ||
        (move.willCharge && defAbility === "Restraint") ||
        (move.bp <= 50 && defAbility === "Wariness")) {
		description.defenderAbility = defAbility;
		return {"damage": [0], "description": buildDescription(description)};
	}

	description.HPPP = defender.HPPP + " HP";

	//Fixed damage moves
	if (["Charon Ferries", "Aikido Arts"].indexOf(move.name) !== -1) {
		var lv = attacker.level;
		if (atkAbility === "Two of a Kind") {
			lv *= 2;
			description.attackerAbility = atkAbility;
		}
		return {"damage": [lv], "description": buildDescription(description)};
	}
	if (move.name === "Divine Punishment") {
		var hp = attacker.curHP;
		return {"damage": [hp], "description": buildDescription(description)};
	}
	if (move.name === "Prank") {
		var lostHP = field.isProtected ? 0 : Math.floor(defender.curHP / 2) + (atkAbility === "Two of a Kind" ? Math.floor(Math.ceil(defender.curHP / 2) / 2) : 0);
		if (atkAbility === "Two of a Kind") { description.attackerAbility = atkAbility; }
		return {"damage": [lostHP], "description": buildDescription(description)};
	}

	//Two of a Kind flag
	var doppelganger = false;
	if (atkAbility === "Two of a Kind" && move.hits === 1) {
		doppelganger = true;
		move.hits = 2;
		description.attackerAbility = atkAbility;
	}

	if (move.hits > 1) {
		description.hits = move.hits;
	}

	//Turn order (First Hit / After Move parsing)
	var turnOrder = attacker.stats[SP] > defender.stats[SP] ? "FIRST" : "LAST";
	turnOrder = (attacker.item === "Heavy Armor" ? defender.item === "Heavy Armor" : defender.item !== "Heavy Armor") ? turnOrder : move.hasPriority || defender.item === "Heavy Armor" ? "FIRST" : "LAST";

	//Damage Formula is as follows:
	//(([Attacker Level]*0.4 + 2) * [Attacking Stat]※[Atk Modifiers] * [Base Power]※[BP Modifiers] / ([Defense Stat]*[Def Modiifers]) / 50) + 2 = A
	//	Atk modifiers include abilities that explicitly modify this stat, stat buffs, then darkness/fear in that order. Same with Def. Each are ※ operators.
	//DMG = A ※ [Critical Hit] ※ [RNG] ※ [Effectiveness] ※ [STAB] ※ [Weather] ※ [Attacker Item] ※ [Defender Item] ※ [Attacker Ability] ※ [Defender Ability] ※ [Screens]
	//	RNG = 0.86, 0.87, 0.88, ..., 0.99, 1.00
	//Where oper1※oper2 is Math.floor(oper1*oper2)

	//As a result, let's handle everything in order ('.w.')

	/////////////////////////////////////////
	////////// Focus/Spread Attack //////////
	/////////////////////////////////////////
	
	//Revolving Illusions / Take Over handler
	var attack;
	var attackSource = move.isFoul === true ? defender : attacker;
	var attackStat = move.category === "Focus" ? FA : SA;
	
	description.attackPP = attacker.pp[attackStat] +
            (MARKS[attacker.mark] === attackStat ? "+" : "") + " " +
            toTPDPStat(attackStat);
	if (attackSource.boosts[attackStat] === 0 || (isCritical && attackSource.boosts[attackStat] < 0)) {
		attack = attackSource.rawStats[attackStat];
	} else if (defAbility === "Wisdom Eye") {
		attack = attackSource.rawStats[attackStat];
		description.defenderAbility = defAbility;
	} else {
		attack = attackSource.stats[attackStat];
		description.attackBoost = attackSource.boosts[attackStat];
	}
	
	

	//Attack Modifiers
	//TODO: Do attack abilities apply in the BP step or the attack calculation step? Assume attack for now
	var atMods = [];

	//Ability-related
	if ((atkAbility === "Miracle Mallet" && move.category === "Focus") || //Double
	    (atkAbility === "Boundary Blurrer" && field.weather !== "")) {
		atMods.push(2);
		description.attackerAbility = atkAbility;
	} else if ((atkAbility === "Surprise Tactics" && field.weather === "Heavy Fog" && move.category === "Spread") || //50% Increase
		       (atkAbility === "Recalibration" && field.weather === "Calm" && move.category === "Spread") ||
	           (atkAbility === "Desperation" && attacker.status.indexOf("Poisoned") !== -1 && move.category === "Focus") ||
		       (atkAbility === "Mind's Eye" && !(attacker.status[0] === "None" && attacker.status[1] === "None") && move.category === "Focus") ||
		       (atkAbility === "Brutality" && move.category === "Spread") ||
	           (atkAbility === "Daredevil" && move.category === "Focus") ||
	           (atkAbility === "Pride" && !(attacker.status[0] === "None" && attacker.status[1] === "None") && move.category === "Spread")) {
		atMods.push(1.5);
		description.attackerAbility = atkAbility;
	} else if ((atkAbility === "Sand Force" && field.weather === "Dust Storm" && move.category === "Focus") || //30% Increase
		       (atkAbility === "Strange Rainbow" && field.weather === "Sunshower" && move.category === "Focus")) {
		atMods.push(1.3);
		description.attackerAbility = atkAbility;
	} else if ((atkAbility === "True Admin" && attacker.curHP <= attacker.maxHP / 2) || //Half
               (atkAbility === "Placid" && move.category === "Spread")) {
		atMods.push(0.5);
		description.attackerAbility = atkAbility;
	}

	//Status-related
	if (attacker.status.indexOf("Blinded") !== -1 && move.category === "Focus" && atkAbility !== "Mind's Eye") {
		atMods.push(0.5);
		description.isBlinded = true;
	} else if (attacker.status.indexOf("Afraid") !== -1 && move.category === "Spread" && atkAbility !== "Pride") {
		atMods.push(0.5);
		description.isAfraid = true;
	}

	//Item-related(?)
	if (atkYoumaMod === "Red" && move.category === "Focus" || atkYoumaMod === "Black" && move.category === "Spread") {
		atMods.push(2);
		//item is unneeded as ability + youma scroll are always mentioned
	}

	attack = Math.max(1, chainMods(attack, atMods));

	////////////////////////////////
	////////// Base Power //////////
	////////////////////////////////
	var basePower;

	//Knock Off-esque effect nullification
	var resistedKnockOffDamage = (defender.item === "" || defender.item.indexOf("Youma Scroll: ") !== -1 || defender.item === "Hope Mask" || defender.item === "Dream Shard" || defender.item === "Boundary Trance");

	//Variable BP moves
	switch (move.name) {
	//Reverse Splash, etc. don't seem possible
	case "Impact Rebellion":
		basePower = attacker.stats[SP] <= 0 ? 150 : Math.min(150, Math.floor(40 * defender.stats[SP] / attacker.stats[SP]));
		description.moveBP = basePower;
		break;
	case "Tumble Plant":
	case "Clearing Mist":
	case "Mountain Breaker":
		basePower = Math.min(120, Math.max(40, defender.cost * 2 - 120));
		description.moveBP = basePower;
		break;
	case "Blow from Calamity":
		basePower = move.bp * (attacker.status !== ["None", "None"] ? 2 : 1);
		description.moveBP = basePower;
		break;
	case "Love or Pain":
		basePower = move.bp * (defender.status !== ["None", "None"] ? 2 : 1);
		description.moveBP = basePower;
		break;
	case "Final Tribulation":
		basePower = Math.floor(move.bp * (attacker.hasType("Void") ? 1.3 : 1));
		description.moveBP = basePower;
		break;
	case "Mysterious Liquid":
		basePower = move.bp * (defender.status.indexOf("Poisoned") !== -1 ? 2 : 1);
		description.moveBP = basePower;
		break;
	case "Fire Wall":
	case "Panic Call":
	case "St. Elmo's Fire":
		basePower = Math.floor(move.bp * (!resistedKnockOffDamage ? 1.5 : 1)); //NOTE: in the main games, this would be 97.5, but due to the floor operation in the damage formula, this becomes 97.
		description.moveBP = basePower;
		break;
	case "Conflagration":
		var dc = attacker.cost - defender.cost;
		basePower = Math.min(120, Math.max(60, Math.floor(60 + dc * 1.5)));
		description.moveBP = basePower;
		break;
	case "Infinite Scales":
		basePower = move.bp + 20 * countBoosts(attacker.boosts);
		description.moveBP = basePower;
		break;
	case "Miracle Reprisal":
		basePower = move.bp + 30 * countBoosts(defender.boosts);
		description.moveBP = basePower;
		break;
	case "Unfettered Soul":
		basePower = move.bp * (attacker.item === "Sugilite" || !attacker.item ? 2 : 1);
		description.moveBP = basePower;
		break;
	case "Heavenly Blessing":
	case "Heavenly Influence":
	case "Passing Breeze":
	case "Sunbeam Dance": //TODO: Verify if this is a BP modification or a final damage modification
		basePower = move.bp * (field.weather !== "" ? 2 : 1);
		description.moveBP = basePower;
		break;
	case "Earthly Blessing":
	case "Earthly Influence":
	case "Destruction Rift":
	case "Lost Crisis": //TODO: Verify if this is a BP modification or a final damage modification
		basePower = move.bp * (field.terrain !== "" ? 2 : 1);
		description.moveBP = basePower;
		break;
	case "Phoenix Waltz":
	case "Aqua Cannon":
	case "Dust Meteor":
		var hpRat = attacker.curHP / attacker.maxHP;
		basePower = hpRat === 1 ? 150 : Math.max(1, Math.floor(hpRat * 100));
		description.moveBP = basePower;
		break;
	case "Landslide":
		basePower = move.bp * (defender.curHP <= defender.maxHP / 2 ? 2 : 1);
		description.moveBP = basePower;
		break;
	case "Death Match":
	case "Dire State":
		var p = Math.floor(48 * attacker.curHP / attacker.maxHP);
		basePower = (attacker.curHP === 1 || p < 2) ? 200 : p < 5 ? 150 : p < 10 ? 100 : p < 17 ? 80 : p < 33 ? 40 : 20;
		description.moveBP = basePower;
		break;
	case "Dark Sphere":
		basePower = move.bp * (field.isCamo ? 2 : 1); //since evasion sux this will always be false lul
		description.moveBP = basePower;
		break;
	case "Gravity Blast":
		var hpRat = defender.curHP / defender.maxHP;
		basePower = hpRat === 1 ? 120 : Math.max(1, Math.floor(hpRat * 80));
		description.moveBP = basePower;
		break;
	case "Blitzkrieg":
	case "Predator":
		if (turnOrder === "FIRST"){
			basePower = move.bp * 2;
			description.moveBP = basePower;
		} else {
			basePower = move.bp;
			description.moveBP = basePower;
		}
		break;
	case "Rainbow Flowers":
		if (field.weather === "") {
			basePower = move.bp;
			break;
		}
		basePower = move.bp * (field.weather !== "Aurora" ? .5 : 1);
		description.moveBP = basePower;
		break;
	case "Dense Fog Bloom":
		if (field.weather === "") {
			basePower = move.bp;
			break;
		}
		basePower = move.bp * (field.weather !== "Heavy Fog" ? .5 : 1);
		description.moveBP = basePower;
		break;
	case "Divine Arrow":
		if (field.weather === "") {
			basePower = move.bp;
			break;
		}
		basePower = move.bp * (field.weather === "Heavy Fog" ? 2 : 1);
		description.moveBP = basePower;
		break;
	case "Dark Globe":
		if (field.weather === "") {
			basePower = move.bp;
			break;
		}
		basePower = move.bp * (field.weather === "Aurora" ? 2 : 1);
		description.moveBP = basePower;
		break;
	default:
		basePower = move.bp;
	}

	//Unlike normal mons, abilities/items don't affect basePower at this step, but later on

	//////////////////////////////////////////
	////////// Focus/Spread Defense //////////
	//////////////////////////////////////////
	var defense;
	var defenseStat = move.defenseStat ? move.defenseStat : move.category === "Focus" ? FD : SD;
	if (field.weather === "Sunshower") { //Handle Sunshower
		defenseStat = defenseStat === FD ? SD : FD;
		description.weather = field.weather;
	}
	description.defensePP = defender.pp[defenseStat] +
            (MARKS[defender.mark] === defenseStat ? "+" : "") + " " +
            toTPDPStat(defenseStat);
	if (defender.boosts[defenseStat] === 0 || (isCritical && defender.boosts[defenseStat] > 0) || move.ignoresDefenseBoosts) {
		defense = defender.rawStats[defenseStat];
	} else if (attacker.ability === "Wisdom Eye" || (attacker.ability === "Central Expanse" && field.terrain === "Kohryu")) {
		defense = defender.rawStats[defenseStat];
		description.attackerAbility = attacker.ability;
	} else {
		defense = defender.stats[defenseStat];
		description.defenseBoost = defender.boosts[defenseStat];
	}

	var dfMods = [];

	//Explosion handling
	if (move.name === "Whole Being" || move.name === "Final Tribulation") {
		dfMods.push(0.5);
	}

	//Ability handling
	if ((defAbility === "Miracle Mallet" && defenseStat === FD) ||
	    (defAbility === "Boundary Blurrer" && field.weather !== "") ||
	    (defAbility === "Boundary Savior" && field.terrain !== "")) { //Double
		dfMods.push(2);
		description.defenderAbility = defAbility;
	} else if ((defAbility === "Aurora Grace" && field.weather === "Aurora" && defenseStat === SD) ||
			   (defAbility === "Sand Fortress" && field.weather === "Dust Storm" && defenseStat === FD) ||
		       (defAbility === "Recalibration" && field.weather === "Calm" && defenseStat === SD) ||
		       (defAbility === "Breather" && field.weather === "Calm" && defenseStat === FD) ||
		       (defAbility === "Last Defense" && defender.status !== ["None", "None"] && defenseStat === FD)) {
		dfMods.push(1.5);
		description.defenderAbility = defAbility;
	}

	//Item handling
	if (defYoumaMod === "Blue" && defenseStat === FD || defYoumaMod === "White" && defenseStat === SD) {
		dfMods.push(2);
		//item is unneeded as ability + youma scroll are still always mentioned
	}

	defense = Math.max(1, chainMods(defense, dfMods));

	////////////////////////////////
	//////////// DAMAGE ////////////
	////////////////////////////////
	//Damage Formula is as follows:
	//(([Attacker Level]*0.4 + 2) * [Attacking Stat]※[Atk Modifiers] * [Base Power]※[BP Modifiers] / ([Defense Stat]*[Def Modiifers]) / 50) + 2 = A
	var baseDamage = getBaseDamage(attacker.level, basePower, attack, defense);
	
	//Since RNG comes 3rd in this equation, we can only really apply the crit factor first
	if (isCritical) {
		baseDamage = Math.floor(baseDamage * (atkAbility === "Sniper" ? 2.25 : 1.5)); //According to the damage calculation formula, Sniper is applied here
		description.isCritical = isCritical;
	}

	//We can't apply anything past here as RNG needs to be implemented first. Let's focus on doing those here ('.w.')

	//Already prepared effectiveness
	var finalMods = [typeEffectiveness];

	//Prepare STAB
	var isSTAB = attacker.hasType(move.type);
	var stabMod = 1;
	if (atkAbility === "Infinite Changes") { //Infinite Changes will always have STAB
		isSTAB = true;
		description.attackerAbility = atkAbility;
	}
	if (isSTAB) {
		if (atkAbility === "Niche" || atkAbility === "Eastern Expanse" && field.terrain === "Seiryu") {
			stabMod = 2;
			description.attackerAbility = atkAbility;
		} else {
			stabMod = 1.5;
		}
	}
	finalMods.push(stabMod);

	//Prepare Weather
	var weatherMod = 1;
	if (field.weather === "Aurora" && move.type === "Light" || field.weather === "Heavy Fog" && move.type === "Dark") {
		weatherMod = 1.5;
		description.weather = field.weather;
	} else if (field.weather === "Aurora" && move.type === "Dark" || field.weather === "Heavy Fog" && move.type === "Light") {
		weatherMod = 0.5;
		description.weather = field.weather;
	}
	finalMods.push(weatherMod);

	//Prepare Item modifications (besides ones that explicitly modify stats like Choice Ring, Golden Hairpin, Youma, etc.)
	var atkItem = "", atkItemType = "None";
	var defItem = "", defItemType = "None";
	if (field.terrain !== "Kohryu" || field.terrain === "Kohryu" && attacker.item === "Boundary Trance" || atkAbility === "Central Expanse") {
		atkItem = attacker.item;
		atkItemType = getItemType(atkItem);
		if (field.terrain === "Kohryu") {
			description.attackerAbility = atkAbility;
		}
	}
	if (field.terrain !== "Kohryu" || field.terrain === "Kohryu" && defender.item === "Boundary Trance" || defAbility === "Central Expanse") {
		defItem = defender.item;
		defItemType = getItemType(defItem);
		if (field.terrain === "Kohryu") {
			description.defenderAbility = defAbility;
		}
	}
	//var hpRat = attacker.curHP / attacker.maxHP;
	//basePower = hpRat === 1 ? 150 : Math.max(1, Math.floor(hpRat * 100));
	//description.moveBP = basePower;
	//Offense Items
	if (move.type === atkItemType && atkItem.indexOf("Charm") === -1) { //Type-based boosting item
		if (atkItem.indexOf("Hairpin") === -1) {
			finalMods.push(1.4); //might be 1.3?
		} else {
			finalMods.push(1.2); //might be 1.1?
		}
		description.attackerItem = atkItem;
	//TODO: do Good Items/similar actually increase attack, or does it affect damage?
	} else if (atkItem === "Choice Ring" && move.category === "Focus" || atkItem === "Choice Earrings" && move.category === "Spread" || atkItem === "Yggdrasil Seed" && field.terrain === "Seiryu") {
		finalMods.push(1.5);
		description.attackerItem = attacker.item;
	} else if ((atkItem === "Radiant Hairpin" && attacker.curHP / attacker.maxHP === 1) && gen === 8) {
		finalMods.push(1.4);
		description.attackerItem = attacker.item;
	} else if (atkItem === "Straw Doll" || (atkItem === "Radiant Hairpin" && attacker.curHP / attacker.maxHP === 1) && gen !== 8 || (atkItem === "Tsuzumi Drum" && (!isSTAB))) {
		finalMods.push(1.3);
		description.attackerItem = atkItem;
	} else if (atkItem === "Javelin Arts" && move.isJavelin === true || atkItem === "Deadly Secrets" && typeEffectiveness > 1) {
		finalMods.push(1.2);
		description.attackerItem = atkItem;
	} else if (atkItem === "Red Ring" && move.category === "Focus" || atkItem === "Blue Earrings" && move.category === "Spread" || atkItem === "Dream Shard") {
		finalMods.push(1.1);
		description.attackerItem = attacker.item;
	} else if (atkItem === "Radiant Hairpin" && attacker.curHP / attacker.maxHP !== 1) {
		var percentMaxHealth = attacker.curHP / attacker.maxHP
		var radiant = percentMaxHealth * .2
		finalMods.push(radiant + 1);
		description.attackerItem = attacker.item;
	} else if (atkItem === "Boundary Trance") {
		finalMods.push(2.0);
		description.attackerItem = attacker.item;
	}

	//Defense Items
	var itemType = getItemType(defender.item);
	var itemCharm = isItemCharm(defender.item)
	if (move.type === itemType && itemCharm === 1) { //Type-based charm item
		finalMods.push(0.5);
		description.defenderItem = defItem;
	//TODO: do Golden Hairpin/similar actually increase defense, or does it affect damage in this step?
	//sunshower is so fucked in this calculator lmao, this is definitely not the only problem but I'm too lazy to test every interaction
	} else if ((defender.item === "Golden Hairpin" && defenseStat === FD || defender.item === "Silver Hairpin" && defenseStat === SD) && !(field.weather === "Sunshower")) {
		finalMods.push(2 / 3); //1/1.5 = 2/3
		description.defenderItem = defender.item;
	} else if ((defender.item === "Golden Hairpin" && defenseStat === SD || defender.item === "Silver Hairpin" && defenseStat === FD) && field.weather === "Sunshower") {
		finalMods.push(2 / 3); //1/1.5 = 2/3
		description.defenderItem = defender.item;
	} else if (defender.item === "Iron Will Ribbon" && ironWill) {
		finalMods.push(0.9);
		description.defenderItem = defender.item;
	} else if (defender.item === "Dream Shard") {
		finalMods.push(10 / 11); //1/1.1 = 10/11
		description.defenderItem = defender.item;
	} else if (defender.item === "Large Shield" && typeEffectiveness !== 1) {
		//from what i've heard, Large Shield halves resisted hits, but doubles SE hits
		finalMods.push(typeEffectiveness < 1 ? 0.5 : 2);
		description.defenderItem = defender.item;
	} else if (defender.item === "Yggdrasil Seed" && field.terrain === "Seiryu") {
		finalMods.push(1.5);
		description.defenderItem = defender.item;
	} else if (defender.item === "Boundary Trance") { 
		finalMods.push(0.5);
		description.defenderItem = defItem;
	}

	//Prepare Ability modifications (INCLUDING ones that make moves more "powerful")
	//Offense-related abilities
	var pendingMod = 1;
	if ((atkAbility === "Forward Dash" && move.category === "Spread") ||
	    (atkAbility === "Skilled Hand" && typeEffectiveness < 1)) { //TODO: Skilled Hand ignores quad resists?
		//TODO: Check if FoAtk, etc. buffs are actually BP buffs
		pendingMod = 2;
	} else if ((atkAbility === "Strategist" && basePower <= 60) ||
	          ((atkAbility === "Precise Aim" || (atkAbility === "Western Expanse" && field.terrain === "Byakko")) && move.alwaysHits && gen !== 5) ||
	           (atkAbility === "Gentei's Water" && field.terrain === "Genbu" && move.type === "Water") ||
	           (atkAbility === "Sutei's Fire" && field.terrain === "Suzaku" && move.type === "Fire") ||
	           (atkAbility === "Byakutei's Metal" && field.terrain === "Byakko" && move.type === "Steel") ||
	           (atkAbility === "Seitei's Wood" && field.terrain === "Seiryu" && move.type === "Nature") ||
	           (atkAbility === "Koutei's Earth" && field.terrain === "Kohryu" && move.type === "Earth") ||
	           (atkAbility === "Final Form" && isSTAB && attacker.curHP < attacker.maxHP / 3) ||
			   (atkAbility === "Finishing Blow") && !(defender.status[0] === "None") ||
	           (atkAbility === "Robust Spirit" && move.type === "Steel" && attacker.curHP < attacker.maxHP / 3) ||
	           (atkAbility === "Vigorous Spirit" && move.type === "Fighting" && attacker.curHP < attacker.maxHP / 3) ||
	           (atkAbility === "Sparking Spirit" && move.type === "Steel" && attacker.curHP < attacker.maxHP / 3) ||
	           (atkAbility === "Surging Spirit" && move.type === "Water" && attacker.curHP < attacker.maxHP / 3) ||
	           (atkAbility === "Abyssal Spirit" && move.type === "Dark" && attacker.curHP < attacker.maxHP / 3) ||
	           (atkAbility === "Sinister Spirit" && move.type === "Steel" && attacker.curHP < attacker.maxHP / 3) ||
	           (atkAbility === "Raging Spirit" && move.type === "Wind" && attacker.curHP < attacker.maxHP / 3) ||
	           (atkAbility === "Musical Spirit" && move.type === "Sound" && attacker.curHP < attacker.maxHP / 3)) {
		pendingMod = 1.5;
	} else if ((atkAbility === "Normal Bonus" && move.type === "Void") ||
	           (atkAbility === "Flame Bonus" && move.type === "Fire") ||
	           (atkAbility === "Aqua Bonus" && move.type === "Water") ||
	           (atkAbility === "Leaf Bonus" && move.type === "Nature") ||
	           (atkAbility === "Ground Bonus" && move.type === "Earth") ||
	           (atkAbility === "Metal Bonus" && move.type === "Steel") ||
	           (atkAbility === "Gust Bonus" && move.type === "Wind") ||
	           (atkAbility === "Spark Bonus" && move.type === "Electric") ||
	           (atkAbility === "Bright Bonus" && move.type === "Light") ||
	           (atkAbility === "Shade Bonus" && move.type === "Dark") ||
	           (atkAbility === "Soul Bonus" && move.type === "Nether") ||
	           (atkAbility === "Venom Bonus" && move.type === "Poison") ||
	           (atkAbility === "Aura Bonus" && move.type === "Fighting") ||
			   (atkAbility === "Vision Bonus" && move.type === "Illusion") ||
	           (atkAbility === "Music Bonus" && move.type === "Sound") ||
	           (atkAbility === "Twisted Bonus" && move.type === "Warped") ||
	           (atkAbility === "Disjointed Blow" && typeEffectiveness > 1)) {
		pendingMod = 1.4;
	} else if ((atkAbility === "Charge!" && move.hasSecondaryEffect) ||
	           (atkAbility === "After Move" && turnOrder !== "FIRST") || //TODO: After Move is a stat increase? prob not
	           (atkAbility === "On the Edge" && attacker.curHP === 1) || formCheck !== -1 && move.isVoid === true) {
		pendingMod = 1.3;
	} else if ((atkAbility === "Reckless" && (move.hasRecoil === 'number' || move.hasRecoil === 'crash')) ||
               (atkAbility === "Western Expanse" && field.terrain === "Byakko" && move.acc100) ||
			   (atkAbility === "Empowered" && move.isEN) ||
			   (atkAbility === "Astronomy" && !(move.isEN)) ||
               (atkAbility === "First Hit" && turnOrder === "FIRST") ||
               atkAbility === "Full Power") {
		pendingMod = 1.2;
	} else if (atkAbility === "Arcane Magic" && move.bp >= 120) {
		pendingMod = 1.1;
	} else if (atkAbility === "Mindless Dance" && move.willLock) {
		pendingMod = 0.9;
	} else if (atkAbility === "Fast Talker" && move.willCharge) {
		pendingMod = 0.9;
	} else if ((atkAbility === "Known Limits" && !isSTAB) ||
	           (doppelganger)) { //Two of a Kind flag
		pendingMod = 0.66;
	}
	//Skip over the entire above section's power modifications if Ascertainment is present
	if (pendingMod !== 1 && (defAbility === "Ascertainment" || field.terrain === "Kohryu")) { //NOTE: This also blocks the power reduction from 2 of a kind, but NOT the multihit!
		if (defAbility === "Ascertainment") {
			description.defenderAbility = defAbility;
		}
	} else if (pendingMod !== 1) {
		finalMods.push(pendingMod);
		if (atkYoumaMod === "") { description.attackerAbility = atkAbility; } //account for Bibliophilia (Blue)
	}

	//Defense-related abilities
	pendingMod = 1;
	if (defAbility === "Cloak of Darkness" && move.type === "Light") {
		pendingMod = 1.25;
	} else if (defAbility === "Slow Tempo") {
		pendingMod = 0.9;
	} else if (defAbility === "Spirit of Yin" && (move.type === "Poison" || move.type === "Dark" || move.type === "Nether") && gen !== 5 ||
			   defAbility === "Spirit of Yang" && (move.type === "Electric" || move.type === "Light" || move.type === "Illusion") && gen !== 5) {
		pendingMod = 0.8;
	}else if (defAbility === "Glamorous" && typeEffectiveness > 1) {
		pendingMod = 0.75;
	} else if (defAbility === "Known Limits" && !isSTAB) {
		pendingMod = 0.66;
	} else if ((defAbility === "Inverse Reaction" && (move.type === "Light" || move.type === "Dark")) ||
		       (defAbility === "Yata no Kagami" && defender.curHP === defender.maxHP) ||
	           (defAbility === "Unique Shield" && move.category === "Focus") ||
	           (defAbility === "Gentei's Water" && field.terrain === "Genbu" && move.type === "Earth") ||
	           (defAbility === "Sutei's Fire" && field.terrain === "Suzaku" && move.type === "Water") ||
	           (defAbility === "Byakutei's Metal" && field.terrain === "Byakko" && move.type === "Fire") ||
	           (defAbility === "Seitei's Wood" && field.terrain === "Seiryu" && move.type === "Steel") ||
	           (defAbility === "Koutei's Earth" && field.terrain === "Kohryu" && move.type === "Nature")) {
		pendingMod = 0.5;
	}
	//Skip over the entire above section's power modifications if Ascertainment is present
	if (pendingMod !== 1 && atkAbility === "Ascertainment" || field.terrain === "Kohryu") {
		if (atkAbility === "Ascertainment") {
			description.attackerAbility = atkAbility;
		}
	} else if (pendingMod !== 1) {
		finalMods.push(pendingMod);
		if (defYoumaMod === "") { description.defenderAbility = defAbility; } //account for Bibliophilia (Blue)
	}

	//Prepare Screens
	if (move.name !== "Break Shot" && move.name !== "Field Break") { //these break through them, predictably
		if (field.isFieldProtect && move.category === "Focus" && !isCritical) {
			finalMods.push(0.5);
			description.isFieldProtect = true;
		} else if (field.isFieldBarrier && move.category === "Spread" && !isCritical) {
			finalMods.push(0.5);
			description.isFieldBarrier = true;
		}
	}

	var damage = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
	for (var i = 0; i < 15; i++) {
		//DMG = A ※ [Critical Hit] ※ [RNG] ※ [Effectiveness] ※ [STAB] ※ [Weather] ※ [Attacker Item] ※ [Defender Item] ※ [Attacker Ability] ※ [Defender Ability] ※ [Screens]
	//	RNG = 0.86, 0.87, 0.88, ..., 0.99, 1.00
		damage[i] = getFinalDamage(baseDamage, i, finalMods);
	}
	if (move.dropsStats && move.usedTimes > 1) {
		var adjMultiplier = 1;
		if (attacker.ability === "Good Management") {
			adjMultiplier = 2;
		}
		description.moveTurns = 'over ' + move.usedTimes + ' turns';
		var hasPurify = attacker.item === "Purify Charm";
		var usedPurify = false;
		var dropCount = attacker.boosts[attackStat];
		for (var times = 0; times < move.usedTimes; times++) {
			var newAttack = getModifiedStat(attacker.rawStats[attackStat], dropCount);
			var damageMultiplier = 0;
			damage = damage.map(function (affectedAmount) {
				if (times) {
					var newBaseDamage = getBaseDamage(attacker.level, basePower, newAttack, defense);
					var newFinalDamage = getFinalDamage(newBaseDamage, damageMultiplier, finalMods);
					damageMultiplier++;
					return affectedAmount + newFinalDamage;
				}
				return affectedAmount;
			});
			if (atkAbility === "Usurpation" ? defAbility !== "Reverse Function" : defAbility === "Reverse Function") {
				dropCount = Math.min(6, dropCount + move.dropsStats * adjMultiplier);
				if (atkAbility === "Usurpation" || atkAbility === "Simple") {
					description.attackerAbility = atkAbility;
				}
				if (defAbility === "Reverse Function") {
					description.defenderAbility = defAbility;
				}
			} else {
				dropCount = Math.max(-6, dropCount - (move.dropsStats * adjMultiplier));
				if (atkAbility === "Simple") {
					description.attackerAbility = atkAbility;
				} else if (atkAbility === "Usurpation") { //if this is true, then both triggered
					description.attackerAbility = atkAbility;
					description.defenderAbility = defAbility;
				}
			}
			// the Pokémon hits THEN the stat rises / lowers
			if (hasPurify && attacker.boosts[attackStat] < 0 && !usedPurify) {
				dropCount += move.dropsStats * adjMultiplier;
				usedPurify = true;
				description.attackerItem = attacker.item;
			}
		}
	}
	if (attacker.item === "Repetitive Arts" && move.repetitionCount > 1) {
		var boostTurns;
		if (move.dropsStats) {
			boostTurns = move.usedTimes;
		} else {
			boostTurns = move.repetitionCount;
		}
		for (var repetitiveArts = 0; repetitiveArts < boostTurns; repetitiveArts++) {
			var totalRepBoost = 1 + repetitiveArts / 10;
			damage = damage.map(function (damageRoll) {
				return puppRound(damageRoll * totalRepBoost);
			});
		}
		description.attackerItem = "Repetitive Arts";
	}
	description.attackBoost = attacker.boosts[attackStat];
	return {"damage": damage, "description": buildDescription(description)};
}

function toTPDPStat(stat) {
	return stat === FA ? "FoAtk" :
	       stat === FD ? "FoDef" :
	       stat === SA ? "SpAtk" :
	       stat === SD ? "SpDef" :
	       stat === SP ? "Spe" : "wtf";
}

function chainMods(base, mods) {
	//Each does a floor operation post multiplication
	for (var i = 0; i < mods.length; i++) {
		if (mods[i] !== 1) {
			base = Math.floor(base * mods[i]);
		}
	}
	return base;
}

function getMoveEffectiveness(move, type, noCommonSense) {
	if (noCommonSense && typeChart[move.type][type] === 0) {
		return 1;
	} else {
		return typeChart[move.type][type];
	}
}

function getModifiedStat(stat, mod) {
	return mod > 0 ? Math.floor(stat * (2 + mod) / 2) :
		   mod < 0 ? Math.floor(stat * 2 / (2 - mod)) : stat;
}

function getFinalSpeed(puppet, weather, terrain) {
	var speed = getModifiedStat(puppet.rawStats[SP], puppet.boosts[SP]);
	if (puppet.item === "Choice Belt" || puppet.item === "Izanagi Object" && terrain === "Kohryu") {
		speed = Math.floor(speed * 1.5);
	} else if (puppet.item === "Iron Clogs") {
		speed = Math.floor(speed / 2);
	} else if (puppet.item === "Boundary Trance") {
		speed = Math.floor(speed * 2.0);
	}
	if ((puppet.ability === "Flash" && weather === "Aurora") ||
        (puppet.ability === "Sand Devil" && weather === "Dust Storm") ||
        (puppet.ability === "Fog Traveler" && weather === "Heavy Fog") ||
        (puppet.ability === "Fox's Wedding" && weather === "Sunshower") ||
		(puppet.ability === "Silent Running" && weather === "Calm")) {
		speed *= 2;
	} else if (puppet.ability === "Northern Expanse" && terrain === "Genbu") {
		speed *= 0.5;
	}
	return speed;
}

function checkWeatherResist(puppet, field) {
	if (puppet.ability === "Weather Resist") {
		field.clearWeather();
	}
}

function checkBibliophilia(puppet) {
	if (puppet.ability === "Bibliophilia" && puppet.name === "Extra Kosuzu" && puppet.item.indexOf("Youma Scroll: ") !== -1) {
		switch (puppet.item.substr(14)) {
		case "Red":
			puppet.type1 = "Fire";
			break;
		case "Blue":
			puppet.type1 = "Water";
			break;
		case "Black":
			puppet.type1 = "Dark";
			break;
		case "White":
			puppet.type1 = "Light";
			break;
		default:
			puppet.type1 = "Void";
		}
		puppet.type2 = "";
	}
}

//this is easily the worst code I have ever written.
function checkSecretCeremony(puppet, field) {
	var secretWeather = field.getWeather();
	var secretTerrain = field.getTerrain();
	if (puppet.ability === "Secret Ceremony" && puppet.name === "Extra Okina") {
		if (secretWeather !== "" && secretTerrain === "") {
			if (secretWeather === "Aurora") { 
				puppet.type1 = "Light";
			} else if (secretWeather === "Heavy Fog") { 
				puppet.type1 = "Dark";
			} else if (secretWeather === "Sunshower") { 
				puppet.type1 = "Warped";
			} else if (secretWeather === "Dust Storm") { 
				puppet.type1 = "Earth";
			} else {
				puppet.type1 = "Wind";
			}
			puppet.type2 = "";
		} else if (secretWeather === "" && secretTerrain !== "") {
			if (secretTerrain === "Suzaku") {
				puppet.type1 = "Fire";
			} else if (secretTerrain === "Genbu") {
				puppet.type1 = "Water";
			} else if (secretTerrain === "Seiryu") {
				puppet.type1 = "Nature";
			} else if (secretTerrain === "Kohryu") {
				puppet.type1 = "Earth";
			} else {
				puppet.type1 = "Steel";
			}
			puppet.type2 = "";
		} else if (secretWeather !== "" && secretTerrain !== "") {
			if (secretWeather === "Aurora") { 
				puppet.type1 = "Light";
			} else if (secretWeather === "Heavy Fog") { 
				puppet.type1 = "Dark";
			} else if (secretWeather === "Sunshower") { 
				puppet.type1 = "Warped";
			} else if (secretWeather === "Dust Storm" && secretTerrain !== "Kohryu") { 
				puppet.type1 = "Earth";
			} else {
				puppet.type1 = "Wind";
			}
			if (secretTerrain === "Suzaku") {
				puppet.type2 = "Fire";
			} else if (secretTerrain === "Genbu") {
				puppet.type2 = "Water";
			} else if (secretTerrain === "Seiryu") {
				puppet.type2 = "Nature";
			} else if (secretTerrain === "Kohryu" && secretWeather !== "Dust Storm") {
				puppet.type2 = "Earth";
			} else {
				puppet.type2 = "Steel";
			}
			if (secretWeather === "Dust Storm" && secretTerrain === "Kohryu") {
				puppet.type1 = "Earth";
				puppet.type2 = "";
			}
		}
		if (secretWeather === "Dust Storm" && secretWeather === "Kohryu") {
			puppet.type1 = "Earth";
			puppet.type2 = "";
		}
	}
}

function checkItemless(puppet) {
	if (puppet.ability === "Wasteful" || puppet.ability === "Brute Force") {
		puppet.item = "";
	}
}

function checkDeploy(source, target) {
	if ((source.ability === "Deploy Smoke" || source.ability === "Warning Shot") && target.ability !== "Divine Protection") {
		var atkStat = source.ability === "Deploy Smoke" ? FA : SA;
		if (target.ability === "Usurpation" || target.ability === "Sore Loser" && atkStat === FA || target.ability === "Positive" && atkStat === SA) {
			target.boosts[atkStat] = Math.min(6, target.boosts[atkStat] + 1);
		} else if (target.ability === "Sore Loser" && atkStat === SA || target.ability === "Positive" && atkStat === FA) {
			atkStat = atkStat === FA ? SA : FA;
			target.boosts[atkStat] = Math.min(6, target.boosts[atkStat] + 2);
		} else if (target.ability === "Simple") {
			target.boosts[atkStat] = Math.max(-6, target.boosts[atkStat] - 2);
		} else {
			target.boosts[atkStat] = Math.max(-6, target.boosts[atkStat] - 1);
		}
	}
}

function checkStatBoost(p1, p2) {
	var stat;
	if ($('#StatBoostL').prop("checked")) {
		for (stat in p1.boosts) {
			p1.boosts[stat] = Math.min(6, p1.boosts[stat] + 1);
		}
	}
	if ($('#StatBoostR').prop("checked")) {
		for (stat in p2.boosts) {
			p2.boosts[stat] = Math.min(6, p2.boosts[stat] + 1);
		}
	}
}

function checkAggression(source, target) {
	if (source.ability === "Aggressive") {
		if (target.stats[SD] <= target.stats[FD]) {
			source.boosts[SA] = Math.min(6, source.boosts[SA] + 1);
		} else {
			source.boosts[FA] = Math.min(6, source.boosts[FA] + 1);
		}
	}
}

//Phalanx always raises FoDef if enemy attack stats are equal
function checkPhalanx(attacker, defender) {
	var physAtk = getModifiedStat(attacker.rawStats[FA], attacker.boosts[FD])
	var spA = getModifiedStat(attacker.rawStats[SA], attacker.boosts[SA]);
	if (defender.ability === "Phalanx") {
		if (spA <= physAtk) {
			defender.boosts[FD] = Math.min(6, defender.boosts[FD] + 1);
			defender.stats[FD] = getModifiedStat(defender.rawStats[FD], defender.boosts[FD]);
		} else {
			defender.boosts[SD] = Math.min(6, defender.boosts[SD] + 1);
			defender.stats[SD] = getModifiedStat(defender.rawStats[SD], defender.boosts[SD]);
		}
	}
}

function checkInfiltrator(attacker, affectedSide) {
	if (attacker.ability === "Infiltration") {
		affectedSide.isFieldProtect = false;
		affectedSide.isFieldBarrier = false;
	}
}

function countBoosts(boosts) {
	var sum = 0;
	for (var i = 0; i < STATS.length; i++) {
		if (boosts[STATS[i]] > 0) {
			sum += boosts[STATS[i]];
		}
	}
	return sum;
}

function isGroundedForCalc(puppet, field) {
	return field.isGravity || (
		!puppet.hasType("Flying") &&
        puppet.ability !== "Levitate" &&
        puppet.item !== "Air Balloon"
	);
}

// GameFreak rounds DOWN on .5, until proven otherwise i'll assume that TPDP does the same thing
function puppRound(num) {
	return (num % 1 > 0.5) ? Math.ceil(num) : Math.floor(num);
}

function getBaseDamage(level, basePower, attack, defense) {
	return Math.floor(Math.floor((Math.floor(0.4 * level + 2) * attack * basePower) / defense) / 50 + 2);
}

function getFinalDamage(baseAmount, i, finalMods) {
	var damageAmount = Math.floor(baseAmount * (86 + i) / 100);
	for (var m = 0; m < finalMods.length; m++) {
		damageAmount = Math.floor(damageAmount * finalMods[m]);
	}
	return damageAmount;
}

function buildDescription(description) {
	var output = "";
	if (description.attackBoost) {
		if (description.attackBoost > 0) {
			output += "+";
		}
		output += description.attackBoost + " ";
	}
	output = appendIfSet(output, description.attackPP);
	output = appendIfSet(output, description.attackerItem);
	output = appendIfSet(output, description.attackerAbility);
	if (description.isBlinded) {
		output += "blinded ";
	} else if (description.isAfraid) {
		output += "afraid ";
	}
	output += description.attackerName + " ";
	output += description.moveName + " ";
	if (description.moveBP && description.moveType) {
		output += "(" + description.moveBP + " BP " + description.moveType + ") ";
	} else if (description.moveBP) {
		output += "(" + description.moveBP + " BP) ";
	} else if (description.moveType) {
		output += "(" + description.moveType + ") ";
	}
	if (description.hits) {
		output += "(" + description.hits + " hits) ";
	}
	output = appendIfSet(output, description.moveTurns);
	output += "vs. ";
	if (description.defenseBoost) {
		if (description.defenseBoost > 0) {
			output += "+";
		}
		output += description.defenseBoost + " ";
	}
	output = appendIfSet(output, description.HPPP);
	if (description.defensePP) {
		output += " / " + description.defensePP + " ";
	}
	output = appendIfSet(output, description.defenderItem);
	output = appendIfSet(output, description.defenderAbility);
	if (description.isProtected) {
		output += "protected ";
	}
	if (description.defenderGhost) {
		output += "Ghost Chase ";
	}
	if (description.defenderReversed) {
		output += "Reversed ";
	}
	output += description.defenderName;
	if (description.weather && description.terrain) {
		//why would i do nothing?
		output += " in " + description.weather + " and " + description.terrain;
	} else if (description.weather) {
		output += " in " + description.weather;
	} else if (description.terrain) {
		output += " in " + description.terrain;
	}
	if (description.isFieldProtect) {
		output += " through Field Protect";
	} else if (description.isFieldBarrier) {
		output += " through Field Barrier";
	}
	if (description.isCritical) {
		output += " on a critical hit";
	}
	return output;
}

function appendIfSet(str, toAppend) {
	if (toAppend) {
		return str + toAppend + " ";
	}
	return str;
}
