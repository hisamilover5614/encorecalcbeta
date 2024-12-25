function getKOChanceText(damage, attacker, defender, field, move, hits, isDreamWorld) {
	if (isNaN(damage[0])) {
		return 'something broke, please ping @The_Eevee_Man';
	}
	if (damage[damage.length - 1] === 0) {
		return 'skill issue';
	}
	if (damage[0] >= defender.maxHP && (move.usedTimes === 1 && move.metronomeCount === 1)) {
		return 'guaranteed OHKO';
	}
	
	//kohryu handler
	//this can't be done using the wasteful handler so we're doing it here
	if (field.terrain === "Kohryu" && attacker.ability !== "Central Expanse") {
		attacker.item = "";
	}
	if (field.terrain === "Kohryu" && defender.ability !== "Central Expanse") {
		defender.item = "";
	}

	var hazards = 0;
	var hazardText = [];
	if (field.isST && defender.ability !== "Imposing Stance" && defender.item !== "Tengu Geta") {
		var effectiveness = typeChart['Steel'][defender.type1] * (defender.type2 ? typeChart['Steel'][defender.type2] : 1);
		hazards += Math.floor(effectiveness * defender.maxHP / 8);
		hazardText.push('Stealth Trap');
	}
	if (!defender.hasType('Wind') && defender.ability !== "Air Cushion" && defender.item !== "Floating Stone" && defender.item !== "Tengu Geta") {
		if (field.mines === 1) {
			hazards += Math.floor(defender.maxHP / 8);
			hazardText.push('1 Mine Trap');
		} else if (field.mines === 2) {
			hazards += Math.floor(defender.maxHP / 6);
			hazardText.push('2 Mine Traps');
		} else if (field.mines === 3) {
			hazards += Math.floor(defender.maxHP / 4);
			hazardText.push('3 Mine Traps');
		}
	}
	if (isNaN(hazards)) {
		hazards = 0;
	}

	var eot = 0;
	var eotGain = 0;
	var eotText = [];
	var eotRecovery = [];
	var eotDamage = [];
	//Weather Related
	if (field.weather === 'Aurora' && defender.ability === 'Aurora Grace') {
		eotGain += Math.floor(defender.maxHP / 16);
		eotRecovery.push('Aurora Grace');
		eotDamage.push(''); //keep the sequential order of these events intact
	} else if (field.weather === 'Heavy Fog' && defender.ability === 'Surprise Tactics') {
		eot -= Math.floor(defender.maxHP / 8);
		eotDamage.push('Surprise Tactics');
		eotRecovery.push('');
	} else if (field.weather === 'Dust Storm' &&
		       ['Earth', 'Steel'].indexOf(defender.type1) === -1 &&
		       ['Earth', 'Steel'].indexOf(defender.type2) === -1 &&
		       ['Weather Resist', 'Sand Mask', 'Sand Force', 'Sand Devil'].indexOf(defender.ability) === -1) {
		eot -= Math.floor(defender.maxHP / 16);
		eotDamage.push('Dust Storm');
		eotRecovery.push('');
	} else if (field.weather === 'Calm' && ['Zen', 'Breather'].indexOf(defender.ability) !== -1) {
		eotGain += Math.floor(defender.maxHP / 16);
		eotRecovery.push(defender.ability);
		eotDamage.push('');
	}

	//Misc. Ability-Related
	if (defender.ability === 'Auto Heal') {
		eotGain += Math.floor(defender.maxHP / 16);
		eotRecovery.push('Auto Heal');
		eotDamage.push('');
	}
	if (defender.ability === 'Full Power') {
		eot -= Math.floor(defender.maxHP / 10);
		eotDamage.push('Full Power');
		eotRecovery.push('');
	}

	//Item-Related
	var loseItem = (move.name === "Fire Wall" || move.name === "Panic Call" || move.name === "St. Elmo's Fire") && defender.ability !== "Collectomaniac";
	if (defender.item === 'Food Rations' && !loseItem) {
		eotGain += Math.floor(defender.maxHP / 16);
		eotRecovery.push('Food Rations');
		eotDamage.push('');
	} else if (defender.item === 'Jar of Poison' && !loseItem) {
		if (defender.type1 === 'Poison' || defender.type2 === 'Poison') {
			eotGain += Math.floor(defender.maxHP / 16);
			eotRecovery.push('Jar of Poison');
			eotDamage.push('');
		} else {
			eot -= Math.floor(defender.maxHP / 8);
			eotDamage.push('Jar of Poison');
			eotRecovery.push('');
		}
	}

	//Drain Seed
	if (field.isDefenderSeeded) {
		eot -= Math.floor(defender.maxHP / 8);
		eotDamage.push('Drain Seed');
		eotRecovery.push('');
	}
	if (field.isAttackerSeeded && attacker.ability !== "Imposing Stance") {
		eotGain += Math.floor(attacker.maxHP / 8);
		eotRecovery.push('Drain Seed');
		eotDamage.push('');
	}
	
	//Shinigami's Waltz
	if (field.isCursed) {
		eot -= Math.floor(defender.maxHP / 4);
		eotDamage.push("Shinigami's Walz");
	}
	
	//Spirit Torch
	if (attacker.item === "Spirit Torch" && field.terrain == "Suzaku") {
		eot -= Math.floor(defender.maxHP / 8);
		eotDamage.push('Spirit Torch');
		eotRecovery.push('');
	}
	
	//Absorber
	var effect1 = typeChart[move.type][defender.type1]
	var effect2 = (defender.type2 ? typeChart[move.type][defender.type2] : 1)
	var absorberEffectiveness = effect1 * effect2; //calculation behaves strangely if full conditionals are used over variables
	if (defender.item === "Absorber" && absorberEffectiveness < 1) {
		eotGain += Math.floor(defender.maxHP * .18);
		eotRecovery.push('Absorber');
		eotDamage.push('');
	}

	var heavyCounter = 0;
	//Poison Handler
	if (defender.status.indexOf("Poisoned") !== -1) {
		if (defender.ability === 'Inverse Toxin') {
			eotGain += Math.floor(defender.maxHP / 8);
			eotRecovery.push('Inverse Toxin');
			eotDamage.push('');
		} else if (defender.status[0] === defender.status[1]) { //Heavy Status Case
			heavyCounter = defender.heavyCounter;
			eotDamage.push('poison');
			eotRecovery.push('');
		} else {
			eot -= Math.floor(defender.maxHP / 8);
			eotDamage.push('poison');
			eotRecovery.push('');
		}
	}
	//Burn handler
	if (defender.status.indexOf("Burned") !== -1) {
		if (defender.status[0] === defender.status[1]) { //Heavy Status Case
			heavyCounter = defender.heavyCounter;
			eotDamage.push('burn');
			eotRecovery.push('');
		} else {
			eot -= Math.floor(defender.maxHP / 8);
			eotDamage.push('burn');
			eotRecovery.push('');
		}
	}
	//Dream World
	if (defender.status === 'Asleep' && attacker.ability === "Dream World") {
		eot -= Math.floor(defender.maxHP / 8);
		eotDamage.push('Dream World');
	}

	//Partial Trapping moves
	if (move.partialTrapping) {
		if (attacker.item === "Sturdy Rope") {
			eot -= Math.floor(defender.maxHP / 6);
			eotDamage.push('Sturdy Rope-boosted trapping');
		} else {
			eot -= Math.floor(defender.maxHP / 8);
			eotDamage.push('trapping');
		}
		eotRecovery.push('');
	}

	//Final EoT calculation
	if (defender.ability === "Imposing Stance" && eot < 0) { //Nullify all damage accumulated
		eot = 0;
		eotDamage = [];
	}
	if (field.terrain === "Suzaku" && eotGain > 0) {
		if (defender.ability === "Imposing Stance") { //Assume: Imposing Stance nullifies damage caused by Suzaku
			eotGain = 0;
			eotRecovery = [];
		}
		eot -= eotGain;
	} else if (eotGain > 0) {
		eot += eotGain;
	}
	for (var i = 0; i < eotDamage.length; i++) {
		if (eotDamage[i] || eotRecovery[i] && field.terrain === "Suzaku") {
			eotText.push((eotDamage[i] ? eotDamage[i] : eotRecovery[i]) + " damage");
		} else if (eotRecovery[i]) {
			eotText.push(eotRecovery[i] + " recovery");
		}
	}

	// multi-hit moves have too many possibilities for brute-forcing to work, so reduce it to an approximate distribution
	var qualifier = '';
	if (hits > 1) {
		qualifier = 'approx. ';
		damage = squashMultihit(damage, hits);
	}
	var c;
	var afterText = hazardText.length > 0 || eotText.length > 0 ? ' after ' + serializeText(hazardText.concat(eotText)) : '';
	if ((move.usedTimes === 1 && move.metronomeCount === 1) || move.isZ) {
		c = getKOChance(damage, defender.curHP - hazards, 0, 1, 1, defender.maxHP, heavyCounter);
		if (c === 1) {
			return 'guaranteed OHKO' + afterText;
		} else if (c > 0) {
			return qualifier + Math.round(c * 1000) / 10 + '% chance to OHKO' + afterText;
		}
		var i;

		for (i = 2; i <= 4; i++) {
			c = getKOChance(damage, defender.curHP - hazards, eot, i, 1, defender.maxHP, heavyCounter);
			if (c === 1) {
				return 'guaranteed ' + i + 'HKO' + afterText;
			} else if (c > 0) {
				return qualifier + Math.round(c * 1000) / 10 + '% chance to ' + i + 'HKO' + afterText;
			}
		}

		for (i = 5; i <= 9; i++) {
			if (predictTotal(damage[0], eot, i, 1, heavyCounter, defender.maxHP) >= defender.curHP - hazards) {
				return 'guaranteed ' + i + 'HKO' + afterText;
			} else if (predictTotal(damage[damage.length - 1], eot, i, 1, heavyCounter, defender.maxHP) >= defender.curHP - hazards) {
				return 'possible ' + i + 'HKO' + afterText;
			}
		}

	} else {
		c = getKOChance(damage, defender.maxHP - hazards, eot, move.usedTimes || 1, move.usedTimes || 1, defender.maxHP, heavyCounter);
		if (c === 1) {
			return 'guaranteed KO in ' + move.usedTimes + ' turns' + afterText;
		} else if (c > 0) {
			return qualifier + Math.round(c * 1000) / 10 + '% chance to ' + move.usedTimes + 'HKO' + afterText;
		}
		if (predictTotal(damage[0], eot, move.usedTimes, move.usedTimes, heavyCounter, defender.maxHP) >= defender.curHP - hazards) {
			return 'guaranteed KO in ' + move.usedTimes + ' turns' + afterText;
		} else if (predictTotal(damage[damage.length - 1], eot, move.usedTimes, move.usedTimes, heavyCounter, defender.maxHP) >= defender.curHP - hazards) {
			return 'possible KO in ' + move.usedTimes + ' turns' + afterText;
		}
		return 'not a KO';
	}

	return 'possibly the worst move ever';
}

