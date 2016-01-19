Header = React.createClass({

    updateHeader: function() {
	var header = d3.select("#header");

	var t1 = header.transition().delay(500).duration(4000);

	t1.text("SIDERIUS NUNCIUS (THE STARRY MESSENGER)");
	  

    },

    componentDidMount: function() {
	this.updateHeader();
    },
	
    headStyle: {
	color: 'white',
	fontSize: '36px',
	fontFamily: 'Palatino',
	fontWeight: '100',
	textAlign: 'center',
	marginTop: '30'
    },

    render: function() {

	return(
	    <h1 style = {this.headStyle} id = "header">
	    </h1>
	);

    }
});
