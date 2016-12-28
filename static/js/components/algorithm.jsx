var Data = require('../data.js');

class Algorithm extends React.Component {
	containsAllLocations(passLocations, testLocations) {
		var contains = true;
		if (testLocations.length == 0) contains = false;

		testLocations.forEach(location => {
			if (!passLocations.includes(location)) contains = false;
		});
		return contains;
	}

	averagePrice(prices) {
		return prices.reduce((sum, p) => sum + p.adult, 0) / prices.length;
	}

	possiblePassesFor(tags) {
		const _tags = tags != undefined ? tags : [];
		const passes = Data.filter(pass => this.containsAllLocations(pass.locations, _tags))
						   .sort((a, b) => this.averagePrice(a.prices) - this.averagePrice(b.prices))
						   .map(pass => pass.name);
		return passes;
	}

	render() {
		const content = this.possiblePassesFor(this.props.tags).map((x, i) => <li key={i}> {x} </li>);
		return (
			<div>
				<h3>Results:</h3>
				<ul>
					{content}
				</ul>
			</div>
		);
	}
}

module.exports = Algorithm;