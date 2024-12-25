if (!Array.prototype.indexOf) {
	Array.prototype.indexOf = function (searchElement, fromIndex) { // eslint-disable-line no-extend-native
		var k;
		if (this == null) {
			throw new TypeError('"this" equals null or n is undefined');
		}
		var O = Object(this);
		var len = O.length >>> 0;
		if (len === 0) {
			return -1;
		}
		var n = +fromIndex || 0;
		if (Math.abs(n) === Infinity) {
			n = 0;
		}
		if (n >= len) {
			return -1;
		}
		k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);
		while (k < len) {
			if (k in O && O[k] === searchElement) {
				return k;
			}
			k++;
		}
		return -1;
	};
}

// input field validation
var bounds = {
	"level": [0, 100],
	"base": [1, 255],
	"pp": [0, 64],
	"ranks": [0, 15],
	"dvs": [0, 15],
	"move-bp": [0, 999]
};
for (var bounded in bounds) {
	attachValidation(bounded, bounds[bounded][0], bounds[bounded][1]);
}
function attachValidation(clazz, min, max) {
	$("." + clazz).keyup(function () {
		validate($(this), min, max);
	});
}
function validate(obj, min, max) {
	obj.val(Math.max(min, Math.min(max, ~~obj.val())));
}

// auto-calc stats and current HP on change
$(".level").keyup(function () {
	var poke = $(this).closest(".puppet-info");
	calcHP(poke);
	calcStats(poke);
});
$(".mark").bind("keyup change", function () {
	calcStats($(this).closest(".puppet-info"));
});
$(".hp .base, .hp .pp, .hp .ranks").bind("keyup change", function () {
	calcHP($(this).closest(".puppet-info"));
});
$(".fa .base, .fa .pp, .fa .ranks").bind("keyup change", function () {
	calcStat($(this).closest(".puppet-info"), 'fa');
});
$(".fd .base, .fd .pp, .fd .ranks").bind("keyup change", function () {
	calcStat($(this).closest(".puppet-info"), 'fd');
});
$(".sa .base, .sa .pp, .sa .ranks").bind("keyup change", function () {
	calcStat($(this).closest(".puppet-info"), 'sa');
});
$(".sd .base, .sd .pp, .sd .ranks").bind("keyup change", function () {
	calcStat($(this).closest(".puppet-info"), 'sd');
});
$(".sp .base, .sp .pp, .sp .ranks").bind("keyup change", function () {
	calcStat($(this).closest(".puppet-info"), 'sp');
});
$(".sl .base").keyup(function () {
	calcStat($(this).closest(".puppet-info"), 'sl');
});

function calcStats(poke) {
	for (var i = 0; i < STATS.length; i++) {
		calcStat(poke, STATS[i]);
	}
}

function calcCurrentHP(poke, max, percent) {
	var current = Math.ceil(percent * max / 100);
	poke.find(".current-hp").val(current);
	drawHealthBar(poke, max, current);
}
function calcPercentHP(poke, max, current) {
	var percent = Math.floor(100 * current / max);
	poke.find(".percent-hp").val(percent);
	drawHealthBar(poke, max, current);
}
function drawHealthBar(poke, max, current) {
	var fillPercent = Math.floor(100 * current / max);
	var fillColor = fillPercent > 50 ? "green" : fillPercent > 20 ? "yellow" : "red";

	var healthbar = poke.find(".hpbar");
	healthbar.addClass("hp-" + fillColor);
	var unwantedColors = ["green", "yellow", "red"];
	unwantedColors.splice(unwantedColors.indexOf(fillColor), 1);
	for (var i = 0; i < unwantedColors.length; i++) {
		healthbar.removeClass("hp-" + unwantedColors[i]);
	}
	healthbar.css("background", "linear-gradient(to right, " + fillColor + " " + fillPercent + "%, white 0%");
}
$(".current-hp").keyup(function () {
	var max = $(this).parent().children(".max-hp").text();
	validate($(this), 0, max);
	var current = $(this).val();
	calcPercentHP($(this).parent(), max, current);
});
$(".percent-hp").keyup(function () {
	var max = $(this).parent().children(".max-hp").text();
	validate($(this), 0, 100);
	var percent = $(this).val();
	calcCurrentHP($(this).parent(), max, percent);
});

$(".ability").bind("keyup change", function () {
	$(this).closest(".puppet-info").find(".move-hits").val($(this).val() === 'Skill Link' ? 5 : 3);
});

$("#p1 .ability").bind("keyup change", function () {
	autosetWeather($(this).val(), 0);
	autosetTerrain($(this).val(), 0);
});

