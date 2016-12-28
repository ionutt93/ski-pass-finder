var TagInputBox = require('./tagInputBox.jsx');
var Algorithm   = require('./algorithm.jsx')
var React = require("react");
var Data = require("../data.js");

import SearchBox from './searchBox.jsx';

class PriceSearch extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			tags: []
		};
	}

	refreshTags(parent, tags) {
		const _tags = tags != undefined ? tags : [];
		parent.setState({tags: _tags});
	}

	getLocations() {
		return Array.from(Data.reduce((a, b) => {
			const _set = new Set([b.locations]);
			return new Set([a, b]);
		}, new Set([])));
	}

	render() {
		return (
			<div>
				{
					// <TagInputBox parent={this} refreshTags={this.refreshTags}/>
					// <Algorithm tags={this.state.tags}/>	
				}
				<SearchBox />
			</div>
		);
	}
}

module.exports = PriceSearch;