function getKOChance(damage, hp, eot, hits, moveHits, maxHP, heavyCounter) {
	var n = damage.length;
	var minDamage = damage[0];
	var maxDamage = damage[n - 1];
	var i;
	if (hits === 1) {
		for (i = 0; i < n; i++) {
			if (damage[i] >= hp) {
				return (n - i) / n;
			}
		}
	} else {
		for (var j = 0; j < n; j++) {
			if (damage[j] >= hp) {
				return j / n;
			}
		}
	}
	if (predictTotal(maxDamage, eot, hits, moveHits, heavyCounter, maxHP) < hp) {
		return 0;
	} else if (predictTotal(minDamage, eot, hits, moveHits, heavyCounter, maxHP) >= hp) {
		return 1;
	}
	var toxicDamage = 0;
	if (heavyCounter > 0) {
		toxicDamage = Math.floor(heavyCounter * maxHP / 16);
		heavyCounter++;
	}
	var sum = 0;
	for (i = 0; i < n; i++) {
		var c = getKOChance(damage, hp - damage[i] + eot - toxicDamage, eot, hits - 1, moveHits, maxHP, heavyCounter);
		if (c === 1) {
			sum += (n - i);
			break;
		} else {
			sum += c;
		}
	}
	return sum / n;
}

function predictTotal(damage, eot, hits, moveHits, heavyCounter, maxHP) {
	var toxicDamage = 0;
	if (heavyCounter > 0) {
		for (var i = 0; i < hits - 1; i++) {
			toxicDamage += Math.floor((heavyCounter + i) * maxHP / 16);
		}
	}
	if (hits > 1 && moveHits === 1) {
		var total = (damage * hits) - (eot * (hits - 1)) + toxicDamage;
	} else {
		var total = damage - (eot * (hits - 1)) + toxicDamage;
	}
	return total;
}