var lastManualWeather = "";
var lastAutoWeather = ["", ""];
function autosetWeather(ability, i) {
	var currentWeather = $("input:checkbox[name='weather']:checked").val() || "No weather";
	if (lastAutoWeather.indexOf(currentWeather) === -1) {
		lastManualWeather = currentWeather;
		lastAutoWeather[1 - i] = "";
	}
	// weather input uses checkbox instead of radio, need to uncheck all first
	$("input:checkbox[name='weather']:checked").prop("checked", false);
	switch (ability) {
	case "Sanguine":
		lastAutoWeather[i] = "Aurora";
		$("#aurora").prop("checked", true);
		break;
	case "Melancholic":
		lastAutoWeather[i] = "Heavy Fog";
		$("#fog").prop("checked", true);
		break;
	case "Supine":
		lastAutoWeather[i] = "Sunshower";
		$("#sunshower").prop("checked", true);
		break;
	case "Choleric":
		lastAutoWeather[i] = "Dust Storm";
		$("#duststorm").prop("checked", true);
		break;
	case "Phlegmatic":
		lastAutoWeather[i] = "Calm";
		$("#calm").prop("checked", true);
		break;
	default:
		lastAutoWeather[i] = "";
		var newWeather = lastAutoWeather[1 - i] !== "" ? lastAutoWeather[1 - i] : lastManualWeather;
		if ("No weather" !== newWeather) {
			$("input:checkbox[name='weather'][value='" + newWeather + "']").prop("checked", true);
		}
		break;
	}
}

var lastManualTerrain = "";
var lastAutoTerrain = ["", ""];
function autosetTerrain(ability, i) {
	var currentTerrain = $("input:checkbox[name='terrain']:checked").val() || "No terrain";
	if (lastAutoTerrain.indexOf(currentTerrain) === -1) {
		lastManualTerrain = currentTerrain;
		lastAutoTerrain[1 - i] = "";
	}
	// terrain input uses checkbox instead of radio, need to uncheck all first
	$("input:checkbox[name='terrain']:checked").prop("checked", false);
	switch (ability) {
	case "Electric Surge":
		lastAutoTerrain[i] = "Electric";
		$("#electric").prop("checked", true);
		break;
	case "Grassy Surge":
		lastAutoTerrain[i] = "Grassy";
		$("#grassy").prop("checked", true);
		break;
	case "Misty Surge":
		lastAutoTerrain[i] = "Misty";
		$("#misty").prop("checked", true);
		break;
	case "Psychic Surge":
		lastAutoTerrain[i] = "Psychic";
		$("#psychic").prop("checked", true);
		break;
	default:
		lastAutoTerrain[i] = "";
		var newTerrain = lastAutoTerrain[1 - i] !== "" ? lastAutoTerrain[1 - i] : lastManualTerrain;
		if ("No terrain" !== newTerrain) {
			$("input:checkbox[name='terrain'][value='" + newTerrain + "']").prop("checked", true);
		}
		break;
	}
}

$("#p1 .item").bind("keyup change", function () {
	autosetStatus("#p1", $(this).val());
});

var lastManualStatus = {"#p1": ["None", "None"]};
var lastAutoStatus = {"#p1": ["None", "None"]};
function autosetStatus(p, item) {
	var teamside = p.substring(p.length - 1);
	var currentStatus = [$("input:checkbox[name='status" + teamside + "L']:checked").val(), $("input:checkbox[name='status" + teamside + "R']:checked").val()];
	if (currentStatus !== lastAutoStatus[p]) {
		lastManualStatus[p] = currentStatus;
	}
	if (item === "Burning Stone") {
		lastAutoStatus[p] = ["Burned", "Burned"];
		$("input:checkbox[name='status" + teamside + "L']").filter(function (i, e) { return $(e).val() === "Burned"; }).prop("checked", true);
		$("input:checkbox[name='status" + teamside + "L']").filter(function (i, e) { return $(e).val() !== "Burned"; }).prop("checked", false);
		$("input:checkbox[name='status" + teamside + "R']").filter(function (i, e) { return $(e).val() === "Burned"; }).prop("checked", true);
		$("input:checkbox[name='status" + teamside + "R']").filter(function (i, e) { return $(e).val() !== "Burned"; }).prop("checked", false);
		$(p + " .heavy-counter").show();
	} else if (item === "Wolfsbane Root") {
		lastAutoStatus[p] = ["Poisoned", "Poisoned"];
		$("input:checkbox[name='status" + teamside + "L']").filter(function (i, e) { return $(e).val() === "Poisoned"; }).prop("checked", true);
		$("input:checkbox[name='status" + teamside + "L']").filter(function (i, e) { return $(e).val() !== "Poisoned"; }).prop("checked", false);
		$("input:checkbox[name='status" + teamside + "R']").filter(function (i, e) { return $(e).val() === "Poisoned"; }).prop("checked", true);
		$("input:checkbox[name='status" + teamside + "R']").filter(function (i, e) { return $(e).val() !== "Poisoned"; }).prop("checked", false);
		$(p + " .heavy-counter").show();
	} else {
		lastAutoStatus[p] = ["None", "None"];
		if (currentStatus !== lastManualStatus[p] && lastManualStatus[p]) {
			$("input:checkbox[name='status" + teamside + "L']").filter(function (i, e) { return $(e).val() === lastManualStatus[p][0]; }).prop("checked", true);
			$("input:checkbox[name='status" + teamside + "L']").filter(function (i, e) { return $(e).val() !== lastManualStatus[p][0]; }).prop("checked", false);
			$("input:checkbox[name='status" + teamside + "R']").filter(function (i, e) { return $(e).val() === lastManualStatus[p][1]; }).prop("checked", true);
			$("input:checkbox[name='status" + teamside + "R']").filter(function (i, e) { return $(e).val() !== lastManualStatus[p][1]; }).prop("checked", false);
			if (lastManualStatus[p][0] === lastManualStatus[p][1] && ["Poisoned", "Burned"].indexOf(lastManualStatus[p][0]) !== -1) {
				$(p + " .heavy-counter").show();
			} else {
				$(p + " .heavy-counter").hide();
			}
		}
	}
}

