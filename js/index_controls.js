$("#p2 .ability").bind("keyup change", function () {
	autosetWeather($(this).val(), 1);
	autosetTerrain($(this).val(), 1);
});

$("#p2 .item").bind("keyup change", function () {
	autosetStatus("#p2", $(this).val());
});

lastManualStatus["#p2"] = "Healthy";
lastAutoStatus["#p1"] = "Healthy";

var resultLocations = [[], []];
for (var i = 0; i < 4; i++) {
	resultLocations[0].push({
		"move": "#resultMoveL" + (i + 1),
		"damage": "#resultDamageL" + (i + 1)
	});
	resultLocations[1].push({
		"move": "#resultMoveR" + (i + 1),
		"damage": "#resultDamageR" + (i + 1)
	});
}

var damageResults;
function calculate() {
	var p1 = new Puppet($("#p1"));
	var p2 = new Puppet($("#p2"));
	var battling = [p1, p2];
	p1.maxDamages = [];
	p2.maxDamages = [];
	var field = new Field();
	damageResults = calculateAllMoves(p1, p2, field);
	var fastestSide = p1.stats[SP] > p2.stats[SP] ? 0 : p1.stats[SP] === p2.stats[SP] ? "tie" : 1;
	var result, minDamage, maxDamage, minDisplay, maxDisplay;
	var highestDamage = -1;
	var bestResult;
	for (var i = 0; i < 4; i++) {
		result = damageResults[0][i];
		minDamage = result.damage[0] * p1.moves[i].hits;
		maxDamage = result.damage[result.damage.length - 1] * p1.moves[i].hits;
		p1.maxDamages.push({
			moveOrder: i,
			maxDamage: maxDamage
		});
		p1.maxDamages.sort(function (firstMove, secondMove) {
			return secondMove.maxDamage - firstMove.maxDamage;
		});
		minDisplay = notation === '%' ? Math.floor(minDamage * 1000 / p2.maxHP) / 10 : Math.floor(minDamage * 48 / p2.maxHP);
		maxDisplay = notation === '%' ? Math.floor(maxDamage * 1000 / p2.maxHP) / 10 : Math.floor(maxDamage * 48 / p2.maxHP);
		result.damageText = minDamage + "-" + maxDamage + " (" + minDisplay + " - " + maxDisplay + notation + ")";
		result.koChanceText = p1.moves[i].bp === 0 ? 'nice move' :
			getKOChanceText(result.damage, p1, p2, field.getSide(1), p1.moves[i], p1.moves[i].hits, p1.ability === 'Dream World');
		
		//chip handler
		//this only handles after attack chip, end of turn chip is handled in ko_chance
		var totalChip = 0;
		var chip = 0;
		var chipText = '';
		var healOrRecoil = false;
		if (p1.moves[i].category === "Focus" && p1.moves[i].bp > 0 && p2.item === 'Thorn Charm') {
			chip = Math.floor(p1.maxHP / 8);
			if (chip === 0) {
				chip = 1;
			}
			chip = (chip / p1.maxHP) * 100;
			chip = Math.round(chip * 10) / 10;
			if (p1.ability === 'Imposing Stance') {
				chip = 0;
			}
			totalChip += chip;
			chip = 0;
		}
		if (p1.moves[i].bp > 0 && p1.item === 'Straw Doll') {
			chip = Math.floor(p1.maxHP / 10);
			if (chip === 0) {
				chip = 1;
			}
			chip = (chip / p1.maxHP) * 100;
			chip = Math.round(chip * 10) / 10;
			if (p1.ability === 'Imposing Stance') {
				chip = 0;
			}
			totalChip += chip;
			chip = 0;
		}
		if (p1.moves[i].bp < 71 && p1.moves[i].bp > 0 && p2.item === 'Small Bit') {
			chip = (Math.floor(p1.maxHP / 8)) * p1.moves[i].hits;
			if (chip === 0) {
				chip = 1;
			}
			chip = (chip / p1.maxHP) * 100;
			chip = Math.round(chip * 10) / 10;
			if (p1.ability === 'Imposing Stance') {
				chip = 0;
			}
			totalChip += chip;
			chip = 0;
		}
		if (p1.moves[i].isEN === undefined && p1.moves[i].bp > 0 && p2.item === 'Counter Bit') {
			chip = (Math.floor(p1.maxHP / 8)) * p1.moves[i].hits;
			if (chip === 0) {
				chip = 1;
			}
			chip = (chip / p1.maxHP) * 100;
			chip = Math.round(chip * 10) / 10;
			if (p1.ability === 'Imposing Stance') {
				chip = 0;
			}
			totalChip += chip;
			chip = 0;
		}
		if (p1.moves[i].isEN === true && p1.moves[i].bp > 0 && p2.item === 'Reflect Bit') {
			chip = (Math.floor(p1.maxHP / 8)) * p1.moves[i].hits;
			if (chip === 0) {
				chip = 1;
			}
			chip = (chip / p1.maxHP) * 100;
			chip = Math.round(chip * 10) / 10;
			if (p1.ability === 'Imposing Stance') {
				chip = 0;
			}
			totalChip += chip;
			chip = 0;
		}
		if (p1.moves[i].bp > 99 && p1.moves[i].bp > 0 && p2.item === 'Giant Bit') {
			chip = (Math.floor(p1.maxHP / 8)) * p1.moves[i].hits;
			if (chip === 0) {
				chip = 1;
			}
			chip = (chip / p1.maxHP) * 100;
			chip = Math.round(chip * 10) / 10;
			if (p1.ability === 'Imposing Stance') {
				chip = 0;
			}
			totalChip += chip;
			chip = 0;
		}
		if (p1.moves[i].bp > 89 && p1.moves[i].bp > 0 && p2.ability === 'Some Guts' || p2.ability === 'Karmic Retribution') {
			chip = (Math.floor(p1.maxHP / 8) * p1.moves[i].hits);
			if (chip === 0) {
				chip = 1;
			}
			chip = (chip / p1.maxHP) * 100;
			chip = Math.round(chip * 10) / 10;
			if (p1.ability === 'Imposing Stance') {
				chip = 0;
			}
			totalChip += chip;
			chip = 0;
		}
		if (p1.moves[i].isEN === undefined && p1.moves[i].bp > 0 && p2.ability === 'Counter Stance') {
			chip = (Math.floor(p1.maxHP / 8)) * p1.moves[i].hits;
			if (chip === 0) {
				chip = 1;
			}
			chip = (chip / p1.maxHP) * 100;
			chip = Math.round(chip * 10) / 10;
			if (p1.ability === 'Imposing Stance') {
				chip = 0;
			}
			totalChip += chip;
			chip = 0;
		}
		if (p1.moves[i].isEN === true && p1.moves[i].bp > 0 && p2.ability === 'Reflect Guard') {
			chip = (Math.floor(p1.maxHP / 8)) * p1.moves[i].hits;
			if (chip === 0) {
				chip = 1;
			}
			chip = (chip / p1.maxHP) * 100;
			chip = Math.round(chip * 10) / 10;
			if (p1.ability === 'Imposing Stance') {
				chip = 0;
			}
			totalChip += chip;
			chip = 0; 
		}
		if (p1.moves[i].bp > 0 && p1.ability === 'Full Power') {
			chip = Math.floor(p1.maxHP / 10);
			if (chip === 0) {
				chip = 1;
			}
			chip = (chip / p1.maxHP) * 100;
			chip = Math.round(chip * 10) / 10;
			if (p1.ability === 'Imposing Stance') {
				chip = 0;
			}
			totalChip += chip;
			chip = 0;
		}
		totalChip = Math.round(totalChip * 10) / 10;
		
		var recoveryText = '';
		var recoveryMultiplier = 1/2
		if (p1.moves[i].givesHealth === true) {
			var minRecovery = Math.floor((Math.min(minDamage, p2.curHP)) * recoveryMultiplier);
			if (minRecovery === 0) {
				minRecoilDamage = 0;
			}
			if (p1.ability === 'Overcompensate') {
				minRecovery *= 1.3
			}
			if (p1.item === 'Bandage') {
				minRecovery *= 1.3
			}
			minRecovery = (minRecovery / p1.maxHP) * 100;
			minRecovery = Math.round(minRecovery * 10) / 10;
			if (minDamage === 0) {
				minRecovery = 0;
			}
			
			var maxRecovery = Math.floor((Math.min(maxDamage, p2.curHP)) * recoveryMultiplier);
			if (maxRecovery === 0) {
				maxRecovery = 0;
			}
			if (p1.ability === 'Overcompensate') {
				maxRecovery *= 1.3
			}
			if (p1.item === 'Bandage') {
				maxRecovery *= 1.3
			}
			maxRecovery = (maxRecovery / p1.maxHP) * 100;
			maxRecovery = Math.round(maxRecovery * 10) / 10;
			if (maxDamage === 0) {
				maxRecovery = 0;
			}
			if (minRecovery > 100) {
				minRecovery = 100;
			}
			if (maxRecovery > 100) {
				maxRecovery = 100;
			}
			if (p2.ability === 'Bad Medicine' && maxRecovery > 0) {
				if (totalChip > 0) {
					healOrRecoil = true;
					minRecovery += totalChip;
					maxRecovery += totalChip;
					recoveryText = (' (' + minRecovery + ' - ' + maxRecovery + notation + ' recoil + chip)');
				} else {
					recoveryText = (' (' + minRecovery + ' - ' + maxRecovery + notation + ' recoil)');
				}
			} else {
				if (totalChip > 0 && maxRecovery > 0) {
					healOrRecoil = true;
					minRecovery -= totalChip;
					maxRecovery -= totalChip;
					minRecovery = Math.round(minRecovery * 10) / 10;
					maxRecovery = Math.round(maxRecovery * 10) / 10;
					recoveryText = (' (' + minRecovery + ' - ' + maxRecovery + notation + ' recovered after chip)');
				} else if (maxRecovery > 0) {
					recoveryText = (' (' + minRecovery + ' - ' + maxRecovery + notation + ' recovered)');
				}
			}
		}
		//recoil handler
		//code rewrite because the old one didn't work
		var recoilText = '';
		var recoilMultiplier = 1/3
		if (p1.moves[i].name === 'Spirit Rush') {
			recoilMultiplier = 1/4;
		} else if (p1.moves[i].name === 'Full Metal Crash') {
			recoilMultiplier = 1/2;
		}
		if (p1.moves[i].hasRecoil === 'number') {
			var minRecoilDamage = Math.floor((Math.min(minDamage, p2.curHP)) * recoilMultiplier);
			if (minRecoilDamage === 0) {
				minRecoilDamage = 1;
			}
			minRecoilDamage = (minRecoilDamage / p1.maxHP) * 100;
			minRecoilDamage = Math.round(minRecoilDamage * 10) / 10;
			if (minDamage === 0) {
				minRecoilDamage = 0;
			}
			
			var maxRecoilDamage = Math.floor((Math.min(maxDamage, p2.curHP)) * recoilMultiplier);
			if (maxRecoilDamage === 0) {
				maxRecoilDamage = 1;
			}
			maxRecoilDamage = (maxRecoilDamage / p1.maxHP) * 100;
			maxRecoilDamage = Math.round(maxRecoilDamage * 10) / 10;
			if (maxDamage === 0) {
				maxRecoilDamage = 0;
			}
			if (minRecoilDamage > 100) {
				minRecoilDamage = 100;
			}
			if (maxRecoilDamage > 100) {
				maxRecoilDamage = 100;
			}
			if (p1.ability === 'Recoil Offset' || p1.ability === 'Imposing Stance') {
				minRecoilDamage = 0;
				maxRecoilDamage = 0;
			}
			if (minRecoilDamage > 0) {
				healOrRecoil = true;
				recoilText = (' (' + minRecoilDamage + ' - ' + maxRecoilDamage + notation + ' recoil damage)');
				if (totalChip > 0) {
					minRecoilDamage += totalChip;
					maxRecoilDamage += totalChip;
					recoilText = (' (' + minRecoilDamage + ' - ' + maxRecoilDamage + notation + ' recoil + chip)');
				}
			}
		} else if (p1.moves[i].hasRecoil === 'crash') {
			var crashDamage = Math.floor(p1.maxHP / 2);
			if (crashDamage === 0) {
				crashDamage = 1;
			}
			crashDamage = (crashDamage / p1.maxHP) * 100;
			crashDamage = Math.round(crashDamage * 10) / 10;
			if (p1.ability === 'Imposing Stance') {
				crashDamage = 0;
			}
			if (crashDamage > 0) {
				healOrRecoil = true;
				recoilText = (' (' +  crashDamage + '%' + ' crash damage)');
				if (totalChip > 0) {
					recoilText = (' (' +  crashDamage + '%' + ' crash damage + ' + totalChip + '%' + ' chip)');
				}
			}
		}
		if (totalChip > 0 && minDamage > 0 && healOrRecoil === false) {
			chipText = (' (' +  totalChip + '%' + ' chip)');
		}
		$(resultLocations[0][i].move + " + label").text(p1.moves[i].name.replace("Hidden Power", "HP"));
		$(resultLocations[0][i].damage).text(minDisplay + " - " + maxDisplay + notation + recoveryText + recoilText + chipText);

		result = damageResults[1][i];
		var recoveryText = '';
		minDamage = result.damage[0] * p2.moves[i].hits;
		maxDamage = result.damage[result.damage.length - 1] * p2.moves[i].hits;
		p2.maxDamages.push({
			moveOrder: i,
			maxDamage: maxDamage
		});
		p2.maxDamages.sort(function (firstMove, secondMove) {
			return secondMove.maxDamage - firstMove.maxDamage;
		});
		minDisplay = notation === '%' ? Math.floor(minDamage * 1000 / p1.maxHP) / 10 : Math.floor(minDamage * 48 / p1.maxHP);
		maxDisplay = notation === '%' ? Math.floor(maxDamage * 1000 / p1.maxHP) / 10 : Math.floor(maxDamage * 48 / p1.maxHP);
		result.damageText = minDamage + "-" + maxDamage + " (" + minDisplay + " - " + maxDisplay + notation + ")";
		result.koChanceText = p2.moves[i].bp === 0 ? 'nice move' :
			getKOChanceText(result.damage, p2, p1, field.getSide(0), p2.moves[i], p2.moves[i].hits, p2.ability === 'Dream World');
		
		totalChip = 0;
		var chipText2 = '';
		healOrRecoil = false;
		if (p2.moves[i].category === "Focus" && p2.moves[i].bp > 0 && p1.item === 'Thorn Charm') {
			chip = Math.floor(p2.maxHP / 8);
			if (chip === 0) {
				chip = 1;
			}
			chip = (chip / p2.maxHP) * 100;
			chip = Math.round(chip * 10) / 10;
			if (p2.ability === 'Imposing Stance') {
				chip = 0;
			}
			totalChip += chip;
			chip = 0;
		}
		if (p2.moves[i].bp > 0 && p2.item === 'Straw Doll') {
			chip = Math.floor(p2.maxHP / 10);
			if (chip === 0) {
				chip = 1;
			}
			chip = (chip / p2.maxHP) * 100;
			chip = Math.round(chip * 10) / 10;
			if (p1.ability === 'Imposing Stance') {
				chip = 0;
			}
			totalChip += chip;
			chip = 0;
		}
		if (p2.moves[i].bp < 71 && p2.moves[i].bp > 0 && p1.item === 'Small Bit') {
			chip = (Math.floor(p2.maxHP / 8) * p2.moves[i].hits);
			if (chip === 0) {
				chip = 1;
			}
			chip = (chip / p2.maxHP) * 100;
			chip = Math.round(chip * 10) / 10;
			if (p2.ability === 'Imposing Stance') {
				chip = 0;
			}
			totalChip += chip;
			chip = 0;
		}
		if (p2.moves[i].isEN === undefined && p2.moves[i].bp > 0 && p1.item === 'Counter Bit') {
			chip = (Math.floor(p2.maxHP / 8) * p2.moves[i].hits);
			if (chip === 0) {
				chip = 1;
			}
			chip = (chip / p2.maxHP) * 100;
			chip = Math.round(chip * 10) / 10;
			if (p2.ability === 'Imposing Stance') {
				chip = 0;
			}
			totalChip += chip;
			chip = 0;
		}
		if (p2.moves[i].isEN === true && p2.moves[i].bp > 0 && p1.item === 'Reflect Bit') {
			chip = (Math.floor(p2.maxHP / 8) * p2.moves[i].hits);
			if (chip === 0) {
				chip = 1;
			}
			chip = (chip / p2.maxHP) * 100;
			chip = Math.round(chip * 10) / 10;
			if (p2.ability === 'Imposing Stance') {
				chip = 0;
			}
			totalChip += chip;
			chip = 0;
		}
		if (p2.moves[i].bp > 99 && p2.moves[i].bp > 0 && p1.item === 'Giant Bit') {
			chip = (Math.floor(p2.maxHP / 8) * p2.moves[i].hits);
			if (chip === 0) {
				chip = 1;
			}
			chip = (chip / p2.maxHP) * 100;
			chip = Math.round(chip * 10) / 10;
			if (p2.ability === 'Imposing Stance') {
				chip = 0;
			}
			totalChip += chip;
			chip = 0;
		}
		if (p2.moves[i].bp > 89 && p2.moves[i].bp > 0 && p1.ability === 'Some Guts' || p1.ability === 'Karmic Retribution') {
			chip = (Math.floor(p2.maxHP / 8) * p2.moves[i].hits);
			if (chip === 0) {
				chip = 1;
			}
			chip = (chip / p2.maxHP) * 100;
			chip = Math.round(chip * 10) / 10;
			if (p2.ability === 'Imposing Stance') {
				chip = 0;
			}
			totalChip += chip;
			chip = 0;
		}
		if (p2.moves[i].isEN === undefined && p2.moves[i].bp > 0 && p1.ability === 'Counter Stance') {
			chip = (Math.floor(p2.maxHP / 8) * p2.moves[i].hits);
			if (chip === 0) {
				chip = 1;
			}
			chip = (chip / p2.maxHP) * 100;
			chip = Math.round(chip * 10) / 10;
			if (p2.ability === 'Imposing Stance') {
				chip = 0;
			}
			totalChip += chip;
			chip = 0;
		}
		if (p2.moves[i].isEN === true && p2.moves[i].bp > 0 && p1.ability === 'Reflect Guard') {
			chip = (Math.floor(p2.maxHP / 8) * p2.moves[i].hits);
			if (chip === 0) {
				chip = 1;
			}
			chip = (chip / p2.maxHP) * 100;
			chip = Math.round(chip * 10) / 10;
			if (p2.ability === 'Imposing Stance') {
				chip = 0;
			}
			totalChip += chip;
			chip = 0; 
		}
		if (p2.moves[i].bp > 0 && p2.ability === 'Full Power') {
			chip = Math.floor(p2.maxHP / 10);
			if (chip === 0) {
				chip = 1;
			}
			chip = (chip / p2.maxHP) * 100;
			chip = Math.round(chip * 10) / 10;
			if (p2.ability === 'Imposing Stance') {
				chip = 0;
			}
			totalChip += chip;
			chip = 0;
		}
		totalChip = Math.round(totalChip * 10) / 10;
		
		var recoveryText = '';
		var recoveryMultiplier = 1/2
		if (p2.moves[i].givesHealth === true) {
			var minRecovery = Math.floor((Math.min(minDamage, p1.curHP)) * recoveryMultiplier);
			if (minRecovery === 0) {
				minRecoilDamage = 0;
			}
			if (p2.ability === 'Overcompensate') {
				minRecovery *= 1.3
			}
			if (p2.item === 'Bandage') {
				minRecovery *= 1.3
			}
			minRecovery = (minRecovery / p2.maxHP) * 100;
			minRecovery = Math.round(minRecovery * 10) / 10;
			if (minDamage === 0) {
				minRecovery = 0;
			}
			
			var maxRecovery = Math.floor((Math.min(maxDamage, p1.curHP)) * recoveryMultiplier);
			if (maxRecovery === 0) {
				maxRecovery = 0;
			}
			if (p2.ability === 'Overcompensate') {
				maxRecovery *= 1.3
			}
			if (p2.item === 'Bandage') {
				maxRecovery *= 1.3
			}
			maxRecovery = (maxRecovery / p2.maxHP) * 100;
			maxRecovery = Math.round(maxRecovery * 10) / 10;
			if (maxDamage === 0) {
				maxRecovery = 0;
			}
			if (minRecovery > 100) {
				minRecovery = 100;
			}
			if (maxRecovery > 100) {
				maxRecovery = 100;
			}
			if (p1.ability === 'Bad Medicine' && maxRecovery > 0) {
				if (totalChip > 0) {
					healOrRecoil = true;
					minRecovery += totalChip;
					maxRecovery += totalChip;
					recoveryText = (' (' + minRecovery + ' - ' + maxRecovery + notation + ' recoil + chip)');
				} else {
					recoveryText = (' (' + minRecovery + ' - ' + maxRecovery + notation + ' recoil)');
				}
			} else {
				if (totalChip > 0 && maxRecovery > 0) {
					healOrRecoil = true;
					minRecovery -= totalChip;
					maxRecovery -= totalChip;
					minRecovery = Math.round(minRecovery * 10) / 10;
					maxRecovery = Math.round(maxRecovery * 10) / 10;
					recoveryText = (' (' + minRecovery + ' - ' + maxRecovery + notation + ' recovered after chip)');
				} else if (maxRecovery > 0) {
					recoveryText = (' (' + minRecovery + ' - ' + maxRecovery + notation + ' recovered)');
				}
			}
		}
		//recoil handler
		//code rewrite because the old one didn't work
		var recoilText = '';
		var recoilMultiplier = 1/3
		if (p2.moves[i].name === 'Spirit Rush') {
			recoilMultiplier = 1/4;
		} else if (p2.moves[i].name === 'Full Metal Crash') {
			recoilMultiplier = 1/2;
		}
		if (p2.moves[i].hasRecoil === 'number') {
			var minRecoilDamage = Math.floor((Math.min(minDamage, p1.curHP)) * recoilMultiplier);
			if (minRecoilDamage === 0) {
				minRecoilDamage = 1;
			}
			minRecoilDamage = (minRecoilDamage / p2.maxHP) * 100;
			minRecoilDamage = Math.round(minRecoilDamage * 10) / 10;
			if (minDamage === 0) {
				minRecoilDamage = 0;
			}
			
			var maxRecoilDamage = Math.floor((Math.min(maxDamage, p1.curHP)) * recoilMultiplier);
			if (maxRecoilDamage === 0) {
				maxRecoilDamage = 1;
			}
			maxRecoilDamage = (maxRecoilDamage / p2.maxHP) * 100;
			maxRecoilDamage = Math.round(maxRecoilDamage * 10) / 10;
			if (maxDamage === 0) {
				maxRecoilDamage = 0;
			}
			if (minRecoilDamage > 100) {
				minRecoilDamage = 100;
			}
			if (maxRecoilDamage > 100) {
				maxRecoilDamage = 100;
			}
			if (p2.ability === 'Recoil Offset' || p2.ability === 'Imposing Stance') {
				minRecoilDamage = 0;
				maxRecoilDamage = 0;
			}
			if (minRecoilDamage > 0) {
				healOrRecoil = true;
				recoilText = (' (' + minRecoilDamage + ' - ' + maxRecoilDamage + notation + ' recoil damage)');
				if (totalChip > 0) {
					minRecoilDamage += totalChip;
					maxRecoilDamage += totalChip;
					recoilText = (' (' + minRecoilDamage + ' - ' + maxRecoilDamage + notation + ' recoil + chip)');
				}
			}
		} else if (p2.moves[i].hasRecoil === 'crash') {
			var crashDamage = Math.floor(p2.maxHP / 2);
			if (crashDamage === 0) {
				crashDamage = 1;
			}
			crashDamage = (crashDamage / p2.maxHP) * 100;
			crashDamage = Math.round(crashDamage * 10) / 10;
			if (p2.ability === 'Imposing Stance') {
				crashDamage = 0;
			}
			if (crashDamage > 0) {
				healOrRecoil = true;
				recoilText = (' (' +  crashDamage + '%' + ' crash damage)');
				if (totalChip > 0) {
					recoilText = (' (' +  crashDamage + '%' + ' crash damage + ' + totalChip + '%' + ' chip)');
				}
			}
		}
		if (totalChip > 0 && minDamage > 0 && healOrRecoil === false) {
			chipText2 = (' (' +  totalChip + '%' + ' chip)');
		}
		var bestMove;
		$(resultLocations[1][i].move + " + label").text(p2.moves[i].name.replace("Hidden Power", "HP"));
		$(resultLocations[1][i].damage).text(minDisplay + " - " + maxDisplay + notation + recoveryText + recoilText + chipText2);
		if (fastestSide === "tie") {
			battling.sort(function () {
				return 0.5 - Math.random();
			});
			bestMove = battling[0].maxDamages[0].moveOrder;
			var chosenPokemon = battling[0] === p1 ? "0" : "1";
			bestResult = $(resultLocations[chosenPokemon][bestMove].move);
		} else {
			bestMove = battling[fastestSide].maxDamages[0].moveOrder;
			bestResult = $(resultLocations[fastestSide][bestMove].move);
		}
	}
	if ($('.locked-move').length) {
		bestResult = $('.locked-move');
	} else {
		stickyMoves.setSelectedMove(bestResult.prop("id"));
	}
	bestResult.prop("checked", true);
	bestResult.change();
	$("#resultHeaderL").text(p1.name + "'s Moves (select one to show detailed results)");
	$("#resultHeaderR").text(p2.name + "'s Moves (select one to show detailed results)");
}

$(".result-move").change(function () {
	if (damageResults) {
		var result = findDamageResult($(this));
		if (result) {
			$("#mainResult").text(result.description + ": " + result.damageText + " -- " + result.koChanceText);
			$("#damageValues").text("Possible damage amounts: (" + result.damage.join(", ") + ")");
		}
	}
});

function findDamageResult(resultMoveObj) {
	var selector = "#" + resultMoveObj.attr("id");
	for (var i = 0; i < resultLocations.length; i++) {
		for (var j = 0; j < resultLocations[i].length; j++) {
			if (resultLocations[i][j].move === selector) {
				return damageResults[i][j];
			}
		}
	}
}

var calculateAllMoves;

$(".gen").change(function () {
	switch (gen) {
	default:
		calculateAllMoves = CALCULATE_ALL_MOVES_ALL;
		break;
	}
});

$(".mode").change(function () {
	window.location.replace('honkalculate' + linkExtension + '?mode=' + $(this).attr("id"));
});

$(".notation").change(function () {
	calculate();
});

$(document).ready(function () {
	$(".calc-trigger").bind("change keyup", function () {
		setTimeout(calculate, 0);
	});
	calculate();
});
