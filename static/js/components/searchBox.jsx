import React from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import Chip from 'material-ui/Chip';

const Data = require('../data.js');

export default class SearchBox extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			dataSource: this.getLocations(),
			chipData: [
			    {key: 0, label: 'Angular'},
			    {key: 1, label: 'JQuery'},
			    {key: 2, label: 'Polymer'},
			    {key: 3, label: 'ReactJS'}
			]
		};
		this.styles = {
      		chip: {
      			margin: 4,
      		},
	      	wrapper: {
	      		display: 'flex',
	      		flexWrap: 'wrap',
	      	}
  		};

		console.log(this.state.dataSource);
		this.onNewRequest = this.onNewRequest.bind(this);
	}

	getLocations() {
		var locationsSet = new Set([]);
		Data.forEach(x => {
			x.locations.forEach(l => locationsSet.add(l));
		});
		return Array.from(locationsSet);
	}

	onNewRequest(chosenRequest, index) {
		var newChipData = this.state.chipData;
		newChipData.push({ 
			key: newChipData.length,
			label: chosenRequest
		});
		this.setState({
			chipData: newChipData
		});
	}

	handleRequestDelete(key) {
	    this.chipData = this.state.chipData;
	    const chipToDelete = this.chipData.map((chip) => chip.key).indexOf(key);
	    this.chipData.splice(chipToDelete, 1);
	    this.setState({chipData: this.chipData});
  	}

	renderChip(data) {
		return (
			<Chip key={data.key}
				  style={this.styles.chip}
				  onRequestDelete={() => this.handleRequestDelete(data.key)} >
					{data.label}
			</Chip>
			);
	}

	render() {
		return (
			<div>
				<AutoComplete floatingLabelText="Enter location"
							  dataSource={this.state.dataSource}
							  filter={AutoComplete.fuzzyFilter}
							  maxSearchResults={5}
							  fullWidth={true}
							  onNewRequest={this.onNewRequest}/>
				<div style={this.styles.wrapper}>
					{this.state.chipData.map(this.renderChip, this)}
				</div>
				

			</div>
			
		);
	}
}