var lockerMove = "";
// auto-update move details on select
$(".move-selector").change(function () {
	var moveName = $(this).val();
	var move = moves[moveName] || moves['(No Move)'];
	var moveGroupObj = $(this).parent();
	moveGroupObj.children(".move-bp").val(move.bp);
	moveGroupObj.children(".move-type").val(move.type);
	moveGroupObj.children(".move-cat").val(move.category);
	moveGroupObj.children(".move-crit").prop("checked", move.alwaysCrit === true);
	moveGroupObj.children(".metronome").prop("disabled", !!move.dropsStats);
	if (move.isMultiHit) {
		moveGroupObj.children(".stat-drops").hide();
		moveGroupObj.children(".move-hits").show();
		moveGroupObj.children(".move-hits").val($(this).closest(".puppet-info").find(".ability").val() === 'Salvo' ? 5 : 3);
	} else if (move.dropsStats) {
		moveGroupObj.children(".move-hits").hide();
		moveGroupObj.children(".stat-drops").show();
	} else {
		moveGroupObj.children(".move-hits").hide();
		moveGroupObj.children(".stat-drops").hide();
	}
	moveGroupObj.children(".move-z").prop("checked", false);
});

$(".item").change(function () {
	var itemName = $(this).val();
	var $metronomeControl = $(this).closest('.puppet-info').find('.metronome');
	if (itemName === "Metronome") {
		$metronomeControl.show();
	} else {
		$metronomeControl.hide();
	}
});

// auto-update set details on select
$(".set-selector").change(function () {
	var fullSetName = $(this).val();
	var puppetName, setName;
	puppetName = fullSetName.substring(0, fullSetName.lastIndexOf(" ("));
	setName = fullSetName.substring(fullSetName.lastIndexOf("(") + 1, fullSetName.lastIndexOf(")"));
	var puppet = puppetdex[puppetName];
	if (puppet) {
		var puppObj = $(this).closest(".puppet-info");
		if (stickyMoves.getSelectedSide() === puppObj.prop("id")) {
			stickyMoves.clearStickyMove();
		}
		puppObj.find(".type1").val(puppet.t1);
		puppObj.find(".type2").val(puppet.t2);
		puppObj.find(".hp .base").val(puppet.bs.hp);
		var i;
		for (i = 0; i < STATS.length; i++) {
			puppObj.find("." + STATS[i] + " .base").val(puppet.bs[STATS[i]]);
		}
		puppObj.find(".cost").val(puppet.c);
		puppObj.find(".boost").val(0);
		puppObj.find(".percent-hp").val(100);
		puppObj.find(".status").val("Healthy");
		$(".status").change();
		var moveObj;
		var abilityObj = puppObj.find(".ability");
		var itemObj = puppObj.find(".item");
		if (puppetName in setdex && setName in setdex[puppetName]) {
			var set = setdex[puppetName][setName];
			puppObj.find(".level").val(set.level);
			puppObj.find(".hp .pp").val((set.pp && set.pp.hp !== undefined) ? set.pp.hp : 0);
			puppObj.find(".hp .ranks").val((set.ranks && set.ranks.hp !== undefined) ? set.ranks.hp : 15);
			puppObj.find(".hp .dvs").val((set.dvs && set.dvs.hp !== undefined) ? set.dvs.hp : 15);
			for (i = 0; i < STATS.length; i++) {
				puppObj.find("." + STATS[i] + " .pp").val((set.pp && set.pp[STATS[i]] !== undefined) ? set.pp[STATS[i]] : 0);
				puppObj.find("." + STATS[i] + " .ranks").val((set.ranks && set.ranks[STATS[i]] !== undefined) ? set.ranks[STATS[i]] : 15);
				puppObj.find("." + STATS[i] + " .dvs").val((set.dvs && set.dvs[STATS[i]] !== undefined) ? set.dvs[STATS[i]] : 15);
			}
			setSelectValueIfValid(puppObj.find(".mark"), set.mark, "Red");
			setSelectValueIfValid(abilityObj, set.ability, "");
			setSelectValueIfValid(itemObj, set.item, "");
			for (i = 0; i < 4; i++) {
				moveObj = puppObj.find(".move" + (i + 1) + " select.move-selector");
				setSelectValueIfValid(moveObj, set.moves[i], "(No Move)");
				moveObj.change();
			}
		} else {
			puppObj.find(".level").val(50);
			puppObj.find(".hp .pp").val(0);
			puppObj.find(".hp .ranks").val(15);
			puppObj.find(".hp .dvs").val(15);
			for (i = 0; i < STATS.length; i++) {
				puppObj.find("." + STATS[i] + " .pp").val(0);
				puppObj.find("." + STATS[i] + " .ranks").val(15);
				puppObj.find("." + STATS[i] + " .dvs").val(15);
			}
			puppObj.find(".mark").val("Red");
			setSelectValueIfValid(abilityObj, puppet.ab, "");
			itemObj.val("");
			for (i = 0; i < 4; i++) {
				moveObj = puppObj.find(".move" + (i + 1) + " select.move-selector");
				moveObj.val("(No Move)");
				moveObj.change();
			}
		}
		if (typeof getSelectedTiers === "function") { // doesn't exist when in 1vs1 mode
			var format = getSelectedTiers()[0];
			if (format === "LC") puppObj.find(".level").val(5);
			if (_.startsWith(format, "VGC")) puppObj.find(".level").val(50);
		}
		var formeObj = $(this).siblings().find(".forme").parent();
		itemObj.prop("disabled", false);
		if (puppet.formes) {
			showFormes(formeObj, setName, puppetName, puppet);
		} else {
			formeObj.hide();
		}
		calcHP(puppObj);
		calcStats(puppObj);
		abilityObj.change();
		itemObj.change();
		if (puppet.gender === "genderless") {
			puppObj.find(".gender").parent().hide();
			puppObj.find(".gender").val("");
		} else puppObj.find(".gender").parent().show();
	}
});

