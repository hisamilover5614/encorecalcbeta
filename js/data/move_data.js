var MOVES_YNK = {
	"(No Move)": {
		type: "None",
		category: "Status",
		bp: 0
	},
	"Death Match": {
		type: "Void",
		category: "Focus",
		bp: 1,
		acc100: true,
		isVoid: true
	},
	"Perfect Aim": {
		type: "Void",
		category: "Focus",
		bp: 1,
		accuracy: 30,
		isVoid: true
	},
	"Prank": {
		type: "Void",
		category: "Focus",
		bp: 1,
		accuracy: 90,
		isVoid: true
	},
	"Recompensate": {
		type: "Void",
		category: "Focus",
		bp: 1,
		acc100: true,
		isVoid: true
	},
	"Whole Being": {
		type: "Void",
		category: "Focus",
		bp: 125,
		acc100: true,
		isVoid: true
	},
	"Final Tribulation": {
		type: "Void",
		category: "Focus",
		bp: 100,
		acc100: true,
		isVoid: true
	},
	"Last Resort": {
		type: "Void",
		category: "Focus",
		bp: 140,
		acc100: true,
		isVoid: true
	},
	"Firm Spirit": {
		type: "Void",
		category: "Focus",
		isEN: true,
		bp: 130,
		acc100: true,
		willCharge: true,
		isVoid: true
	},
	"Overskill": {
		type: "Void",
		category: "Focus",
		isEN: true,
		bp: 120,
		acc100: true,
		isVoid: true,
		hasRecoil: "number"
	},
	"Spirit Rush": {
		type: "Void",
		category: "Focus",
		isEN: true,
		bp: 120,
		acc100: true,
		isVoid: true,
		hasRecoil: "number"
	},
	"Frenzied Joururi": {
		type: "Void",
		category: "Focus",
		bp: 100,
		acc100: true,
		isVoid: true
	},
	"Swallow Cut": {
		type: "Void",
		category: "Focus",
		bp: 80,
		acc100: true,
		priority: 2,
		isVoid: true
	},
	"Blow from Calamity": {
		type: "Void",
		category: "Focus",
		isEN: true,
		bp: 70,
		acc100: true,
		isVoid: true
	},
	"Retaliation": {
		type: "Void",
		category: "Focus",
		bp: 70,
		acc100: true,
		isVoid: true
	},
	"Piercing Stab": {
		type: "Void",
		category: "Focus",
		bp: 70,
		acc100: true,
		isVoid: true
	},
	"Struggle": {
		type: "Dream",
		category: "Focus",
		bp: 51,
		alwaysHits: true,
		hasRecoil: "number"
	},
	"Cruciform": {
		type: "Void",
		category: "Focus",
		bp: 50,
		accuracy: 90,
		isTwoHit: true,
		isVoid: true
	},
	"Raid": {
		type: "Void",
		category: "Focus",
		bp: 40,
		acc100: true,
		priority: 3,
		isVoid: true
	},
	"Tiger Rush": {
		type: "Void",
		category: "Focus",
		bp: 40,
		acc100: true,
		priority: 1,
		isVoid: true
	},
	"Shadow Rush": {
		type: "Void",
		category: "Focus",
		bp: 30,
		acc100: true,
		priority: 2,
		isVoid: true
	},
	"Danmaku Dance": {
		type: "Void",
		category: "Spread",
		isEN: true,
		bp: 120,
		acc100: true,
		willLock: true,
		isVoid: true
	},
	"Crossbow Assault": {
		type: "Void",
		category: "Spread",
		isEN: true,
		bp: 85,
		acc100: true,
		hasSecondaryEffect: true,
		isVoid: true
	},
	"Tri-Effect": {
		type: "Void",
		category: "Spread",
		isEN: true,
		bp: 80,
		acc100: true,
		hasSecondaryEffect: true,
		isVoid: true
	},
	"Destruction": {
		type: "Void",
		category: "Spread",
		isEN: true,
		bp: 70,
		acc100: true,
		hasSecondaryEffect: true,
		isVoid: true
	},
	"Volley": {
		type: "Void",
		category: "Spread",
		isEN: true,
		bp: 60,
		alwaysHits: true,
		isVoid: true
	},
	"Heavenly Blessing": {
		type: "Void",
		category: "Spread",
		isEN: true,
		bp: 50,
		acc100: true,
		isVoid: true
	},
	"Earthly Blessing": {
		type: "Void",
		category: "Spread",
		isEN: true,
		bp: 60,
		acc100: true,
		isVoid: true
	},
	"Random Shots": {
		type: "Void",
		category: "Spread",
		isEN: true,
		bp: 25,
		acc100: true,
		isMultiHit: true,
		isVoid: true
	},
	"False Courage": {
		type: "Void",
		category: "Status",
		bp: 0,
		priority: 4,
		isVoid: true
	},
	"Supernatural Border": {
		type: "Void",
		category: "Status",
		bp: 0,
		priority: 4,
		isVoid: true
	},
	"Magic Barrier": {
		type: "Void",
		category: "Status",
		bp: 0,
		isVoid: true
	},
	"Invoke Deity": {
		type: "Void",
		category: "Status",
		bp: 0,
		isVoid: true
	},
	"First Aid": {
		type: "Void",
		category: "Status",
		bp: 0,
		isVoid: true
	},
	"Resourcefulness": {
		type: "Void",
		category: "Status",
		bp: 0,
		isVoid: true
	},
	"Power Spot": {
		type: "Void",
		category: "Status",
		bp: 0,
		isVoid: true
	},
	"Unconscious Mind": {
		type: "Void",
		category: "Status",
		bp: 0,
		isVoid: true
	},
	"Inner Power": {
		type: "Void",
		category: "Status",
		bp: 0,
		isVoid: true
	},
	"Camouflage": {
		type: "Void",
		category: "Status",
		bp: 0,
		isVoid: true
	},
	"Imposing Air": {
		type: "Void",
		category: "Status",
		bp: 0,
		isVoid: true
	},
	"Offensive Trance": {
		type: "Void",
		category: "Status",
		bp: 0,
		isVoid: true
	},
	"Battle Preparation": {
		type: "Void",
		category: "Status",
		bp: 0,
		isVoid: true
	},
	"Foresee": {
		type: "Void",
		category: "Status",
		bp: 0,
		isVoid: true
	},
	"Confine": {
		type: "Void",
		category: "Status",
		bp: 0,
		acc100: true,
		isVoid: true
	},
	"Backup Plan": {
		type: "Void",
		category: "Status",
		bp: 0,
		isVoid: true
	},
	"Yin Energy": {
		type: "Dream",
		category: "Focus",
		isEN: true,
		bp: 55,
		acc100: true
	},
	"Guided Missile": {
		type: "Void",
		category: "Focus",
		isEN: true,
		bp: 80,
		accuracy: 85,
		hasSecondaryEffect: true,
		isVoid: true
	},
	"Yang Energy": {
		type: "Dream",
		category: "Spread",
		isEN: true,
		bp: 55,
		acc100: true
	},
	"Scatter Beam": {
		type: "Void",
		category: "Spread",
		isEN: true,
		bp: 65,
		acc100: true,
		isVoid: true
	},
	"Good Luck": {
		type: "Void",
		category: "Status",
		bp: 0,
		isVoid: true
	},
	"Shield Up": {
		type: "Void",
		category: "Status",
		bp: 0,
		isVoid: true
	},
	"Barrier Up": {
		type: "Void",
		category: "Status",
		bp: 0,
		isVoid: true
	},
	"Speedy Barrage": {
		type: "Void",
		category: "Focus",
		isEN: true,
		bp: 140,
		acc100: true,
		isVoid: true
	},
	"Dense Barrage": {
		type: "Void",
		category: "Spread",
		isEN: true,
		bp: 140,
		acc100: true,
		isVoid: true
	},
	"Overrun": {
		type: "Void",
		category: "Spread",
		isEN: true,
		bp: 100,
		acc100: true,
		isVoid: true
	},
	"Focused Movement": {
		type: "Void",
		category: "Status",
		bp: 0,
		isVoid: true
	},
	"Eternal Record": {
		type: "Void",
		category: "Status",
		bp: 0,
		isVoid: true
	},
	"Recollection": {
		type: "Void",
		category: "Status",
		bp: 0,
		priority: 3,
		isVoid: true
	},
	"Heavenly Influence": {
		type: "Void",
		category: "Focus",
		isEN: true,
		bp: 50,
		acc100: true,
		isVoid: true
	},
	"Earthly Influence": {
		type: "Void",
		category: "Focus",
		bp: 60,
		acc100: true,
		isVoid: true
	},
	"Conflagration": {
		type: "Fire",
		category: "Focus",
		isEN: true,
		bp: 1,
		acc100: true
	},
	"Purgatory Flicker": {
		type: "Fire",
		category: "Focus",
		bp: 120,
		acc100: true,
		hasSecondaryEffect: true,
		hasRecoil: "number"
	},
	"Holy Flare": {
		type: "Fire",
		category: "Focus",
		isEN: true,
		bp: 100,
		accuracy: 95,
		hasSecondaryEffect: true
	},
	"Burn Strike": {
		type: "Fire",
		category: "Focus",
		bp: 90,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Exploding Blaze": {
		type: "Fire",
		category: "Focus",
		isEN: true,
		bp: 80,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Fire Javelin": {
		type: "Fire",
		category: "Focus",
		bp: 80,
		acc100: true,
		hasSecondaryEffect: true,
		isJavelin: true
	},
	"Rising Sun": {
		type: "Fire",
		category: "Focus",
		bp: 50,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Phoenix Waltz": {
		type: "Fire",
		category: "Spread",
		bp: 150,
		acc100: true
	},
	"Deflagration": {
		type: "Fire",
		category: "Spread",
		isEN: true,
		bp: 150,
		acc100: true
	},
	"Volcano": {
		type: "Fire",
		category: "Spread",
		isEN: true,
		bp: 130,
		accuracy: 90,
		dropsStats: 2
	},
	"Inferno": {
		type: "Fire",
		category: "Spread",
		isEN: true,
		bp: 120,
		accuracy: 85,
		hasSecondaryEffect: true
	},
	"Blaze Spear": {
		type: "Fire",
		category: "Spread",
		bp: 100,
		accuracy: 90,
		hasSecondaryEffect: true
	},
	"Blaze of Tenmei": {
		type: "Fire",
		category: "Spread",
		bp: 100,
		accuracy: 50,
		hasSecondaryEffect: true
	},
	"Fire-Dragon Spiral": {
		type: "Fire",
		category: "Spread",
		isEN: true,
		bp: 100,
		accuracy: 75,
		partialTrapping: true
	},
	"Backdraft": {
		type: "Fire",
		category: "Spread",
		isEN: true,
		bp: 95,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Flashover": {
		type: "Fire",
		category: "Spread",
		isEN: true,
		bp: 80,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Flame Wave": {
		type: "Fire",
		category: "Spread",
		isEN: true,
		bp: 80,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Fire Wall": {
		type: "Fire",
		category: "Spread",
		isEN: true,
		bp: 65,
		acc100: true
	},
	"Fire-Snake Spiral": {
		type: "Fire",
		category: "Spread",
		isEN: true,
		bp: 20,
		acc100: true,
		partialTrapping: true
	},
	"Will-o'-Wisp": {
		type: "Fire",
		category: "Status",
		bp: 0,
		accuracy: 85
	},
	"Thermit": {
		type: "Fire",
		category: "Status",
		bp: 0,
		accuracy: 90
	},
	"Terrain [Suzaku]": {
		type: "Fire",
		category: "Status",
		bp: 0
	},
	"Fireball": {
		type: "Fire",
		category: "Focus",
		bp: 55,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Flame Pillar": {
		type: "Fire",
		category: "Focus",
		isEN: true,
		bp: 65,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Fiery Game": {
		type: "Fire",
		category: "Spread",
		isEN: true,
		bp: 55,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Flare": {
		type: "Fire",
		category: "Spread",
		isEN: true,
		bp: 70,
		accuracy: 90,
		hasSecondaryEffect: true
	},
	"Fire Sign": {
		type: "Fire",
		category: "Spread",
		isEN: true,
		bp: 60,
		acc100: true
	},
	"Rub Burn": {
		type: "Fire",
		category: "Status",
		bp: 0,
		acc100: true
	},
	"High Tide": {
		type: "Water",
		category: "Focus",
		bp: 120,
		accuracy: 85
	},
	"Waterfall Drop": {
		type: "Water",
		category: "Focus",
		bp: 100,
		acc100: true
	},
	"Flash Flood": {
		type: "Water",
		category: "Focus",
		bp: 80,
		acc100: true
	},
	"Ice Coffin": {
		type: "Water",
		category: "Focus",
		isEN: true,
		bp: 80,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Aqua Javelin": {
		type: "Water",
		category: "Focus",
		bp: 80,
		acc100: true,
		hasSecondaryEffect: true,
		isJavelin: true
	},
	"Reverse Splash": {
		type: "Water",
		category: "Focus",
		isEN: true,
		bp: 60,
		acc100: true
	},
	"Aquasonic": {
		type: "Water",
		category: "Spread",
		bp: 40,
		acc100: true,
		priority: 1
	},
	"Aqua Cutter": {
		type: "Water",
		category: "Focus",
		bp: 40,
		acc100: true,
		priority: 1
	},
	"Ice Gatling": {
		type: "Water",
		category: "Focus",
		bp: 15,
		acc100: true,
		priority: 1,
		isMultiHit: true
	},
	"Aqua Cannon": {
		type: "Water",
		category: "Spread",
		isEN: true,
		bp: 150,
		acc100: true
	},
	"Aqua Rake": {
		type: "Water",
		category: "Spread",
		isEN: true,
		bp: 150,
		acc100: true
	},
	"Cold Rain": {
		type: "Water",
		category: "Spread",
		isEN: true,
		bp: 120,
		accuracy: 80,
		hasSecondaryEffect: true
	},
	"Ice Age": {
		type: "Water",
		category: "Spread",
		isEN: true,
		bp: 95,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Frozen Prison": {
		type: "Water",
		category: "Spread",
		bp: 95,
		acc100: true
	},
	"Lazy Mist": {
		type: "Water",
		category: "Spread",
		isEN: true,
		bp: 80,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Geyser": {
		type: "Water",
		category: "Spread",
		bp: 60,
		acc100: true,
		alwaysCrit: true
	},
	"Slime Shot": {
		type: "Water",
		category: "Spread",
		bp: 55,
		acc100: true
	},
	"Veil of Water": {
		type: "Water",
		category: "Spread",
		isEN: true,
		bp: 40,
		acc100: true
	},
	"Heavy Rain": {
		type: "Water",
		category: "Spread",
		isEN: true,
		bp: 20,
		acc100: true,
		partialTrapping: true
	},
	"Cloudburst": {
		type: "Water",
		category: "Status",
		bp: 0
	},
	"Ebb Tide": {
		type: "Water",
		category: "Status",
		bp: 0,
		acc100: true
	},
	"Aquatic Waltz": {
		type: "Water",
		category: "Status",
		bp: 0,
		acc100: true
	},
	"Drought": {
		type: "Water",
		category: "Status",
		bp: 0,
		acc100: true
	},
	"Terrain [Genbu]": {
		type: "Water",
		category: "Status",
		bp: 0
	},
	"Water Ball": {
		type: "Water",
		category: "Focus",
		bp: 60,
		acc100: true
	},
	"Frost Edge": {
		type: "Water",
		category: "Focus",
		bp: 65,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Foam Bubbles": {
		type: "Water",
		category: "Spread",
		bp: 60,
		acc100: true
	},
	"Snowball Fight": {
		type: "Water",
		category: "Spread",
		bp: 65,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Water Sign": {
		type: "Water",
		category: "Spread",
		isEN: true,
		bp: 60,
		acc100: true
	},
	"Quagmire": {
		type: "Water",
		category: "Status",
		bp: 0,
		acc100: true
	},
	"Tumble Plant": {
		type: "Nature",
		category: "Focus",
		bp: 1,
		acc100: true
	},
	"Root Frog": {
		type: "Nature",
		category: "Focus",
		isEN: true,
		bp: 120,
		accuracy: 85
	},
	"Peach-Thorn Arrow": {
		type: "Nature",
		category: "Focus",
		bp: 120,
		acc100: true,
		hasRecoil: "number"
	},
	"Voice of Famine": {
		type: "Nature",
		category: "Focus",
		isEN: true,
		bp: 95,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Natural Beauty": {
		type: "Nature",
		category: "Focus",
		bp: 90,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Grass Javelin": {
		type: "Nature",
		category: "Focus",
		bp: 80,
		acc100: true,
		hasSecondaryEffect: true,
		isJavelin: true
	},
	"Power Drain": {
		type: "Nature",
		category: "Focus",
		isEN: true,
		bp: 75,
		acc100: true,
		givesHealth: true
	},
	"Hornet's Flit": {
		type: "Nature",
		category: "Focus",
		bp: 25,
		acc100: true,
		isMultiHit: true
	},
	"Sakura Blizzard": {
		type: "Nature",
		category: "Spread",
		bp: 120,
		accuracy: 85,
		hasSecondaryEffect: true
	},
	"Off-Season Bloom": {
		type: "Nature",
		category: "Spread",
		isEN: true,
		bp: 130,
		accuracy: 90,
		dropsStats: 2
	},
	"Petal Dance": {
		type: "Nature",
		category: "Spread",
		isEN: true,
		bp: 120,
		acc100: true,
		willLock: true
	},
	"Rainbow Flowers": {
		type: "Nature",
		category: "Spread",
		isEN: true,
		bp: 120,
		acc100: true,
		willCharge: true
	},
	"Pollen Mist": {
		type: "Nature",
		category: "Spread",
		isEN: true,
		bp: 95,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Energy Absorb": {
		type: "Nature",
		category: "Spread",
		isEN: true,
		bp: 75,
		acc100: true,
		givesHealth: true
	},
	"Swirling Leaves": {
		type: "Nature",
		category: "Spread",
		bp: 60,
		alwaysHits: true
	},
	"Forest Therapy": {
		type: "Nature",
		category: "Status",
		bp: 0
	},
	"Fountain of Life": {
		type: "Nature",
		category: "Status",
		bp: 0
	},
	"Thorned Ivy": {
		type: "Nature",
		category: "Status",
		bp: 0,
		priority: 4
	},
	"Drain Seed": {
		type: "Nature",
		category: "Status",
		bp: 0,
		accuracy: 90
	},
	"Grace of Mana": {
		type: "Nature",
		category: "Status",
		bp: 0
	},
	"White Lily Dance": {
		type: "Nature",
		category: "Status",
		bp: 0
	},
	"Fairy Dance": {
		type: "Nature",
		category: "Status",
		bp: 0
	},
	"White Mist": {
		type: "Nature",
		category: "Status",
		bp: 0
	},
	"Mystic Wind": {
		type: "Nature",
		category: "Status",
		bp: 0
	},
	"Bewitching Pollen": {
		type: "Nature",
		category: "Status",
		bp: 0,
		accuracy: 70
	},
	"Mystical Bug Mist": {
		type: "Nature",
		category: "Status",
		bp: 0,
		accuracy: 75
	},
	"Terrain [Seiryu]": {
		type: "Nature",
		category: "Status",
		bp: 0
	},
	"Butterfly's Flit": {
		type: "Nature",
		category: "Status",
		bp: 0
	},
	"Parasite": {
		type: "Nature",
		category: "Focus",
		isEN: true,
		bp: 50,
		acc100: true,
		givesHealth: true
	},
	"Apple Bomb": {
		type: "Nature",
		category: "Focus",
		bp: 60,
		accuracy: 95
	},
	"Scatter Beans": {
		type: "Nature",
		category: "Spread",
		bp: 60,
		acc100: true
	},
	"Seasonal Flowers": {
		type: "Nature",
		category: "Spread",
		bp: 65,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Nature Sign": {
		type: "Nature",
		category: "Spread",
		isEN: true,
		bp: 60,
		acc100: true
	},
	"Root Injection": {
		type: "Nature",
		category: "Status",
		bp: 0,
		acc100: true
	},
	"Shattering Earth": {
		type: "Earth",
		category: "Focus",
		bp: 1,
		accuracy: 30
	},
	"Cataclysm": {
		type: "Earth",
		category: "Focus",
		bp: 150,
		acc100: true
	},
	"Shooting Press": {
		type: "Earth",
		category: "Focus",
		isEN: true,
		bp: 100,
		acc100: true
	},
	"Rocky Barrage": {
		type: "Earth",
		category: "Focus",
		bp: 80,
		acc100: true
	},
	"Royal Prism": {
		type: "Earth",
		category: "Focus",
		isEN: true,
		bp: 75,
		accuracy: 95,
		hasSecondaryEffect: true
	},
	"Rock Drills": {
		type: "Earth",
		category: "Focus",
		bp: 70,
		accuracy: 90,
		alwaysCrit: true
	},
	"Spiked Stones": {
		type: "Earth",
		category: "Focus",
		bp: 60,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Dust Cloud": {
		type: "Earth",
		category: "Focus",
		bp: 60,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Stone Throw": {
		type: "Earth",
		category: "Focus",
		bp: 50,
		accuracy: 90,
		isTwoHit: true
	},
	"Dust Devil Gate": {
		type: "Earth",
		category: "Focus",
		bp: 20,
		acc100: true,
		partialTrapping: true
	},
	"Godstone Frenzy": {
		type: "Earth",
		category: "Focus",
		bp: 25,
		acc100: true,
		isMultiHit: true
	},
	"Waves of Earth": {
		type: "Earth",
		category: "Spread",
		isEN: true,
		bp: 95,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Unstable Horizon": {
		type: "Earth",
		category: "Spread",
		isEN: true,
		bp: 80,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Jewelry Storm": {
		type: "Earth",
		category: "Spread",
		bp: 80,
		acc100: true
	},
	"Landslide": {
		type: "Earth",
		category: "Spread",
		bp: 65,
		acc100: true
	},
	"Stone Circle": {
		type: "Earth",
		category: "Spread",
		bp: 60,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Mine Trap": {
		type: "Earth",
		category: "Status",
		bp: 0
	},
	"Weather [Duststorm]": {
		type: "Earth",
		category: "Status",
		bp: 0
	},
	"Mud Dango": {
		type: "Earth",
		category: "Focus",
		bp: 60,
		acc100: true
	},
	"Stone Rain": {
		type: "Earth",
		category: "Focus",
		bp: 65,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Slingshot": {
		type: "Earth",
		category: "Spread",
		bp: 55,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Mudslide": {
		type: "Earth",
		category: "Spread",
		bp: 75,
		accuracy: 80,
		hasSecondaryEffect: true
	},
	"Earth Sign": {
		type: "Earth",
		category: "Spread",
		isEN: true,
		bp: 60,
		acc100: true
	},
	"Racing Earth": {
		type: "Earth",
		category: "Status",
		bp: 0
	},
	"Terrain [Kohryu]": {
		type: "Earth",
		category: "Status",
		bp: 0
	},
	"Earthen Feast": {
		type: "Earth",
		category: "Spread",
		bp: 120,
		accuracy: 85,
		hasSecondaryEffect: true
	},
	"Realm [Gold]": {
		type: "Earth",
		category: "Status",
		bp: 0
	},
	"Destruction Rift": {
		type: "Earth",
		category: "Spread",
		bp: 60,
		acc100: true
	},
	"Clearing Mist": {
		type: "Steel",
		category: "Focus",
		bp: 1,
		acc100: true
	},
	"Mirror's Reflection": {
		type: "Steel",
		category: "Focus",
		isEN: true,
		bp: 1,
		acc100: true
	},
	"Impact Rebellion": {
		type: "Steel",
		category: "Focus",
		bp: 1,
		acc100: true
	},
	"Full Metal Crash": {
		type: "Steel",
		category: "Focus",
		bp: 150,
		accuracy: 80,
		hasRecoil: "number"
	},
	"Samurai Edge": {
		type: "Steel",
		category: "Focus",
		bp: 120,
		accuracy: 85,
		hasSecondaryEffect: true
	},
	"Brandish": {
		type: "Steel",
		category: "Focus",
		bp: 120,
		acc100: true,
		hasRecoil: "number"
	},
	"Armor Pierce": {
		type: "Steel",
		category: "Focus",
		bp: 90,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Killing Bite": {
		type: "Steel",
		category: "Focus",
		bp: 70,
		accuracy: 90,
		alwaysCrit: true
	},
	"Reversal Sword": {
		type: "Steel",
		category: "Focus",
		bp: 60,
		alwaysHits: true
	},
	"Overtake Strike": {
		type: "Steel",
		category: "Focus",
		bp: 40,
		acc100: true,
		priority: 1
	},
	"Last Slash": {
		type: "Steel",
		category: "Spread",
		bp: 100,
		acc100: true
	},
	"Silver Rain": {
		type: "Steel",
		category: "Spread",
		isEN: true,
		bp: 95,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Chrome Ray": {
		type: "Steel",
		category: "Spread",
		isEN: true,
		bp: 90,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Twin Gears": {
		type: "Steel",
		category: "Spread",
		bp: 50,
		accuracy: 90,
		isTwoHit: true
	},
	"Rapid Throw": {
		type: "Steel",
		category: "Spread",
		bp: 25,
		acc100: true,
		isMultiHit: true
	},
	"Focused Stance": {
		type: "Steel",
		category: "Status",
		bp: 0
	},
	"Strenuous Stance": {
		type: "Steel",
		category: "Status",
		bp: 0
	},
	"Mad Rush Stance": {
		type: "Steel",
		category: "Status",
		bp: 0
	},
	"Iron Wall Stance": {
		type: "Steel",
		category: "Status",
		bp: 0
	},
	"Vigilant Watch": {
		type: "Steel",
		category: "Status",
		bp: 0
	},
	"Terrain [Byakko]": {
		type: "Steel",
		category: "Status",
		bp: 0
	},
	"Stealth Trap": {
		type: "Steel",
		category: "Status",
		bp: 0
	},
	"The Ripper": {
		type: "Steel",
		category: "Focus",
		bp: 60,
		accuracy: 95
	},
	"Hammer Throw": {
		type: "Steel",
		category: "Focus",
		bp: 70,
		acc100: true
	},
	"Metal Needle": {
		type: "Steel",
		category: "Spread",
		bp: 65,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Steel Sign": {
		type: "Steel",
		category: "Spread",
		isEN: true,
		bp: 60,
		acc100: true
	},
	"Single-Minded": {
		type: "Steel",
		category: "Status",
		bp: 0
	},
	"Hammer Bash": {
		type: "Steel",
		category: "Focus",
		isEN: true,
		bp: 95,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Gensokyo Typhoon": {
		type: "Wind",
		category: "Focus",
		isEN: true,
		bp: 140,
		acc100: true,
		willCharge: true
	},
	"Foehn Winds": {
		type: "Wind",
		category: "Focus",
		bp: 120,
		acc100: true,
		hasRecoil: "number"
	},
	"Wind Javelin": {
		type: "Wind",
		category: "Focus",
		bp: 80,
		acc100: true,
		hasSecondaryEffect: true,
		isJavelin: true
	},
	"Air Stamp": {
		type: "Wind",
		category: "Focus",
		bp: 55,
		accuracy: 95
	},
	"Thieving Wind": {
		type: "Wind",
		category: "Focus",
		isEN: true,
		bp: 60,
		acc100: true
	},
	"Wind Train": {
		type: "Wind",
		category: "Focus",
		isEN: true,
		bp: 60,
		alwaysHits: true
	},
	"Twister": {
		type: "Wind",
		category: "Focus",
		bp: 25,
		acc100: true,
		isMultiHit: true
	},
	"Great Tornado": {
		type: "Wind",
		category: "Focus",
		isEN: true,
		bp: 20,
		acc100: true,
		partialTrapping: true
	},
	"Macroburst": {
		type: "Wind",
		category: "Spread",
		isEN: true,
		bp: 120,
		accuracy: 80,
		hasSecondaryEffect: true
	},
	"Swift Air-Raid": {
		type: "Wind",
		category: "Spread",
		isEN: true,
		bp: 80,
		alwaysHits: true
	},
	"Wind Wave": {
		type: "Wind",
		category: "Spread",
		isEN: true,
		bp: 75,
		accuracy: 95,
		hasSecondaryEffect: true
	},
	"Dancing Wind": {
		type: "Wind",
		category: "Spread",
		isEN: true,
		bp: 60,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Smash Spin": {
		type: "Wind",
		category: "Spread",
		isEN: true,
		bp: 60,
		acc100: true
	},
	"Spring First": {
		type: "Wind",
		category: "Spread",
		isEN: true,
		bp: 40,
		acc100: true,
		priority: 1
	},
	"Wind God's Grace": {
		type: "Wind",
		category: "Status",
		bp: 0
	},
	"Squall": {
		type: "Wind",
		category: "Status",
		bp: 0
	},
	"Perch": {
		type: "Wind",
		category: "Status",
		bp: 0
	},
	"Favorable Wind": {
		type: "Wind",
		category: "Status",
		bp: 0
	},
	"Skanda": {
		type: "Wind",
		category: "Status",
		bp: 0
	},
	"Weather [Calm]": {
		type: "Wind",
		category: "Status",
		bp: 0
	},
	"Feather Shot": {
		type: "Wind",
		category: "Focus",
		isEN: true,
		bp: 60,
		acc100: true
	},
	"Wintry Wind": {
		type: "Wind",
		category: "Focus",
		isEN: true,
		bp: 55,
		accuracy: 95
	},
	"Night Wind": {
		type: "Wind",
		category: "Spread",
		isEN: true,
		bp: 60,
		acc100: true
	},
	"Westerlies": {
		type: "Wind",
		category: "Spread",
		isEN: true,
		bp: 65,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Wind Sign": {
		type: "Wind",
		category: "Spread",
		isEN: true,
		bp: 60,
		acc100: true
	},
	"Sharp Wind": {
		type: "Wind",
		category: "Status",
		bp: 0
	},
	"Flying Frenzy": {
		type: "Wind",
		category: "Focus",
		bp: 95,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Spinning Air": {
		type: "Wind",
		category: "Spread",
		isEN: true,
		bp: 95,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Realm [Serenity]": {
		type: "Wind",
		category: "Status",
		bp: 0
	},
	"Passing Breeze": {
		type: "Wind",
		category: "Spread",
		isEN: true,
		bp: 60,
		acc100: true
	},
	"Thor's Hammer": {
		type: "Electric",
		category: "Focus",
		bp: 120,
		acc100: true,
		hasSecondaryEffect: true,
		hasRecoil: "number"
	},
	"Lightning Cut": {
		type: "Electric",
		category: "Focus",
		bp: 90,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Spark Javelin": {
		type: "Electric",
		category: "Focus",
		bp: 80,
		acc100: true,
		hasSecondaryEffect: true,
		isJavelin: true
	},
	"Plasma Ball": {
		type: "Electric",
		category: "Focus",
		bp: 20,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Thunderlord's Scorn": {
		type: "Electric",
		category: "Spread",
		isEN: true,
		bp: 120,
		accuracy: 85,
		hasSecondaryEffect: true
	},
	"Divine Thunder": {
		type: "Electric",
		category: "Spread",
		isEN: true,
		bp: 120,
		accuracy: 50,
		hasSecondaryEffect: true
	},
	"Thunder Force": {
		type: "Electric",
		category: "Spread",
		isEN: true,
		bp: 95,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Stormcloud's Eye": {
		type: "Electric",
		category: "Spread",
		isEN: true,
		bp: 80,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Charge Thief": {
		type: "Electric",
		category: "Spread",
		isEN: true,
		bp: 75,
		acc100: true,
		givesHealth: true
	},
	"Lightning Speed": {
		type: "Electric",
		category: "Spread",
		bp: 70,
		acc100: true
	},
	"Spark Cross": {
		type: "Electric",
		category: "Spread",
		isEN: true,
		bp: 60,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Purple Lightning": {
		type: "Electric",
		category: "Spread",
		isEN: true,
		bp: 50,
		accuracy: 90,
		hasSecondaryEffect: true
	},
	"Lightning Charge": {
		type: "Electric",
		category: "Status",
		bp: 0
	},
	"High Magnetism": {
		type: "Electric",
		category: "Status",
		bp: 0
	},
	"Thunder Veil": {
		type: "Electric",
		category: "Status",
		bp: 0,
		accuracy: 80
	},
	"Paralyzing Wave": {
		type: "Electric",
		category: "Status",
		bp: 0,
		acc100: true
	},
	"Spark Shot": {
		type: "Electric",
		category: "Focus",
		isEN: true,
		bp: 55,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Graze Bolt": {
		type: "Electric",
		category: "Focus",
		isEN: true,
		bp: 65,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Lightning Strike": {
		type: "Electric",
		category: "Spread",
		isEN: true,
		bp: 55,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Energy Bolt": {
		type: "Electric",
		category: "Spread",
		isEN: true,
		bp: 65,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Electric Sign": {
		type: "Electric",
		category: "Spread",
		isEN: true,
		bp: 60,
		acc100: true
	},
	"Thunderclap": {
		type: "Electric",
		category: "Status",
		bp: 0,
		priority: 3
	},
	"Thunder Drill": {
		type: "Electric",
		category: "Focus",
		bp: 70,
		accuracy: 90,
		alwaysCrit: true
	},
	"Shocking Wave": {
		type: "Electric",
		category: "Status",
		bp: 0,
		accuracy: 85
	},
	"Luminous Flux": {
		type: "Light",
		category: "Focus",
		isEN: true,
		bp: 120,
		acc100: true,
		hasRecoil: "number"
	},
	"Evil-Crushing Arrow": {
		type: "Light",
		category: "Focus",
		bp: 95,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Atomic Energy": {
		type: "Light",
		category: "Focus",
		isEN: true,
		bp: 75,
		acc100: true,
		givesHealth: true
	},
	"Light Javelin": {
		type: "Light",
		category: "Focus",
		bp: 80,
		acc100: true,
		hasSecondaryEffect: true,
		isJavelin: true
	},
	"Sunbeam Dance": {
		type: "Light",
		category: "Focus",
		isEN: true,
		bp: 60,
		acc100: true
	},
	"Over Ray": {
		type: "Light",
		category: "Focus",
		isEN: true,
		bp: 40,
		acc100: true,
		priority: 1
	},
	"Pulse Laser": {
		type: "Light",
		category: "Spread",
		isEN: true,
		bp: 150,
		acc100: true
	},
	"Arclight": {
		type: "Light",
		category: "Spread",
		isEN: true,
		bp: 130,
		accuracy: 90,
		dropsStats: 2
	},
	"Moonbow": {
		type: "Light",
		category: "Spread",
		bp: 100,
		acc100: true
	},
	"Star Flare": {
		type: "Light",
		category: "Spread",
		bp: 80,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Field Barrier": {
		type: "Light",
		category: "Status",
		bp: 0
	},
	"Field Protect": {
		type: "Light",
		category: "Status",
		bp: 0
	},
	"Lucky Rainbow": {
		type: "Light",
		category: "Status",
		bp: 0
	},
	"Sun's Protection": {
		type: "Light",
		category: "Status",
		bp: 0
	},
	"Moon's Protection": {
		type: "Light",
		category: "Status",
		bp: 0
	},
	"Astrology": {
		type: "Light",
		category: "Status",
		bp: 0,
		acc100: true
	},
	"Solar Eclipse": {
		type: "Light",
		category: "Status",
		bp: 0,
		accuracy: 80
	},
	"Flash Bullet": {
		type: "Light",
		category: "Status",
		bp: 0,
		acc100: true
	},
	"Weather [Aurora]": {
		type: "Light",
		category: "Status",
		bp: 0
	},
	"Light Up": {
		type: "Light",
		category: "Focus",
		isEN: true,
		bp: 55,
		acc100: true
	},
	"Angel Ladder": {
		type: "Light",
		category: "Focus",
		isEN: true,
		bp: 70,
		accuracy: 90,
		hasSecondaryEffect: true
	},
	"Light of Origin": {
		type: "Light",
		category: "Spread",
		isEN: true,
		bp: 60,
		acc100: true
	},
	"Diffusion Laser": {
		type: "Light",
		category: "Spread",
		isEN: true,
		bp: 65,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Light Sign": {
		type: "Light",
		category: "Spread",
		isEN: true,
		bp: 60,
		acc100: true
	},
	"Gathered Stars": {
		type: "Light",
		category: "Status",
		bp: 0
	},
	"Realm [Corona]": {
		type: "Light",
		category: "Status",
		bp: 0
	},
	"Twilight Infection": {
		type: "Dark",
		category: "Focus",
		isEN: true,
		bp: 120,
		accuracy: 85
	},
	"Dark Sphere": {
		type: "Dark",
		category: "Focus",
		isEN: true,
		bp: 100,
		accuracy: 90,
		hasSecondaryEffect: true
	},
	"Blackout": {
		type: "Dark",
		category: "Focus",
		bp: 75,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Changeling": {
		type: "Dark",
		category: "Focus",
		bp: 70,
		acc100: true
	},
	"Panic Call": {
		type: "Dark",
		category: "Focus",
		isEN: true,
		bp: 65,
		acc100: true
	},
	"Lost Crisis": {
		type: "Dark",
		category: "Focus",
		bp: 60,
		acc100: true
	},
	"Dark Arrow": {
		type: "Dark",
		category: "Focus",
		bp: 50,
		accuracy: 90,
		isTwoHit: true
	},
	"Dark Innocence": {
		type: "Dark",
		category: "Focus",
		isEN: true,
		bp: 25,
		acc100: true,
		isMultiHit: true
	},
	"Darkness Dance": {
		type: "Dark",
		category: "Spread",
		bp: 120,
		acc100: true,
		willLock: true
	},
	"Dark Sweets": {
		type: "Dark",
		category: "Spread",
		isEN: true,
		bp: 95,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Eye of Laplace": {
		type: "Dark",
		category: "Spread",
		bp: 80,
		acc100: true
	},
	"Infinite Darkness": {
		type: "Dark",
		category: "Spread",
		isEN: true,
		bp: 20,
		acc100: true,
		partialTrapping: true
	},
	"Shark Trade": {
		type: "Dark",
		category: "Status",
		bp: 0,
		acc100: true
	},
	"Black Hole": {
		type: "Void",
		category: "Status",
		bp: 0
	},
	"Puppet's Grudge": {
		type: "Dark",
		category: "Status",
		bp: 0,
		acc100: true
	},
	"Dark Power": {
		type: "Dark",
		category: "Status",
		bp: 0
	},
	"Bind Trap": {
		type: "Dark",
		category: "Status",
		bp: 0
	},
	"Sweet Nightmare": {
		type: "Dark",
		category: "Status",
		bp: 0,
		accuracy: 90
	},
	"Weather [Heavy Fog]": {
		type: "Dark",
		category: "Status",
		bp: 0
	},
	"Dark Ball": {
		type: "Dark",
		category: "Focus",
		bp: 55,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Ominous Doll": {
		type: "Dark",
		category: "Focus",
		bp: 65,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Bad Moon": {
		type: "Dark",
		category: "Spread",
		bp: 55,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Bloody Storm": {
		type: "Dark",
		category: "Spread",
		isEN: true,
		bp: 70,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Dark Sign": {
		type: "Dark",
		category: "Spread",
		isEN: true,
		bp: 60,
		acc100: true
	},
	"Dead of Night": {
		type: "Dark",
		category: "Status",
		bp: 0
	},
	"Night Step": {
		type: "Dark",
		category: "Focus",
		bp: 90,
		acc100: true
	},
	"Creeping Darkness": {
		type: "Dark",
		category: "Status",
		bp: 0,
		accuracy: 85
	},
	"Realm [Scarlet Mist]": {
		type: "Dark",
		category: "Status",
		bp: 0
	},
	"Venom Nova": {
		type: "Poison",
		category: "Focus",
		bp: 120,
		accuracy: 85,
		hasSecondaryEffect: true
	},
	"Dust Bomb": {
		type: "Poison",
		category: "Focus",
		bp: 80,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Poisoned Arrow": {
		type: "Poison",
		category: "Focus",
		bp: 80,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Venom Strike": {
		type: "Poison",
		category: "Spread",
		bp: 120,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Poison Bomb": {
		type: "Poison",
		category: "Spread",
		bp: 95,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Venom Fang": {
		type: "Poison",
		category: "Spread",
		bp: 80,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Mysterious Liquid": {
		type: "Poison",
		category: "Spread",
		bp: 65,
		acc100: true
	},
	"Negative Mist": {
		type: "Poison",
		category: "Spread",
		isEN: true,
		bp: 60,
		alwaysHits: true
	},
	"Toxic Spiral": {
		type: "Poison",
		category: "Spread",
		isEN: true,
		bp: 40,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Poison Trap": {
		type: "Poison",
		category: "Status",
		bp: 0
	},
	"Miasma": {
		type: "Poison",
		category: "Status",
		bp: 0,
		accuracy: 90
	},
	"Purple Smog": {
		type: "Poison",
		category: "Focus",
		isEN: true,
		bp: 55,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Slime Ball": {
		type: "Poison",
		category: "Focus",
		bp: 65,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Smog Shot": {
		type: "Poison",
		category: "Spread",
		bp: 55,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Toxic Haze": {
		type: "Poison",
		category: "Spread",
		isEN: true,
		bp: 65,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Poison Sign": {
		type: "Poison",
		category: "Spread",
		isEN: true,
		bp: 60,
		acc100: true
	},
	"Contagion": {
		type: "Poison",
		category: "Status",
		bp: 0,
		acc100: true
	},
	"Poison Stream": {
		type: "Poison",
		category: "Focus",
		isEN: true,
		bp: 100,
		acc100: true
	},
	"Depressing Rain": {
		type: "Poison",
		category: "Focus",
		isEN: true,
		bp: 60,
		alwaysHits: true
	},
	"Sweet Desperado": {
		type: "Poison",
		category: "Spread",
		isEN: true,
		bp: 130,
		accuracy: 90,
		dropsStats: 2
	},
	"Acid Tears": {
		type: "Poison",
		category: "Status",
		bp: 0,
		accuracy: 85
	},
	"Midnight Specter": {
		type: "Nether",
		category: "Focus",
		bp: 120,
		acc100: true,
		hasSecondaryEffect: true,
		hasRecoil: "number"
	},
	"Stalk and Murder": {
		type: "Nether",
		category: "Focus",
		bp: 120,
		alwaysHits: true,
		willCharge: true
	},
	"Shadow Javelin": {
		type: "Nether",
		category: "Focus",
		bp: 80,
		acc100: true,
		hasSecondaryEffect: true,
		isJavelin: true
	},
	"Soul Hound": {
		type: "Nether",
		category: "Focus",
		isEN: true,
		bp: 60,
		alwaysHits: true
	},
	"Unfettered Soul": {
		type: "Nether",
		category: "Focus",
		isEN: true,
		bp: 55,
		acc100: true
	},
	"Shadow Bomb": {
		type: "Nether",
		category: "Focus",
		bp: 40,
		acc100: true,
		priority: 1
	},
	"Charon Ferries": {
		type: "Nether",
		category: "Spread",
		isEN: true,
		bp: 1,
		acc100: true
	},
	"Poltergeist": {
		type: "Nether",
		category: "Spread",
		bp: 90,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Starving Spirit": {
		type: "Nether",
		category: "Spread",
		bp: 100,
		acc100: true
	},
	"Ghost Wave": {
		type: "Nether",
		category: "Spread",
		isEN: true,
		bp: 80,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Love or Pain": {
		type: "Nether",
		category: "Spread",
		bp: 65,
		acc100: true
	},
	"Soul Eater": {
		type: "Nether",
		category: "Spread",
		bp: 60,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Call of the Dead": {
		type: "Nether",
		category: "Status",
		bp: 0
	},
	"Curse Reversal": {
		type: "Nether",
		category: "Status",
		bp: 0
	},
	"Shinigami's Waltz": {
		type: "Nether",
		category: "Status",
		bp: 0
	},
	"Jinx": {
		type: "Nether",
		category: "Status",
		bp: 0,
		acc100: true
	},
	"Scorn": {
		type: "Nether",
		category: "Status",
		bp: 0,
		acc100: true
	},
	"Behind You!": {
		type: "Nether",
		category: "Status",
		bp: 0,
		accuracy: 90
	},
	"Ghost Trick": {
		type: "Nether",
		category: "Focus",
		bp: 55,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Specter Warning": {
		type: "Nether",
		category: "Focus",
		bp: 65,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Soul Walking": {
		type: "Nether",
		category: "Spread",
		bp: 55,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Play Ghost": {
		type: "Nether",
		category: "Spread",
		bp: 65,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Nether Sign": {
		type: "Nether",
		category: "Spread",
		isEN: true,
		bp: 60,
		acc100: true
	},
	"Stone Pile": {
		type: "Nether",
		category: "Status",
		bp: 0
	},
	"Specter's Waltz": {
		type: "Nether",
		category: "Focus",
		bp: 90,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Ghost Chase": {
		type: "Nether",
		category: "Status",
		bp: 0
	},
	"Eye of Calamity": {
		type: "Nether",
		category: "Status",
		bp: 0,
		accuracy: 85
	},
	"Cross Counter": {
		type: "Fighting",
		category: "Focus",
		bp: 1,
		acc100: true
	},
	"Mountain Breaker": {
		type: "Fighting",
		category: "Focus",
		bp: 1,
		acc100: true
	},
	"Aikido Arts": {
		type: "Fighting",
		category: "Focus",
		bp: 1,
		acc100: true
	},
	"Dire State": {
		type: "Fighting",
		category: "Focus",
		isEN: true,
		bp: 1,
		acc100: true
	},
	"Vacuum Rupture": {
		type: "Fighting",
		category: "Focus",
		bp: 150,
		acc100: true
	},
	"Meteor Impact": {
		type: "Fighting",
		category: "Focus",
		bp: 150,
		acc100: true
	},
	"Reckless Dive": {
		type: "Fighting",
		category: "Focus",
		bp: 130,
		accuracy: 90,
		hasRecoil: "crash"
	},
	"Exploding Fist": {
		type: "Fighting",
		category: "Focus",
		bp: 100,
		accuracy: 50,
		hasSecondaryEffect: true
	},
	"Heavenly Ascent": {
		type: "Fighting",
		category: "Focus",
		bp: 120,
		acc100: true
	},
	"Cross Drive": {
		type: "Fighting",
		category: "Focus",
		bp: 100,
		acc100: true
	},
	"Dancing Sword": {
		type: "Fighting",
		category: "Focus",
		bp: 80,
		acc100: true
	},
	"Life Burst": {
		type: "Fighting",
		category: "Focus",
		isEN: true,
		bp: 80,
		alwaysHits: true
	},
	"Aura Drain": {
		type: "Fighting",
		category: "Focus",
		bp: 75,
		acc100: true,
		givesHealth: true
	},
	"Break Shot": {
		type: "Fighting",
		category: "Focus",
		bp: 75,
		acc100: true
	},
	"Diligence": {
		type: "Fighting",
		category: "Focus",
		isEN: true,
		bp: 60,
		acc100: true
	},
	"Charging Stun": {
		type: "Fighting",
		category: "Focus",
		bp: 55,
		accuracy: 95
	},
	"Corkscrew": {
		type: "Fighting",
		category: "Focus",
		bp: 50,
		accuracy: 90,
		hasSecondaryEffect: true
	},
	"Strike Shot": {
		type: "Fighting",
		category: "Focus",
		bp: 40,
		acc100: true,
		priority: 1
	},
	"Divine Punishment": {
		type: "Fighting",
		category: "Spread",
		isEN: true,
		bp: 1,
		acc100: true
	},
	"GIGANTIC": {
		type: "Fighting",
		category: "Spread",
		isEN: true,
		bp: 120,
		accuracy: 85,
		hasSecondaryEffect: true
	},
	"Concussion": {
		type: "Fighting",
		category: "Spread",
		isEN: true,
		bp: 80,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Understep": {
		type: "Fighting",
		category: "Spread",
		bp: 60,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Twin Thrust": {
		type: "Fighting",
		category: "Spread",
		bp: 50,
		accuracy: 90,
		isTwoHit: true
	},
	"Rush Attack": {
		type: "Fighting",
		category: "Spread",
		bp: 25,
		acc100: true,
		isMultiHit: true
	},
	"Hachiman's Blessing": {
		type: "Fighting",
		category: "Status",
		bp: 0
	},
	"Forward Thrust": {
		type: "Fighting",
		category: "Focus",
		bp: 55,
		acc100: true
	},
	"Backhand Blow": {
		type: "Fighting",
		category: "Focus",
		bp: 80,
		acc100: true
	},
	"Skull Breaker": {
		type: "Fighting",
		category: "Spread",
		bp: 60,
		acc100: true
	},
	"Spiral Strike": {
		type: "Fighting",
		category: "Spread",
		isEN: true,
		bp: 70,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Fighting Sign": {
		type: "Fighting",
		category: "Spread",
		isEN: true,
		bp: 60,
		acc100: true
	},
	"Tense Up": {
		type: "Fighting",
		category: "Status",
		bp: 0
	},
	"Brave Burst": {
		type: "Fighting",
		category: "Spread",
		isEN: true,
		bp: 90,
		acc100: true
	},
	"Shooting Arts": {
		type: "Fighting",
		category: "Focus",
		bp: 25,
		acc100: true,
		isMultiHit: true
	},
	"Miracle Reprisal": {
		type: "Illusion",
		category: "Focus",
		isEN: true,
		bp: 20,
		acc100: true
	},
	"Revolving Illusions": {
		type: "Illusion",
		category: "Focus",
		isEN: true,
		bp: 95,
		acc100: true,
		isFoul: true
	},
	"Ephemeral": {
		type: "Illusion",
		category: "Focus",
		isEN: true,
		bp: 95,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Sneak Attack": {
		type: "Illusion",
		category: "Focus",
		bp: 80,
		acc100: true,
		priority: 1
	},
	"Mirage Edge": {
		type: "Illusion",
		category: "Focus",
		bp: 80,
		acc100: true
	},
	"Flower of Hell": {
		type: "Illusion",
		category: "Focus",
		bp: 80,
		acc100: true,
		hasSecondaryEffect: true
	},
	"St. Elmo's Fire": {
		type: "Illusion",
		category: "Focus",
		bp: 65,
		acc100: true
	},
	"Fake Jewel": {
		type: "Illusion",
		category: "Focus",
		bp: 60,
		acc100: true
	},
	"Invisible Heart": {
		type: "Illusion",
		category: "Focus",
		isEN: true,
		bp: 60,
		alwaysHits: true
	},
	"Reprimand": {
		type: "Illusion",
		category: "Focus",
		bp: 60,
		acc100: true
	},
	"Pursuit": {
		type: "Illusion",
		category: "Focus",
		bp: 50,
		acc100: true
	},
	"Gravity Blast": {
		type: "Illusion",
		category: "Spread",
		isEN: true,
		bp: 120,
		acc100: true
	},
	"Moon's Reflection": {
		type: "Illusion",
		category: "Spread",
		isEN: true,
		bp: 1,
		acc100: true
	},
	"Catastrophe": {
		type: "Illusion",
		category: "Spread",
		isEN: true,
		bp: 95,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Glamor Pandemic": {
		type: "Illusion",
		category: "Spread",
		isEN: true,
		bp: 100,
		accuracy: 50,
		hasSecondaryEffect: true
	},
	"Unknown Flare": {
		type: "Illusion",
		category: "Spread",
		isEN: true,
		bp: 80,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Mysterious Wave": {
		type: "Illusion",
		category: "Spread",
		isEN: true,
		bp: 80,
		acc100: true,
		defenseStat: "fd"
	},
	"Continue": {
		type: "Illusion",
		category: "Status",
		bp: 0
	},
	"Mirage": {
		type: "Illusion",
		category: "Status",
		bp: 0,
		priority: 4
	},
	"Near-Death Event": {
		type: "Illusion",
		category: "Status",
		bp: 0
	},
	"Amnesia": {
		type: "Illusion",
		category: "Status",
		bp: 0
	},
	"Power Swap": {
		type: "Illusion",
		category: "Status",
		bp: 0
	},
	"Power Split": {
		type: "Illusion",
		category: "Status",
		bp: 0
	},
	"Cross Change": {
		type: "Illusion",
		category: "Status",
		bp: 0
	},
	"Guard Swap": {
		type: "Illusion",
		category: "Status",
		bp: 0
	},
	"Guard Split": {
		type: "Illusion",
		category: "Status",
		bp: 0
	},
	"Pretense": {
		type: "Illusion",
		category: "Status",
		bp: 0,
		priority: 1
	},
	"Doppleganger": {
		type: "Illusion",
		category: "Status",
		bp: 0,
		priority: 1
	},
	"Imagination": {
		type: "Illusion",
		category: "Status",
		bp: 0
	},
	"Honest Man's Lie": {
		type: "Illusion",
		category: "Status",
		bp: 0,
		acc100: true
	},
	"Possession": {
		type: "Illusion",
		category: "Status",
		bp: 0
	},
	"Projection": {
		type: "Illusion",
		category: "Status",
		bp: 0
	},
	"Recall Nightmare": {
		type: "Illusion",
		category: "Status",
		bp: 0,
		acc100: true
	},
	"Mind Control": {
		type: "Illusion",
		category: "Status",
		bp: 0,
		acc100: true
	},
	"Gorgon's Eye": {
		type: "Illusion",
		category: "Status",
		bp: 0,
		accuracy: 75
	},
	"Bout Drunkard": {
		type: "Illusion",
		category: "Status",
		bp: 0,
		acc100: true
	},
	"Illusion Bullets": {
		type: "Illusion",
		category: "Focus",
		bp: 60,
		acc100: true
	},
	"Mirror World": {
		type: "Illusion",
		category: "Focus",
		isEN: true,
		bp: 60,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Mysterious Flare": {
		type: "Illusion",
		category: "Spread",
		isEN: true,
		bp: 60,
		acc100: true
	},
	"Imaginary Friend": {
		type: "Illusion",
		category: "Spread",
		isEN: true,
		bp: 65,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Illusion Sign": {
		type: "Illusion",
		category: "Spread",
		isEN: true,
		bp: 60,
		acc100: true
	},
	"Heat Haze": {
		type: "Illusion",
		category: "Status",
		bp: 0
	},
	"Hallucination": {
		type: "Illusion",
		category: "Focus",
		isEN: true,
		bp: 120,
		accuracy: 85
	},
	"Word Break": {
		type: "Illusion",
		category: "Status",
		bp: 0
	},
	"Detonation Burst": {
		type: "Sound",
		category: "Focus",
		isEN: true,
		bp: 120,
		acc100: true,
		dropsStats: 1
	},
	"High Tone Crush": {
		type: "Sound",
		category: "Focus",
		bp: 95,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Dancing Rain": {
		type: "Sound",
		category: "Focus",
		bp: 75,
		accuracy: 95,
		hasSecondaryEffect: true
	},
	"Phantom Ensemble": {
		type: "Sound",
		category: "Focus",
		isEN: true,
		bp: 55,
		accuracy: 95
	},
	"Danmaku Orchestra": {
		type: "Sound",
		category: "Spread",
		isEN: true,
		bp: 120,
		accuracy: 85
	},
	"Ultra High Tone": {
		type: "Sound",
		category: "Spread",
		bp: 95,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Primal Noise": {
		type: "Sound",
		category: "Spread",
		isEN: true,
		bp: 75,
		accuracy: 95,
		hasSecondaryEffect: true
	},
	"Fantasy Melody": {
		type: "Sound",
		category: "Spread",
		isEN: true,
		bp: 60,
		alwaysHits: true
	},
	"Sorrowful Tune": {
		type: "Sound",
		category: "Spread",
		isEN: true,
		bp: 55,
		accuracy: 95,
		hasSecondaryEffect: true
	},
	"Infinite Scales": {
		type: "Sound",
		category: "Spread",
		isEN: true,
		bp: 20,
		acc100: true
	},
	"Encourage": {
		type: "Sound",
		category: "Status",
		bp: 0,
		acc100: true
	},
	"Upbeat": {
		type: "Sound",
		category: "Status",
		bp: 0,
		acc100: true
	},
	"A Tempo": {
		type: "Sound",
		category: "Status",
		bp: 0
	},
	"Booing": {
		type: "Sound",
		category: "Status",
		bp: 0
	},
	"Ruinous Voice": {
		type: "Sound",
		category: "Status",
		bp: 0
	},
	"Brave Song": {
		type: "Sound",
		category: "Status",
		bp: 0
	},
	"Cheer": {
		type: "Sound",
		category: "Status",
		bp: 0
	},
	"Merry Dance": {
		type: "Sound",
		category: "Status",
		bp: 0
	},
	"Inspiration": {
		type: "Sound",
		category: "Status",
		bp: 0
	},
	"Decrescendo": {
		type: "Sound",
		category: "Status",
		bp: 0,
		acc100: true
	},
	"Shout": {
		type: "Sound",
		category: "Status",
		bp: 0,
		acc100: true
	},
	"Shriek": {
		type: "Sound",
		category: "Status",
		bp: 0,
		acc100: true
	},
	"Bellow": {
		type: "Sound",
		category: "Status",
		bp: 0,
		acc100: true
	},
	"Phase Inversion": {
		type: "Sound",
		category: "Status",
		bp: 0,
		priority: 1
	},
	"Roar": {
		type: "Sound",
		category: "Status",
		bp: 0,
		acc100: true
	},
	"Claim": {
		type: "Sound",
		category: "Status",
		bp: 0,
		acc100: true
	},
	"Lullaby": {
		type: "Sound",
		category: "Status",
		bp: 0,
		accuracy: 60
	},
	"Howling Voice": {
		type: "Sound",
		category: "Focus",
		isEN: true,
		bp: 60,
		acc100: true
	},
	"Ambient": {
		type: "Sound",
		category: "Focus",
		isEN: true,
		bp: 65,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Soprano Voice": {
		type: "Sound",
		category: "Spread",
		isEN: true,
		bp: 60,
		acc100: true
	},
	"Waltz": {
		type: "Sound",
		category: "Spread",
		isEN: true,
		bp: 65,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Sound Sign": {
		type: "Sound",
		category: "Spread",
		isEN: true,
		bp: 60,
		acc100: true
	},
	"Tuning": {
		type: "Void",
		category: "Status",
		bp: 0
	},
	"Overdrive": {
		type: "Warped",
		category: "Focus",
		isEN: true,
		bp: 130,
		accuracy: 90,
		dropsStats: 2
	},
	"Distortion Bomb": {
		type: "Warped",
		category: "Focus",
		bp: 95,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Alluring Maze": {
		type: "Warped",
		category: "Focus",
		isEN: true,
		bp: 80,
		acc100: true,
		defenseStat: "sd"
	},
	"Stealth Kill": {
		type: "Warped",
		category: "Focus",
		bp: 80,
		alwaysHits: true
	},
	"Trickster": {
		type: "Warped",
		category: "Focus",
		bp: 40,
		acc100: true,
		priority: 1
	},
	"Dense Fog Bloom": {
		type: "Warped",
		category: "Spread",
		isEN: true,
		bp: 120,
		acc100: true,
		willCharge: true
	},
	"Impulse": {
		type: "Warped",
		category: "Spread",
		isEN: true,
		bp: 95,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Luscious Whisper": {
		type: "Warped",
		category: "Spread",
		isEN: true,
		bp: 80,
		acc100: true,
		defenseStat: "fd"
	},
	"Field Break": {
		type: "Warped",
		category: "Spread",
		bp: 75,
		acc100: true
	},
	"Irreversible Trick": {
		type: "Warped",
		category: "Spread",
		isEN: true,
		bp: 80,
		alwaysHits: true
	},
	"Mirror Damage": {
		type: "Warped",
		category: "Spread",
		isEN: true,
		bp: 60,
		acc100: true
	},
	"Force Shield": {
		type: "Warped",
		category: "Status",
		bp: 0,
		acc100: true,
		priority: 4
	},
	"Element Reverse": {
		type: "Warped",
		category: "Status",
		bp: 0,
		acc100: true
	},
	"Field Shift": {
		type: "Warped",
		category: "Status",
		bp: 0,
		priority: 4
	},
	"Soul Corruption": {
		type: "Warped",
		category: "Status",
		bp: 0,
		accuracy: 80
	},
	"Weather [Sunshower]": {
		type: "Warped",
		category: "Status",
		bp: 0
	},
	"Warped Sign": {
		type: "Warped",
		category: "Spread",
		isEN: true,
		bp: 60,
		acc100: true
	},
	"Realm [Black Rain]": {
		type: "Warped",
		category: "Status",
		bp: 0
	},
	"Time Screw": {
		type: "Warped",
		category: "Focus",
		isEN: true,
		bp: 60,
		alwaysHits: true
	},
	"Limitless Realm": {
		type: "Warped",
		category: "Status",
		bp: 0
	},
	"Blitzkrieg": {
		type: "Electric",
		category: "Focus",
		bp: 55,
		acc100: true
	},
	"Take Over": {
		type: "Nether",
		category: "Spread",
		isEN: true,
		bp: 95,
		acc100: true,
		isFoul: true
	},
	"Season [Winter]": {
		type: "Nature",
		category: "Status",
		bp: 0
	},
	"Season [Spring]": {
		type: "Nature",
		category: "Status",
		bp: 0
	},
	"Season [Summer]": {
		type: "Nature",
		category: "Status",
		bp: 0
	},
	"Season [Fall]": {
		type: "Nature",
		category: "Status",
		bp: 0
	},
	"Season [Doyou]": {
		type: "Void",
		category: "Status",
		bp: 0
	},
	"Rainbow Shot": {
		type: "Light",
		category: "Focus",
		isEN: true,
		bp: 85,
		acc100: true
	},
	"Fading Out": {
		type: "Illusion",
		category: "Status",
		bp: 0
	},
};

