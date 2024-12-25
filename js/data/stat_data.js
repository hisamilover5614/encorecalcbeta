var FA = "fa", FD = "fd", SA = "sa", SD = "sd", SP = "sp";
var STATS_ALL = [FA, FD, SA, SD, SP];

function CALC_HP_ALL(pupp) {
	var hp = pupp.find(".hp");
	var total;
	var base = ~~hp.find(".base").val();
	if (base === 1) {
		total = 1;
	} else {
		var level = ~~pupp.find(".level").val();
		var pp = ~~hp.find(".pp").val();
		var rank = ~~hp.find(".ranks").val();
		total = Math.floor((2 * (base + rank) + pp) * level / 100) + level + 10;
	}
	hp.find(".total").text(total);
	pupp.find(".max-hp").text(total);
	calcCurrentHP(pupp, total, ~~pupp.find(".percent-hp").val());
}

function CALC_STAT_ALL(pupp, statName) {
	var stat = pupp.find("." + statName);
	var level = ~~pupp.find(".level").val();
	var base = ~~stat.find(".base").val();
	var pp = ~~stat.find(".pp").val();
	var rank = ~~stat.find(".ranks").val();
	var mark = MARKS[pupp.find(".mark").val()] === statName ? 1.1 : 1;
	var total = Math.floor((Math.floor((2 * (base + rank) + pp) * level / 100) + 5) * mark);
	stat.find(".total").text(total);
}
