class TagList extends React.Component {
	render() {
		const tags = this.props.tags != undefined ? this.props.tags : [];
		const content = tags.map((x, i) => <li key={i}>{x}</li>);
		return (
			<ul>{content}</ul>
		);
	}
}

module.exports = TagList;