var MOVES_SOD = {
	"(No Move)": {
		type: "None",
		category: "Status",
		bp: 0
	},
	"Death Match": {
		type: "Void",
		category: "Focus",
		bp: 1,
		acc100: true,
		isVoid: true
	},
	"Perfect Aim": {
		type: "Void",
		category: "Focus",
		bp: 1,
		accuracy: 30,
		isVoid: true
	},
	"Prank": {
		type: "Void",
		category: "Focus",
		bp: 1,
		accuracy: 90,
		isVoid: true
	},
	"Recompensate": {
		type: "Void",
		category: "Focus",
		bp: 1,
		acc100: true,
		isVoid: true
	},
	"Whole Being": {
		type: "Void",
		category: "Focus",
		bp: 125,
		acc100: true,
		isVoid: true
	},
	"Final Tribulation": {
		type: "Void",
		category: "Focus",
		bp: 100,
		acc100: true,
		isVoid: true
	},
	"Last Resort": {
		type: "Void",
		category: "Focus",
		bp: 140,
		acc100: true,
		isVoid: true
	},
	"Firm Spirit": {
		type: "Void",
		category: "Focus",
		isEN: true,
		bp: 130,
		acc100: true,
		willCharge: true,
		isVoid: true
	},
	"Overskill": {
		type: "Void",
		category: "Focus",
		isEN: true,
		bp: 120,
		acc100: true,
		isVoid: true,
		hasRecoil: "number"
	},
	"Spirit Rush": {
		type: "Void",
		category: "Focus",
		isEN: true,
		bp: 120,
		acc100: true,
		isVoid: true,
		hasRecoil: "number"
	},
	"Frenzied Joururi": {
		type: "Void",
		category: "Focus",
		bp: 100,
		acc100: true,
		isVoid: true
	},
	"Swallow Cut": {
		type: "Void",
		category: "Focus",
		bp: 80,
		acc100: true,
		priority: 2,
		isVoid: true
	},
	"Blow from Calamity": {
		type: "Void",
		category: "Focus",
		isEN: true,
		bp: 70,
		acc100: true,
		isVoid: true
	},
	"Retaliation": {
		type: "Void",
		category: "Focus",
		bp: 70,
		acc100: true,
		isVoid: true
	},
	"Piercing Stab": {
		type: "Void",
		category: "Focus",
		bp: 70,
		acc100: true,
		isVoid: true
	},
	"Struggle": {
		type: "Dream",
		category: "Focus",
		bp: 51,
		alwaysHits: true,
		hasRecoil: "number"
	},
	"Cruciform": {
		type: "Void",
		category: "Focus",
		bp: 50,
		accuracy: 90,
		isTwoHit: true,
		isVoid: true
	},
	"Raid": {
		type: "Void",
		category: "Focus",
		bp: 40,
		acc100: true,
		priority: 3,
		isVoid: true
	},
	"Tiger Rush": {
		type: "Void",
		category: "Focus",
		bp: 40,
		acc100: true,
		priority: 1,
		isVoid: true
	},
	"Shadow Rush": {
		type: "Void",
		category: "Focus",
		bp: 30,
		acc100: true,
		priority: 2,
		isVoid: true
	},
	"Danmaku Dance": {
		type: "Void",
		category: "Spread",
		isEN: true,
		bp: 120,
		acc100: true,
		willLock: true,
		isVoid: true
	},
	"Crossbow Assault": {
		type: "Void",
		category: "Spread",
		isEN: true,
		bp: 85,
		acc100: true,
		hasSecondaryEffect: true,
		isVoid: true
	},
	"Tri-Effect": {
		type: "Void",
		category: "Spread",
		isEN: true,
		bp: 80,
		acc100: true,
		hasSecondaryEffect: true,
		isVoid: true
	},
	"Destruction": {
		type: "Void",
		category: "Spread",
		isEN: true,
		bp: 70,
		acc100: true,
		hasSecondaryEffect: true,
		isVoid: true
	},
	"Volley": {
		type: "Void",
		category: "Spread",
		isEN: true,
		bp: 60,
		alwaysHits: true,
		isVoid: true
	},
	"Heavenly Blessing": {
		type: "Void",
		category: "Spread",
		isEN: true,
		bp: 50,
		acc100: true,
		isVoid: true
	},
	"Earthly Blessing": {
		type: "Void",
		category: "Spread",
		isEN: true,
		bp: 60,
		acc100: true,
		isVoid: true
	},
	"Random Shots": {
		type: "Void",
		category: "Spread",
		isEN: true,
		bp: 25,
		acc100: true,
		isMultiHit: true,
		isVoid: true
	},
	"False Courage": {
		type: "Void",
		category: "Status",
		bp: 0,
		priority: 4,
		isVoid: true
	},
	"Supernatural Border": {
		type: "Void",
		category: "Status",
		bp: 0,
		priority: 4,
		isVoid: true
	},
	"Magic Barrier": {
		type: "Void",
		category: "Status",
		bp: 0,
		isVoid: true
	},
	"Invoke Deity": {
		type: "Void",
		category: "Status",
		bp: 0,
		isVoid: true
	},
	"First Aid": {
		type: "Void",
		category: "Status",
		bp: 0,
		isVoid: true
	},
	"Resourcefulness": {
		type: "Void",
		category: "Status",
		bp: 0,
		isVoid: true
	},
	"Power Spot": {
		type: "Void",
		category: "Status",
		bp: 0,
		isVoid: true
	},
	"Unconscious Mind": {
		type: "Void",
		category: "Status",
		bp: 0,
		isVoid: true
	},
	"Inner Power": {
		type: "Void",
		category: "Status",
		bp: 0,
		isVoid: true
	},
	"Camouflage": {
		type: "Void",
		category: "Status",
		bp: 0,
		isVoid: true
	},
	"Imposing Air": {
		type: "Void",
		category: "Status",
		bp: 0,
		isVoid: true
	},
	"Offensive Trance": {
		type: "Void",
		category: "Status",
		bp: 0,
		isVoid: true
	},
	"Battle Preparation": {
		type: "Void",
		category: "Status",
		bp: 0,
		isVoid: true
	},
	"Foresee": {
		type: "Void",
		category: "Status",
		bp: 0,
		isVoid: true
	},
	"Confine": {
		type: "Void",
		category: "Status",
		bp: 0,
		acc100: true,
		isVoid: true
	},
	"Backup Plan": {
		type: "Void",
		category: "Status",
		bp: 0,
		isVoid: true
	},
	"Yin Energy": {
		type: "Dream",
		category: "Focus",
		isEN: true,
		bp: 55,
		acc100: true
	},
	"Guided Missile": {
		type: "Void",
		category: "Focus",
		isEN: true,
		bp: 80,
		accuracy: 85,
		hasSecondaryEffect: true,
		isVoid: true
	},
	"Yang Energy": {
		type: "Dream",
		category: "Spread",
		isEN: true,
		bp: 55,
		acc100: true
	},
	"Scatter Beam": {
		type: "Void",
		category: "Spread",
		isEN: true,
		bp: 65,
		acc100: true,
		isVoid: true
	},
	"Good Luck": {
		type: "Void",
		category: "Status",
		bp: 0,
		isVoid: true
	},
	"Shield Up": {
		type: "Void",
		category: "Status",
		bp: 0,
		isVoid: true
	},
	"Barrier Up": {
		type: "Void",
		category: "Status",
		bp: 0,
		isVoid: true
	},
	"Speedy Barrage": {
		type: "Void",
		category: "Focus",
		isEN: true,
		bp: 140,
		acc100: true,
		isVoid: true
	},
	"Dense Barrage": {
		type: "Void",
		category: "Spread",
		isEN: true,
		bp: 140,
		acc100: true,
		isVoid: true
	},
	"Overrun": {
		type: "Void",
		category: "Spread",
		isEN: true,
		bp: 100,
		acc100: true,
		isVoid: true
	},
	"Focused Movement": {
		type: "Void",
		category: "Status",
		bp: 0,
		isVoid: true
	},
	"Eternal Record": {
		type: "Void",
		category: "Status",
		bp: 0,
		isVoid: true
	},
	"Recollection": {
		type: "Void",
		category: "Status",
		bp: 0,
		priority: 3,
		isVoid: true
	},
	"Heavenly Influence": {
		type: "Void",
		category: "Focus",
		isEN: true,
		bp: 50,
		acc100: true,
		isVoid: true
	},
	"Earthly Influence": {
		type: "Void",
		category: "Focus",
		bp: 60,
		acc100: true,
		isVoid: true
	},
	"Conflagration": {
		type: "Fire",
		category: "Focus",
		isEN: true,
		bp: 1,
		acc100: true
	},
	"Purgatory Flicker": {
		type: "Fire",
		category: "Focus",
		bp: 120,
		acc100: true,
		hasSecondaryEffect: true,
		hasRecoil: "number"
	},
	"Holy Flare": {
		type: "Fire",
		category: "Focus",
		isEN: true,
		bp: 100,
		accuracy: 95,
		hasSecondaryEffect: true
	},
	"Burn Strike": {
		type: "Fire",
		category: "Focus",
		bp: 90,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Exploding Blaze": {
		type: "Fire",
		category: "Focus",
		isEN: true,
		bp: 80,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Fire Javelin": {
		type: "Fire",
		category: "Focus",
		bp: 80,
		acc100: true,
		hasSecondaryEffect: true,
		isJavelin: true
	},
	"Rising Sun": {
		type: "Fire",
		category: "Focus",
		bp: 50,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Phoenix Waltz": {
		type: "Fire",
		category: "Spread",
		bp: 150,
		acc100: true
	},
	"Deflagration": {
		type: "Fire",
		category: "Spread",
		isEN: true,
		bp: 150,
		acc100: true
	},
	"Volcano": {
		type: "Fire",
		category: "Spread",
		isEN: true,
		bp: 130,
		accuracy: 90,
		dropsStats: 2
	},
	"Inferno": {
		type: "Fire",
		category: "Spread",
		isEN: true,
		bp: 120,
		accuracy: 85,
		hasSecondaryEffect: true
	},
	"Blaze Spear": {
		type: "Fire",
		category: "Spread",
		bp: 100,
		accuracy: 90,
		hasSecondaryEffect: true
	},
	"Blaze of Tenmei": {
		type: "Fire",
		category: "Spread",
		bp: 100,
		accuracy: 50,
		hasSecondaryEffect: true
	},
	"Fire-Dragon Spiral": {
		type: "Fire",
		category: "Spread",
		isEN: true,
		bp: 100,
		accuracy: 75,
		partialTrapping: true
	},
	"Backdraft": {
		type: "Fire",
		category: "Spread",
		isEN: true,
		bp: 95,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Flashover": {
		type: "Fire",
		category: "Spread",
		isEN: true,
		bp: 80,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Flame Wave": {
		type: "Fire",
		category: "Spread",
		isEN: true,
		bp: 80,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Fire Wall": {
		type: "Fire",
		category: "Spread",
		isEN: true,
		bp: 65,
		acc100: true
	},
	"Fire-Snake Spiral": {
		type: "Fire",
		category: "Spread",
		isEN: true,
		bp: 20,
		acc100: true,
		partialTrapping: true
	},
	"Will-o'-Wisp": {
		type: "Fire",
		category: "Status",
		bp: 0,
		accuracy: 85
	},
	"Thermit": {
		type: "Fire",
		category: "Status",
		bp: 0,
		accuracy: 90
	},
	"Terrain [Suzaku]": {
		type: "Fire",
		category: "Status",
		bp: 0
	},
	"Fireball": {
		type: "Fire",
		category: "Focus",
		bp: 55,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Flame Pillar": {
		type: "Fire",
		category: "Focus",
		isEN: true,
		bp: 65,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Fiery Game": {
		type: "Fire",
		category: "Spread",
		isEN: true,
		bp: 55,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Flare": {
		type: "Fire",
		category: "Spread",
		isEN: true,
		bp: 70,
		accuracy: 90,
		hasSecondaryEffect: true
	},
	"Fire Sign": {
		type: "Fire",
		category: "Spread",
		isEN: true,
		bp: 60,
		acc100: true
	},
	"Rub Burn": {
		type: "Fire",
		category: "Status",
		bp: 0,
		acc100: true
	},
	"High Tide": {
		type: "Water",
		category: "Focus",
		bp: 120,
		accuracy: 85
	},
	"Waterfall Drop": {
		type: "Water",
		category: "Focus",
		bp: 100,
		acc100: true
	},
	"Flash Flood": {
		type: "Water",
		category: "Focus",
		bp: 80,
		acc100: true
	},
	"Ice Coffin": {
		type: "Water",
		category: "Focus",
		isEN: true,
		bp: 80,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Aqua Javelin": {
		type: "Water",
		category: "Focus",
		bp: 80,
		acc100: true,
		hasSecondaryEffect: true,
		isJavelin: true
	},
	"Reverse Splash": {
		type: "Water",
		category: "Focus",
		isEN: true,
		bp: 60,
		acc100: true
	},
	"Aquasonic": {
		type: "Water",
		category: "Spread",
		bp: 40,
		acc100: true,
		priority: 1
	},
	"Aqua Cutter": {
		type: "Water",
		category: "Focus",
		bp: 40,
		acc100: true,
		priority: 1
	},
	"Ice Gatling": {
		type: "Water",
		category: "Focus",
		bp: 15,
		acc100: true,
		priority: 1,
		isMultiHit: true
	},
	"Aqua Cannon": {
		type: "Water",
		category: "Spread",
		isEN: true,
		bp: 150,
		acc100: true
	},
	"Aqua Rake": {
		type: "Water",
		category: "Spread",
		isEN: true,
		bp: 150,
		acc100: true
	},
	"Cold Rain": {
		type: "Water",
		category: "Spread",
		isEN: true,
		bp: 120,
		accuracy: 80,
		hasSecondaryEffect: true
	},
	"Ice Age": {
		type: "Water",
		category: "Spread",
		isEN: true,
		bp: 95,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Frozen Prison": {
		type: "Water",
		category: "Spread",
		bp: 95,
		acc100: true
	},
	"Lazy Mist": {
		type: "Water",
		category: "Spread",
		isEN: true,
		bp: 80,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Geyser": {
		type: "Water",
		category: "Spread",
		bp: 60,
		acc100: true,
		alwaysCrit: true
	},
	"Slime Shot": {
		type: "Water",
		category: "Spread",
		bp: 55,
		acc100: true
	},
	"Veil of Water": {
		type: "Water",
		category: "Spread",
		isEN: true,
		bp: 40,
		acc100: true
	},
	"Heavy Rain": {
		type: "Water",
		category: "Spread",
		isEN: true,
		bp: 20,
		acc100: true,
		partialTrapping: true
	},
	"Cloudburst": {
		type: "Water",
		category: "Status",
		bp: 0
	},
	"Ebb Tide": {
		type: "Water",
		category: "Status",
		bp: 0,
		acc100: true
	},
	"Aquatic Waltz": {
		type: "Water",
		category: "Status",
		bp: 0,
		acc100: true
	},
	"Drought": {
		type: "Water",
		category: "Status",
		bp: 0,
		acc100: true
	},
	"Terrain [Genbu]": {
		type: "Water",
		category: "Status",
		bp: 0
	},
	"Water Ball": {
		type: "Water",
		category: "Focus",
		bp: 60,
		acc100: true
	},
	"Frost Edge": {
		type: "Water",
		category: "Focus",
		bp: 65,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Foam Bubbles": {
		type: "Water",
		category: "Spread",
		bp: 60,
		acc100: true
	},
	"Snowball Fight": {
		type: "Water",
		category: "Spread",
		bp: 65,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Water Sign": {
		type: "Water",
		category: "Spread",
		isEN: true,
		bp: 60,
		acc100: true
	},
	"Quagmire": {
		type: "Water",
		category: "Status",
		bp: 0,
		acc100: true
	},
	"Tumble Plant": {
		type: "Nature",
		category: "Focus",
		bp: 1,
		acc100: true
	},
	"Root Frog": {
		type: "Nature",
		category: "Focus",
		isEN: true,
		bp: 120,
		accuracy: 85
	},
	"Peach-Thorn Arrow": {
		type: "Nature",
		category: "Focus",
		bp: 120,
		acc100: true
	},
	"Voice of Famine": {
		type: "Nature",
		category: "Focus",
		isEN: true,
		bp: 95,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Natural Beauty": {
		type: "Nature",
		category: "Focus",
		bp: 90,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Grass Javelin": {
		type: "Nature",
		category: "Focus",
		bp: 80,
		acc100: true,
		hasSecondaryEffect: true,
		isJavelin: true
	},
	"Power Drain": {
		type: "Nature",
		category: "Focus",
		isEN: true,
		bp: 75,
		acc100: true,
		givesHealth: true
	},
	"Hornet's Flit": {
		type: "Nature",
		category: "Focus",
		bp: 25,
		acc100: true,
		isMultiHit: true
	},
	"Sakura Blizzard": {
		type: "Nature",
		category: "Spread",
		bp: 120,
		accuracy: 85,
		hasSecondaryEffect: true
	},
	"Off-Season Bloom": {
		type: "Nature",
		category: "Spread",
		isEN: true,
		bp: 130,
		accuracy: 90,
		dropsStats: 2
	},
	"Petal Dance": {
		type: "Nature",
		category: "Spread",
		isEN: true,
		bp: 120,
		acc100: true,
		willLock: true
	},
	"Rainbow Flowers": {
		type: "Nature",
		category: "Spread",
		isEN: true,
		bp: 120,
		acc100: true,
		willCharge: true
	},
	"Pollen Mist": {
		type: "Nature",
		category: "Spread",
		isEN: true,
		bp: 95,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Energy Absorb": {
		type: "Nature",
		category: "Spread",
		isEN: true,
		bp: 75,
		acc100: true,
		givesHealth: true
	},
	"Swirling Leaves": {
		type: "Nature",
		category: "Spread",
		bp: 60,
		alwaysHits: true
	},
	"Forest Therapy": {
		type: "Nature",
		category: "Status",
		bp: 0
	},
	"Fountain of Life": {
		type: "Nature",
		category: "Status",
		bp: 0
	},
	"Thorned Ivy": {
		type: "Nature",
		category: "Status",
		bp: 0,
		priority: 4
	},
	"Drain Seed": {
		type: "Nature",
		category: "Status",
		bp: 0,
		accuracy: 90
	},
	"Grace of Mana": {
		type: "Nature",
		category: "Status",
		bp: 0
	},
	"White Lily Dance": {
		type: "Nature",
		category: "Status",
		bp: 0
	},
	"Fairy Dance": {
		type: "Nature",
		category: "Status",
		bp: 0
	},
	"White Mist": {
		type: "Nature",
		category: "Status",
		bp: 0
	},
	"Mystic Wind": {
		type: "Nature",
		category: "Status",
		bp: 0
	},
	"Bewitching Pollen": {
		type: "Nature",
		category: "Status",
		bp: 0,
		accuracy: 70
	},
	"Mystical Bug Mist": {
		type: "Nature",
		category: "Status",
		bp: 0,
		accuracy: 75
	},
	"Terrain [Seiryu]": {
		type: "Nature",
		category: "Status",
		bp: 0
	},
	"Butterfly's Flit": {
		type: "Nature",
		category: "Status",
		bp: 0
	},
	"Parasite": {
		type: "Nature",
		category: "Focus",
		isEN: true,
		bp: 50,
		acc100: true,
		givesHealth: true
	},
	"Apple Bomb": {
		type: "Nature",
		category: "Focus",
		bp: 60,
		accuracy: 95
	},
	"Scatter Beans": {
		type: "Nature",
		category: "Spread",
		bp: 60,
		acc100: true
	},
	"Seasonal Flowers": {
		type: "Nature",
		category: "Spread",
		bp: 65,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Nature Sign": {
		type: "Nature",
		category: "Spread",
		isEN: true,
		bp: 60,
		acc100: true
	},
	"Root Injection": {
		type: "Nature",
		category: "Status",
		bp: 0,
		acc100: true
	},
	"Shattering Earth": {
		type: "Earth",
		category: "Focus",
		bp: 1,
		accuracy: 30
	},
	"Cataclysm": {
		type: "Earth",
		category: "Focus",
		bp: 150,
		acc100: true
	},
	"Shooting Press": {
		type: "Earth",
		category: "Focus",
		isEN: true,
		bp: 100,
		acc100: true
	},
	"Rocky Barrage": {
		type: "Earth",
		category: "Focus",
		bp: 80,
		acc100: true
	},
	"Royal Prism": {
		type: "Earth",
		category: "Focus",
		isEN: true,
		bp: 75,
		accuracy: 95,
		hasSecondaryEffect: true
	},
	"Rock Drills": {
		type: "Earth",
		category: "Focus",
		bp: 70,
		accuracy: 90,
		alwaysCrit: true
	},
	"Spiked Stones": {
		type: "Earth",
		category: "Focus",
		bp: 60,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Dust Cloud": {
		type: "Earth",
		category: "Focus",
		bp: 60,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Stone Throw": {
		type: "Earth",
		category: "Focus",
		bp: 50,
		accuracy: 90,
		isTwoHit: true
	},
	"Dust Devil Gate": {
		type: "Earth",
		category: "Focus",
		bp: 20,
		acc100: true,
		partialTrapping: true
	},
	"Godstone Frenzy": {
		type: "Earth",
		category: "Focus",
		bp: 25,
		acc100: true,
		isMultiHit: true
	},
	"Waves of Earth": {
		type: "Earth",
		category: "Spread",
		isEN: true,
		bp: 95,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Unstable Horizon": {
		type: "Earth",
		category: "Spread",
		isEN: true,
		bp: 80,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Jewelry Storm": {
		type: "Earth",
		category: "Spread",
		bp: 80,
		acc100: true
	},
	"Landslide": {
		type: "Earth",
		category: "Spread",
		bp: 65,
		acc100: true
	},
	"Stone Circle": {
		type: "Earth",
		category: "Spread",
		bp: 60,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Mine Trap": {
		type: "Earth",
		category: "Status",
		bp: 0
	},
	"Weather [Duststorm]": {
		type: "Earth",
		category: "Status",
		bp: 0
	},
	"Mud Dango": {
		type: "Earth",
		category: "Focus",
		bp: 60,
		acc100: true
	},
	"Stone Rain": {
		type: "Earth",
		category: "Focus",
		bp: 65,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Slingshot": {
		type: "Earth",
		category: "Spread",
		bp: 55,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Mudslide": {
		type: "Earth",
		category: "Spread",
		bp: 75,
		accuracy: 80,
		hasSecondaryEffect: true
	},
	"Earth Sign": {
		type: "Earth",
		category: "Spread",
		isEN: true,
		bp: 60,
		acc100: true
	},
	"Racing Earth": {
		type: "Earth",
		category: "Status",
		bp: 0
	},
	"Terrain [Kohryu]": {
		type: "Earth",
		category: "Status",
		bp: 0
	},
	"Earthen Feast": {
		type: "Earth",
		category: "Spread",
		bp: 120,
		accuracy: 85,
		hasSecondaryEffect: true
	},
	"Realm [Gold]": {
		type: "Earth",
		category: "Status",
		bp: 0
	},
	"Destruction Rift": {
		type: "Earth",
		category: "Spread",
		bp: 60,
		acc100: true
	},
	"Clearing Mist": {
		type: "Steel",
		category: "Focus",
		bp: 1,
		acc100: true
	},
	"Mirror's Reflection": {
		type: "Steel",
		category: "Focus",
		isEN: true,
		bp: 1,
		acc100: true
	},
	"Impact Rebellion": {
		type: "Steel",
		category: "Focus",
		bp: 1,
		acc100: true
	},
	"Full Metal Crash": {
		type: "Steel",
		category: "Focus",
		bp: 150,
		accuracy: 80,
		hasRecoil: "number"
	},
	"Samurai Edge": {
		type: "Steel",
		category: "Focus",
		bp: 120,
		accuracy: 85,
		hasSecondaryEffect: true
	},
	"Brandish": {
		type: "Steel",
		category: "Focus",
		bp: 120,
		acc100: true,
		hasRecoil: "number"
	},
	"Armor Pierce": {
		type: "Steel",
		category: "Focus",
		bp: 90,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Killing Bite": {
		type: "Steel",
		category: "Focus",
		bp: 70,
		accuracy: 90,
		alwaysCrit: true
	},
	"Reversal Sword": {
		type: "Steel",
		category: "Focus",
		bp: 60,
		alwaysHits: true
	},
	"Overtake Strike": {
		type: "Steel",
		category: "Focus",
		bp: 40,
		acc100: true,
		priority: 1
	},
	"Last Slash": {
		type: "Steel",
		category: "Spread",
		bp: 100,
		acc100: true
	},
	"Silver Rain": {
		type: "Steel",
		category: "Spread",
		isEN: true,
		bp: 95,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Chrome Ray": {
		type: "Steel",
		category: "Spread",
		isEN: true,
		bp: 90,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Twin Gears": {
		type: "Steel",
		category: "Spread",
		bp: 50,
		accuracy: 90,
		isTwoHit: true
	},
	"Rapid Throw": {
		type: "Steel",
		category: "Spread",
		bp: 25,
		acc100: true,
		isMultiHit: true
	},
	"Focused Stance": {
		type: "Steel",
		category: "Status",
		bp: 0
	},
	"Strenuous Stance": {
		type: "Steel",
		category: "Status",
		bp: 0
	},
	"Mad Rush Stance": {
		type: "Steel",
		category: "Status",
		bp: 0
	},
	"Iron Wall Stance": {
		type: "Steel",
		category: "Status",
		bp: 0
	},
	"Vigilant Watch": {
		type: "Steel",
		category: "Status",
		bp: 0
	},
	"Terrain [Byakko]": {
		type: "Steel",
		category: "Status",
		bp: 0
	},
	"Stealth Trap": {
		type: "Steel",
		category: "Status",
		bp: 0
	},
	"The Ripper": {
		type: "Steel",
		category: "Focus",
		bp: 60,
		accuracy: 95
	},
	"Hammer Throw": {
		type: "Steel",
		category: "Focus",
		bp: 70,
		acc100: true
	},
	"Metal Needle": {
		type: "Steel",
		category: "Spread",
		bp: 65,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Steel Sign": {
		type: "Steel",
		category: "Spread",
		isEN: true,
		bp: 60,
		acc100: true
	},
	"Single-Minded": {
		type: "Steel",
		category: "Status",
		bp: 0
	},
	"Hammer Bash": {
		type: "Steel",
		category: "Focus",
		isEN: true,
		bp: 95,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Gensokyo Typhoon": {
		type: "Wind",
		category: "Focus",
		isEN: true,
		bp: 140,
		acc100: true,
		willCharge: true
	},
	"Foehn Winds": {
		type: "Wind",
		category: "Focus",
		bp: 120,
		acc100: true,
		hasRecoil: "number"
	},
	"Wind Javelin": {
		type: "Wind",
		category: "Focus",
		bp: 80,
		acc100: true,
		hasSecondaryEffect: true,
		isJavelin: true
	},
	"Air Stamp": {
		type: "Wind",
		category: "Focus",
		bp: 55,
		accuracy: 95
	},
	"Thieving Wind": {
		type: "Wind",
		category: "Focus",
		isEN: true,
		bp: 60,
		acc100: true
	},
	"Wind Train": {
		type: "Wind",
		category: "Focus",
		isEN: true,
		bp: 60,
		alwaysHits: true
	},
	"Twister": {
		type: "Wind",
		category: "Focus",
		bp: 25,
		acc100: true,
		isMultiHit: true
	},
	"Great Tornado": {
		type: "Wind",
		category: "Focus",
		isEN: true,
		bp: 20,
		acc100: true,
		partialTrapping: true
	},
	"Macroburst": {
		type: "Wind",
		category: "Spread",
		isEN: true,
		bp: 120,
		accuracy: 80,
		hasSecondaryEffect: true
	},
	"Swift Air-Raid": {
		type: "Wind",
		category: "Spread",
		isEN: true,
		bp: 80,
		alwaysHits: true
	},
	"Wind Wave": {
		type: "Wind",
		category: "Spread",
		isEN: true,
		bp: 75,
		accuracy: 95,
		hasSecondaryEffect: true
	},
	"Dancing Wind": {
		type: "Wind",
		category: "Spread",
		isEN: true,
		bp: 60,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Smash Spin": {
		type: "Wind",
		category: "Spread",
		isEN: true,
		bp: 60,
		acc100: true
	},
	"Spring First": {
		type: "Wind",
		category: "Spread",
		isEN: true,
		bp: 40,
		acc100: true,
		priority: 1
	},
	"Wind God's Grace": {
		type: "Wind",
		category: "Status",
		bp: 0
	},
	"Squall": {
		type: "Wind",
		category: "Status",
		bp: 0
	},
	"Perch": {
		type: "Wind",
		category: "Status",
		bp: 0
	},
	"Favorable Wind": {
		type: "Wind",
		category: "Status",
		bp: 0
	},
	"Skanda": {
		type: "Wind",
		category: "Status",
		bp: 0
	},
	"Weather [Calm]": {
		type: "Wind",
		category: "Status",
		bp: 0
	},
	"Feather Shot": {
		type: "Wind",
		category: "Focus",
		isEN: true,
		bp: 60,
		acc100: true
	},
	"Wintry Wind": {
		type: "Wind",
		category: "Focus",
		isEN: true,
		bp: 55,
		accuracy: 95
	},
	"Night Wind": {
		type: "Wind",
		category: "Spread",
		isEN: true,
		bp: 60,
		acc100: true
	},
	"Westerlies": {
		type: "Wind",
		category: "Spread",
		isEN: true,
		bp: 65,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Wind Sign": {
		type: "Wind",
		category: "Spread",
		isEN: true,
		bp: 60,
		acc100: true
	},
	"Sharp Wind": {
		type: "Wind",
		category: "Status",
		bp: 0
	},
	"Flying Frenzy": {
		type: "Wind",
		category: "Focus",
		bp: 95,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Spinning Air": {
		type: "Wind",
		category: "Spread",
		isEN: true,
		bp: 95,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Realm [Serenity]": {
		type: "Wind",
		category: "Status",
		bp: 0
	},
	"Passing Breeze": {
		type: "Wind",
		category: "Spread",
		isEN: true,
		bp: 60,
		acc100: true
	},
	"Thor's Hammer": {
		type: "Electric",
		category: "Focus",
		bp: 120,
		acc100: true,
		hasSecondaryEffect: true,
		hasRecoil: "number"
	},
	"Lightning Cut": {
		type: "Electric",
		category: "Focus",
		bp: 90,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Spark Javelin": {
		type: "Electric",
		category: "Focus",
		bp: 80,
		acc100: true,
		hasSecondaryEffect: true,
		isJavelin: true
	},
	"Plasma Ball": {
		type: "Electric",
		category: "Focus",
		bp: 20,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Thunderlord's Scorn": {
		type: "Electric",
		category: "Spread",
		isEN: true,
		bp: 120,
		accuracy: 85,
		hasSecondaryEffect: true
	},
	"Divine Thunder": {
		type: "Electric",
		category: "Spread",
		isEN: true,
		bp: 120,
		accuracy: 50,
		hasSecondaryEffect: true
	},
	"Thunder Force": {
		type: "Electric",
		category: "Spread",
		isEN: true,
		bp: 95,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Stormcloud's Eye": {
		type: "Electric",
		category: "Spread",
		isEN: true,
		bp: 80,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Charge Thief": {
		type: "Electric",
		category: "Spread",
		isEN: true,
		bp: 75,
		acc100: true,
		givesHealth: true
	},
	"Lightning Speed": {
		type: "Electric",
		category: "Spread",
		bp: 70,
		acc100: true
	},
	"Spark Cross": {
		type: "Electric",
		category: "Spread",
		isEN: true,
		bp: 60,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Purple Lightning": {
		type: "Electric",
		category: "Spread",
		isEN: true,
		bp: 50,
		accuracy: 90,
		hasSecondaryEffect: true
	},
	"Lightning Charge": {
		type: "Electric",
		category: "Status",
		bp: 0
	},
	"High Magnetism": {
		type: "Electric",
		category: "Status",
		bp: 0
	},
	"Thunder Veil": {
		type: "Electric",
		category: "Status",
		bp: 0,
		accuracy: 80
	},
	"Paralyzing Wave": {
		type: "Electric",
		category: "Status",
		bp: 0,
		acc100: true
	},
	"Spark Shot": {
		type: "Electric",
		category: "Focus",
		isEN: true,
		bp: 55,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Graze Bolt": {
		type: "Electric",
		category: "Focus",
		isEN: true,
		bp: 65,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Lightning Strike": {
		type: "Electric",
		category: "Spread",
		isEN: true,
		bp: 55,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Energy Bolt": {
		type: "Electric",
		category: "Spread",
		isEN: true,
		bp: 65,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Electric Sign": {
		type: "Electric",
		category: "Spread",
		isEN: true,
		bp: 60,
		acc100: true
	},
	"Thunderclap": {
		type: "Electric",
		category: "Status",
		bp: 0,
		priority: 3
	},
	"Thunder Drill": {
		type: "Electric",
		category: "Focus",
		bp: 70,
		accuracy: 90,
		alwaysCrit: true
	},
	"Shocking Wave": {
		type: "Electric",
		category: "Status",
		bp: 0,
		accuracy: 85
	},
	"Luminous Flux": {
		type: "Light",
		category: "Focus",
		isEN: true,
		bp: 120,
		acc100: true,
		hasRecoil: "number"
	},
	"Evil-Crushing Arrow": {
		type: "Light",
		category: "Focus",
		bp: 95,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Atomic Energy": {
		type: "Light",
		category: "Focus",
		isEN: true,
		bp: 75,
		acc100: true,
		givesHealth: true
	},
	"Light Javelin": {
		type: "Light",
		category: "Focus",
		bp: 80,
		acc100: true,
		hasSecondaryEffect: true,
		isJavelin: true
	},
	"Sunbeam Dance": {
		type: "Light",
		category: "Focus",
		isEN: true,
		bp: 60,
		acc100: true
	},
	"Over Ray": {
		type: "Light",
		category: "Focus",
		isEN: true,
		bp: 40,
		acc100: true,
		priority: 1
	},
	"Pulse Laser": {
		type: "Light",
		category: "Spread",
		isEN: true,
		bp: 150,
		acc100: true
	},
	"Arclight": {
		type: "Light",
		category: "Spread",
		isEN: true,
		bp: 130,
		accuracy: 90,
		dropsStats: 2
	},
	"Moonbow": {
		type: "Light",
		category: "Spread",
		bp: 100,
		acc100: true
	},
	"Star Flare": {
		type: "Light",
		category: "Spread",
		bp: 80,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Field Barrier": {
		type: "Light",
		category: "Status",
		bp: 0
	},
	"Field Protect": {
		type: "Light",
		category: "Status",
		bp: 0
	},
	"Lucky Rainbow": {
		type: "Light",
		category: "Status",
		bp: 0
	},
	"Sun's Protection": {
		type: "Light",
		category: "Status",
		bp: 0
	},
	"Moon's Protection": {
		type: "Light",
		category: "Status",
		bp: 0
	},
	"Astrology": {
		type: "Light",
		category: "Status",
		bp: 0,
		acc100: true
	},
	"Solar Eclipse": {
		type: "Light",
		category: "Status",
		bp: 0,
		accuracy: 80
	},
	"Flash Bullet": {
		type: "Light",
		category: "Status",
		bp: 0,
		acc100: true
	},
	"Weather [Aurora]": {
		type: "Light",
		category: "Status",
		bp: 0
	},
	"Light Up": {
		type: "Light",
		category: "Focus",
		isEN: true,
		bp: 55,
		acc100: true
	},
	"Angel Ladder": {
		type: "Light",
		category: "Focus",
		isEN: true,
		bp: 70,
		accuracy: 90,
		hasSecondaryEffect: true
	},
	"Light of Origin": {
		type: "Light",
		category: "Spread",
		isEN: true,
		bp: 60,
		acc100: true
	},
	"Diffusion Laser": {
		type: "Light",
		category: "Spread",
		isEN: true,
		bp: 65,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Light Sign": {
		type: "Light",
		category: "Spread",
		isEN: true,
		bp: 60,
		acc100: true
	},
	"Gathered Stars": {
		type: "Light",
		category: "Status",
		bp: 0
	},
	"Realm [Corona]": {
		type: "Light",
		category: "Status",
		bp: 0
	},
	"Twilight Infection": {
		type: "Dark",
		category: "Focus",
		isEN: true,
		bp: 120,
		accuracy: 85
	},
	"Dark Sphere": {
		type: "Dark",
		category: "Focus",
		isEN: true,
		bp: 100,
		accuracy: 90,
		hasSecondaryEffect: true
	},
	"Blackout": {
		type: "Dark",
		category: "Focus",
		bp: 75,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Changeling": {
		type: "Dark",
		category: "Focus",
		bp: 70,
		acc100: true
	},
	"Panic Call": {
		type: "Dark",
		category: "Focus",
		isEN: true,
		bp: 65,
		acc100: true
	},
	"Lost Crisis": {
		type: "Dark",
		category: "Focus",
		bp: 60,
		acc100: true
	},
	"Dark Arrow": {
		type: "Dark",
		category: "Focus",
		bp: 50,
		accuracy: 90,
		isTwoHit: true
	},
	"Dark Innocence": {
		type: "Dark",
		category: "Focus",
		isEN: true,
		bp: 25,
		acc100: true,
		isMultiHit: true
	},
	"Darkness Dance": {
		type: "Dark",
		category: "Spread",
		bp: 120,
		acc100: true,
		willLock: true
	},
	"Dark Sweets": {
		type: "Dark",
		category: "Spread",
		isEN: true,
		bp: 95,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Eye of Laplace": {
		type: "Dark",
		category: "Spread",
		bp: 80,
		acc100: true
	},
	"Infinite Darkness": {
		type: "Dark",
		category: "Spread",
		isEN: true,
		bp: 20,
		acc100: true,
		partialTrapping: true
	},
	"Shark Trade": {
		type: "Dark",
		category: "Status",
		bp: 0,
		acc100: true
	},
	"Black Hole": {
		type: "Void",
		category: "Status",
		bp: 0
	},
	"Puppet's Grudge": {
		type: "Dark",
		category: "Status",
		bp: 0,
		acc100: true
	},
	"Dark Power": {
		type: "Dark",
		category: "Status",
		bp: 0
	},
	"Bind Trap": {
		type: "Dark",
		category: "Status",
		bp: 0
	},
	"Sweet Nightmare": {
		type: "Dark",
		category: "Status",
		bp: 0,
		accuracy: 90
	},
	"Weather [Heavy Fog]": {
		type: "Dark",
		category: "Status",
		bp: 0
	},
	"Dark Ball": {
		type: "Dark",
		category: "Focus",
		bp: 55,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Ominous Doll": {
		type: "Dark",
		category: "Focus",
		bp: 65,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Bad Moon": {
		type: "Dark",
		category: "Spread",
		bp: 55,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Bloody Storm": {
		type: "Dark",
		category: "Spread",
		isEN: true,
		bp: 70,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Dark Sign": {
		type: "Dark",
		category: "Spread",
		isEN: true,
		bp: 60,
		acc100: true
	},
	"Dead of Night": {
		type: "Dark",
		category: "Status",
		bp: 0
	},
	"Night Step": {
		type: "Dark",
		category: "Focus",
		bp: 90,
		acc100: true
	},
	"Creeping Darkness": {
		type: "Dark",
		category: "Status",
		bp: 0,
		accuracy: 85
	},
	"Realm [Scarlet Mist]": {
		type: "Dark",
		category: "Status",
		bp: 0
	},
	"Venom Nova": {
		type: "Poison",
		category: "Focus",
		bp: 120,
		accuracy: 85,
		hasSecondaryEffect: true
	},
	"Dust Bomb": {
		type: "Poison",
		category: "Focus",
		bp: 80,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Poisoned Arrow": {
		type: "Poison",
		category: "Focus",
		bp: 80,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Venom Strike": {
		type: "Poison",
		category: "Spread",
		bp: 120,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Poison Bomb": {
		type: "Poison",
		category: "Spread",
		bp: 95,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Venom Fang": {
		type: "Poison",
		category: "Spread",
		bp: 80,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Mysterious Liquid": {
		type: "Poison",
		category: "Spread",
		bp: 65,
		acc100: true
	},
	"Negative Mist": {
		type: "Poison",
		category: "Spread",
		isEN: true,
		bp: 60,
		alwaysHits: true
	},
	"Toxic Spiral": {
		type: "Poison",
		category: "Spread",
		isEN: true,
		bp: 40,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Poison Trap": {
		type: "Poison",
		category: "Status",
		bp: 0
	},
	"Miasma": {
		type: "Poison",
		category: "Status",
		bp: 0,
		accuracy: 90
	},
	"Purple Smog": {
		type: "Poison",
		category: "Focus",
		isEN: true,
		bp: 55,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Slime Ball": {
		type: "Poison",
		category: "Focus",
		bp: 65,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Smog Shot": {
		type: "Poison",
		category: "Spread",
		bp: 55,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Toxic Haze": {
		type: "Poison",
		category: "Spread",
		isEN: true,
		bp: 65,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Poison Sign": {
		type: "Poison",
		category: "Spread",
		isEN: true,
		bp: 60,
		acc100: true
	},
	"Contagion": {
		type: "Poison",
		category: "Status",
		bp: 0,
		acc100: true
	},
	"Poison Stream": {
		type: "Poison",
		category: "Focus",
		isEN: true,
		bp: 100,
		acc100: true
	},
	"Depressing Rain": {
		type: "Poison",
		category: "Focus",
		isEN: true,
		bp: 60,
		alwaysHits: true
	},
	"Sweet Desperado": {
		type: "Poison",
		category: "Spread",
		isEN: true,
		bp: 130,
		accuracy: 90,
		dropsStats: 2
	},
	"Acid Tears": {
		type: "Poison",
		category: "Status",
		bp: 0,
		accuracy: 85
	},
	"Midnight Specter": {
		type: "Nether",
		category: "Focus",
		bp: 120,
		acc100: true,
		hasRecoil: "number"
	},
	"Stalk and Murder": {
		type: "Nether",
		category: "Focus",
		bp: 120,
		alwaysHits: true,
		willCharge: true
	},
	"Shadow Javelin": {
		type: "Nether",
		category: "Focus",
		bp: 80,
		acc100: true,
		hasSecondaryEffect: true,
		isJavelin: true
	},
	"Soul Hound": {
		type: "Nether",
		category: "Focus",
		isEN: true,
		bp: 60,
		alwaysHits: true
	},
	"Unfettered Soul": {
		type: "Nether",
		category: "Focus",
		isEN: true,
		bp: 55,
		acc100: true
	},
	"Shadow Bomb": {
		type: "Nether",
		category: "Focus",
		bp: 40,
		acc100: true,
		priority: 1
	},
	"Charon Ferries": {
		type: "Nether",
		category: "Spread",
		isEN: true,
		bp: 1,
		acc100: true
	},
	"Poltergeist": {
		type: "Nether",
		category: "Spread",
		bp: 90,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Starving Spirit": {
		type: "Nether",
		category: "Spread",
		bp: 100,
		acc100: true
	},
	"Ghost Wave": {
		type: "Nether",
		category: "Spread",
		isEN: true,
		bp: 80,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Love or Pain": {
		type: "Nether",
		category: "Spread",
		bp: 65,
		acc100: true
	},
	"Soul Eater": {
		type: "Nether",
		category: "Spread",
		bp: 60,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Call of the Dead": {
		type: "Nether",
		category: "Status",
		bp: 0
	},
	"Curse Reversal": {
		type: "Nether",
		category: "Status",
		bp: 0
	},
	"Shinigami's Waltz": {
		type: "Nether",
		category: "Status",
		bp: 0
	},
	"Jinx": {
		type: "Nether",
		category: "Status",
		bp: 0,
		acc100: true
	},
	"Scorn": {
		type: "Nether",
		category: "Status",
		bp: 0,
		acc100: true
	},
	"Behind You!": {
		type: "Nether",
		category: "Status",
		bp: 0,
		accuracy: 90
	},
	"Ghost Trick": {
		type: "Nether",
		category: "Focus",
		bp: 55,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Specter Warning": {
		type: "Nether",
		category: "Focus",
		bp: 65,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Soul Walking": {
		type: "Nether",
		category: "Spread",
		bp: 55,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Play Ghost": {
		type: "Nether",
		category: "Spread",
		bp: 65,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Nether Sign": {
		type: "Nether",
		category: "Spread",
		isEN: true,
		bp: 60,
		acc100: true
	},
	"Stone Pile": {
		type: "Nether",
		category: "Status",
		bp: 0
	},
	"Specter's Waltz": {
		type: "Nether",
		category: "Focus",
		bp: 90,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Ghost Chase": {
		type: "Nether",
		category: "Status",
		bp: 0
	},
	"Eye of Calamity": {
		type: "Nether",
		category: "Status",
		bp: 0,
		accuracy: 85
	},
	"Cross Counter": {
		type: "Fighting",
		category: "Focus",
		bp: 1,
		acc100: true
	},
	"Mountain Breaker": {
		type: "Fighting",
		category: "Focus",
		bp: 1,
		acc100: true
	},
	"Aikido Arts": {
		type: "Fighting",
		category: "Focus",
		bp: 1,
		acc100: true
	},
	"Dire State": {
		type: "Fighting",
		category: "Focus",
		isEN: true,
		bp: 1,
		acc100: true
	},
	"Vacuum Rupture": {
		type: "Fighting",
		category: "Focus",
		bp: 150,
		acc100: true
	},
	"Meteor Impact": {
		type: "Fighting",
		category: "Focus",
		bp: 150,
		acc100: true
	},
	"Reckless Dive": {
		type: "Fighting",
		category: "Focus",
		bp: 130,
		accuracy: 90,
		hasRecoil: "crash"
	},
	"Exploding Fist": {
		type: "Fighting",
		category: "Focus",
		bp: 100,
		accuracy: 50,
		hasSecondaryEffect: true
	},
	"Heavenly Ascent": {
		type: "Fighting",
		category: "Focus",
		bp: 120,
		acc100: true
	},
	"Cross Drive": {
		type: "Fighting",
		category: "Focus",
		bp: 100,
		acc100: true
	},
	"Dancing Sword": {
		type: "Fighting",
		category: "Focus",
		bp: 80,
		acc100: true
	},
	"Life Burst": {
		type: "Fighting",
		category: "Focus",
		isEN: true,
		bp: 80,
		alwaysHits: true
	},
	"Aura Drain": {
		type: "Fighting",
		category: "Focus",
		bp: 75,
		acc100: true,
		givesHealth: true
	},
	"Break Shot": {
		type: "Fighting",
		category: "Focus",
		bp: 75,
		acc100: true
	},
	"Diligence": {
		type: "Fighting",
		category: "Focus",
		isEN: true,
		bp: 60,
		acc100: true
	},
	"Charging Stun": {
		type: "Fighting",
		category: "Focus",
		bp: 55,
		accuracy: 95
	},
	"Corkscrew": {
		type: "Fighting",
		category: "Focus",
		bp: 50,
		accuracy: 90,
		hasSecondaryEffect: true
	},
	"Strike Shot": {
		type: "Fighting",
		category: "Focus",
		bp: 40,
		acc100: true,
		priority: 1
	},
	"Divine Punishment": {
		type: "Fighting",
		category: "Spread",
		isEN: true,
		bp: 1,
		acc100: true
	},
	"GIGANTIC": {
		type: "Fighting",
		category: "Spread",
		isEN: true,
		bp: 120,
		accuracy: 85,
		hasSecondaryEffect: true
	},
	"Concussion": {
		type: "Fighting",
		category: "Spread",
		isEN: true,
		bp: 80,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Understep": {
		type: "Fighting",
		category: "Spread",
		bp: 60,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Twin Thrust": {
		type: "Fighting",
		category: "Spread",
		bp: 50,
		accuracy: 90,
		isTwoHit: true
	},
	"Rush Attack": {
		type: "Fighting",
		category: "Spread",
		bp: 25,
		acc100: true,
		isMultiHit: true
	},
	"Hachiman's Blessing": {
		type: "Fighting",
		category: "Status",
		bp: 0
	},
	"Forward Thrust": {
		type: "Fighting",
		category: "Focus",
		bp: 55,
		acc100: true
	},
	"Backhand Blow": {
		type: "Fighting",
		category: "Focus",
		bp: 80,
		acc100: true
	},
	"Skull Breaker": {
		type: "Fighting",
		category: "Spread",
		bp: 60,
		acc100: true
	},
	"Spiral Strike": {
		type: "Fighting",
		category: "Spread",
		isEN: true,
		bp: 70,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Fighting Sign": {
		type: "Fighting",
		category: "Spread",
		isEN: true,
		bp: 60,
		acc100: true
	},
	"Tense Up": {
		type: "Fighting",
		category: "Status",
		bp: 0
	},
	"Brave Burst": {
		type: "Fighting",
		category: "Spread",
		isEN: true,
		bp: 90,
		acc100: true
	},
	"Shooting Arts": {
		type: "Fighting",
		category: "Focus",
		bp: 25,
		acc100: true,
		isMultiHit: true
	},
	"Miracle Reprisal": {
		type: "Illusion",
		category: "Focus",
		isEN: true,
		bp: 20,
		acc100: true
	},
	"Revolving Illusions": {
		type: "Illusion",
		category: "Focus",
		isEN: true,
		bp: 95,
		acc100: true,
		isFoul: true
	},
	"Ephemeral": {
		type: "Illusion",
		category: "Focus",
		isEN: true,
		bp: 95,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Sneak Attack": {
		type: "Illusion",
		category: "Focus",
		bp: 80,
		acc100: true,
		priority: 1
	},
	"Mirage Edge": {
		type: "Illusion",
		category: "Focus",
		bp: 80,
		acc100: true
	},
	"Flower of Hell": {
		type: "Illusion",
		category: "Focus",
		bp: 80,
		acc100: true,
		hasSecondaryEffect: true
	},
	"St. Elmo's Fire": {
		type: "Illusion",
		category: "Focus",
		bp: 65,
		acc100: true
	},
	"Fake Jewel": {
		type: "Illusion",
		category: "Focus",
		bp: 60,
		acc100: true
	},
	"Invisible Heart": {
		type: "Illusion",
		category: "Focus",
		isEN: true,
		bp: 60,
		alwaysHits: true
	},
	"Reprimand": {
		type: "Illusion",
		category: "Focus",
		bp: 60,
		acc100: true
	},
	"Pursuit": {
		type: "Illusion",
		category: "Focus",
		bp: 50,
		acc100: true
	},
	"Gravity Blast": {
		type: "Illusion",
		category: "Spread",
		isEN: true,
		bp: 120,
		acc100: true
	},
	"Moon's Reflection": {
		type: "Illusion",
		category: "Spread",
		isEN: true,
		bp: 1,
		acc100: true
	},
	"Catastrophe": {
		type: "Illusion",
		category: "Spread",
		isEN: true,
		bp: 95,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Glamor Pandemic": {
		type: "Illusion",
		category: "Spread",
		isEN: true,
		bp: 100,
		accuracy: 50,
		hasSecondaryEffect: true
	},
	"Unknown Flare": {
		type: "Illusion",
		category: "Spread",
		isEN: true,
		bp: 80,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Mysterious Wave": {
		type: "Illusion",
		category: "Spread",
		isEN: true,
		bp: 80,
		acc100: true,
		defenseStat: "fd"
	},
	"Continue": {
		type: "Illusion",
		category: "Status",
		bp: 0
	},
	"Mirage": {
		type: "Illusion",
		category: "Status",
		bp: 0,
		priority: 4
	},
	"Near-Death Event": {
		type: "Illusion",
		category: "Status",
		bp: 0
	},
	"Amnesia": {
		type: "Illusion",
		category: "Status",
		bp: 0
	},
	"Power Swap": {
		type: "Illusion",
		category: "Status",
		bp: 0
	},
	"Power Split": {
		type: "Illusion",
		category: "Status",
		bp: 0
	},
	"Cross Change": {
		type: "Illusion",
		category: "Status",
		bp: 0
	},
	"Guard Swap": {
		type: "Illusion",
		category: "Status",
		bp: 0
	},
	"Guard Split": {
		type: "Illusion",
		category: "Status",
		bp: 0
	},
	"Pretense": {
		type: "Illusion",
		category: "Status",
		bp: 0,
		priority: 1
	},
	"Doppleganger": {
		type: "Illusion",
		category: "Status",
		bp: 0,
		priority: 1
	},
	"Imagination": {
		type: "Illusion",
		category: "Status",
		bp: 0
	},
	"Honest Man's Lie": {
		type: "Illusion",
		category: "Status",
		bp: 0,
		acc100: true
	},
	"Possession": {
		type: "Illusion",
		category: "Status",
		bp: 0
	},
	"Projection": {
		type: "Illusion",
		category: "Status",
		bp: 0
	},
	"Recall Nightmare": {
		type: "Illusion",
		category: "Status",
		bp: 0,
		acc100: true
	},
	"Mind Control": {
		type: "Illusion",
		category: "Status",
		bp: 0,
		acc100: true
	},
	"Gorgon's Eye": {
		type: "Illusion",
		category: "Status",
		bp: 0,
		accuracy: 75
	},
	"Bout Drunkard": {
		type: "Illusion",
		category: "Status",
		bp: 0,
		acc100: true
	},
	"Illusion Bullets": {
		type: "Illusion",
		category: "Focus",
		bp: 60,
		acc100: true
	},
	"Mirror World": {
		type: "Illusion",
		category: "Focus",
		isEN: true,
		bp: 60,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Mysterious Flare": {
		type: "Illusion",
		category: "Spread",
		isEN: true,
		bp: 60,
		acc100: true
	},
	"Imaginary Friend": {
		type: "Illusion",
		category: "Spread",
		isEN: true,
		bp: 65,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Illusion Sign": {
		type: "Illusion",
		category: "Spread",
		isEN: true,
		bp: 60,
		acc100: true
	},
	"Heat Haze": {
		type: "Illusion",
		category: "Status",
		bp: 0
	},
	"Hallucination": {
		type: "Illusion",
		category: "Focus",
		isEN: true,
		bp: 120,
		accuracy: 85
	},
	"Word Break": {
		type: "Illusion",
		category: "Status",
		bp: 0
	},
	"Detonation Burst": {
		type: "Sound",
		category: "Focus",
		isEN: true,
		bp: 120,
		acc100: true,
		dropsStats: 1
	},
	"High Tone Crush": {
		type: "Sound",
		category: "Focus",
		bp: 95,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Dancing Rain": {
		type: "Sound",
		category: "Focus",
		bp: 75,
		accuracy: 95,
		hasSecondaryEffect: true
	},
	"Phantom Ensemble": {
		type: "Sound",
		category: "Focus",
		isEN: true,
		bp: 55,
		accuracy: 95
	},
	"Danmaku Orchestra": {
		type: "Sound",
		category: "Spread",
		isEN: true,
		bp: 120,
		accuracy: 85
	},
	"Ultra High Tone": {
		type: "Sound",
		category: "Spread",
		bp: 95,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Primal Noise": {
		type: "Sound",
		category: "Spread",
		isEN: true,
		bp: 75,
		accuracy: 95,
		hasSecondaryEffect: true
	},
	"Fantasy Melody": {
		type: "Sound",
		category: "Spread",
		isEN: true,
		bp: 60,
		alwaysHits: true
	},
	"Sorrowful Tune": {
		type: "Sound",
		category: "Spread",
		isEN: true,
		bp: 55,
		accuracy: 95,
		hasSecondaryEffect: true
	},
	"Infinite Scales": {
		type: "Sound",
		category: "Spread",
		isEN: true,
		bp: 20,
		acc100: true
	},
	"Encourage": {
		type: "Sound",
		category: "Status",
		bp: 0,
		acc100: true
	},
	"Upbeat": {
		type: "Sound",
		category: "Status",
		bp: 0,
		acc100: true
	},
	"A Tempo": {
		type: "Sound",
		category: "Status",
		bp: 0
	},
	"Booing": {
		type: "Sound",
		category: "Status",
		bp: 0
	},
	"Ruinous Voice": {
		type: "Sound",
		category: "Status",
		bp: 0
	},
	"Brave Song": {
		type: "Sound",
		category: "Status",
		bp: 0
	},
	"Cheer": {
		type: "Sound",
		category: "Status",
		bp: 0
	},
	"Merry Dance": {
		type: "Sound",
		category: "Status",
		bp: 0
	},
	"Inspiration": {
		type: "Sound",
		category: "Status",
		bp: 0
	},
	"Decrescendo": {
		type: "Sound",
		category: "Status",
		bp: 0,
		acc100: true
	},
	"Shout": {
		type: "Sound",
		category: "Status",
		bp: 0,
		acc100: true
	},
	"Shriek": {
		type: "Sound",
		category: "Status",
		bp: 0,
		acc100: true
	},
	"Bellow": {
		type: "Sound",
		category: "Status",
		bp: 0,
		acc100: true
	},
	"Phase Inversion": {
		type: "Sound",
		category: "Status",
		bp: 0,
		priority: 1
	},
	"Roar": {
		type: "Sound",
		category: "Status",
		bp: 0,
		acc100: true
	},
	"Claim": {
		type: "Sound",
		category: "Status",
		bp: 0,
		acc100: true
	},
	"Lullaby": {
		type: "Sound",
		category: "Status",
		bp: 0,
		accuracy: 60
	},
	"Howling Voice": {
		type: "Sound",
		category: "Focus",
		isEN: true,
		bp: 60,
		acc100: true
	},
	"Ambient": {
		type: "Sound",
		category: "Focus",
		isEN: true,
		bp: 65,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Soprano Voice": {
		type: "Sound",
		category: "Spread",
		isEN: true,
		bp: 60,
		acc100: true
	},
	"Waltz": {
		type: "Sound",
		category: "Spread",
		isEN: true,
		bp: 65,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Sound Sign": {
		type: "Sound",
		category: "Spread",
		isEN: true,
		bp: 60,
		acc100: true
	},
	"Tuning": {
		type: "Void",
		category: "Status",
		bp: 0
	},
	"Overdrive": {
		type: "Warped",
		category: "Focus",
		isEN: true,
		bp: 130,
		accuracy: 90,
		dropsStats: 2
	},
	"Distortion Bomb": {
		type: "Warped",
		category: "Focus",
		bp: 95,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Alluring Maze": {
		type: "Warped",
		category: "Focus",
		isEN: true,
		bp: 80,
		acc100: true,
		defenseStat: "sd"
	},
	"Stealth Kill": {
		type: "Warped",
		category: "Focus",
		bp: 80,
		alwaysHits: true
	},
	"Trickster": {
		type: "Warped",
		category: "Focus",
		bp: 40,
		acc100: true,
		priority: 1
	},
	"Dense Fog Bloom": {
		type: "Warped",
		category: "Spread",
		isEN: true,
		bp: 120,
		acc100: true,
		willCharge: true
	},
	"Impulse": {
		type: "Warped",
		category: "Spread",
		isEN: true,
		bp: 95,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Luscious Whisper": {
		type: "Warped",
		category: "Spread",
		isEN: true,
		bp: 80,
		acc100: true,
		defenseStat: "fd"
	},
	"Field Break": {
		type: "Warped",
		category: "Spread",
		bp: 75,
		acc100: true
	},
	"Irreversible Trick": {
		type: "Warped",
		category: "Spread",
		isEN: true,
		bp: 80,
		alwaysHits: true
	},
	"Mirror Damage": {
		type: "Warped",
		category: "Spread",
		isEN: true,
		bp: 60,
		acc100: true
	},
	"Force Shield": {
		type: "Warped",
		category: "Status",
		bp: 0,
		acc100: true,
		priority: 4
	},
	"Element Reverse": {
		type: "Warped",
		category: "Status",
		bp: 0,
		acc100: true
	},
	"Field Shift": {
		type: "Warped",
		category: "Status",
		bp: 0,
		priority: 4
	},
	"Soul Corruption": {
		type: "Warped",
		category: "Status",
		bp: 0,
		accuracy: 80
	},
	"Weather [Sunshower]": {
		type: "Warped",
		category: "Status",
		bp: 0
	},
	"Warped Sign": {
		type: "Warped",
		category: "Spread",
		isEN: true,
		bp: 60,
		acc100: true
	},
	"Realm [Black Rain]": {
		type: "Warped",
		category: "Status",
		bp: 0
	},
	"Time Screw": {
		type: "Warped",
		category: "Focus",
		isEN: true,
		bp: 60,
		alwaysHits: true
	},
	"Limitless Realm": {
		type: "Warped",
		category: "Status",
		bp: 0
	}
};