function showFormes(formeObj, setName, puppetName, puppet) {
	var defaultForme = 0;
	var formeOptions = getSelectOptions(puppet.formes, false, defaultForme);
	formeObj.children("select").find("option").remove().end().append(formeOptions).change();
	formeObj.show();
}

function setSelectValueIfValid(select, value, fallback) {
	select.val(select.children("option[value='" + value + "']").length ? value : fallback);
}

$(".forme").change(function () {
	var altForme = puppetdex[$(this).val()],
		container = $(this).closest(".info-group").siblings(),
		fullSetName = container.find(".select2-chosen").first().text(),
		puppetName = fullSetName.substring(0, fullSetName.lastIndexOf(" (")),
		setName = fullSetName.substring(fullSetName.lastIndexOf("(") + 1, fullSetName.lastIndexOf(")"));

	$(this).parent().siblings().find(".type1").val(altForme.t1);
	$(this).parent().siblings().find(".type2").val(altForme.t2 ? altForme.t2 : "");
	$(this).parent().siblings().find(".cost").val(altForme.c);

	for (var i = 0; i < STATS.length; i++) {
		var baseStat = container.find("." + STATS[i]).find(".base");
		baseStat.val(altForme.bs[STATS[i]]);
		baseStat.keyup();
	}
	var chosenSet = {}; //bugfix (can't believe this wasn't here in the initial code lmao)
	if (setdex[puppetName]) {
		chosenSet = setdex[puppetName][setName];
	}
	if (abilities.indexOf(altForme.ab) !== -1) {
		container.find(".ability").val(altForme.ab);
	} else {
		container.find(".ability").val(chosenSet.ability);
	}
	container.find(".ability").keyup();
	container.find(".item").prop("disabled", false);
});


