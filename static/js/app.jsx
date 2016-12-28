var Component1  = require("./components/component1.jsx");
var Component2  = require("./components/component2.jsx");
var PriceSearch = require('./components/priceSearch.jsx');
var React = require("react");
var ReactDOM = require("react-dom");

import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MenuBar from './components/menuBar.jsx';

injectTapEventPlugin();
var App = React.createClass({
  render: function() {
    return (
    	<MuiThemeProvider>
    		<div>
	      		<MenuBar />
	        	<PriceSearch />
	     	</div>
      </MuiThemeProvider>
    );
  }
});

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
