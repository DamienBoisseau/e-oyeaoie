var VoyellastorizerBox = React.createClass({
  getInitialState: function() {
    return {value: ''};
  },

  handleChange: function() {
    const input = this.refs.textarea.value;
    let output = '';

    const unallowedCaracters = ["z", "r", "t", "p", "q", "s", "d", "f", "g", "h", "j", "k", "l", "m", "w", "x", "c", "v", "b", "n"];

    for (var i = 0; i < input.length; i++) {
      if(unallowedCaracters.indexOf(input[i].toLowerCase()) == -1) {
        output = output + input[i];
      }
    }

    this.setState({value: output});
  },

  voyellastorizeThis: function() {
    return { __html: this.state.value };
  },

  render: function() {
    return (
      <div className="voyellastorizer">
        <h1>Le Voyellastorizer !</h1>
        <h3>Input</h3>
        <textarea onChange={this.handleChange} ref="textarea" defaultValue={this.state.value} />
        <h3>Output</h3>
        <div className="content" dangerouslySetInnerHTML={this.voyellastorizeThis()} />
      </div>
    );
  }
});

ReactDOM.render(<VoyellastorizerBox />, document.getElementById('voyellastorizer-box'));