var MOVES_BASE = {
	"(No Move)": {
		type: "None",
		category: "Status",
		bp: 0
	},
	"Death Match": {
		type: "Void",
		category: "Focus",
		bp: 1,
		acc100: true,
		isVoid: true
	},
	"Perfect Aim": {
		type: "Void",
		category: "Focus",
		bp: 1,
		accuracy: 30,
		isVoid: true
	},
	"Prank": {
		type: "Void",
		category: "Focus",
		bp: 1,
		accuracy: 90,
		isVoid: true
	},
	"Recompensate": {
		type: "Void",
		category: "Focus",
		bp: 1,
		acc100: true,
		isVoid: true
	},
	"Whole Being": {
		type: "Void",
		category: "Focus",
		bp: 125,
		acc100: true,
		isVoid: true
	},
	"Final Tribulation": {
		type: "Void",
		category: "Focus",
		bp: 100,
		acc100: true,
		isVoid: true
	},
	"Last Resort": {
		type: "Void",
		category: "Focus",
		bp: 140,
		acc100: true,
		isVoid: true
	},
	"Firm Spirit": {
		type: "Void",
		category: "Focus",
		isEN: true,
		bp: 130,
		acc100: true,
		willCharge: true,
		isVoid: true
	},
	"Overskill": {
		type: "Void",
		category: "Focus",
		isEN: true,
		bp: 120,
		acc100: true,
		isVoid: true,
		hasRecoil: "number"
	},
	"Spirit Rush": {
		type: "Void",
		category: "Focus",
		isEN: true,
		bp: 120,
		acc100: true,
		isVoid: true,
		hasRecoil: "number"
	},
	"Frenzied Joururi": {
		type: "Void",
		category: "Focus",
		bp: 100,
		acc100: true,
		isVoid: true
	},
	"Swallow Cut": {
		type: "Void",
		category: "Focus",
		bp: 80,
		acc100: true,
		priority: 2,
		isVoid: true
	},
	"Blow from Calamity": {
		type: "Void",
		category: "Focus",
		isEN: true,
		bp: 70,
		acc100: true,
		isVoid: true
	},
	"Retaliation": {
		type: "Void",
		category: "Focus",
		bp: 70,
		acc100: true,
		isVoid: true
	},
	"Piercing Stab": {
		type: "Void",
		category: "Focus",
		bp: 70,
		acc100: true,
		isVoid: true
	},
	"Struggle": {
		type: "Dream",
		category: "Focus",
		bp: 50,
		alwaysHits: true,
		hasRecoil: "number"
	},
	"Cruciform": {
		type: "Void",
		category: "Focus",
		bp: 50,
		accuracy: 90,
		isTwoHit: true,
		isVoid: true
	},
	"Raid": {
		type: "Void",
		category: "Focus",
		bp: 40,
		acc100: true,
		priority: 3,
		isVoid: true
	},
	"Tiger Rush": {
		type: "Void",
		category: "Focus",
		bp: 40,
		acc100: true,
		priority: 1,
		isVoid: true
	},
	"Shadow Rush": {
		type: "Void",
		category: "Focus",
		bp: 30,
		acc100: true,
		priority: 2,
		isVoid: true
	},
	"Danmaku Dance": {
		type: "Void",
		category: "Spread",
		isEN: true,
		bp: 120,
		acc100: true,
		willLock: true,
		isVoid: true
	},
	"Crossbow Assault": {
		type: "Void",
		category: "Spread",
		isEN: true,
		bp: 85,
		acc100: true,
		hasSecondaryEffect: true,
		isVoid: true
	},
	"Tri-Effect": {
		type: "Void",
		category: "Spread",
		isEN: true,
		bp: 80,
		acc100: true,
		hasSecondaryEffect: true,
		isVoid: true
	},
	"Destruction": {
		type: "Void",
		category: "Spread",
		isEN: true,
		bp: 70,
		acc100: true,
		hasSecondaryEffect: true,
		isVoid: true
	},
	"Volley": {
		type: "Void",
		category: "Spread",
		isEN: true,
		bp: 60,
		alwaysHits: true,
		isVoid: true
	},
	"Heavenly Blessing": {
		type: "Void",
		category: "Spread",
		isEN: true,
		bp: 50,
		acc100: true,
		isVoid: true
	},
	"Earthly Blessing": {
		type: "Void",
		category: "Spread",
		isEN: true,
		bp: 60,
		acc100: true,
		isVoid: true
	},
	"Random Shots": {
		type: "Void",
		category: "Spread",
		isEN: true,
		bp: 25,
		acc100: true,
		isMultiHit: true,
		isVoid: true
	},
	"False Courage": {
		type: "Void",
		category: "Status",
		bp: 0,
		priority: 4,
		isVoid: true
	},
	"Supernatural Border": {
		type: "Void",
		category: "Status",
		bp: 0,
		priority: 4,
		isVoid: true
	},
	"Magic Barrier": {
		type: "Void",
		category: "Status",
		bp: 0,
		isVoid: true
	},
	"Invoke Deity": {
		type: "Void",
		category: "Status",
		bp: 0,
		isVoid: true
	},
	"First Aid": {
		type: "Void",
		category: "Status",
		bp: 0,
		isVoid: true
	},
	"Resourcefulness": {
		type: "Void",
		category: "Status",
		bp: 0,
		isVoid: true
	},
	"Power Spot": {
		type: "Void",
		category: "Status",
		bp: 0,
		isVoid: true
	},
	"Unconscious Mind": {
		type: "Void",
		category: "Status",
		bp: 0,
		isVoid: true
	},
	"Inner Power": {
		type: "Void",
		category: "Status",
		bp: 0,
		isVoid: true
	},
	"Camouflage": {
		type: "Void",
		category: "Status",
		bp: 0,
		isVoid: true
	},
	"Imposing Air": {
		type: "Void",
		category: "Status",
		bp: 0,
		isVoid: true
	},
	"Offensive Trance": {
		type: "Void",
		category: "Status",
		bp: 0,
		isVoid: true
	},
	"Battle Preparation": {
		type: "Void",
		category: "Status",
		bp: 0,
		isVoid: true
	},
	"Foresee": {
		type: "Void",
		category: "Status",
		bp: 0,
		isVoid: true
	},
	"Confine": {
		type: "Void",
		category: "Status",
		bp: 0,
		acc100: true,
		isVoid: true
	},
	"Backup Plan": {
		type: "Void",
		category: "Status",
		bp: 0,
		isVoid: true
	},
	"Yin Energy": {
		type: "Dream",
		category: "Focus",
		isEN: true,
		bp: 55,
		acc100: true
	},
	"Guided Missile": {
		type: "Void",
		category: "Focus",
		isEN: true,
		bp: 80,
		accuracy: 85,
		hasSecondaryEffect: true,
		isVoid: true
	},
	"Yang Energy": {
		type: "Dream",
		category: "Spread",
		isEN: true,
		bp: 55,
		acc100: true
	},
	"Scatter Beam": {
		type: "Void",
		category: "Spread",
		isEN: true,
		bp: 65,
		acc100: true,
		isVoid: true
	},
	"Good Luck": {
		type: "Void",
		category: "Status",
		bp: 0,
		isVoid: true
	},
	"Shield Up": {
		type: "Void",
		category: "Status",
		bp: 0,
		isVoid: true
	},
	"Barrier Up": {
		type: "Void",
		category: "Status",
		bp: 0,
		isVoid: true
	},
	"Conflagration": {
		type: "Fire",
		category: "Focus",
		isEN: true,
		bp: 1,
		acc100: true
	},
	"Purgatory Flicker": {
		type: "Fire",
		category: "Focus",
		bp: 120,
		acc100: true,
		hasSecondaryEffect: true,
		hasRecoil: "number"
	},
	"Holy Flare": {
		type: "Fire",
		category: "Focus",
		isEN: true,
		bp: 100,
		accuracy: 95,
		hasSecondaryEffect: true
	},
	"Burn Strike": {
		type: "Fire",
		category: "Focus",
		bp: 90,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Exploding Blaze": {
		type: "Fire",
		category: "Focus",
		isEN: true,
		bp: 80,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Fire Javelin": {
		type: "Fire",
		category: "Focus",
		bp: 80,
		acc100: true,
		hasSecondaryEffect: true,
		isJavelin: true
	},
	"Rising Sun": {
		type: "Fire",
		category: "Focus",
		bp: 50,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Phoenix Waltz": {
		type: "Fire",
		category: "Spread",
		bp: 150,
		acc100: true
	},
	"Deflagration": {
		type: "Fire",
		category: "Spread",
		isEN: true,
		bp: 150,
		acc100: true
	},
	"Volcano": {
		type: "Fire",
		category: "Spread",
		isEN: true,
		bp: 130,
		accuracy: 90,
		dropsStats: 2
	},
	"Inferno": {
		type: "Fire",
		category: "Spread",
		isEN: true,
		bp: 120,
		accuracy: 85,
		hasSecondaryEffect: true
	},
	"Blaze Spear": {
		type: "Fire",
		category: "Spread",
		bp: 100,
		accuracy: 90,
		hasSecondaryEffect: true
	},
	"Blaze of Tenmei": {
		type: "Fire",
		category: "Spread",
		bp: 100,
		accuracy: 50,
		hasSecondaryEffect: true
	},
	"Fire-Dragon Spiral": {
		type: "Fire",
		category: "Spread",
		isEN: true,
		bp: 100,
		accuracy: 75,
		partialTrapping: true
	},
	"Backdraft": {
		type: "Fire",
		category: "Spread",
		isEN: true,
		bp: 95,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Flashover": {
		type: "Fire",
		category: "Spread",
		isEN: true,
		bp: 80,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Flame Wave": {
		type: "Fire",
		category: "Spread",
		isEN: true,
		bp: 80,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Fire Wall": {
		type: "Fire",
		category: "Spread",
		isEN: true,
		bp: 65,
		acc100: true
	},
	"Fire-Snake Spiral": {
		type: "Fire",
		category: "Spread",
		isEN: true,
		bp: 20,
		acc100: true,
		partialTrapping: true
	},
	"Will-o'-Wisp": {
		type: "Fire",
		category: "Status",
		bp: 0,
		accuracy: 85
	},
	"Thermit": {
		type: "Fire",
		category: "Status",
		bp: 0,
		accuracy: 90
	},
	"Terrain [Suzaku]": {
		type: "Fire",
		category: "Status",
		bp: 0
	},
	"Fireball": {
		type: "Fire",
		category: "Focus",
		bp: 55,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Flame Pillar": {
		type: "Fire",
		category: "Focus",
		isEN: true,
		bp: 65,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Fiery Game": {
		type: "Fire",
		category: "Spread",
		isEN: true,
		bp: 55,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Flare": {
		type: "Fire",
		category: "Spread",
		isEN: true,
		bp: 70,
		accuracy: 90,
		hasSecondaryEffect: true
	},
	"Fire Sign": {
		type: "Fire",
		category: "Spread",
		isEN: true,
		bp: 60,
		acc100: true
	},
	"Rub Burn": {
		type: "Fire",
		category: "Status",
		bp: 0,
		acc100: true
	},
	"High Tide": {
		type: "Water",
		category: "Focus",
		bp: 120,
		accuracy: 85
	},
	"Waterfall Drop": {
		type: "Water",
		category: "Focus",
		bp: 100,
		acc100: true
	},
	"Flash Flood": {
		type: "Water",
		category: "Focus",
		bp: 80,
		acc100: true
	},
	"Ice Coffin": {
		type: "Water",
		category: "Focus",
		isEN: true,
		bp: 80,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Aqua Javelin": {
		type: "Water",
		category: "Focus",
		bp: 80,
		acc100: true,
		hasSecondaryEffect: true,
		isJavelin: true
	},
	"Reverse Splash": {
		type: "Water",
		category: "Focus",
		isEN: true,
		bp: 60,
		acc100: true
	},
	"Aquasonic": {
		type: "Water",
		category: "Spread",
		bp: 40,
		acc100: true,
		priority: 1
	},
	"Aqua Cutter": {
		type: "Water",
		category: "Focus",
		bp: 40,
		acc100: true,
		priority: 1
	},
	"Ice Gatling": {
		type: "Water",
		category: "Focus",
		bp: 15,
		acc100: true,
		priority: 1,
		isMultiHit: true
	},
	"Aqua Cannon": {
		type: "Water",
		category: "Spread",
		isEN: true,
		bp: 150,
		acc100: true
	},
	"Aqua Rake": {
		type: "Water",
		category: "Spread",
		isEN: true,
		bp: 150,
		acc100: true
	},
	"Cold Rain": {
		type: "Water",
		category: "Spread",
		isEN: true,
		bp: 120,
		accuracy: 80,
		hasSecondaryEffect: true
	},
	"Ice Age": {
		type: "Water",
		category: "Spread",
		isEN: true,
		bp: 95,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Frozen Prison": {
		type: "Water",
		category: "Spread",
		bp: 95,
		acc100: true
	},
	"Lazy Mist": {
		type: "Water",
		category: "Spread",
		isEN: true,
		bp: 80,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Geyser": {
		type: "Water",
		category: "Spread",
		bp: 60,
		acc100: true,
		alwaysCrit: true
	},
	"Slime Shot": {
		type: "Water",
		category: "Spread",
		bp: 55,
		acc100: true
	},
	"Veil of Water": {
		type: "Water",
		category: "Spread",
		isEN: true,
		bp: 40,
		acc100: true
	},
	"Heavy Rain": {
		type: "Water",
		category: "Spread",
		isEN: true,
		bp: 20,
		acc100: true,
		partialTrapping: true
	},
	"Cloudburst": {
		type: "Water",
		category: "Status",
		bp: 0
	},
	"Ebb Tide": {
		type: "Water",
		category: "Status",
		bp: 0,
		acc100: true
	},
	"Aquatic Waltz": {
		type: "Water",
		category: "Status",
		bp: 0,
		acc100: true
	},
	"Drought": {
		type: "Water",
		category: "Status",
		bp: 0,
		acc100: true
	},
	"Terrain [Genbu]": {
		type: "Water",
		category: "Status",
		bp: 0
	},
	"Water Ball": {
		type: "Water",
		category: "Focus",
		bp: 60,
		acc100: true
	},
	"Frost Edge": {
		type: "Water",
		category: "Focus",
		bp: 65,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Foam Bubbles": {
		type: "Water",
		category: "Spread",
		bp: 60,
		acc100: true
	},
	"Snowball Fight": {
		type: "Water",
		category: "Spread",
		bp: 65,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Water Sign": {
		type: "Water",
		category: "Spread",
		isEN: true,
		bp: 60,
		acc100: true
	},
	"Quagmire": {
		type: "Water",
		category: "Status",
		bp: 0,
		acc100: true
	},
	"Tumble Plant": {
		type: "Nature",
		category: "Focus",
		bp: 1,
		acc100: true
	},
	"Root Frog": {
		type: "Nature",
		category: "Focus",
		isEN: true,
		bp: 120,
		accuracy: 85
	},
	"Peach-Thorn Arrow": {
		type: "Nature",
		category: "Focus",
		bp: 120,
		acc100: true
	},
	"Voice of Famine": {
		type: "Nature",
		category: "Focus",
		isEN: true,
		bp: 95,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Natural Beauty": {
		type: "Nature",
		category: "Focus",
		bp: 90,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Grass Javelin": {
		type: "Nature",
		category: "Focus",
		bp: 80,
		acc100: true,
		hasSecondaryEffect: true,
		isJavelin: true
	},
	"Power Drain": {
		type: "Nature",
		category: "Focus",
		isEN: true,
		bp: 75,
		acc100: true,
		givesHealth: true
	},
	"Hornet's Flit": {
		type: "Nature",
		category: "Focus",
		bp: 25,
		acc100: true,
		isMultiHit: true
	},
	"Sakura Blizzard": {
		type: "Nature",
		category: "Spread",
		bp: 120,
		accuracy: 85,
		hasSecondaryEffect: true
	},
	"Off-Season Bloom": {
		type: "Nature",
		category: "Spread",
		isEN: true,
		bp: 130,
		accuracy: 90,
		dropsStats: 2
	},
	"Petal Dance": {
		type: "Nature",
		category: "Spread",
		isEN: true,
		bp: 120,
		acc100: true,
		willLock: true
	},
	"Rainbow Flowers": {
		type: "Nature",
		category: "Spread",
		isEN: true,
		bp: 120,
		acc100: true,
		willCharge: true
	},
	"Pollen Mist": {
		type: "Nature",
		category: "Spread",
		isEN: true,
		bp: 95,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Energy Absorb": {
		type: "Nature",
		category: "Spread",
		isEN: true,
		bp: 75,
		acc100: true,
		givesHealth: true
	},
	"Swirling Leaves": {
		type: "Nature",
		category: "Spread",
		bp: 60,
		alwaysHits: true
	},
	"Forest Therapy": {
		type: "Nature",
		category: "Status",
		bp: 0
	},
	"Fountain of Life": {
		type: "Nature",
		category: "Status",
		bp: 0
	},
	"Thorned Ivy": {
		type: "Nature",
		category: "Status",
		bp: 0,
		priority: 4
	},
	"Drain Seed": {
		type: "Nature",
		category: "Status",
		bp: 0,
		accuracy: 90
	},
	"Grace of Mana": {
		type: "Nature",
		category: "Status",
		bp: 0
	},
	"White Lily Dance": {
		type: "Nature",
		category: "Status",
		bp: 0
	},
	"Fairy Dance": {
		type: "Nature",
		category: "Status",
		bp: 0
	},
	"White Mist": {
		type: "Nature",
		category: "Status",
		bp: 0
	},
	"Mystic Wind": {
		type: "Nature",
		category: "Status",
		bp: 0
	},
	"Bewitching Pollen": {
		type: "Nature",
		category: "Status",
		bp: 0,
		accuracy: 70
	},
	"Mystical Bug Mist": {
		type: "Nature",
		category: "Status",
		bp: 0,
		accuracy: 75
	},
	"Terrain [Seiryu]": {
		type: "Nature",
		category: "Status",
		bp: 0
	},
	"Butterfly's Flit": {
		type: "Nature",
		category: "Status",
		bp: 0
	},
	"Parasite": {
		type: "Nature",
		category: "Focus",
		isEN: true,
		bp: 50,
		acc100: true,
		givesHealth: true
	},
	"Apple Bomb": {
		type: "Nature",
		category: "Focus",
		bp: 60,
		accuracy: 95
	},
	"Scatter Beans": {
		type: "Nature",
		category: "Spread",
		bp: 60,
		acc100: true
	},
	"Seasonal Flowers": {
		type: "Nature",
		category: "Spread",
		bp: 65,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Nature Sign": {
		type: "Nature",
		category: "Spread",
		isEN: true,
		bp: 60,
		acc100: true
	},
	"Root Injection": {
		type: "Nature",
		category: "Status",
		bp: 0,
		acc100: true
	},
	"Shattering Earth": {
		type: "Earth",
		category: "Focus",
		bp: 1,
		accuracy: 30
	},
	"Cataclysm": {
		type: "Earth",
		category: "Focus",
		bp: 150,
		acc100: true
	},
	"Shooting Press": {
		type: "Earth",
		category: "Focus",
		isEN: true,
		bp: 100,
		acc100: true
	},
	"Rocky Barrage": {
		type: "Earth",
		category: "Focus",
		bp: 80,
		acc100: true
	},
	"Royal Prism": {
		type: "Earth",
		category: "Focus",
		isEN: true,
		bp: 75,
		accuracy: 95,
		hasSecondaryEffect: true
	},
	"Rock Drills": {
		type: "Earth",
		category: "Focus",
		bp: 70,
		accuracy: 90,
		alwaysCrit: true
	},
	"Spiked Stones": {
		type: "Earth",
		category: "Focus",
		bp: 60,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Dust Cloud": {
		type: "Earth",
		category: "Focus",
		bp: 60,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Stone Throw": {
		type: "Earth",
		category: "Focus",
		bp: 50,
		accuracy: 90,
		isTwoHit: true
	},
	"Dust Devil Gate": {
		type: "Earth",
		category: "Focus",
		bp: 20,
		acc100: true,
		partialTrapping: true
	},
	"Godstone Frenzy": {
		type: "Earth",
		category: "Focus",
		bp: 25,
		acc100: true,
		isMultiHit: true
	},
	"Waves of Earth": {
		type: "Earth",
		category: "Spread",
		isEN: true,
		bp: 95,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Unstable Horizon": {
		type: "Earth",
		category: "Spread",
		isEN: true,
		bp: 80,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Jewelry Storm": {
		type: "Earth",
		category: "Spread",
		bp: 80,
		acc100: true
	},
	"Landslide": {
		type: "Earth",
		category: "Spread",
		bp: 65,
		acc100: true
	},
	"Stone Circle": {
		type: "Earth",
		category: "Spread",
		bp: 60,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Mine Trap": {
		type: "Earth",
		category: "Status",
		bp: 0
	},
	"Weather [Duststorm]": {
		type: "Earth",
		category: "Status",
		bp: 0
	},
	"Mud Dango": {
		type: "Earth",
		category: "Focus",
		bp: 60,
		acc100: true
	},
	"Stone Rain": {
		type: "Earth",
		category: "Focus",
		bp: 65,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Slingshot": {
		type: "Earth",
		category: "Spread",
		bp: 55,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Mudslide": {
		type: "Earth",
		category: "Spread",
		bp: 75,
		accuracy: 80,
		hasSecondaryEffect: true
	},
	"Earth Sign": {
		type: "Earth",
		category: "Spread",
		isEN: true,
		bp: 60,
		acc100: true
	},
	"Racing Earth": {
		type: "Earth",
		category: "Status",
		bp: 0
	},
	"Destruction Rift": {
		type: "Earth",
		category: "Spread",
		bp: 60,
		acc100: true
	},
	"Clearing Mist": {
		type: "Steel",
		category: "Focus",
		bp: 1,
		acc100: true
	},
	"Mirror's Reflection": {
		type: "Steel",
		category: "Focus",
		isEN: true,
		bp: 1,
		acc100: true
	},
	"Impact Rebellion": {
		type: "Steel",
		category: "Focus",
		bp: 1,
		acc100: true
	},
	"Full Metal Crash": {
		type: "Steel",
		category: "Focus",
		bp: 150,
		accuracy: 80,
		hasRecoil: "number"
	},
	"Samurai Edge": {
		type: "Steel",
		category: "Focus",
		bp: 120,
		accuracy: 85,
		hasSecondaryEffect: true
	},
	"Brandish": {
		type: "Steel",
		category: "Focus",
		bp: 120,
		acc100: true,
		hasRecoil: "number"
	},
	"Armor Pierce": {
		type: "Steel",
		category: "Focus",
		bp: 90,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Killing Bite": {
		type: "Steel",
		category: "Focus",
		bp: 70,
		accuracy: 90,
		alwaysCrit: true
	},
	"Reversal Sword": {
		type: "Steel",
		category: "Focus",
		bp: 60,
		alwaysHits: true
	},
	"Overtake Strike": {
		type: "Steel",
		category: "Focus",
		bp: 40,
		acc100: true,
		priority: 1
	},
	"Last Slash": {
		type: "Steel",
		category: "Spread",
		bp: 100,
		acc100: true
	},
	"Silver Rain": {
		type: "Steel",
		category: "Spread",
		isEN: true,
		bp: 95,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Chrome Ray": {
		type: "Steel",
		category: "Spread",
		isEN: true,
		bp: 90,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Twin Gears": {
		type: "Steel",
		category: "Spread",
		bp: 50,
		accuracy: 90,
		isTwoHit: true
	},
	"Rapid Throw": {
		type: "Steel",
		category: "Spread",
		bp: 25,
		acc100: true,
		isMultiHit: true
	},
	"Focused Stance": {
		type: "Steel",
		category: "Status",
		bp: 0
	},
	"Strenuous Stance": {
		type: "Steel",
		category: "Status",
		bp: 0
	},
	"Mad Rush Stance": {
		type: "Steel",
		category: "Status",
		bp: 0
	},
	"Iron Wall Stance": {
		type: "Steel",
		category: "Status",
		bp: 0
	},
	"Vigilant Watch": {
		type: "Steel",
		category: "Status",
		bp: 0
	},
	"Terrain [Byakko]": {
		type: "Steel",
		category: "Status",
		bp: 0
	},
	"Stealth Trap": {
		type: "Steel",
		category: "Status",
		bp: 0
	},
	"The Ripper": {
		type: "Steel",
		category: "Focus",
		bp: 60,
		accuracy: 95
	},
	"Hammer Throw": {
		type: "Steel",
		category: "Focus",
		bp: 70,
		acc100: true
	},
	"Metal Needle": {
		type: "Steel",
		category: "Spread",
		bp: 65,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Steel Sign": {
		type: "Steel",
		category: "Spread",
		isEN: true,
		bp: 60,
		acc100: true
	},
	"Single-Minded": {
		type: "Steel",
		category: "Status",
		bp: 0
	},
	"Gensokyo Typhoon": {
		type: "Wind",
		category: "Focus",
		isEN: true,
		bp: 140,
		acc100: true,
		willCharge: true
	},
	"Foehn Winds": {
		type: "Wind",
		category: "Focus",
		bp: 120,
		acc100: true,
		hasRecoil: "number"
	},
	"Wind Javelin": {
		type: "Wind",
		category: "Focus",
		bp: 80,
		acc100: true,
		hasSecondaryEffect: true,
		isJavelin: true
	},
	"Air Stamp": {
		type: "Wind",
		category: "Focus",
		bp: 55,
		accuracy: 95
	},
	"Thieving Wind": {
		type: "Wind",
		category: "Focus",
		isEN: true,
		bp: 60,
		acc100: true
	},
	"Wind Train": {
		type: "Wind",
		category: "Focus",
		isEN: true,
		bp: 60,
		alwaysHits: true
	},
	"Twister": {
		type: "Wind",
		category: "Focus",
		bp: 25,
		acc100: true,
		isMultiHit: true
	},
	"Great Tornado": {
		type: "Wind",
		category: "Focus",
		isEN: true,
		bp: 20,
		acc100: true,
		partialTrapping: true
	},
	"Macroburst": {
		type: "Wind",
		category: "Spread",
		isEN: true,
		bp: 120,
		accuracy: 80,
		hasSecondaryEffect: true
	},
	"Swift Air-Raid": {
		type: "Wind",
		category: "Spread",
		isEN: true,
		bp: 80,
		alwaysHits: true
	},
	"Wind Wave": {
		type: "Wind",
		category: "Spread",
		isEN: true,
		bp: 75,
		accuracy: 95,
		hasSecondaryEffect: true
	},
	"Dancing Wind": {
		type: "Wind",
		category: "Spread",
		isEN: true,
		bp: 60,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Smash Spin": {
		type: "Wind",
		category: "Spread",
		isEN: true,
		bp: 60,
		acc100: true
	},
	"Spring First": {
		type: "Wind",
		category: "Spread",
		isEN: true,
		bp: 40,
		acc100: true,
		priority: 1
	},
	"Wind God's Grace": {
		type: "Wind",
		category: "Status",
		bp: 0
	},
	"Squall": {
		type: "Wind",
		category: "Status",
		bp: 0
	},
	"Perch": {
		type: "Wind",
		category: "Status",
		bp: 0
	},
	"Favorable Wind": {
		type: "Wind",
		category: "Status",
		bp: 0
	},
	"Skanda": {
		type: "Wind",
		category: "Status",
		bp: 0
	},
	"Weather [Calm]": {
		type: "Wind",
		category: "Status",
		bp: 0
	},
	"Feather Shot": {
		type: "Wind",
		category: "Focus",
		isEN: true,
		bp: 60,
		acc100: true
	},
	"Wintry Wind": {
		type: "Wind",
		category: "Focus",
		isEN: true,
		bp: 55,
		accuracy: 95
	},
	"Night Wind": {
		type: "Wind",
		category: "Spread",
		isEN: true,
		bp: 60,
		acc100: true
	},
	"Westerlies": {
		type: "Wind",
		category: "Spread",
		isEN: true,
		bp: 65,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Wind Sign": {
		type: "Wind",
		category: "Spread",
		isEN: true,
		bp: 60,
		acc100: true
	},
	"Sharp Wind": {
		type: "Wind",
		category: "Status",
		bp: 0
	},
	"Thor's Hammer": {
		type: "Electric",
		category: "Focus",
		bp: 120,
		acc100: true,
		hasSecondaryEffect: true,
		hasRecoil: "number"
	},
	"Lightning Cut": {
		type: "Electric",
		category: "Focus",
		bp: 90,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Spark Javelin": {
		type: "Electric",
		category: "Focus",
		bp: 80,
		acc100: true,
		hasSecondaryEffect: true,
		isJavelin: true
	},
	"Plasma Ball": {
		type: "Electric",
		category: "Focus",
		bp: 20,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Thunderlord's Scorn": {
		type: "Electric",
		category: "Spread",
		isEN: true,
		bp: 120,
		accuracy: 85,
		hasSecondaryEffect: true
	},
	"Divine Thunder": {
		type: "Electric",
		category: "Spread",
		isEN: true,
		bp: 120,
		accuracy: 50,
		hasSecondaryEffect: true
	},
	"Thunder Force": {
		type: "Electric",
		category: "Spread",
		isEN: true,
		bp: 95,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Stormcloud's Eye": {
		type: "Electric",
		category: "Spread",
		isEN: true,
		bp: 80,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Charge Thief": {
		type: "Electric",
		category: "Spread",
		isEN: true,
		bp: 75,
		acc100: true,
		givesHealth: true
	},
	"Lightning Speed": {
		type: "Electric",
		category: "Spread",
		bp: 70,
		acc100: true
	},
	"Spark Cross": {
		type: "Electric",
		category: "Spread",
		isEN: true,
		bp: 60,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Purple Lightning": {
		type: "Electric",
		category: "Spread",
		isEN: true,
		bp: 50,
		accuracy: 90,
		hasSecondaryEffect: true
	},
	"Lightning Charge": {
		type: "Electric",
		category: "Status",
		bp: 0
	},
	"High Magnetism": {
		type: "Electric",
		category: "Status",
		bp: 0
	},
	"Thunder Veil": {
		type: "Electric",
		category: "Status",
		bp: 0,
		accuracy: 80
	},
	"Paralyzing Wave": {
		type: "Electric",
		category: "Status",
		bp: 0,
		acc100: true
	},
	"Spark Shot": {
		type: "Electric",
		category: "Focus",
		isEN: true,
		bp: 55,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Lightning Strike": {
		type: "Electric",
		category: "Spread",
		isEN: true,
		bp: 55,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Energy Bolt": {
		type: "Electric",
		category: "Spread",
		isEN: true,
		bp: 65,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Electric Sign": {
		type: "Electric",
		category: "Spread",
		isEN: true,
		bp: 60,
		acc100: true
	},
	"Thunderclap": {
		type: "Electric",
		category: "Status",
		bp: 0,
		priority: 3
	},
	"Luminous Flux": {
		type: "Light",
		category: "Focus",
		isEN: true,
		bp: 120,
		acc100: true,
		hasRecoil: "number"
	},
	"Evil-Crushing Arrow": {
		type: "Light",
		category: "Focus",
		bp: 95,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Atomic Energy": {
		type: "Light",
		category: "Focus",
		isEN: true,
		bp: 75,
		acc100: true,
		givesHealth: true
	},
	"Light Javelin": {
		type: "Light",
		category: "Focus",
		bp: 80,
		acc100: true,
		hasSecondaryEffect: true,
		isJavelin: true
	},
	"Sunbeam Dance": {
		type: "Light",
		category: "Focus",
		isEN: true,
		bp: 60,
		acc100: true
	},
	"Over Ray": {
		type: "Light",
		category: "Focus",
		isEN: true,
		bp: 40,
		acc100: true,
		priority: 1
	},
	"Pulse Laser": {
		type: "Light",
		category: "Spread",
		isEN: true,
		bp: 150,
		acc100: true
	},
	"Arclight": {
		type: "Light",
		category: "Spread",
		isEN: true,
		bp: 130,
		accuracy: 90,
		dropsStats: 2
	},
	"Moonbow": {
		type: "Light",
		category: "Spread",
		bp: 100,
		acc100: true
	},
	"Star Flare": {
		type: "Light",
		category: "Spread",
		bp: 80,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Field Barrier": {
		type: "Light",
		category: "Status",
		bp: 0
	},
	"Field Protect": {
		type: "Light",
		category: "Status",
		bp: 0
	},
	"Lucky Rainbow": {
		type: "Light",
		category: "Status",
		bp: 0
	},
	"Sun's Protection": {
		type: "Light",
		category: "Status",
		bp: 0
	},
	"Moon's Protection": {
		type: "Light",
		category: "Status",
		bp: 0
	},
	"Astrology": {
		type: "Light",
		category: "Status",
		bp: 0,
		acc100: true
	},
	"Solar Eclipse": {
		type: "Light",
		category: "Status",
		bp: 0,
		accuracy: 80
	},
	"Flash Bullet": {
		type: "Light",
		category: "Status",
		bp: 0,
		acc100: true
	},
	"Weather [Aurora]": {
		type: "Light",
		category: "Status",
		bp: 0
	},
	"Light Up": {
		type: "Light",
		category: "Focus",
		isEN: true,
		bp: 55,
		acc100: true
	},
	"Angel Ladder": {
		type: "Light",
		category: "Focus",
		isEN: true,
		bp: 70,
		accuracy: 90,
		hasSecondaryEffect: true
	},
	"Light of Origin": {
		type: "Light",
		category: "Spread",
		isEN: true,
		bp: 60,
		acc100: true
	},
	"Diffusion Laser": {
		type: "Light",
		category: "Spread",
		isEN: true,
		bp: 65,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Light Sign": {
		type: "Light",
		category: "Spread",
		isEN: true,
		bp: 60,
		acc100: true
	},
	"Gathered Stars": {
		type: "Light",
		category: "Status",
		bp: 0
	},
	"Twilight Infection": {
		type: "Dark",
		category: "Focus",
		isEN: true,
		bp: 120,
		accuracy: 85
	},
	"Dark Sphere": {
		type: "Dark",
		category: "Focus",
		isEN: true,
		bp: 100,
		accuracy: 90,
		hasSecondaryEffect: true
	},
	"Blackout": {
		type: "Dark",
		category: "Focus",
		bp: 75,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Changeling": {
		type: "Dark",
		category: "Focus",
		bp: 70,
		acc100: true
	},
	"Panic Call": {
		type: "Dark",
		category: "Focus",
		isEN: true,
		bp: 65,
		acc100: true
	},
	"Lost Crisis": {
		type: "Dark",
		category: "Focus",
		bp: 60,
		acc100: true
	},
	"Dark Arrow": {
		type: "Dark",
		category: "Focus",
		bp: 50,
		accuracy: 90,
		isTwoHit: true
	},
	"Dark Innocence": {
		type: "Dark",
		category: "Focus",
		isEN: true,
		bp: 25,
		acc100: true,
		isMultiHit: true
	},
	"Darkness Dance": {
		type: "Dark",
		category: "Spread",
		bp: 120,
		acc100: true,
		willLock: true
	},
	"Dark Sweets": {
		type: "Dark",
		category: "Spread",
		isEN: true,
		bp: 95,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Eye of Laplace": {
		type: "Dark",
		category: "Spread",
		bp: 80,
		acc100: true
	},
	"Infinite Darkness": {
		type: "Dark",
		category: "Spread",
		isEN: true,
		bp: 20,
		acc100: true,
		partialTrapping: true
	},
	"Shark Trade": {
		type: "Dark",
		category: "Status",
		bp: 0,
		acc100: true
	},
	"Black Hole": {
		type: "Void",
		category: "Status",
		bp: 0
	},
	"Puppet's Grudge": {
		type: "Dark",
		category: "Status",
		bp: 0,
		acc100: true
	},
	"Dark Power": {
		type: "Dark",
		category: "Status",
		bp: 0
	},
	"Bind Trap": {
		type: "Dark",
		category: "Status",
		bp: 0
	},
	"Sweet Nightmare": {
		type: "Dark",
		category: "Status",
		bp: 0,
		accuracy: 90
	},
	"Weather [Heavy Fog]": {
		type: "Dark",
		category: "Status",
		bp: 0
	},
	"Dark Ball": {
		type: "Dark",
		category: "Focus",
		bp: 55,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Ominous Doll": {
		type: "Dark",
		category: "Focus",
		bp: 65,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Bad Moon": {
		type: "Dark",
		category: "Spread",
		bp: 55,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Bloody Storm": {
		type: "Dark",
		category: "Spread",
		isEN: true,
		bp: 70,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Dark Sign": {
		type: "Dark",
		category: "Spread",
		isEN: true,
		bp: 60,
		acc100: true
	},
	"Dead of Night": {
		type: "Dark",
		category: "Status",
		bp: 0
	},
	"Venom Nova": {
		type: "Poison",
		category: "Focus",
		bp: 120,
		accuracy: 85,
		hasSecondaryEffect: true
	},
	"Dust Bomb": {
		type: "Poison",
		category: "Focus",
		bp: 80,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Poisoned Arrow": {
		type: "Poison",
		category: "Focus",
		bp: 80,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Venom Strike": {
		type: "Poison",
		category: "Spread",
		bp: 120,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Poison Bomb": {
		type: "Poison",
		category: "Spread",
		bp: 95,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Venom Fang": {
		type: "Poison",
		category: "Spread",
		bp: 80,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Mysterious Liquid": {
		type: "Poison",
		category: "Spread",
		bp: 65,
		acc100: true
	},
	"Negative Mist": {
		type: "Poison",
		category: "Spread",
		isEN: true,
		bp: 60,
		alwaysHits: true
	},
	"Toxic Spiral": {
		type: "Poison",
		category: "Spread",
		isEN: true,
		bp: 40,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Poison Trap": {
		type: "Poison",
		category: "Status",
		bp: 0
	},
	"Miasma": {
		type: "Poison",
		category: "Status",
		bp: 0,
		accuracy: 90
	},
	"Purple Smog": {
		type: "Poison",
		category: "Focus",
		isEN: true,
		bp: 55,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Slime Ball": {
		type: "Poison",
		category: "Focus",
		bp: 65,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Smog Shot": {
		type: "Poison",
		category: "Spread",
		bp: 55,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Toxic Haze": {
		type: "Poison",
		category: "Spread",
		isEN: true,
		bp: 65,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Poison Sign": {
		type: "Poison",
		category: "Spread",
		isEN: true,
		bp: 60,
		acc100: true
	},
	"Contagion": {
		type: "Poison",
		category: "Status",
		bp: 0,
		acc100: true
	},
	"Midnight Specter": {
		type: "Nether",
		category: "Focus",
		bp: 120,
		acc100: true,
		hasRecoil: "number"
	},
	"Stalk and Murder": {
		type: "Nether",
		category: "Focus",
		bp: 120,
		alwaysHits: true,
		willCharge: true
	},
	"Shadow Javelin": {
		type: "Nether",
		category: "Focus",
		bp: 80,
		acc100: true,
		hasSecondaryEffect: true,
		isJavelin: true
	},
	"Soul Hound": {
		type: "Nether",
		category: "Focus",
		isEN: true,
		bp: 60,
		alwaysHits: true
	},
	"Unfettered Soul": {
		type: "Nether",
		category: "Focus",
		isEN: true,
		bp: 55,
		acc100: true
	},
	"Shadow Bomb": {
		type: "Nether",
		category: "Focus",
		bp: 40,
		acc100: true,
		priority: 1
	},
	"Charon Ferries": {
		type: "Nether",
		category: "Spread",
		isEN: true,
		bp: 1,
		acc100: true
	},
	"Poltergeist": {
		type: "Nether",
		category: "Spread",
		bp: 90,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Starving Spirit": {
		type: "Nether",
		category: "Spread",
		bp: 100,
		acc100: true
	},
	"Ghost Wave": {
		type: "Nether",
		category: "Spread",
		isEN: true,
		bp: 80,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Love or Pain": {
		type: "Nether",
		category: "Spread",
		bp: 65,
		acc100: true
	},
	"Soul Eater": {
		type: "Nether",
		category: "Spread",
		bp: 60,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Call of the Dead": {
		type: "Nether",
		category: "Status",
		bp: 0
	},
	"Curse Reversal": {
		type: "Nether",
		category: "Status",
		bp: 0
	},
	"Shinigami's Waltz": {
		type: "Nether",
		category: "Status",
		bp: 0
	},
	"Jinx": {
		type: "Nether",
		category: "Status",
		bp: 0,
		acc100: true
	},
	"Scorn": {
		type: "Nether",
		category: "Status",
		bp: 0,
		acc100: true
	},
	"Behind You!": {
		type: "Nether",
		category: "Status",
		bp: 0,
		accuracy: 90
	},
	"Ghost Trick": {
		type: "Nether",
		category: "Focus",
		bp: 55,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Specter Warning": {
		type: "Nether",
		category: "Focus",
		bp: 65,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Soul Walking": {
		type: "Nether",
		category: "Spread",
		bp: 55,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Play Ghost": {
		type: "Nether",
		category: "Spread",
		bp: 65,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Nether Sign": {
		type: "Nether",
		category: "Spread",
		isEN: true,
		bp: 60,
		acc100: true
	},
	"Stone Pile": {
		type: "Nether",
		category: "Status",
		bp: 0
	},
	"Cross Counter": {
		type: "Fighting",
		category: "Focus",
		bp: 1,
		acc100: true
	},
	"Mountain Breaker": {
		type: "Fighting",
		category: "Focus",
		bp: 1,
		acc100: true
	},
	"Aikido Arts": {
		type: "Fighting",
		category: "Focus",
		bp: 1,
		acc100: true
	},
	"Dire State": {
		type: "Fighting",
		category: "Focus",
		isEN: true,
		bp: 1,
		acc100: true
	},
	"Vacuum Rupture": {
		type: "Fighting",
		category: "Focus",
		bp: 150,
		acc100: true
	},
	"Meteor Impact": {
		type: "Fighting",
		category: "Focus",
		bp: 150,
		acc100: true
	},
	"Reckless Dive": {
		type: "Fighting",
		category: "Focus",
		bp: 130,
		accuracy: 90,
		hasRecoil: "crash"
	},
	"Exploding Fist": {
		type: "Fighting",
		category: "Focus",
		bp: 100,
		accuracy: 50,
		hasSecondaryEffect: true
	},
	"Heavenly Ascent": {
		type: "Fighting",
		category: "Focus",
		bp: 120,
		acc100: true
	},
	"Cross Drive": {
		type: "Fighting",
		category: "Focus",
		bp: 100,
		acc100: true
	},
	"Dancing Sword": {
		type: "Fighting",
		category: "Focus",
		bp: 80,
		acc100: true
	},
	"Life Burst": {
		type: "Fighting",
		category: "Focus",
		isEN: true,
		bp: 80,
		alwaysHits: true
	},
	"Aura Drain": {
		type: "Fighting",
		category: "Focus",
		bp: 75,
		acc100: true,
		givesHealth: true
	},
	"Break Shot": {
		type: "Fighting",
		category: "Focus",
		bp: 75,
		acc100: true
	},
	"Diligence": {
		type: "Fighting",
		category: "Focus",
		isEN: true,
		bp: 60,
		acc100: true
	},
	"Charging Stun": {
		type: "Fighting",
		category: "Focus",
		bp: 55,
		accuracy: 95
	},
	"Corkscrew": {
		type: "Fighting",
		category: "Focus",
		bp: 50,
		accuracy: 90,
		hasSecondaryEffect: true
	},
	"Strike Shot": {
		type: "Fighting",
		category: "Focus",
		bp: 40,
		acc100: true,
		priority: 1
	},
	"Divine Punishment": {
		type: "Fighting",
		category: "Spread",
		isEN: true,
		bp: 1,
		acc100: true
	},
	"GIGANTIC": {
		type: "Fighting",
		category: "Spread",
		isEN: true,
		bp: 120,
		accuracy: 85,
		hasSecondaryEffect: true
	},
	"Concussion": {
		type: "Fighting",
		category: "Spread",
		isEN: true,
		bp: 80,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Understep": {
		type: "Fighting",
		category: "Spread",
		bp: 60,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Twin Thrust": {
		type: "Fighting",
		category: "Spread",
		bp: 50,
		accuracy: 90,
		isTwoHit: true
	},
	"Rush Attack": {
		type: "Fighting",
		category: "Spread",
		bp: 25,
		acc100: true,
		isMultiHit: true
	},
	"Hachiman's Blessing": {
		type: "Fighting",
		category: "Status",
		bp: 0
	},
	"Forward Thrust": {
		type: "Fighting",
		category: "Focus",
		bp: 55,
		acc100: true
	},
	"Backhand Blow": {
		type: "Fighting",
		category: "Focus",
		bp: 80,
		acc100: true
	},
	"Skull Breaker": {
		type: "Fighting",
		category: "Spread",
		bp: 60,
		acc100: true
	},
	"Spiral Strike": {
		type: "Fighting",
		category: "Spread",
		isEN: true,
		bp: 70,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Fighting Sign": {
		type: "Fighting",
		category: "Spread",
		isEN: true,
		bp: 60,
		acc100: true
	},
	"Tense Up": {
		type: "Fighting",
		category: "Status",
		bp: 0
	},
	"Miracle Reprisal": {
		type: "Illusion",
		category: "Focus",
		isEN: true,
		bp: 20,
		acc100: true
	},
	"Revolving Illusions": {
		type: "Illusion",
		category: "Focus",
		isEN: true,
		bp: 95,
		acc100: true,
		isFoul: true
	},
	"Ephemeral": {
		type: "Illusion",
		category: "Focus",
		isEN: true,
		bp: 95,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Sneak Attack": {
		type: "Illusion",
		category: "Focus",
		bp: 80,
		acc100: true,
		priority: 1
	},
	"Mirage Edge": {
		type: "Illusion",
		category: "Focus",
		bp: 80,
		acc100: true
	},
	"Flower of Hell": {
		type: "Illusion",
		category: "Focus",
		bp: 80,
		acc100: true,
		hasSecondaryEffect: true
	},
	"St. Elmo's Fire": {
		type: "Illusion",
		category: "Focus",
		bp: 65,
		acc100: true
	},
	"Fake Jewel": {
		type: "Illusion",
		category: "Focus",
		bp: 60,
		acc100: true
	},
	"Invisible Heart": {
		type: "Illusion",
		category: "Focus",
		isEN: true,
		bp: 60,
		alwaysHits: true
	},
	"Reprimand": {
		type: "Illusion",
		category: "Focus",
		bp: 60,
		acc100: true
	},
	"Pursuit": {
		type: "Illusion",
		category: "Focus",
		bp: 50,
		acc100: true
	},
	"Gravity Blast": {
		type: "Illusion",
		category: "Spread",
		isEN: true,
		bp: 120,
		acc100: true
	},
	"Moon's Reflection": {
		type: "Illusion",
		category: "Spread",
		isEN: true,
		bp: 1,
		acc100: true
	},
	"Catastrophe": {
		type: "Illusion",
		category: "Spread",
		isEN: true,
		bp: 95,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Glamor Pandemic": {
		type: "Illusion",
		category: "Spread",
		isEN: true,
		bp: 100,
		accuracy: 50,
		hasSecondaryEffect: true
	},
	"Unknown Flare": {
		type: "Illusion",
		category: "Spread",
		isEN: true,
		bp: 80,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Mysterious Wave": {
		type: "Illusion",
		category: "Spread",
		isEN: true,
		bp: 80,
		acc100: true,
		defenseStat: "fd"
	},
	"Continue": {
		type: "Illusion",
		category: "Status",
		bp: 0
	},
	"Mirage": {
		type: "Illusion",
		category: "Status",
		bp: 0,
		priority: 4
	},
	"Near-Death Event": {
		type: "Illusion",
		category: "Status",
		bp: 0
	},
	"Amnesia": {
		type: "Illusion",
		category: "Status",
		bp: 0
	},
	"Power Swap": {
		type: "Illusion",
		category: "Status",
		bp: 0
	},
	"Power Split": {
		type: "Illusion",
		category: "Status",
		bp: 0
	},
	"Cross Change": {
		type: "Illusion",
		category: "Status",
		bp: 0
	},
	"Guard Swap": {
		type: "Illusion",
		category: "Status",
		bp: 0
	},
	"Guard Split": {
		type: "Illusion",
		category: "Status",
		bp: 0
	},
	"Pretense": {
		type: "Illusion",
		category: "Status",
		bp: 0,
		priority: 1
	},
	"Doppleganger": {
		type: "Illusion",
		category: "Status",
		bp: 0,
		priority: 1
	},
	"Honest Man's Lie": {
		type: "Illusion",
		category: "Status",
		bp: 0,
		acc100: true
	},
	"Possession": {
		type: "Illusion",
		category: "Status",
		bp: 0
	},
	"Projection": {
		type: "Illusion",
		category: "Status",
		bp: 0
	},
	"Recall Nightmare": {
		type: "Illusion",
		category: "Status",
		bp: 0,
		acc100: true
	},
	"Mind Control": {
		type: "Illusion",
		category: "Status",
		bp: 0,
		acc100: true
	},
	"Gorgon's Eye": {
		type: "Illusion",
		category: "Status",
		bp: 0,
		accuracy: 75
	},
	"Bout Drunkard": {
		type: "Illusion",
		category: "Status",
		bp: 0,
		acc100: true
	},
	"Illusion Bullets": {
		type: "Illusion",
		category: "Focus",
		bp: 60,
		acc100: true
	},
	"Mirror World": {
		type: "Illusion",
		category: "Focus",
		isEN: true,
		bp: 60,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Mysterious Flare": {
		type: "Illusion",
		category: "Spread",
		isEN: true,
		bp: 60,
		acc100: true
	},
	"Imaginary Friend": {
		type: "Illusion",
		category: "Spread",
		isEN: true,
		bp: 65,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Illusion Sign": {
		type: "Illusion",
		category: "Spread",
		isEN: true,
		bp: 60,
		acc100: true
	},
	"Heat Haze": {
		type: "Illusion",
		category: "Status",
		bp: 0
	},
	"Word Break": {
		type: "Illusion",
		category: "Status",
		bp: 0
	},
	"Detonation Burst": {
		type: "Sound",
		category: "Focus",
		isEN: true,
		bp: 120,
		acc100: true,
		dropsStats: 1
	},
	"High Tone Crush": {
		type: "Sound",
		category: "Focus",
		bp: 95,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Dancing Rain": {
		type: "Sound",
		category: "Focus",
		bp: 75,
		accuracy: 95,
		hasSecondaryEffect: true
	},
	"Phantom Ensemble": {
		type: "Sound",
		category: "Focus",
		isEN: true,
		bp: 55,
		accuracy: 95
	},
	"Danmaku Orchestra": {
		type: "Sound",
		category: "Spread",
		isEN: true,
		bp: 120,
		accuracy: 85
	},
	"Ultra High Tone": {
		type: "Sound",
		category: "Spread",
		bp: 95,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Primal Noise": {
		type: "Sound",
		category: "Spread",
		isEN: true,
		bp: 75,
		accuracy: 95,
		hasSecondaryEffect: true
	},
	"Fantasy Melody": {
		type: "Sound",
		category: "Spread",
		isEN: true,
		bp: 60,
		alwaysHits: true
	},
	"Sorrowful Tune": {
		type: "Sound",
		category: "Spread",
		isEN: true,
		bp: 55,
		accuracy: 95,
		hasSecondaryEffect: true
	},
	"Infinite Scales": {
		type: "Sound",
		category: "Spread",
		isEN: true,
		bp: 20,
		acc100: true
	},
	"Encourage": {
		type: "Sound",
		category: "Status",
		bp: 0,
		acc100: true
	},
	"Upbeat": {
		type: "Sound",
		category: "Status",
		bp: 0,
		acc100: true
	},
	"A Tempo": {
		type: "Sound",
		category: "Status",
		bp: 0
	},
	"Booing": {
		type: "Sound",
		category: "Status",
		bp: 0
	},
	"Ruinous Voice": {
		type: "Sound",
		category: "Status",
		bp: 0
	},
	"Brave Song": {
		type: "Sound",
		category: "Status",
		bp: 0
	},
	"Cheer": {
		type: "Sound",
		category: "Status",
		bp: 0
	},
	"Merry Dance": {
		type: "Sound",
		category: "Status",
		bp: 0
	},
	"Inspiration": {
		type: "Sound",
		category: "Status",
		bp: 0
	},
	"Decrescendo": {
		type: "Sound",
		category: "Status",
		bp: 0,
		acc100: true
	},
	"Shout": {
		type: "Sound",
		category: "Status",
		bp: 0,
		acc100: true
	},
	"Shriek": {
		type: "Sound",
		category: "Status",
		bp: 0,
		acc100: true
	},
	"Bellow": {
		type: "Sound",
		category: "Status",
		bp: 0,
		acc100: true
	},
	"Phase Inversion": {
		type: "Sound",
		category: "Status",
		bp: 0,
		priority: 1
	},
	"Roar": {
		type: "Sound",
		category: "Status",
		bp: 0,
		acc100: true
	},
	"Claim": {
		type: "Sound",
		category: "Status",
		bp: 0,
		acc100: true
	},
	"Lullaby": {
		type: "Sound",
		category: "Status",
		bp: 0,
		accuracy: 60
	},
	"Howling Voice": {
		type: "Sound",
		category: "Focus",
		isEN: true,
		bp: 60,
		acc100: true
	},
	"Ambient": {
		type: "Sound",
		category: "Focus",
		isEN: true,
		bp: 65,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Soprano Voice": {
		type: "Sound",
		category: "Spread",
		isEN: true,
		bp: 60,
		acc100: true
	},
	"Waltz": {
		type: "Sound",
		category: "Spread",
		isEN: true,
		bp: 65,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Sound Sign": {
		type: "Sound",
		category: "Spread",
		isEN: true,
		bp: 60,
		acc100: true
	},
	"Tuning": {
		type: "Void",
		category: "Status",
		bp: 0
	},
};