function Puppet(puppInfo) {
	if (typeof puppInfo === "string") { // in this case, puppInfo is the id of an individual setOptions value whose moveset's tier matches the selected tier(s)
		console.log("call remake");
		console.log(JSON.stringify(puppInfo));
		this.name = puppInfo.substring(0, puppInfo.lastIndexOf(" ("));
		var setName = puppInfo.substring(puppInfo.lastIndexOf("(") + 1, puppInfo.lastIndexOf(")"));
		var puppet = puppetdex[this.name];
		this.type1 = puppet.t1;
		this.type2 = (puppet.t2 && typeof puppet.t2 !== "undefined") ? puppet.t2 : "";
		this.rawStats = [];
		this.boosts = [];
		this.stats = [];
		this.pp = [];

		var set = setdex[this.name][setName];
		this.level = set.level;
		this.HPPP = (set.pp && typeof set.pp.hp !== "undefined") ? set.pp.hp : 0;
		if (puppet.bs.hp === 1) {
			this.maxHP = 1;
		} else {
			var HPRank = 15;
			this.maxHP = ~~((puppet.bs.hp * 2 + HPRank + ~~(this.HPPP / 4)) * this.level / 100) + this.level + 10;
		}
		this.curHP = this.maxHP;
		this.mark = set.mark;
		for (var i = 0; i < STATS.length; i++) {
			var stat = STATS[i];
			this.boosts[stat] = 0;
			this.pp[stat] = (set.pp && typeof set.pp[stat] !== "undefined") ? set.pp[stat] : 0;
			var rank = (set.ranks && typeof set.ranks[stat] !== "undefined") ? set.ranks[stat] : 15;
			var mark = MARKS[this.mark] === stat ? 1.1 : 1;
			this.rawStats[stat] = ~~((~~((puppet.bs[stat] * 2 + rank + ~~(this.pp[stat] / 4)) * this.level / 100) + 5) * mark);
		}
		this.ability = (set.ability && typeof set.ability !== "undefined") ? set.ability :
			           (puppet.ab && typeof puppet.ab !== "undefined") ? puppet.ab : "";
		this.item = (set.item && typeof set.item !== "undefined") ? set.item : "";
		this.status = ["None", "None"];
		this.heavyCounter = 0;
		this.moves = [];
		for (var i = 0; i < 4; i++) {
			var moveName = set.moves[i];
			var defaultDetails = moves[moveName] || moves['(No Move)'];
			this.moves.push($.extend({}, defaultDetails, {
				name: (defaultDetails.bp === 0) ? "(No Move)" : moveName,
				bp: defaultDetails.bp,
				type: defaultDetails.type,
				category: defaultDetails.category,
				acc100: defaultDetails.acc100,
				alwaysHits: defaultDetails.alwaysHits,
				defenseStat: defaultDetails.defenseStat,
				isCrit: !!defaultDetails.alwaysCrit,
				hits: defaultDetails.isMultiHit ? ((this.ability === "Salvo") ? 5 : 3) : defaultDetails.isTwoHit ? 2 : 1,
				usedTimes: defaultDetails.usedTimes
			}));
		}
		this.cost = puppet.c;
	} else {
		var setName = puppInfo.find("input.set-selector").val();
		var teamside = puppInfo.selector.substring(puppInfo.selector.length - 1);
		if (setName.indexOf("(") === -1) {
			this.name = setName;
		} else {
			var puppetName = setName.substring(0, setName.lastIndexOf(" ("));
			this.name = (puppetdex[puppetName].formes) ? puppInfo.find(".forme").val() : puppetName;
		}
		this.type1 = puppInfo.find(".type1").val();
		this.type2 = puppInfo.find(".type2").val();
		this.level = ~~puppInfo.find(".level").val();
		this.maxHP = ~~puppInfo.find(".hp .total").text();
		this.curHP = ~~puppInfo.find(".current-hp").val();
		this.HPPP = ~~puppInfo.find(".hp .pp").val();
		this.rawStats = [];
		this.boosts = [];
		this.stats = [];
		this.pp = [];
		for (var i = 0; i < STATS.length; i++) {
			this.rawStats[STATS[i]] = ~~puppInfo.find("." + STATS[i] + " .total").text();
			this.boosts[STATS[i]] = ~~puppInfo.find("." + STATS[i] + " .boost").val();
			this.pp[STATS[i]] = ~~puppInfo.find("." + STATS[i] + " .pp").val();
		}
		this.mark = puppInfo.find(".mark").val();
		this.ability = puppInfo.find(".ability").val();
		this.item = puppInfo.find(".item").val();
		this.status = ["None", "None"];
		if ($("input:checkbox[name='status" + teamside + "L']:checked").val()) {
			this.status[0] = $("input:checkbox[name='status" + teamside + "L']:checked").val();
		}
		if ($("input:checkbox[name='status" + teamside + "R']:checked").val()) {
			this.status[1] = $("input:checkbox[name='status" + teamside + "R']:checked").val();
		}
		this.heavyCounter = this.status[0] === this.status[1] && ["Poisoned", "Burned"].indexOf(this.status[0]) !== -1 ? ~~puppInfo.find(".heavy-counter").val() : 0;
		this.moves = [
			getMoveDetails(puppInfo.find(".move1"), this.item),
			getMoveDetails(puppInfo.find(".move2"), this.item),
			getMoveDetails(puppInfo.find(".move3"), this.item),
			getMoveDetails(puppInfo.find(".move4"), this.item)
		];
		this.cost = +puppInfo.find(".cost").val();
		this.gender = puppInfo.find(".gender").is(":visible") ? puppInfo.find(".gender").val() : "genderless";
	}

	this.hasType = function (type) {
		return this.type1 === type || this.type2 === type;
	};
}

function getMoveDetails(moveInfo, item) {
	var moveName = moveInfo.find("select.move-selector").val();
	var defaultDetails = moves[moveName];
	var isZMove = gen >= 7 && moveInfo.find("input.move-z").prop("checked");

	return $.extend({}, defaultDetails, {
		name: moveName,
		bp: ~~moveInfo.find(".move-bp").val(),
		type: moveInfo.find(".move-type").val(),
		category: moveInfo.find(".move-cat").val(),
		acc100: defaultDetails.acc100,
		alwaysHits: defaultDetails.alwaysHits,
		defenseStat: defaultDetails.defenseStat,
		isCrit: moveInfo.find(".move-crit").prop("checked"),
		hits: defaultDetails.isMultiHit ? ~~moveInfo.find(".move-hits").val() : defaultDetails.isTwoHit ? 2 : 1,
		usedTimes: defaultDetails.dropsStats ? ~~moveInfo.find(".stat-drops").val() : 1,
		metronomeCount: moveInfo.find(".metronome").is(':visible') ? ~~moveInfo.find(".metronome").val() : 1
	});
}

