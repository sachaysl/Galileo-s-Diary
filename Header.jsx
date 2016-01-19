Header = React.createClass({
    
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
	    <h1 style = {this.headStyle}>
	      Sidereus Nuncius (The Starry Messenger)
	    </h1>
	);

    }
});
