Intro = React.createClass({

    typeWriter: function() {
	var i = 0;
	var data = [ "Discovery of Jupiter's satellites, Jan. 7, 1610"
		   ];
	
	//typewriter effect
	d3.select('text').transition()
	    .duration(3000)
	    .ease("linear")
	    .tween("text", function () {
		var newText = data[i];
		var textLength = newText.length;
		return function (t) {
		    if (t < 1) {
			this.textContent = newText.slice(0,
							 Math.round( t * textLength))
			    + ((Date.now()%500 > 100)?"|":"");
		    } else {
			this.textContent = newText;
		    }
		};
	    });

	i = (i + 1) % data.length;

    },

    componentDidMount: function() {
	this.typeWriter();
    },

    
    divStyle: {
	color: 'white',
	fontSize: '18px',
	fontFamily: 'Palatino',
	fontWeight: '100',
	textAlign: 'center',
	marginTop: '30'
	
    },

    render: function() {

	return(
	    <svg height="30" width="850">
	      <text x="460" y="15" fill="white" text-anchor="middle" fontSize="18px"
		    fontFamily="Palatino">
		Discovery of Jupiter's satellites, Jan. 7, 1610
	      </text>
	    </svg>


	);

    }
});