function Field() {
	var format = $("input:radio[name='format']:checked").val();
	var isST = [$("#stL").prop("checked"), $("#stR").prop("checked")];
	var weather = ($("input:checkbox[name='weather']:checked").val()) ? $("input:checkbox[name='weather']:checked").val() : "";
	var mines = [~~$("input:radio[name='minesL']:checked").val(), ~~$("input:radio[name='minesR']:checked").val()];
	var terrain = ($("input:checkbox[name='terrain']:checked").val()) ? $("input:checkbox[name='terrain']:checked").val() : "";
	var isFieldProtect = [$("#fieldProtectL").prop("checked"), $("#fieldProtectR").prop("checked")];
	var isFieldBarrier = [$("#fieldBarrierL").prop("checked"), $("#fieldBarrierR").prop("checked")];
	var isProtected = [$("#protectL").prop("checked"), $("#protectR").prop("checked")];
	var isSeeded = [$("#drainSeedL").prop("checked"), $("#drainSeedR").prop("checked")];
	var isCursed = [$("#shinigamiL").prop("checked"), $("#shinigamiR").prop("checked")];
	var isReversed = [$("#reverseL").prop("checked"), $("#reverseR").prop("checked")];
	var isGhost = [$("#ghostChaseL").prop("checked"), $("#ghostChaseR").prop("checked")];

	this.getWeather = function () {
		return weather;
	};
	this.getTerrain = function () {
		return terrain;
	};
	this.clearWeather = function () {
		weather = "";
	};
	this.clearTerrain = function () {
		terrain = "";
	};
	this.getSide = function (i) {
		return new Side(format, terrain, weather, isST[i], mines[i], isFieldProtect[i], isFieldBarrier[i], isProtected[i], isSeeded[1 - i], isSeeded[i], isCursed[i], isReversed[i], isGhost[i]);
	};
}

function Side(format, terrain, weather, isST, mines, isFieldProtect, isFieldBarrier, isProtected, isAttackerSeeded, isDefenderSeeded, isCursed, isReversed, isGhost) {
	this.format = format;
	this.terrain = terrain;
	this.weather = weather;
	this.isST = isST;
	this.mines = mines;
	this.isFieldProtect = isFieldProtect;
	this.isFieldBarrier = isFieldBarrier;
	this.isProtected = isProtected;
	this.isAttackerSeeded = isAttackerSeeded;
	this.isDefenderSeeded = isDefenderSeeded;
	this.isCursed = isCursed;
	this.isReversed = isReversed;
	this.isGhost = isGhost;
}

var gen, genWasChanged, notation, puppetdex, setdex, typeChart, moves, abilities, items, STATS, calcHP, calcStat;
$(".gen").change(function () {
	gen = ~~$(this).val() || 9;
	genWasChanged = true;
	switch (gen) {
	//Encore
	default:
		puppetdex = PUPPETDEX_ENC;
		setdex = SETDEX_ENC;
		typeChart = TYPE_CHART_YNK;
		moves = MOVES_ENC;
		items = ITEMS_ENC;
		abilities = ABILITIES_ENC;
		STATS = STATS_ALL;
		calcHP = CALC_HP_ALL;
		calcStat = CALC_STAT_ALL;
		break;
	//-Extended-
	case 7:
		puppetdex = PUPPETDEX_YNK;
		setdex = SETDEX_YNK;
		typeChart = TYPE_CHART_YNK;
		moves = MOVES_YNK;
		items = ITEMS_YNK;
		abilities = ABILITIES_YNK;
		STATS = STATS_ALL;
		calcHP = CALC_HP_ALL;
		calcStat = CALC_STAT_ALL;
		break;
	//Shard of Dreams
	case 6:
		puppetdex = PUPPETDEX_SOD;
		setdex = SETDEX_SOD;
		typeChart = TYPE_CHART_YNK;
		moves = MOVES_SOD;
		items = ITEMS_SOD;
		abilities = ABILITIES_SOD;
		STATS = STATS_ALL;
		calcHP = CALC_HP_ALL;
		calcStat = CALC_STAT_ALL;
		break;
	//Basegame
	case 5:
		puppetdex = PUPPETDEX_BASE;
		setdex = SETDEX_YNK;
		typeChart = TYPE_CHART_BASE;
		moves = MOVES_BASE;
		items = ITEMS_BASE;
		abilities = ABILITIES_BASE;
		STATS = STATS_ALL;
		calcHP = CALC_HP_ALL;
		calcStat = CALC_STAT_ALL;
		break;
	//FanChara
	case 8:
		puppetdex = PUPPETDEX_FAN;
		setdex = SETDEX_YNK;
		typeChart = TYPE_CHART_YNK;
		moves = MOVES_YNK;
		items = ITEMS_YNK;
		abilities = ABILITIES_FAN;
		STATS = STATS_ALL;
		calcHP = CALC_HP_ALL;
		calcStat = CALC_STAT_ALL;
		break;
	//Encore
	case 9:
		puppetdex = PUPPETDEX_ENC;
		setdex = SETDEX_ENC;
		typeChart = TYPE_CHART_YNK;
		moves = MOVES_ENC;
		items = ITEMS_ENC;
		abilities = ABILITIES_ENC;
		STATS = STATS_ALL;
		calcHP = CALC_HP_ALL;
		calcStat = CALC_STAT_ALL;
		break;
	}
	clearField();
	$("#importedSets").prop("checked", false);
	loadDefaultLists();
	$(".gen-specific.g" + gen).show();
	$(".gen-specific").not(".g" + gen).hide();
	var typeOptions = getSelectOptions(Object.keys(typeChart));
	$("select.type1, select.move-type").find("option").remove().end().append(typeOptions);
	$("select.type2").find("option").remove().end().append("<option value=\"\">(none)</option>" + typeOptions);
	var moveOptions = getSelectOptions(Object.keys(moves), true);
	$("select.move-selector").find("option").remove().end().append(moveOptions);
	var abilityOptions = getSelectOptions(abilities, true);
	$("select.ability").find("option").remove().end().append("<option value=\"\">(other)</option>" + abilityOptions);
	var itemOptions = getSelectOptions(items, true);
	$("select.item").find("option").remove().end().append("<option value=\"\">(none)</option>" + itemOptions);

	$(".set-selector").val(getSetOptions()[gen < 3 ? 3 : 1].id);
	$(".set-selector").change();
});

