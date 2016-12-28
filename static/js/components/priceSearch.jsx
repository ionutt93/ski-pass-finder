var TagInputBox = require('./tagInputBox.jsx');
var Algorithm   = require('./algorithm.jsx')

import DataLayer from '../dataLayer.js';
import React from 'react';
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