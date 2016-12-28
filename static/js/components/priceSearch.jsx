var TagInputBox = require('./tagInputBox.jsx');
var Algorithm   = require('./algorithm.jsx')

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
				<TagInputBox parent={this} refreshTags={this.refreshTags}/>
				<Algorithm tags={this.state.tags}/>
			</div>
		);
	}
}

module.exports = PriceSearch;