var MOVES_ENC = {
	"(No Move)": {
		type: "None",
		category: "Status",
		bp: 0
	},
	"Death Match": {
		type: "Void",
		category: "Focus",
		bp: 1,
		acc100: true,
		isVoid: true
	},
	"Perfect Aim": {
		type: "Void",
		category: "Focus",
		bp: 1,
		accuracy: 30,
		isVoid: true
	},
	"Prank": {
		type: "Void",
		category: "Focus",
		bp: 1,
		accuracy: 90,
		isVoid: true
	},
	"Recompensate": {
		type: "Void",
		category: "Focus",
		bp: 1,
		acc100: true,
		isVoid: true
	},
	"Whole Being": {
		type: "Void",
		category: "Focus",
		bp: 125,
		acc100: true,
		isVoid: true
	},
	"Final Tribulation": {
		type: "Void",
		category: "Focus",
		bp: 100,
		acc100: true,
		isVoid: true
	},
	"Last Resort": {
		type: "Void",
		category: "Focus",
		bp: 140,
		acc100: true,
		isVoid: true
	},
	"Firm Spirit": {
		type: "Void",
		category: "Focus",
		isEN: true,
		bp: 130,
		acc100: true,
		willCharge: true,
		isVoid: true
	},
	"Overskill": {
		type: "Void",
		category: "Focus",
		isEN: true,
		bp: 120,
		acc100: true,
		isVoid: true,
		hasRecoil: "number"
	},
	"Spirit Rush": {
		type: "Void",
		category: "Focus",
		isEN: true,
		bp: 120,
		acc100: true,
		isVoid: true,
		hasRecoil: "number"
	},
	"Frenzied Joururi": {
		type: "Void",
		category: "Focus",
		bp: 100,
		acc100: true,
		isVoid: true
	},
	"Swallow Cut": {
		type: "Void",
		category: "Focus",
		bp: 80,
		acc100: true,
		priority: 2,
		isVoid: true
	},
	"Blow from Calamity": {
		type: "Void",
		category: "Focus",
		isEN: true,
		bp: 70,
		acc100: true,
		isVoid: true
	},
	"Retaliation": {
		type: "Void",
		category: "Focus",
		bp: 70,
		acc100: true,
		isVoid: true
	},
	"Piercing Stab": {
		type: "Void",
		category: "Focus",
		bp: 70,
		acc100: true,
		isVoid: true
	},
	"Struggle": {
		type: "Dream",
		category: "Focus",
		bp: 55,
		alwaysHits: true,
		hasRecoil: "number"
	},
	"Cruciform": {
		type: "Void",
		category: "Focus",
		bp: 50,
		accuracy: 90,
		isTwoHit: true,
		isVoid: true
	},
	"Raid": {
		type: "Void",
		category: "Focus",
		bp: 40,
		acc100: true,
		priority: 3,
		isVoid: true
	},
	"Tiger Rush": {
		type: "Void",
		category: "Focus",
		bp: 40,
		acc100: true,
		priority: 1,
		isVoid: true
	},
	"Shadow Rush": {
		type: "Void",
		category: "Focus",
		bp: 30,
		acc100: true,
		priority: 2,
		isVoid: true
	},
	"Danmaku Dance": {
		type: "Void",
		category: "Spread",
		isEN: true,
		bp: 120,
		acc100: true,
		willLock: true,
		isVoid: true
	},
	"Crossbow Assault": {
		type: "Void",
		category: "Spread",
		isEN: true,
		bp: 85,
		acc100: true,
		hasSecondaryEffect: true,
		isVoid: true
	},
	"Tri-Effect": {
		type: "Void",
		category: "Spread",
		isEN: true,
		bp: 80,
		acc100: true,
		hasSecondaryEffect: true,
		isVoid: true
	},
	"Destruction": {
		type: "Void",
		category: "Spread",
		isEN: true,
		bp: 70,
		acc100: true,
		hasSecondaryEffect: true,
		isVoid: true
	},
	"Volley": {
		type: "Void",
		category: "Spread",
		isEN: true,
		bp: 60,
		alwaysHits: true,
		isVoid: true
	},
	"Heavenly Blessing": {
		type: "Void",
		category: "Spread",
		isEN: true,
		bp: 50,
		acc100: true,
		isVoid: true
	},
	"Earthly Blessing": {
		type: "Void",
		category: "Spread",
		isEN: true,
		bp: 60,
		acc100: true,
		isVoid: true
	},
	"Random Shots": {
		type: "Void",
		category: "Spread",
		isEN: true,
		bp: 30,
		acc100: true,
		isMultiHit: true,
		isVoid: true
	},
	"False Courage": {
		type: "Void",
		category: "Status",
		bp: 0,
		priority: 5,
		isVoid: true
	},
	"Supernatural Border": {
		type: "Void",
		category: "Status",
		bp: 0,
		priority: 5,
		isVoid: true
	},
	"Magic Barrier": {
		type: "Void",
		category: "Status",
		bp: 0,
		isVoid: true
	},
	"Invoke Deity": {
		type: "Void",
		category: "Status",
		bp: 0,
		isVoid: true
	},
	"First Aid": {
		type: "Void",
		category: "Status",
		bp: 0,
		isVoid: true
	},
	"Resourcefulness": {
		type: "Void",
		category: "Status",
		bp: 0,
		isVoid: true
	},
	"Power Spot": {
		type: "Void",
		category: "Status",
		bp: 0,
		isVoid: true
	},
	"Unconscious Mind": {
		type: "Void",
		category: "Status",
		bp: 0,
		isVoid: true
	},
	"Inner Power": {
		type: "Void",
		category: "Status",
		bp: 0,
		isVoid: true
	},
	"Camouflage": {
		type: "Void",
		category: "Status",
		bp: 0,
		isVoid: true
	},
	"Imposing Air": {
		type: "Void",
		category: "Status",
		bp: 0,
		isVoid: true
	},
	"Offensive Trance": {
		type: "Void",
		category: "Status",
		bp: 0,
		isVoid: true
	},
	"Battle Preparation": {
		type: "Fighting",
		category: "Status",
		bp: 0
	},
	"Foresee": {
		type: "Void",
		category: "Status",
		bp: 0,
		isVoid: true
	},
	"Confine": {
		type: "Void",
		category: "Status",
		bp: 0,
		acc100: true,
		isVoid: true
	},
	"Backup Plan": {
		type: "Void",
		category: "Status",
		bp: 0,
		isVoid: true
	},
	"Yin Energy": {
		type: "Dream",
		category: "Focus",
		isEN: true,
		bp: 55,
		alwaysHits: true
	},
	"Guided Missile": {
		type: "Void",
		category: "Focus",
		isEN: true,
		bp: 80,
		alwaysHits: true,
		hasSecondaryEffect: true,
		isVoid: true
	},
	"Yang Energy": {
		type: "Dream",
		category: "Spread",
		isEN: true,
		bp: 55,
		alwaysHits: true,
	},
	"Scatter Beam": {
		type: "Void",
		category: "Spread",
		isEN: true,
		bp: 65,
		acc100: true,
		isVoid: true
	},
	"Good Luck": {
		type: "Void",
		category: "Status",
		bp: 0,
		isVoid: true
	},
	"Shield Up": {
		type: "Void",
		category: "Status",
		bp: 0,
		isVoid: true
	},
	"Barrier Up": {
		type: "Void",
		category: "Status",
		bp: 0,
		isVoid: true
	},
	"Speedy Barrage": {
		type: "Void",
		category: "Focus",
		isEN: true,
		bp: 140,
		acc100: true,
		isVoid: true
	},
	"Dense Barrage": {
		type: "Void",
		category: "Spread",
		isEN: true,
		bp: 140,
		acc100: true,
		isVoid: true
	},
	"Overrun": {
		type: "Void",
		category: "Spread",
		isEN: true,
		bp: 100,
		acc100: true,
		isVoid: true
	},
	"Focused Movement": {
		type: "Void",
		category: "Status",
		bp: 0,
		isVoid: true
	},
	"Eternal Record": {
		type: "Void",
		category: "Status",
		bp: 0,
		isVoid: true
	},
	"Recollection": {
		type: "Void",
		category: "Status",
		bp: 0,
		priority: 3,
		isVoid: true
	},
	"Heavenly Influence": {
		type: "Void",
		category: "Focus",
		isEN: true,
		bp: 50,
		acc100: true,
		isVoid: true
	},
	"Earthly Influence": {
		type: "Void",
		category: "Focus",
		bp: 60,
		acc100: true,
		isVoid: true
	},
	"Conflagration": {
		type: "Fire",
		category: "Focus",
		isEN: true,
		bp: 1,
		acc100: true,
		alwaysHits: true
	},
	"Purgatory Flicker": {
		type: "Fire",
		category: "Focus",
		bp: 120,
		acc100: true,
		hasSecondaryEffect: true,
		hasRecoil: "number"
	},
	"Holy Flare": {
		type: "Fire",
		category: "Focus",
		isEN: true,
		bp: 100,
		accuracy: 95,
		hasSecondaryEffect: true
	},
	"Burn Strike": {
		type: "Fire",
		category: "Focus",
		bp: 90,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Exploding Blaze": {
		type: "Fire",
		category: "Focus",
		isEN: true,
		bp: 80,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Fire Javelin": {
		type: "Fire",
		category: "Focus",
		bp: 80,
		acc100: true,
		hasSecondaryEffect: true,
		isJavelin: true
	},
	"Rising Sun": {
		type: "Fire",
		category: "Focus",
		bp: 50,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Phoenix Waltz": {
		type: "Fire",
		category: "Spread",
		bp: 150,
		acc100: true
	},
	"Deflagration": {
		type: "Fire",
		category: "Spread",
		isEN: true,
		bp: 150,
		acc100: true
	},
	"Volcano": {
		type: "Fire",
		category: "Spread",
		isEN: true,
		bp: 130,
		accuracy: 90,
		dropsStats: 2
	},
	"Inferno": {
		type: "Fire",
		category: "Spread",
		isEN: true,
		bp: 120,
		accuracy: 85,
		hasSecondaryEffect: true
	},
	"Blaze Spear": {
		type: "Fire",
		category: "Spread",
		bp: 100,
		accuracy: 90,
		hasSecondaryEffect: true
	},
	"Blaze of Tenmei": {
		type: "Fire",
		category: "Spread",
		bp: 100,
		accuracy: 50,
		hasSecondaryEffect: true
	},
	"Fire-Dragon Spiral": {
		type: "Fire",
		category: "Spread",
		isEN: true,
		bp: 100,
		accuracy: 75,
		partialTrapping: true
	},
	"Backdraft": {
		type: "Fire",
		category: "Spread",
		isEN: true,
		bp: 95,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Flashover": {
		type: "Fire",
		category: "Spread",
		isEN: true,
		bp: 80,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Flame Wave": {
		type: "Fire",
		category: "Spread",
		isEN: true,
		bp: 80,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Fire Wall": {
		type: "Fire",
		category: "Spread",
		isEN: true,
		bp: 65,
		acc100: true
	},
	"Fire-Snake Spiral": {
		type: "Fire",
		category: "Spread",
		isEN: true,
		bp: 20,
		acc100: true,
		partialTrapping: true
	},
	"Will-o'-Wisp": {
		type: "Fire",
		category: "Status",
		bp: 0,
		accuracy: 85
	},
	"Thermit": {
		type: "Fire",
		category: "Status",
		bp: 0,
		accuracy: 90
	},
	"Terrain [Suzaku]": {
		type: "Fire",
		category: "Status",
		bp: 0
	},
	"Fireball": {
		type: "Fire",
		category: "Focus",
		bp: 55,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Flame Pillar": {
		type: "Fire",
		category: "Focus",
		isEN: true,
		bp: 65,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Fiery Game": {
		type: "Fire",
		category: "Spread",
		isEN: true,
		bp: 55,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Flare": {
		type: "Fire",
		category: "Spread",
		isEN: true,
		bp: 70,
		accuracy: 90,
		hasSecondaryEffect: true
	},
	"Fire Sign": {
		type: "Fire",
		category: "Spread",
		isEN: true,
		bp: 60,
		acc100: true
	},
	"Rub Burn": {
		type: "Fire",
		category: "Status",
		bp: 0,
		acc100: true
	},
	"High Tide": {
		type: "Water",
		category: "Focus",
		bp: 120,
		accuracy: 85
	},
	"Waterfall Drop": {
		type: "Water",
		category: "Focus",
		bp: 100,
		acc100: true
	},
	"Flash Flood": {
		type: "Water",
		category: "Focus",
		bp: 80,
		acc100: true
	},
	"Ice Coffin": {
		type: "Water",
		category: "Focus",
		isEN: true,
		bp: 80,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Aqua Javelin": {
		type: "Water",
		category: "Focus",
		bp: 80,
		acc100: true,
		hasSecondaryEffect: true,
		isJavelin: true
	},
	"Reverse Splash": {
		type: "Water",
		category: "Focus",
		isEN: true,
		bp: 60,
		acc100: true
	},
	"Aquasonic": {
		type: "Water",
		category: "Spread",
		bp: 40,
		acc100: true,
		priority: 1
	},
	"Aqua Cutter": {
		type: "Water",
		category: "Focus",
		bp: 40,
		acc100: true,
		priority: 1
	},
	"Ice Gatling": {
		type: "Water",
		category: "Focus",
		bp: 15,
		acc100: true,
		priority: 1,
		isMultiHit: true
	},
	"Aqua Cannon": {
		type: "Water",
		category: "Spread",
		isEN: true,
		bp: 150,
		acc100: true
	},
	"Aqua Rake": {
		type: "Water",
		category: "Spread",
		isEN: true,
		bp: 150,
		acc100: true
	},
	"Cold Rain": {
		type: "Water",
		category: "Spread",
		isEN: true,
		bp: 120,
		accuracy: 80,
		hasSecondaryEffect: true
	},
	"Ice Age": {
		type: "Water",
		category: "Spread",
		isEN: true,
		bp: 95,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Frozen Prison": {
		type: "Water",
		category: "Spread",
		bp: 95,
		acc100: true
	},
	"Lazy Mist": {
		type: "Water",
		category: "Spread",
		isEN: true,
		bp: 80,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Geyser": {
		type: "Water",
		category: "Spread",
		bp: 60,
		acc100: true,
		alwaysCrit: true
	},
	"Slime Shot": {
		type: "Water",
		category: "Spread",
		bp: 55,
		acc100: true
	},
	"Veil of Water": {
		type: "Water",
		category: "Spread",
		isEN: true,
		bp: 40,
		acc100: true
	},
	"Heavy Rain": {
		type: "Water",
		category: "Spread",
		isEN: true,
		bp: 20,
		acc100: true,
		partialTrapping: true
	},
	"Cloudburst": {
		type: "Water",
		category: "Status",
		bp: 0
	},
	"Ebb Tide": {
		type: "Water",
		category: "Status",
		bp: 0,
		acc100: true
	},
	"Aquatic Waltz": {
		type: "Water",
		category: "Status",
		bp: 0,
		acc100: true,
		priority: 1
	},
	"Drought": {
		type: "Water",
		category: "Status",
		bp: 0,
		acc100: true
	},
	"Terrain [Genbu]": {
		type: "Water",
		category: "Status",
		bp: 0
	},
	"Water Ball": {
		type: "Water",
		category: "Focus",
		bp: 60,
		acc100: true
	},
	"Frost Edge": {
		type: "Water",
		category: "Focus",
		bp: 65,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Foam Bubbles": {
		type: "Water",
		category: "Spread",
		bp: 60,
		acc100: true
	},
	"Snowball Fight": {
		type: "Water",
		category: "Spread",
		bp: 65,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Water Sign": {
		type: "Water",
		category: "Spread",
		isEN: true,
		bp: 60,
		acc100: true
	},
	"Quagmire": {
		type: "Water",
		category: "Status",
		bp: 0,
		acc100: true
	},
	"Tumble Plant": {
		type: "Nature",
		category: "Focus",
		bp: 1,
		alwaysHits: true
	},
	"Root Frog": {
		type: "Nature",
		category: "Focus",
		isEN: true,
		bp: 120,
		accuracy: 85
	},
	"Peach-Thorn Arrow": {
		type: "Nature",
		category: "Focus",
		bp: 120,
		acc100: true,
		hasRecoil: "number"
	},
	"Voice of Famine": {
		type: "Nature",
		category: "Focus",
		isEN: true,
		bp: 95,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Natural Beauty": {
		type: "Nature",
		category: "Focus",
		bp: 90,
		acc100: true
	},
	"Grass Javelin": {
		type: "Nature",
		category: "Focus",
		bp: 80,
		acc100: true,
		hasSecondaryEffect: true,
		isJavelin: true
	},
	"Power Drain": {
		type: "Nature",
		category: "Focus",
		isEN: true,
		bp: 75,
		acc100: true,
		givesHealth: true
	},
	"Hornet's Flit": {
		type: "Nature",
		category: "Focus",
		bp: 25,
		acc100: true,
		isMultiHit: true
	},
	"Sakura Blizzard": {
		type: "Nature",
		category: "Spread",
		bp: 120,
		accuracy: 85,
		hasSecondaryEffect: true
	},
	"Off-Season Bloom": {
		type: "Nature",
		category: "Spread",
		isEN: true,
		bp: 130,
		accuracy: 90,
		dropsStats: 2
	},
	"Petal Dance": {
		type: "Nature",
		category: "Spread",
		isEN: true,
		bp: 120,
		acc100: true,
		willLock: true
	},
	"Rainbow Flowers": {
		type: "Nature",
		category: "Spread",
		isEN: true,
		bp: 120,
		acc100: true,
		willCharge: true
	},
	"Pollen Mist": {
		type: "Nature",
		category: "Spread",
		isEN: true,
		bp: 95,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Energy Absorb": {
		type: "Nature",
		category: "Spread",
		isEN: true,
		bp: 75,
		acc100: true,
		givesHealth: true
	},
	"Swirling Leaves": {
		type: "Nature",
		category: "Spread",
		bp: 60,
		alwaysHits: true
	},
	"Forest Therapy": {
		type: "Nature",
		category: "Status",
		bp: 0
	},
	"Fountain of Life": {
		type: "Nature",
		category: "Status",
		bp: 0
	},
	"Thorned Ivy": {
		type: "Nature",
		category: "Status",
		bp: 0,
		priority: 5
	},
	"Drain Seed": {
		type: "Nature",
		category: "Status",
		bp: 0,
		accuracy: 90
	},
	"Grace of Mana": {
		type: "Nature",
		category: "Status",
		bp: 0
	},
	"White Lily Dance": {
		type: "Nature",
		category: "Status",
		bp: 0
	},
	"Fairy Dance": {
		type: "Nature",
		category: "Status",
		bp: 0
	},
	"White Mist": {
		type: "Nature",
		category: "Status",
		bp: 0
	},
	"Mystic Wind": {
		type: "Nature",
		category: "Status",
		bp: 0
	},
	"Bewitching Pollen": {
		type: "Nature",
		category: "Status",
		bp: 0,
		accuracy: 70
	},
	"Mystical Bug Mist": {
		type: "Nature",
		category: "Status",
		bp: 0,
		accuracy: 75
	},
	"Terrain [Seiryu]": {
		type: "Nature",
		category: "Status",
		bp: 0
	},
	"Butterfly's Flit": {
		type: "Nature",
		category: "Status",
		bp: 0
	},
	"Parasite": {
		type: "Nature",
		category: "Focus",
		isEN: true,
		bp: 50,
		acc100: true,
		givesHealth: true
	},
	"Apple Bomb": {
		type: "Nature",
		category: "Focus",
		bp: 60,
		accuracy: 95
	},
	"Scatter Beans": {
		type: "Nature",
		category: "Spread",
		bp: 60,
		acc100: true
	},
	"Seasonal Flowers": {
		type: "Nature",
		category: "Spread",
		bp: 65,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Nature Sign": {
		type: "Nature",
		category: "Spread",
		isEN: true,
		bp: 60,
		acc100: true
	},
	"Root Injection": {
		type: "Nature",
		category: "Status",
		bp: 0,
		acc100: true
	},
	"Shattering Earth": {
		type: "Earth",
		category: "Focus",
		bp: 1,
		accuracy: 30
	},
	"Cataclysm": {
		type: "Earth",
		category: "Focus",
		bp: 150,
		acc100: true
	},
	"Shooting Press": {
		type: "Earth",
		category: "Focus",
		isEN: true,
		bp: 100,
		acc100: true
	},
	"Rocky Barrage": {
		type: "Earth",
		category: "Focus",
		bp: 80,
		acc100: true
	},
	"Royal Prism": {
		type: "Earth",
		category: "Focus",
		isEN: true,
		bp: 75,
		accuracy: 95,
		hasSecondaryEffect: true
	},
	"Rock Drills": {
		type: "Earth",
		category: "Focus",
		bp: 70,
		accuracy: 90,
		alwaysCrit: true
	},
	"Spiked Stones": {
		type: "Earth",
		category: "Focus",
		bp: 60,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Dust Cloud": {
		type: "Earth",
		category: "Focus",
		bp: 60,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Stone Throw": {
		type: "Earth",
		category: "Focus",
		bp: 50,
		accuracy: 90,
		isTwoHit: true
	},
	"Dust Devil Gate": {
		type: "Earth",
		category: "Focus",
		bp: 20,
		acc100: true,
		partialTrapping: true
	},
	"Godstone Frenzy": {
		type: "Earth",
		category: "Focus",
		bp: 25,
		acc100: true,
		isMultiHit: true
	},
	"Waves of Earth": {
		type: "Earth",
		category: "Spread",
		isEN: true,
		bp: 95,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Unstable Horizon": {
		type: "Earth",
		category: "Spread",
		isEN: true,
		bp: 80,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Jewelry Storm": {
		type: "Earth",
		category: "Spread",
		bp: 80,
		acc100: true
	},
	"Landslide": {
		type: "Earth",
		category: "Spread",
		bp: 65,
		acc100: true
	},
	"Stone Circle": {
		type: "Earth",
		category: "Spread",
		bp: 60,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Mine Trap": {
		type: "Earth",
		category: "Status",
		bp: 0
	},
	"Weather [Duststorm]": {
		type: "Earth",
		category: "Status",
		bp: 0
	},
	"Mud Dango": {
		type: "Earth",
		category: "Focus",
		bp: 60,
		acc100: true
	},
	"Stone Rain": {
		type: "Earth",
		category: "Focus",
		bp: 65,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Slingshot": {
		type: "Earth",
		category: "Spread",
		bp: 55,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Mudslide": {
		type: "Earth",
		category: "Spread",
		bp: 75,
		accuracy: 80,
		hasSecondaryEffect: true
	},
	"Earth Sign": {
		type: "Earth",
		category: "Spread",
		isEN: true,
		bp: 60,
		acc100: true
	},
	"Racing Earth": {
		type: "Earth",
		category: "Status",
		bp: 0
	},
	"Terrain [Kohryu]": {
		type: "Earth",
		category: "Status",
		bp: 0
	},
	"Earthen Feast": {
		type: "Earth",
		category: "Spread",
		bp: 120,
		accuracy: 85,
		hasSecondaryEffect: true
	},
	"Realm [Gold]": {
		type: "Earth",
		category: "Status",
		bp: 0
	},
	"Destruction Rift": {
		type: "Earth",
		category: "Spread",
		bp: 60,
		acc100: true
	},
	"Clearing Mist": {
		type: "Steel",
		category: "Focus",
		bp: 1,
		alwaysHits: true
	},
	"Mirror's Reflection": {
		type: "Steel",
		category: "Focus",
		isEN: true,
		bp: 1,
		acc100: true
	},
	"Impact Rebellion": {
		type: "Steel",
		category: "Focus",
		bp: 1,
		acc100: true
	},
	"Full Metal Crash": {
		type: "Steel",
		category: "Focus",
		bp: 150,
		accuracy: 80,
		hasRecoil: "number"
	},
	"Samurai Edge": {
		type: "Steel",
		category: "Focus",
		bp: 120,
		accuracy: 85,
		hasSecondaryEffect: true
	},
	"Brandish": {
		type: "Steel",
		category: "Focus",
		bp: 120,
		acc100: true,
		hasRecoil: "number"
	},
	"Armor Pierce": {
		type: "Steel",
		category: "Focus",
		bp: 90,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Killing Bite": {
		type: "Steel",
		category: "Focus",
		bp: 70,
		accuracy: 90,
		alwaysCrit: true
	},
	"Reversal Sword": {
		type: "Steel",
		category: "Focus",
		bp: 60,
		alwaysHits: true
	},
	"Overtake Strike": {
		type: "Steel",
		category: "Focus",
		bp: 40,
		acc100: true,
		priority: 1
	},
	"Last Slash": {
		type: "Steel",
		category: "Spread",
		bp: 100,
		acc100: true
	},
	"Silver Rain": {
		type: "Steel",
		category: "Spread",
		isEN: true,
		bp: 95,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Chrome Ray": {
		type: "Steel",
		category: "Spread",
		isEN: true,
		bp: 90,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Twin Gears": {
		type: "Steel",
		category: "Spread",
		bp: 50,
		accuracy: 90,
		isTwoHit: true
	},
	"Rapid Throw": {
		type: "Steel",
		category: "Spread",
		bp: 25,
		acc100: true,
		isMultiHit: true
	},
	"Focused Stance": {
		type: "Steel",
		category: "Status",
		bp: 0
	},
	"Strenuous Stance": {
		type: "Steel",
		category: "Status",
		bp: 0
	},
	"Mad Rush Stance": {
		type: "Steel",
		category: "Status",
		bp: 0
	},
	"Iron Wall Stance": {
		type: "Steel",
		category: "Status",
		bp: 0
	},
	"Vigilant Watch": {
		type: "Steel",
		category: "Status",
		bp: 0
	},
	"Terrain [Byakko]": {
		type: "Steel",
		category: "Status",
		bp: 0
	},
	"Stealth Trap": {
		type: "Steel",
		category: "Status",
		bp: 0
	},
	"The Ripper": {
		type: "Steel",
		category: "Focus",
		bp: 60,
		accuracy: 95
	},
	"Hammer Throw": {
		type: "Steel",
		category: "Focus",
		bp: 70,
		acc100: true
	},
	"Metal Needle": {
		type: "Steel",
		category: "Spread",
		bp: 65,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Steel Sign": {
		type: "Steel",
		category: "Spread",
		isEN: true,
		bp: 60,
		acc100: true
	},
	"Single-Minded": {
		type: "Steel",
		category: "Status",
		bp: 0
	},
	"Hammer Bash": {
		type: "Steel",
		category: "Focus",
		isEN: true,
		bp: 95,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Gensokyo Typhoon": {
		type: "Wind",
		category: "Focus",
		isEN: true,
		bp: 140,
		acc100: true,
		willCharge: true
	},
	"Foehn Winds": {
		type: "Wind",
		category: "Focus",
		bp: 120,
		acc100: true,
		hasRecoil: "number"
	},
	"Wind Javelin": {
		type: "Wind",
		category: "Focus",
		bp: 80,
		acc100: true,
		hasSecondaryEffect: true,
		isJavelin: true
	},
	"Air Stamp": {
		type: "Wind",
		category: "Focus",
		bp: 55,
		accuracy: 95
	},
	"Thieving Wind": {
		type: "Wind",
		category: "Focus",
		isEN: true,
		bp: 60,
		acc100: true
	},
	"Wind Train": {
		type: "Wind",
		category: "Focus",
		isEN: true,
		bp: 60,
		alwaysHits: true
	},
	"Twister": {
		type: "Wind",
		category: "Focus",
		bp: 25,
		acc100: true,
		isMultiHit: true
	},
	"Great Tornado": {
		type: "Wind",
		category: "Focus",
		isEN: true,
		bp: 20,
		acc100: true,
		partialTrapping: true
	},
	"Macroburst": {
		type: "Wind",
		category: "Spread",
		isEN: true,
		bp: 120,
		accuracy: 80,
		hasSecondaryEffect: true
	},
	"Swift Air-Raid": {
		type: "Wind",
		category: "Spread",
		isEN: true,
		bp: 80,
		alwaysHits: true
	},
	"Wind Wave": {
		type: "Wind",
		category: "Spread",
		isEN: true,
		bp: 75,
		accuracy: 95,
		hasSecondaryEffect: true
	},
	"Dancing Wind": {
		type: "Wind",
		category: "Spread",
		isEN: true,
		bp: 60,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Smash Spin": {
		type: "Wind",
		category: "Spread",
		isEN: true,
		bp: 60,
		acc100: true
	},
	"Spring First": {
		type: "Wind",
		category: "Spread",
		isEN: true,
		bp: 40,
		acc100: true,
		priority: 1
	},
	"Wind God's Grace": {
		type: "Wind",
		category: "Status",
		bp: 0
	},
	"Squall": {
		type: "Wind",
		category: "Status",
		bp: 0
	},
	"Perch": {
		type: "Wind",
		category: "Status",
		bp: 0
	},
	"Favorable Wind": {
		type: "Wind",
		category: "Status",
		bp: 0
	},
	"Skanda": {
		type: "Wind",
		category: "Status",
		bp: 0
	},
	"Weather [Calm]": {
		type: "Wind",
		category: "Status",
		bp: 0
	},
	"Feather Shot": {
		type: "Wind",
		category: "Focus",
		isEN: true,
		bp: 60,
		acc100: true
	},
	"Wintry Wind": {
		type: "Wind",
		category: "Focus",
		isEN: true,
		bp: 55,
		accuracy: 95
	},
	"Night Wind": {
		type: "Wind",
		category: "Spread",
		isEN: true,
		bp: 60,
		acc100: true
	},
	"Westerlies": {
		type: "Wind",
		category: "Spread",
		isEN: true,
		bp: 65,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Wind Sign": {
		type: "Wind",
		category: "Spread",
		isEN: true,
		bp: 60,
		acc100: true
	},
	"Sharp Wind": {
		type: "Wind",
		category: "Status",
		bp: 0
	},
	"Flying Frenzy": {
		type: "Wind",
		category: "Focus",
		bp: 95,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Spinning Air": {
		type: "Wind",
		category: "Spread",
		isEN: true,
		bp: 95,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Realm [Serenity]": {
		type: "Wind",
		category: "Status",
		bp: 0
	},
	"Passing Breeze": {
		type: "Wind",
		category: "Spread",
		isEN: true,
		bp: 60,
		acc100: true
	},
	"Thor's Hammer": {
		type: "Electric",
		category: "Focus",
		bp: 120,
		acc100: true,
		hasSecondaryEffect: true,
		hasRecoil: "number"
	},
	"Lightning Cut": {
		type: "Electric",
		category: "Focus",
		bp: 90,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Spark Javelin": {
		type: "Electric",
		category: "Focus",
		bp: 80,
		acc100: true,
		hasSecondaryEffect: true,
		isJavelin: true
	},
	"Plasma Ball": {
		type: "Electric",
		category: "Focus",
		bp: 20,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Thunderlord's Scorn": {
		type: "Electric",
		category: "Spread",
		isEN: true,
		bp: 120,
		accuracy: 85,
		hasSecondaryEffect: true
	},
	"Divine Thunder": {
		type: "Electric",
		category: "Spread",
		isEN: true,
		bp: 120,
		accuracy: 50,
		hasSecondaryEffect: true
	},
	"Thunder Force": {
		type: "Electric",
		category: "Spread",
		isEN: true,
		bp: 95,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Stormcloud's Eye": {
		type: "Electric",
		category: "Spread",
		isEN: true,
		bp: 80,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Charge Thief": {
		type: "Electric",
		category: "Spread",
		isEN: true,
		bp: 75,
		acc100: true,
		givesHealth: true
	},
	"Lightning Speed": {
		type: "Electric",
		category: "Spread",
		bp: 70,
		acc100: true
	},
	"Spark Cross": {
		type: "Electric",
		category: "Spread",
		isEN: true,
		bp: 60,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Purple Lightning": {
		type: "Electric",
		category: "Spread",
		isEN: true,
		bp: 50,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Lightning Charge": {
		type: "Electric",
		category: "Status",
		bp: 0
	},
	"High Magnetism": {
		type: "Electric",
		category: "Status",
		bp: 0
	},
	"Thunder Veil": {
		type: "Electric",
		category: "Status",
		bp: 0,
		accuracy: 80
	},
	"Paralyzing Wave": {
		type: "Electric",
		category: "Status",
		bp: 0,
		acc100: true
	},
	"Spark Shot": {
		type: "Electric",
		category: "Focus",
		isEN: true,
		bp: 55,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Graze Bolt": {
		type: "Electric",
		category: "Focus",
		isEN: true,
		bp: 95,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Lightning Strike": {
		type: "Electric",
		category: "Spread",
		isEN: true,
		bp: 55,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Energy Bolt": {
		type: "Electric",
		category: "Spread",
		isEN: true,
		bp: 65,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Electric Sign": {
		type: "Electric",
		category: "Spread",
		isEN: true,
		bp: 60,
		acc100: true
	},
	"Thunderclap": {
		type: "Electric",
		category: "Status",
		bp: 0,
		priority: 4
	},
	"Thunder Drill": {
		type: "Electric",
		category: "Focus",
		bp: 70,
		accuracy: 90,
		alwaysCrit: true
	},
	"Shocking Wave": {
		type: "Electric",
		category: "Status",
		bp: 0,
		accuracy: 85
	},
	"Luminous Flux": {
		type: "Light",
		category: "Focus",
		isEN: true,
		bp: 120,
		acc100: true,
		hasRecoil: "number"
	},
	"Evil-Crushing Arrow": {
		type: "Light",
		category: "Focus",
		bp: 95,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Atomic Energy": {
		type: "Light",
		category: "Focus",
		isEN: true,
		bp: 75,
		acc100: true,
		givesHealth: true
	},
	"Light Javelin": {
		type: "Light",
		category: "Focus",
		bp: 80,
		acc100: true,
		hasSecondaryEffect: true,
		isJavelin: true
	},
	"Sunbeam Dance": {
		type: "Light",
		category: "Focus",
		isEN: true,
		bp: 60,
		acc100: true
	},
	"Over Ray": {
		type: "Light",
		category: "Focus",
		isEN: true,
		bp: 40,
		acc100: true,
		priority: 1
	},
	"Pulse Laser": {
		type: "Light",
		category: "Spread",
		isEN: true,
		bp: 150,
		acc100: true
	},
	"Arclight": {
		type: "Light",
		category: "Spread",
		isEN: true,
		bp: 130,
		accuracy: 90,
		dropsStats: 2
	},
	"Moonbow": {
		type: "Light",
		category: "Spread",
		bp: 100,
		acc100: true
	},
	"Star Flare": {
		type: "Light",
		category: "Spread",
		bp: 80,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Field Barrier": {
		type: "Light",
		category: "Status",
		bp: 0
	},
	"Field Protect": {
		type: "Light",
		category: "Status",
		bp: 0
	},
	"Lucky Rainbow": {
		type: "Light",
		category: "Status",
		bp: 0
	},
	"Sun's Protection": {
		type: "Light",
		category: "Status",
		bp: 0
	},
	"Moon's Protection": {
		type: "Light",
		category: "Status",
		bp: 0
	},
	"Astrology": {
		type: "Light",
		category: "Status",
		bp: 0,
		acc100: true
	},
	"Solar Eclipse": {
		type: "Dark",
		category: "Status",
		bp: 0,
		accuracy: 80
	},
	"Flash Bullet": {
		type: "Light",
		category: "Status",
		bp: 0,
		acc100: true
	},
	"Weather [Aurora]": {
		type: "Light",
		category: "Status",
		bp: 0
	},
	"Light Up": {
		type: "Light",
		category: "Focus",
		isEN: true,
		bp: 55,
		acc100: true
	},
	"Angel Ladder": {
		type: "Light",
		category: "Focus",
		isEN: true,
		bp: 70,
		accuracy: 90,
		hasSecondaryEffect: true
	},
	"Light of Origin": {
		type: "Light",
		category: "Spread",
		isEN: true,
		bp: 60,
		acc100: true
	},
	"Diffusion Laser": {
		type: "Light",
		category: "Spread",
		isEN: true,
		bp: 65,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Light Sign": {
		type: "Light",
		category: "Spread",
		isEN: true,
		bp: 60,
		acc100: true
	},
	"Gathered Stars": {
		type: "Light",
		category: "Status",
		bp: 0
	},
	"Realm [Corona]": {
		type: "Light",
		category: "Status",
		bp: 0
	},
	"Twilight Infection": {
		type: "Dark",
		category: "Focus",
		isEN: true,
		bp: 120,
		accuracy: 85
	},
	"Dark Sphere": {
		type: "Dark",
		category: "Focus",
		isEN: true,
		bp: 100,
		accuracy: 90,
		hasSecondaryEffect: true
	},
	"Blackout": {
		type: "Dark",
		category: "Focus",
		bp: 80,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Changeling": {
		type: "Dark",
		category: "Focus",
		bp: 70,
		acc100: true
	},
	"Panic Call": {
		type: "Dark",
		category: "Focus",
		isEN: true,
		bp: 65,
		acc100: true
	},
	"Lost Crisis": {
		type: "Dark",
		category: "Focus",
		bp: 60,
		acc100: true
	},
	"Dark Arrow": {
		type: "Dark",
		category: "Focus",
		bp: 50,
		accuracy: 90,
		isTwoHit: true
	},
	"Dark Innocence": {
		type: "Dark",
		category: "Focus",
		isEN: true,
		bp: 25,
		acc100: true,
		isMultiHit: true
	},
	"Darkness Dance": {
		type: "Dark",
		category: "Spread",
		bp: 120,
		acc100: true,
		willLock: true
	},
	"Dark Sweets": {
		type: "Dark",
		category: "Spread",
		isEN: true,
		bp: 95,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Eye of Laplace": {
		type: "Dark",
		category: "Spread",
		bp: 80,
		acc100: true
	},
	"Infinite Darkness": {
		type: "Dark",
		category: "Spread",
		isEN: true,
		bp: 20,
		acc100: true,
		partialTrapping: true
	},
	"Shark Trade": {
		type: "Dark",
		category: "Status",
		bp: 0,
		acc100: true
	},
	"Black Hole": {
		type: "Void",
		category: "Status",
		bp: 0
	},
	"Puppet's Grudge": {
		type: "Dark",
		category: "Status",
		bp: 0,
		acc100: true
	},
	"Dark Power": {
		type: "Dark",
		category: "Status",
		bp: 0
	},
	"Bind Trap": {
		type: "Dark",
		category: "Status",
		bp: 0
	},
	"Sweet Nightmare": {
		type: "Dark",
		category: "Status",
		bp: 0,
		accuracy: 90
	},
	"Weather [Heavy Fog]": {
		type: "Dark",
		category: "Status",
		bp: 0
	},
	"Dark Ball": {
		type: "Dark",
		category: "Focus",
		bp: 55,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Ominous Doll": {
		type: "Dark",
		category: "Focus",
		bp: 65,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Bad Moon": {
		type: "Dark",
		category: "Spread",
		bp: 55,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Bloody Storm": {
		type: "Dark",
		category: "Spread",
		isEN: true,
		bp: 70,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Dark Sign": {
		type: "Dark",
		category: "Spread",
		isEN: true,
		bp: 60,
		acc100: true
	},
	"Dead of Night": {
		type: "Dark",
		category: "Status",
		bp: 0
	},
	"Night Step": {
		type: "Dark",
		category: "Focus",
		bp: 90,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Creeping Darkness": {
		type: "Dark",
		category: "Status",
		bp: 0,
		accuracy: 85
	},
	"Realm [Scarlet Mist]": {
		type: "Dark",
		category: "Status",
		bp: 0
	},
	"Venom Nova": {
		type: "Poison",
		category: "Focus",
		bp: 120,
		accuracy: 85,
		hasSecondaryEffect: true
	},
	"Dust Bomb": {
		type: "Poison",
		category: "Focus",
		bp: 80,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Poisoned Arrow": {
		type: "Poison",
		category: "Focus",
		bp: 80,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Venom Strike": {
		type: "Poison",
		category: "Spread",
		bp: 120,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Poison Bomb": {
		type: "Poison",
		category: "Spread",
		bp: 95,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Venom Fang": {
		type: "Poison",
		category: "Spread",
		bp: 80,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Mysterious Liquid": {
		type: "Poison",
		category: "Spread",
		bp: 70,
		acc100: true
	},
	"Negative Mist": {
		type: "Poison",
		category: "Spread",
		isEN: true,
		bp: 60,
		alwaysHits: true
	},
	"Toxic Spiral": {
		type: "Poison",
		category: "Spread",
		isEN: true,
		bp: 40,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Poison Trap": {
		type: "Poison",
		category: "Status",
		bp: 0
	},
	"Miasma": {
		type: "Poison",
		category: "Status",
		bp: 0,
		accuracy: 90
	},
	"Purple Smog": {
		type: "Poison",
		category: "Focus",
		isEN: true,
		bp: 55,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Slime Ball": {
		type: "Poison",
		category: "Focus",
		bp: 65,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Smog Shot": {
		type: "Poison",
		category: "Spread",
		bp: 55,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Toxic Haze": {
		type: "Poison",
		category: "Spread",
		isEN: true,
		bp: 65,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Poison Sign": {
		type: "Poison",
		category: "Spread",
		isEN: true,
		bp: 60,
		acc100: true
	},
	"Contagion": {
		type: "Poison",
		category: "Status",
		bp: 0,
		acc100: true
	},
	"Poison Stream": {
		type: "Poison",
		category: "Focus",
		isEN: true,
		bp: 100,
		acc100: true
	},
	"Depressing Rain": {
		type: "Poison",
		category: "Focus",
		isEN: true,
		bp: 60,
		alwaysHits: true
	},
	"Sweet Desperado": {
		type: "Poison",
		category: "Spread",
		isEN: true,
		bp: 130,
		accuracy: 90,
		dropsStats: 2
	},
	"Acid Tears": {
		type: "Poison",
		category: "Status",
		bp: 0,
		accuracy: 85
	},
	"Midnight Specter": {
		type: "Nether",
		category: "Focus",
		bp: 120,
		acc100: true,
		hasSecondaryEffect: true,
		hasRecoil: "number"
	},
	"Stalk and Murder": {
		type: "Nether",
		category: "Focus",
		bp: 120,
		alwaysHits: true,
		willCharge: true
	},
	"Shadow Javelin": {
		type: "Nether",
		category: "Focus",
		bp: 80,
		acc100: true,
		hasSecondaryEffect: true,
		isJavelin: true
	},
	"Soul Hound": {
		type: "Nether",
		category: "Focus",
		isEN: true,
		bp: 60,
		alwaysHits: true
	},
	"Unfettered Soul": {
		type: "Nether",
		category: "Focus",
		isEN: true,
		bp: 55,
		acc100: true
	},
	"Shadow Bomb": {
		type: "Nether",
		category: "Focus",
		bp: 40,
		acc100: true,
		priority: 1
	},
	"Charon Ferries": {
		type: "Nether",
		category: "Spread",
		isEN: true,
		bp: 1,
		acc100: true
	},
	"Poltergeist": {
		type: "Nether",
		category: "Spread",
		bp: 90,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Starving Spirit": {
		type: "Nether",
		category: "Spread",
		bp: 100,
		acc100: true
	},
	"Ghost Wave": {
		type: "Nether",
		category: "Spread",
		isEN: true,
		bp: 80,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Love or Pain": {
		type: "Nether",
		category: "Spread",
		bp: 65,
		acc100: true
	},
	"Soul Eater": {
		type: "Nether",
		category: "Spread",
		bp: 60,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Call of the Dead": {
		type: "Nether",
		category: "Status",
		bp: 0
	},
	"Curse Reversal": {
		type: "Nether",
		category: "Status",
		bp: 0
	},
	"Shinigami's Waltz": {
		type: "Nether",
		category: "Status",
		bp: 0
	},
	"Jinx": {
		type: "Nether",
		category: "Status",
		bp: 0,
		acc100: true
	},
	"Scorn": {
		type: "Nether",
		category: "Status",
		bp: 0,
		acc100: true
	},
	"Behind You!": {
		type: "Nether",
		category: "Status",
		bp: 0,
		accuracy: 90
	},
	"Ghost Trick": {
		type: "Nether",
		category: "Focus",
		bp: 55,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Specter Warning": {
		type: "Nether",
		category: "Focus",
		bp: 65,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Soul Walking": {
		type: "Nether",
		category: "Spread",
		bp: 55,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Play Ghost": {
		type: "Nether",
		category: "Spread",
		bp: 65,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Nether Sign": {
		type: "Nether",
		category: "Spread",
		isEN: true,
		bp: 60,
		acc100: true
	},
	"Stone Pile": {
		type: "Nether",
		category: "Status",
		bp: 0
	},
	"Specter's Waltz": {
		type: "Nether",
		category: "Focus",
		bp: 90,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Ghost Chase": {
		type: "Nether",
		category: "Status",
		bp: 0,
		priority: 1
	},
	"Eye of Calamity": {
		type: "Nether",
		category: "Status",
		bp: 0,
		accuracy: 85
	},
	"Cross Counter": {
		type: "Fighting",
		category: "Focus",
		bp: 1,
		acc100: true
	},
	"Mountain Breaker": {
		type: "Fighting",
		category: "Focus",
		bp: 1,
		alwaysHits: true
	},
	"Aikido Arts": {
		type: "Fighting",
		category: "Focus",
		bp: 1,
		acc100: true
	},
	"Dire State": {
		type: "Fighting",
		category: "Focus",
		isEN: true,
		bp: 1,
		acc100: true
	},
	"Vacuum Rupture": {
		type: "Fighting",
		category: "Focus",
		bp: 150,
		acc100: true
	},
	"Meteor Impact": {
		type: "Fighting",
		category: "Focus",
		bp: 150,
		acc100: true
	},
	"Reckless Dive": {
		type: "Fighting",
		category: "Focus",
		bp: 130,
		accuracy: 90,
		hasRecoil: "crash"
	},
	"Exploding Fist": {
		type: "Fighting",
		category: "Focus",
		bp: 100,
		accuracy: 50,
		hasSecondaryEffect: true
	},
	"Heavenly Ascent": {
		type: "Fighting",
		category: "Focus",
		bp: 120,
		acc100: true
	},
	"Cross Drive": {
		type: "Fighting",
		category: "Focus",
		bp: 100,
		acc100: true
	},
	"Dancing Sword": {
		type: "Fighting",
		category: "Focus",
		bp: 80,
		acc100: true
	},
	"Life Burst": {
		type: "Fighting",
		category: "Focus",
		isEN: true,
		bp: 80,
		alwaysHits: true
	},
	"Aura Drain": {
		type: "Fighting",
		category: "Focus",
		bp: 75,
		acc100: true,
		givesHealth: true
	},
	"Break Shot": {
		type: "Fighting",
		category: "Focus",
		bp: 75,
		acc100: true
	},
	"Diligence": {
		type: "Fighting",
		category: "Focus",
		isEN: true,
		bp: 60,
		acc100: true
	},
	"Charging Stun": {
		type: "Fighting",
		category: "Focus",
		bp: 55,
		accuracy: 95
	},
	"Corkscrew": {
		type: "Fighting",
		category: "Focus",
		bp: 50,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Strike Shot": {
		type: "Fighting",
		category: "Focus",
		bp: 40,
		acc100: true,
		priority: 1
	},
	"Divine Punishment": {
		type: "Fighting",
		category: "Spread",
		isEN: true,
		bp: 1,
		acc100: true
	},
	"GIGANTIC": {
		type: "Fighting",
		category: "Spread",
		isEN: true,
		bp: 120,
		accuracy: 85,
		hasSecondaryEffect: true
	},
	"Concussion": {
		type: "Fighting",
		category: "Spread",
		isEN: true,
		bp: 80,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Understep": {
		type: "Fighting",
		category: "Spread",
		bp: 60,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Twin Thrust": {
		type: "Fighting",
		category: "Spread",
		bp: 50,
		accuracy: 90,
		isTwoHit: true
	},
	"Rush Attack": {
		type: "Fighting",
		category: "Spread",
		bp: 25,
		acc100: true,
		isMultiHit: true
	},
	"Hachiman's Blessing": {
		type: "Fighting",
		category: "Status",
		bp: 0
	},
	"Forward Thrust": {
		type: "Fighting",
		category: "Focus",
		bp: 55,
		acc100: true
	},
	"Backhand Blow": {
		type: "Fighting",
		category: "Focus",
		bp: 80,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Skull Breaker": {
		type: "Fighting",
		category: "Spread",
		bp: 60,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Spiral Strike": {
		type: "Fighting",
		category: "Spread",
		isEN: true,
		bp: 70,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Fighting Sign": {
		type: "Fighting",
		category: "Spread",
		isEN: true,
		bp: 60,
		acc100: true
	},
	"Tense Up": {
		type: "Fighting",
		category: "Status",
		bp: 0
	},
	"Brave Burst": {
		type: "Fighting",
		category: "Spread",
		isEN: true,
		bp: 90,
		acc100: true
	},
	"Shooting Arts": {
		type: "Fighting",
		category: "Focus",
		bp: 25,
		acc100: true,
		isMultiHit: true
	},
	"Miracle Reprisal": {
		type: "Illusion",
		category: "Focus",
		isEN: true,
		bp: 20,
		alwaysHits: true,
		priority: 1
	},
	"Revolving Illusions": {
		type: "Illusion",
		category: "Focus",
		isEN: true,
		bp: 95,
		acc100: true,
		isFoul: true
	},
	"Ephemeral": {
		type: "Illusion",
		category: "Focus",
		isEN: true,
		bp: 95,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Sneak Attack": {
		type: "Illusion",
		category: "Focus",
		bp: 80,
		acc100: true,
		priority: 1
	},
	"Mirage Edge": {
		type: "Illusion",
		category: "Focus",
		bp: 80,
		acc100: true
	},
	"Flower of Hell": {
		type: "Illusion",
		category: "Focus",
		bp: 80,
		acc100: true,
		hasSecondaryEffect: true
	},
	"St. Elmo's Fire": {
		type: "Illusion",
		category: "Focus",
		bp: 65,
		acc100: true
	},
	"Fake Jewel": {
		type: "Illusion",
		category: "Focus",
		bp: 60,
		acc100: true
	},
	"Invisible Heart": {
		type: "Illusion",
		category: "Focus",
		isEN: true,
		bp: 60,
		alwaysHits: true
	},
	"Reprimand": {
		type: "Illusion",
		category: "Focus",
		bp: 60,
		acc100: true
	},
	"Pursuit": {
		type: "Illusion",
		category: "Focus",
		bp: 50,
		acc100: true
	},
	"Gravity Blast": {
		type: "Illusion",
		category: "Spread",
		isEN: true,
		bp: 120,
		acc100: true
	},
	"Moon's Reflection": {
		type: "Illusion",
		category: "Spread",
		isEN: true,
		bp: 1,
		acc100: true
	},
	"Catastrophe": {
		type: "Illusion",
		category: "Spread",
		isEN: true,
		bp: 95,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Glamor Pandemic": {
		type: "Illusion",
		category: "Spread",
		isEN: true,
		bp: 100,
		accuracy: 50,
		hasSecondaryEffect: true
	},
	"Unknown Flare": {
		type: "Illusion",
		category: "Spread",
		isEN: true,
		bp: 80,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Mysterious Wave": {
		type: "Illusion",
		category: "Spread",
		isEN: true,
		bp: 90,
		acc100: true,
		defenseStat: "fd"
	},
	"Continue": {
		type: "Illusion",
		category: "Status",
		bp: 0
	},
	"Mirage": {
		type: "Illusion",
		category: "Status",
		bp: 0,
		priority: 5
	},
	"Near-Death Event": {
		type: "Illusion",
		category: "Status",
		bp: 0
	},
	"Amnesia": {
		type: "Illusion",
		category: "Status",
		bp: 0
	},
	"Power Swap": {
		type: "Illusion",
		category: "Status",
		bp: 0
	},
	"Power Split": {
		type: "Illusion",
		category: "Status",
		bp: 0
	},
	"Cross Change": {
		type: "Illusion",
		category: "Status",
		bp: 0
	},
	"Guard Swap": {
		type: "Illusion",
		category: "Status",
		bp: 0
	},
	"Guard Split": {
		type: "Illusion",
		category: "Status",
		bp: 0
	},
	"Pretense": {
		type: "Illusion",
		category: "Status",
		bp: 0,
		priority: 3
	},
	"Doppleganger": {
		type: "Illusion",
		category: "Status",
		bp: 0,
		priority: 1
	},
	"Imagination": {
		type: "Illusion",
		category: "Status",
		bp: 0
	},
	"Honest Man's Lie": {
		type: "Illusion",
		category: "Status",
		bp: 0,
		acc100: true
	},
	"Possession": {
		type: "Illusion",
		category: "Status",
		bp: 0
	},
	"Projection": {
		type: "Illusion",
		category: "Status",
		bp: 0,
		priority: 1
	},
	"Recall Nightmare": {
		type: "Illusion",
		category: "Status",
		bp: 0,
		acc100: true,
		priority: 1
	},
	"Mind Control": {
		type: "Illusion",
		category: "Status",
		bp: 0,
		acc100: true
	},
	"Gorgon's Eye": {
		type: "Illusion",
		category: "Status",
		bp: 0,
		accuracy: 75
	},
	"Bout Drunkard": {
		type: "Illusion",
		category: "Status",
		bp: 0,
		acc100: true
	},
	"Illusion Bullets": {
		type: "Illusion",
		category: "Focus",
		bp: 60,
		acc100: true
	},
	"Mirror World": {
		type: "Illusion",
		category: "Focus",
		isEN: true,
		bp: 60,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Mysterious Flare": {
		type: "Illusion",
		category: "Spread",
		isEN: true,
		bp: 60,
		acc100: true
	},
	"Imaginary Friend": {
		type: "Illusion",
		category: "Spread",
		isEN: true,
		bp: 65,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Illusion Sign": {
		type: "Illusion",
		category: "Spread",
		isEN: true,
		bp: 60,
		acc100: true
	},
	"Heat Haze": {
		type: "Illusion",
		category: "Status",
		bp: 0
	},
	"Hallucination": {
		type: "Illusion",
		category: "Focus",
		isEN: true,
		bp: 120,
		accuracy: 85
	},
	"Word Break": {
		type: "Illusion",
		category: "Status",
		bp: 0
	},
	"Detonation Burst": {
		type: "Sound",
		category: "Focus",
		isEN: true,
		bp: 120,
		acc100: true,
		dropsStats: 1
	},
	"High Tone Crush": {
		type: "Sound",
		category: "Focus",
		bp: 95,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Dancing Rain": {
		type: "Sound",
		category: "Focus",
		bp: 75,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Phantom Ensemble": {
		type: "Sound",
		category: "Focus",
		isEN: true,
		bp: 55,
		accuracy: 95
	},
	"Danmaku Orchestra": {
		type: "Sound",
		category: "Spread",
		isEN: true,
		bp: 120,
		accuracy: 85
	},
	"Ultra High Tone": {
		type: "Sound",
		category: "Spread",
		bp: 95,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Primal Noise": {
		type: "Sound",
		category: "Spread",
		isEN: true,
		bp: 75,
		accuracy: 95,
		hasSecondaryEffect: true
	},
	"Fantasy Melody": {
		type: "Sound",
		category: "Spread",
		isEN: true,
		bp: 60,
		alwaysHits: true
	},
	"Sorrowful Tune": {
		type: "Sound",
		category: "Spread",
		isEN: true,
		bp: 60,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Infinite Scales": {
		type: "Sound",
		category: "Spread",
		isEN: true,
		bp: 20,
		acc100: true
	},
	"Encourage": {
		type: "Sound",
		category: "Status",
		bp: 0,
		acc100: true
	},
	"Upbeat": {
		type: "Sound",
		category: "Status",
		bp: 0,
		acc100: true
	},
	"A Tempo": {
		type: "Sound",
		category: "Status",
		bp: 0
	},
	"Booing": {
		type: "Sound",
		category: "Status",
		bp: 0
	},
	"Ruinous Voice": {
		type: "Sound",
		category: "Status",
		bp: 0
	},
	"Brave Song": {
		type: "Sound",
		category: "Status",
		bp: 0
	},
	"Cheer": {
		type: "Sound",
		category: "Status",
		bp: 0
	},
	"Merry Dance": {
		type: "Sound",
		category: "Status",
		bp: 0
	},
	"Inspiration": {
		type: "Sound",
		category: "Status",
		bp: 0
	},
	"Decrescendo": {
		type: "Sound",
		category: "Status",
		bp: 0,
		acc100: true
	},
	"Shout": {
		type: "Sound",
		category: "Status",
		bp: 0,
		acc100: true
	},
	"Shriek": {
		type: "Sound",
		category: "Status",
		bp: 0,
		acc100: true
	},
	"Bellow": {
		type: "Sound",
		category: "Status",
		bp: 0,
		acc100: true
	},
	"Phase Inversion": {
		type: "Sound",
		category: "Status",
		bp: 0,
		priority: 1
	},
	"Roar": {
		type: "Sound",
		category: "Status",
		bp: 0,
		acc100: true
	},
	"Claim": {
		type: "Sound",
		category: "Status",
		bp: 0,
		acc100: true
	},
	"Lullaby": {
		type: "Sound",
		category: "Status",
		bp: 0,
		accuracy: 60
	},
	"Howling Voice": {
		type: "Sound",
		category: "Focus",
		isEN: true,
		bp: 60,
		acc100: true
	},
	"Ambient": {
		type: "Sound",
		category: "Focus",
		isEN: true,
		bp: 65,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Soprano Voice": {
		type: "Sound",
		category: "Spread",
		isEN: true,
		bp: 60,
		acc100: true
	},
	"Waltz": {
		type: "Sound",
		category: "Spread",
		isEN: true,
		bp: 65,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Sound Sign": {
		type: "Sound",
		category: "Spread",
		isEN: true,
		bp: 60,
		acc100: true
	},
	"Tuning": {
		type: "Sound",
		category: "Status",
		bp: 0
	},
	"Overdrive": {
		type: "Warped",
		category: "Focus",
		isEN: true,
		bp: 130,
		accuracy: 90,
		dropsStats: 2
	},
	"Distortion Bomb": {
		type: "Warped",
		category: "Focus",
		bp: 95,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Alluring Maze": {
		type: "Warped",
		category: "Focus",
		isEN: true,
		bp: 90,
		acc100: true,
		defenseStat: "sd"
	},
	"Stealth Kill": {
		type: "Warped",
		category: "Focus",
		bp: 80,
		alwaysHits: true
	},
	"Trickster": {
		type: "Warped",
		category: "Focus",
		bp: 40,
		acc100: true,
		priority: 1
	},
	"Dense Fog Bloom": {
		type: "Warped",
		category: "Spread",
		isEN: true,
		bp: 120,
		acc100: true,
		willCharge: true
	},
	"Impulse": {
		type: "Warped",
		category: "Spread",
		isEN: true,
		bp: 95,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Luscious Whisper": {
		type: "Warped",
		category: "Spread",
		isEN: true,
		bp: 80,
		acc100: true,
		defenseStat: "fd"
	},
	"Field Break": {
		type: "Warped",
		category: "Spread",
		bp: 75,
		acc100: true
	},
	"Irreversible Trick": {
		type: "Warped",
		category: "Spread",
		isEN: true,
		bp: 80,
		alwaysHits: true
	},
	"Mirror Damage": {
		type: "Warped",
		category: "Spread",
		isEN: true,
		bp: 60,
		acc100: true
	},
	"Force Shield": {
		type: "Warped",
		category: "Status",
		bp: 0,
		acc100: true,
		priority: 5
	},
	"Element Reverse": {
		type: "Warped",
		category: "Status",
		bp: 0,
		acc100: true
	},
	"Field Shift": {
		type: "Warped",
		category: "Status",
		bp: 0,
		priority: 5
	},
	"Soul Corruption": {
		type: "Warped",
		category: "Status",
		bp: 0,
		accuracy: 80
	},
	"Weather [Sunshower]": {
		type: "Warped",
		category: "Status",
		bp: 0
	},
	"Warped Sign": {
		type: "Warped",
		category: "Spread",
		isEN: true,
		bp: 60,
		acc100: true
	},
	"Realm [Black Rain]": {
		type: "Warped",
		category: "Status",
		bp: 0
	},
	"Time Screw": {
		type: "Warped",
		category: "Focus",
		isEN: true,
		bp: 60,
		alwaysHits: true
	},
	"Limitless Realm": {
		type: "Warped",
		category: "Status",
		bp: 0,
		priority: 1
	},
	"Blitzkrieg": {
		type: "Electric",
		category: "Focus",
		bp: 55,
		acc100: true
	},
	"Take Over": {
		type: "Nether",
		category: "Spread",
		isEN: true,
		bp: 95,
		acc100: true,
		isFoul: true
	},
	"Season [Winter]": {
		type: "Nature",
		category: "Status",
		bp: 0
	},
	"Season [Spring]": {
		type: "Nature",
		category: "Status",
		bp: 0
	},
	"Season [Summer]": {
		type: "Nature",
		category: "Status",
		bp: 0
	},
	"Season [Fall]": {
		type: "Nature",
		category: "Status",
		bp: 0
	},
	"Season [Doyou]": {
		type: "Void",
		category: "Status",
		bp: 0
	},
	"Rainbow Shot": {
		type: "Light",
		category: "Focus",
		isEN: true,
		bp: 85,
		acc100: true
	},
	"Fading Out": {
		type: "Illusion",
		category: "Status",
		bp: 0
	},
	"Blade Dance": {
		type: "Steel",
		category: "Spread",
		bp: 120,
		acc100: true,
		willLock: true
	},
	"Overdose": {
		type: "Poison",
		category: "Focus",
		isEN: true,
		bp: 100,
		hasSecondaryEffect: true
	},
	"Rift Leap": {
		type: "Warped",
		category: "Spread",
		bp: 60,
		acc100: true,
		hasRecoil: "number",
		priority: 1
	},
	"Shikome Parade": {
		type: "Nether",
		category: "Spread",
		bp: 60,
		acc100: true,
		hasRecoil: "number",
		priority: 1
	},
	"Rhythm Carnival": {
		type: "Sound",
		category: "Focus",
		isEN: true,
		bp: 120,
		hasSecondaryEffect: true
	},
	"Predator": {
		type: "Dark",
		category: "Focus",
		bp: 55,
		acc100: true
	},
	"Leeching Fangs": {
		type: "Dark",
		category: "Spread",
		bp: 75,
		acc100: true,
		givesHealth: true
	},
	"Supernova": {
		type: "Illusion",
		category: "Spread",
		isEN: true,
		bp: 120,
		acc100: true
	},
	"Whale Pulse": {
		type: "Water",
		category: "Spread",
		isEN: true,
		bp: 85,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Dragon's Cyclone": {
		type: "Wind",
		category: "Focus",
		isEN: true,
		bp: 100,
		partialTrapping: true
	},
	"Dust Meteor": {
		type: "Earth",
		category: "Focus",
		bp: 150,
		acc100: true
	},
	"Blazing Sword": {
		type: "Fire",
		category: "Focus",
		bp: 80,
		acc100: true,
		hasSecondaryEffect: true
	},
	"Laser Barrage": {
		type: "Light",
		category: "Spread",
		isEN: true,
		bp: 120,
		hasSecondaryEffect: true
	},
	"Lunatic Spectacle": {
		type: "Dark",
		category: "Focus",
		bp: 150,
		isEN: true,
		acc100: true
	},
	"Extend!!": {
		type: "Void",
		category: "Status",
		bp: 0
	},
	"Zephyr": {
		type: "Wind",
		category: "Status",
		bp: 0
	},
	"Graceful Steps": {
		type: "Water",
		category: "Status",
		bp: 0
	},
	"Overhead Stance": {
		type: "Steel",
		category: "Status",
		bp: 0
	},
	"Tabula Rasa": {
		type: "Void",
		category: "Spread",
		isEN: true,
		bp: 70,
		acc100: true,
		hasSecondaryEffect: true,
		isVoid: true
	},
	"Divine Arrow": {
		type: "Light",
		category: "Spread",
		bp: 85,
		acc100: true
	},
	"Dark Globe": {
		type: "Dark",
		category: "Focus",
		isEN: true,
		bp: 85,
		acc100: true
	},
	"Firestorm Dance": {
		type: "Fire",
		category: "Focus",
		isEN: true,
		bp: 120,
		acc100: true,
		willLock: true
	},
	"Oni Dance": {
		type: "Fighting",
		category: "Status",
		bp: 0
	},
	"Howling Hearth": {
		type: "Fire",
		category: "Focus",
		isEN: true,
		bp: 140,
		acc100: true
	},
};