$(".notation").change(function () {
	notation = $(this).val();
});

function clearField() {
	$("#singles-format").prop("checked", true);
	$("#clear").prop("checked", true);
	$("#stL").prop("checked", false);
	$("#stR").prop("checked", false);
	$("#minesL0").prop("checked", true);
	$("#minesR0").prop("checked", true);
	$("#fieldProtectL").prop("checked", false);
	$("#fieldProtectR").prop("checked", false);
	$("#fieldBarrierL").prop("checked", false);
	$("#fieldBarrierR").prop("checked", false);
	$("#protectL").prop("checked", false);
	$("#protectR").prop("checked", false);
	$("#drainSeedL").prop("checked", false);
	$("#drainSeedR").prop("checked", false);
	$("#shinigamiL").prop("checked", false);
	$("#shinigamiR").prop("checked", false);
	$("#reversedL").prop("checked", false);
	$("#reversedR").prop("checked", false);
	$("#ghostChaseL").prop("checked", false);
	$("#ghostChaseR").prop("checked", false);
	$("input:checkbox[name='weather']").prop("checked", false);
	$("input:checkbox[name='terrain']").prop("checked", false);
}

function getSetOptions(sets) {
	var setsHolder = sets;
	if (setsHolder === undefined) {
		setsHolder = puppetdex;
	}
	var pokeNames = Object.keys(setsHolder);
	pokeNames.sort();
	var setOptions = [];
	var idNum = 0;
	for (var i = 0; i < pokeNames.length; i++) {
		var pokeName = pokeNames[i];
		setOptions.push({
			puppet: pokeName,
			text: pokeName
		});
		if (pokeName in setdex) {
			var setNames = Object.keys(setdex[pokeName]);
			for (var j = 0; j < setNames.length; j++) {
				var setName = setNames[j];
				setOptions.push({
					puppet: pokeName,
					set: setName,
					text: pokeName + " (" + setName + ")",
					id: pokeName + " (" + setName + ")",
					isCustom: setdex[pokeName][setName].isCustomSet,
					nickname: setdex[pokeName][setName].nickname || ""
				});
			}
		}
		setOptions.push({
			puppet: pokeName,
			set: "Blank Set",
			text: pokeName + " (Blank Set)",
			id: pokeName + " (Blank Set)"
		});
	}
	return setOptions;
}

function getSelectOptions(arr, sort) {
	if (sort) {
		arr.sort();
	}
	var r = '';
	for (var i = 0; i < arr.length; i++) {
		r += '<option value="' + arr[i] + '">' + arr[i] + '</option>';
	}
	return r;
}
var stickyMoves = (function () {
	var lastClicked = 'resultMoveL1';
	$(".result-move").click(function () {
		if (this.id === lastClicked) {
			$(this).toggleClass("locked-move");
		} else {
			$('.locked-move').removeClass('locked-move');
		}
		lastClicked = this.id;
	});

	return {
		clearStickyMove: function () {
			lastClicked = null;
			$('.locked-move').removeClass('locked-move');
		},
		setSelectedMove: function (slot) {
			lastClicked = slot;
		},
		getSelectedSide: function () {
			if (lastClicked) {
				if (lastClicked.indexOf('resultMoveL') !== -1) {
					return 'p1';
				} else if (lastClicked.indexOf('resultMoveR') !== -1) {
					return 'p2';
				}
			}
			return null;
		}
	};
})();

function isGrounded(puppInfo) {
	return (
		puppInfo.find(".type1").val() !== "Wind" &&
        puppInfo.find(".type2").val() !== "Wind" &&
        puppInfo.find(".ability").val() !== "Air Cushion" &&
        puppInfo.find(".item").val() !== "Floating Stone"
	);
}