function squashMultihit(d, hits) {
	if (d.length === 1) {
		return [d[0] * hits];
	} else if (gen === 1) {
		var r = [];
		for (var i = 0; i < d.length; i++) {
			r[i] = d[i] * hits;
		}
		return r;
	} else if (d.length === 15) {
		switch (hits) {
		case 2:
			return [
				2 * d[0], d[2] + d[3], d[4] + d[4], d[4] + d[5],
				d[5] + d[6], d[6] + d[6], d[6] + d[7], d[7] + d[7],
				d[8] + d[8], d[8] + d[9], d[9] + d[9], d[9] + d[10],
				d[10] + d[11], d[11] + d[11], d[12] + d[13], 2 * d[14]
			];
		case 3:
			return [
				3 * d[0], d[3] + d[3] + d[4], d[4] + d[4] + d[5], d[5] + d[5] + d[6],
				d[5] + d[6] + d[6], d[6] + d[6] + d[7], d[6] + d[7] + d[7], d[7] + d[7] + d[8],
				d[7] + d[8] + d[8], d[8] + d[8] + d[9], d[8] + d[9] + d[9], d[9] + d[9] + d[10],
				d[9] + d[10] + d[10], d[10] + d[11] + d[11], d[11] + d[12] + d[12], 3 * d[14]
			];
		case 4:
			return [
				4 * d[0], 4 * d[4], d[4] + d[5] + d[5] + d[5], d[5] + d[5] + d[6] + d[6],
				4 * d[6], d[6] + d[6] + d[7] + d[7], 4 * d[7], d[7] + d[7] + d[7] + d[8],
				d[7] + d[8] + d[8] + d[8], 4 * d[8], d[8] + d[8] + d[9] + d[9], 4 * d[9],
				d[9] + d[9] + d[10] + d[10], d[10] + d[10] + d[10] + d[11], 4 * d[11], 4 * d[14]
			];
		case 5:
			return [
				5 * d[0], d[4] + d[4] + d[4] + d[5] + d[5], d[5] + d[5] + d[5] + d[5] + d[6], d[5] + d[6] + d[6] + d[6] + d[6],
				d[6] + d[6] + d[6] + d[6] + d[7], d[6] + d[6] + d[7] + d[7] + d[7], 5 * d[7], d[7] + d[7] + d[7] + d[8] + d[8],
				d[7] + d[7] + d[8] + d[8] + d[8], 5 * d[8], d[8] + d[8] + d[8] + d[9] + d[9], d[8] + d[9] + d[9] + d[9] + d[9],
				d[9] + d[9] + d[9] + d[9] + d[10], d[9] + d[10] + d[10] + d[10] + d[10], d[10] + d[10] + d[11] + d[11] + d[11], 5 * d[14]
			];
		default:
			console.log("Unexpected # of hits: " + hits);
			return d;
		}
	} else if (d.length === 39) {
		switch (hits) {
		case 2:
			return [
				2 * d[0], 2 * d[7], 2 * d[10], 2 * d[12],
				2 * d[14], d[15] + d[16], 2 * d[17], d[18] + d[19],
				d[19] + d[20], 2 * d[21], d[22] + d[23], 2 * d[24],
				2 * d[26], 2 * d[28], 2 * d[31], 2 * d[38]
			];
		case 3:
			return [
				3 * d[0], 3 * d[9], 3 * d[12], 3 * d[13],
				3 * d[15], 3 * d[16], 3 * d[17], 3 * d[18],
				3 * d[20], 3 * d[21], 3 * d[22], 3 * d[23],
				3 * d[25], 3 * d[26], 3 * d[29], 3 * d[38]
			];
		case 4:
			return [
				4 * d[0], 2 * d[10] + 2 * d[11], 4 * d[13], 4 * d[14],
				2 * d[15] + 2 * d[16], 2 * d[16] + 2 * d[17], 2 * d[17] + 2 * d[18], 2 * d[18] + 2 * d[19],
				2 * d[19] + 2 * d[20], 2 * d[20] + 2 * d[21], 2 * d[21] + 2 * d[22], 2 * d[22] + 2 * d[23],
				4 * d[24], 4 * d[25], 2 * d[27] + 2 * d[28], 4 * d[38]
			];
		case 5:
			return [
				5 * d[0], 5 * d[11], 5 * d[13], 5 * d[15],
				5 * d[16], 5 * d[17], 5 * d[18], 5 * d[19],
				5 * d[19], 5 * d[20], 5 * d[21], 5 * d[22],
				5 * d[23], 5 * d[25], 5 * d[27], 5 * d[38]
			];
		default:
			console.log("Unexpected # of hits: " + hits);
			return d;
		}
	} else {
		console.log("Unexpected # of possible damage values: " + d.length);
		return d;
	}
}

function serializeText(arr) {
	if (arr.length === 0) {
		return '';
	} else if (arr.length === 1) {
		return arr[0];
	} else if (arr.length === 2) {
		return arr[0] + " and " + arr[1];
	} else {
		var text = '';
		for (var i = 0; i < arr.length - 1; i++) {
			text += arr[i] + ', ';
		}
		return text + 'and ' + arr[arr.length - 1];
	}
}
