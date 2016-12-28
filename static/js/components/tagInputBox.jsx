var TagList = require('./tagList.jsx');

class TagInputBox extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: '',
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({
			value: event.target.value,
		});
	}

	tagsFrom(string) {
		const values = string != undefined ? string : "";
		const tags   = values.split(',').map(x => x.trim())
										.filter(x => x.length > 0);
		return tags; 
	} 

	handleSubmit(event) {
		event.preventDefault();
		if (this.props.refreshTags != undefined && this.props.parent != undefined) {
			this.props.refreshTags(this.props.parent, this.tagsFrom(this.state.value));
		}	
	}

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					Add tags in here: 
					<input type="text" value={this.state.value} onChange={this.handleChange}/>
					<input type="submit" value="Submit" />
				</form>
				<TagList tags={this.tagsFrom(this.state.value)}/>
			</div>
		);	
	}
}

module.exports = TagInputBox