function handleWeatherExclusivity() {
	var className = $(this).prop("className");
	className = className.substring(0, className.indexOf(" "));
	switch (className) {
	case "type1":
	case "type2":
	case "item":
	case "ability":
		break;
	default:
		$("input:checkbox[name='weather']").not(this).prop("checked", false);
		break;
	}
}
function handleTerrainExclusivity() {
	var className = $(this).prop("className");
	className = className.substring(0, className.indexOf(" "));
	switch (className) {
	case "type1":
	case "type2":
	case "item":
	case "ability":
		break;
	default:
		$("input:checkbox[name='terrain']").not(this).prop("checked", false);
		break;
	}
}
function handleStatusSlots() {
	var className = $(this).prop("className");
	className = className.substring(0, className.indexOf(" "));
	switch (className) {
	case "type1":
	case "type2":
	case "ability":
		break;
	case "item":
		break;
	default:
		var slot = $(this).prop("name");
		var slotPos = slot.substring(0, slot.length - 1);
		var teamside = slotPos.substring(slotPos.length - 1);
		var slotID = slot.substring(slot.length - 1);
		var clicked = $(this).val();
		if (["Blinded", "Afraid"].indexOf(clicked) !== -1) { //Special cases: can only occupy one slot. TODO: Implement base-game Weakened case
			if (slotID === "L" ? $("input:checkbox[name='" + slotPos + "R']:checked").val() === clicked : $("input:checkbox[name='" + slotPos + "L']:checked").val() === clicked) {
				//console.log("trying to uncheck the correct thing in " + slot);
				$("input:checkbox[name='" + slot + "']").filter(this).prop("checked", false);
			} else {
				//console.log("trying to uncheck everything in " + slot);
				$("input:checkbox[name='" + slot + "']").not(this).prop("checked", false);
			}
		} else if (clicked === "Stopped") { //Special case: must occupy both slots
			$("input:checkbox[name='" + slot + "']").not(this).prop("checked", false);
			$("input:checkbox[name='" + slotPos + (slotID === "L" ? "R']" : "L']")).prop("checked", false);
			$("input:checkbox[name='" + slotPos + (slotID === "L" ? "R']" : "L']")).filter(function (i, e) { return $(e).val() === "Stopped"; }).prop("checked", true);
		} else {
			$("input:checkbox[name='" + slot + "']").not(this).prop("checked", false);
		}
		//Handle only one slot being Stopped, which would only happen if another option was selected or Stopped was deselected
		if ($("input:checkbox[name='" + slotPos + "L']:checked").val() === "Stopped" ? $("input:checkbox[name='" + slotPos + "R']:checked").val() !== "Stopped" : $("input:checkbox[name='" + slotPos + "R']:checked").val() === "Stopped") {
			$("input:checkbox[name='" + slotPos + (slotID === "L" ? "R']" : "L']")).prop("checked", false);
		}
		//Handle the right slot being the only one selected, which isn't possible ingame
		if (!($("input:checkbox[name='" + slotPos + "L']:checked").val()) && $("input:checkbox[name='" + slotPos + "R']:checked").val()) {
			$("input:checkbox[name='" + slotPos + "L']").filter(function (i, e) { return $(e).val() === $("input:checkbox[name='" + slotPos + "R']:checked").val(); }).prop("checked", true);
			$("input:checkbox[name='" + slotPos + "R']").prop("checked", false);
		}

		//Handle Badly Poisoned/Burned
		if ($("input:checkbox[name='" + slotPos + "L']:checked").val() === $("input:checkbox[name='" + slotPos + "R']:checked").val() && ["Poisoned", "Burned"].indexOf($("input:checkbox[name='" + slotPos + "L']:checked").val()) !== -1) {
			$("#p" + teamside + " .heavy-counter").show();
		} else {
			$("#p" + teamside + " .heavy-counter").hide();
		}
		break;
	}
}

function loadDefaultLists() {
	$(".set-selector").select2({
		formatResult: function (object) {
			return object.set ? ("&nbsp;&nbsp;&nbsp;" + object.set) : ("<b>" + object.text + "</b>");
		},
		query: function (query) {
			var pageSize = 30;
			var results = _.filter(getSetOptions(), function (option) {
				var pokeName = option.puppet.toUpperCase();
				return !query.term || query.term.toUpperCase().split(" ").every(function (term) {
					return pokeName.indexOf(term) === 0 || pokeName.indexOf("-" + term) >= 0 || pokeName.indexOf(" " + term) >= 0;
				});
			});
			query.callback({
				results: results.slice((query.page - 1) * pageSize, query.page * pageSize),
				more: results.length >= query.page * pageSize
			});
		},
		initSelection: function (element, callback) {
			var data = getSetOptions()[gen < 3 ? 3 : 1];
			callback(data);
		}
	});
}

function bothPuppets(selector) {
	return "#p1 " + selector + ", #p2 " + selector;
}

function loadCustomList(id) {
	var customSets;
	var customSetsOptions = getSetOptions(customSets);
	$("#" + id + " .set-selector").select2({
		formatResult: function (set) {
			return (set.nickname ? set.puppet + " (" + set.nickname + ")" : set.id);
		},
		query: function (query) {
			var pageSize = 20;
			var results = _.filter(getSetOptions(), function (option) {
				if (option.isCustom) {
					return (option.nickname ? option.puppet + " (" + option.nickname + ")" : option.id);
				}
			});
			query.callback({
				results: results,
				more: results.length >= query.page * pageSize
			});
		},
		initSelection: function (element, callback) {
			var data = "";
			callback(data);
		}
	});
}

$(document).ready(function () {
	$("#gen9").prop("checked", true);
	$("#gen9").change();
	$("#percentage").prop("checked", true);
	$("#percentage").change();
	loadDefaultLists();
	$(".move-selector").select2({
		dropdownAutoWidth: true,
		matcher: function (term, text) {
			// 2nd condition is for Hidden Power
			return text.toUpperCase().indexOf(term.toUpperCase()) === 0 || text.toUpperCase().indexOf(" " + term.toUpperCase()) >= 0;
		}
	});
	$(".set-selector").val(getSetOptions()[gen < 3 ? 3 : 1].id);
	$(".set-selector").change();
	$(".weather-trigger").bind("change keyup", handleWeatherExclusivity);
	$(".terrain-trigger").bind("change keyup", handleTerrainExclusivity);
	$(".status-trigger").bind("change keyup", handleStatusSlots);
});
