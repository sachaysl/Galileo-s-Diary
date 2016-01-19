Intro = React.createClass({

    typeWriter: function() {
	var i = 0;
	var data = [ "Discovery of Jupiter's satellites, Jan. 7, 1610"
		   ];

	var line1 = d3.select("#line1");
	
	var t0 = line1.transition().delay(2000).duration(3000);
	
	//typewriter effect
	t0.ease("linear")
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

	//i = (i + 1) % data.length;

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
	      <text x="460" y="15" fill="white" fontSize="18px"
		    fontFamily="Palatino" id = "line1">
	      </text>
	    </svg>


	);

    }
});
