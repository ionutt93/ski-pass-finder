import React from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import Chip from 'material-ui/Chip';
import DataLayer from '../dataLayer.js'

class ChipData {
	constructor(state) {
		if (state == undefined) {
			this.state = [];
		} else {
			this.state = state;
			console.log(this.state);
		}
	}

	getState() {
		return this.state;
	}

	pushLabel(label) {
		if (label == undefined) return this;

		const indexOf = this.state.map(x => x.label).indexOf(label);
		if (indexOf == -1) {
			const newState = this.state.concat([{
				key: this.state.length,
				label: label
			}]);
			return new ChipData(newState);
		}
		return this;
	}

	refreshKeys(state) {
		return state.map((chip, i) => {
			return {
				key: i,
				label: chip.label
			};
		});
	}

	removeKey(key) {
		if (key == undefined) return this;

		const chipToRemove = this.state.map(x => x.key).indexOf(key);
		if (chipToRemove != -1) {
			const newState = this.refreshKeys(this.state.slice(0, chipToRemove).concat(this.state.splice(chipToRemove + 1)));
			return new ChipData(newState);
		}
		return this;
	}

}

export default class SearchBox extends React.Component {
	constructor(props) {
		super(props);
		this.dataLayer = new DataLayer();
		this.state = {
			dataSource: this.dataLayer.getLocations(),
			chipData: new ChipData()
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
  		
		this.onNewRequest = this.onNewRequest.bind(this);
	}

	onNewRequest(chosenRequest, index) {
		const that = this;
		this.setState({
			chipData: that.state.chipData.pushLabel(chosenRequest)
		});
	}

	handleRequestDelete(key) {
	    this.setState({
	    	chipData: this.state.chipData.removeKey(key)
	    });
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
					{this.state.chipData.getState().map(this.renderChip, this)}
				</div>
				

			</div>
			
		);
	}
}