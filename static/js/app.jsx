var Component1  = require("./components/component1.jsx");
var Component2  = require("./components/component2.jsx");
var PriceSearch = require('./components/priceSearch.jsx');

var App = React.createClass({
  render: function() {
    return (
      <div className="container">
        <PriceSearch />
      </div>
    );
  }
});

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
