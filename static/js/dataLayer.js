export default class DataLayer {
	constructor() {
		this.rawData = this.readData();
	}

	readData() {
		return [
		{
			name: "Mont Blanc Unlimited",
			locations: ["Brevent-Flégère", "Grands Montets", "Balme-Tour-Vallorcine", "Aiguille du Midi",
			"Montenvers Mer de Glace train", "Tramway du Mont-Blanc", "Les Houches", 
			"Courmayeur", "Verbier 4 Vallées", "Skyway Monte Bianco", "Evasion Mont-Blanc"],
			prices: [{	
				"type": "1 day",
				"adult": 62.00,
				"child / senior": 52.70,
				"veteran": 31.00,
				"family": 192.20 
			}, 
			{
				"type": "2 Day",
				"adult": 122.00,
				"child / senior": 103.70,
				"veteran": 61.00,
				"family": 378.20
			},
			{
				"type": "3 Day",
				"adult": 180.00,
				"child / senior": 153.00,
				"veteran": 90.00,
				"family": 558.00
			}]
		},
		{
			name: "Chamonix Le Pass",
			locations: ["Brevent-Flegere", "Grands Montets", "Balme-Tour-Vallorcine", "Vormaine", 
			"Chosalets", "Savoy", "Planards"],
			prices: [{	
				"type": "1 day",
				"adult": 50.50,
				"child / senior": 42.90,
				"veteran": 25.30,
				"family": 156.50
			}, 
			{
				"type": "2 Day",
				"adult": 98.00,
				"child / senior": 83.30,
				"veteran": 49.00,
				"family": 303.80
			},
			{
				"type": "3 Day",
				"adult": 142.00,
				"child / senior": 120.70,
				"veteran": 71.00,
				"family": 440.20
			}]
		}
		];
	}

	getRawData() {
		return DATA;
	}

	getLocations() {
		var locationsSet = new Set([]);
		this.rawData.forEach(x => {
			x.locations.forEach(l => locationsSet.add(l));
		});
		return Array.from(locationsSet);
	}
}