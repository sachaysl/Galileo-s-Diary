Intro = React.createClass({

    typeWriter: function() {
	var i = 0;
	var data = [ "Discovery of Jupiter's satellites, Jan. 7, 1610",
		     "I have now finished my brief account of the obervations which I have thus far made"
		   ];

	// with regard to the Moon, the Fixed Stars, and the Galaxy. There remains the matter, which seems to me// to deserve to be considered the mo// st important in this work, namely that I should disclose and publis h to the world the occasion of discovering and observing four planets, // never seen from the very beginning of the world up to our own times, their positions, and the observations made during the last two month// s about their movements and their changes of magnitude; and I summon all astronomers to apply themselves to examine and determine their pe// riodic times, which it has not been permitted me to achieve up to this day, owing to the restriction of my time. I give them warning howev// er again, such that they may not approach such an inquiry to no purpose, that they will want a very accurate telescope, and such as I have//  described in the beginning of this account.


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

	//	i = (i + 1) % data.length;

	var paragraph1 = d3.select("#paragraph1");

	var t1 = paragraph1.transition().delay(5000).duration(3000);

	t1.ease("linear")
	    .tween("text", function () {
		var newText = data[1];
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
	    <svg height="500" width="1000">
	      <text x="460" y="15" fill="white" fontSize="18px"
		    fontFamily="Palatino" id = "line1">
	      </text>
	      <text x="300" y="45" fill="white" fontSize="18px"
		    fontFamily="Palatino" id = "paragraph1">
	      </text>

	    </svg>


	);

    }
});
