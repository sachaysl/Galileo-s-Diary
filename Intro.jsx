
//TO DO
//FADE TITLE IN AND OUT
//ADD 'BY GALILEO GALILI TO TITLE IN SMALLER FONT AND RELEVANT PAGE NUMBERS (17R-28R)
//ADD TEXT ELEMENTS DIRECTLY IN TYPEWRITER FUNCTION AS OPPOSED TO IN RENDER FUNCTION
//CREATE VARIABLES TO REPRESENT A BASELINE X AND Y AND A BASELINE DIST BETWEEN LINES.
//REFACTOR


Intro = React.createClass({

    typeWriter: function() {
	var data = [ "DISCOVERY OF JUPITER'S SATELLITES, JAN. 7, 1610",
		     "I have now finished my brief account of the obervations which I have thus far made",
		     "with regard to the Moon, the Fixed Stars, and the Galaxy. There remains the matter,",
		     "which seems to me to deserve to be considered the most important in this work,"
		   ];

	//namely that I should disclose and publish to the world the occasion of discovering and observing four planets, // never seen from the very beginning of the world up to our own times, their positions, and the observations made during the last two month// s about their movements and their changes of magnitude; and I summon all astronomers to apply themselves to examine and determine their pe// riodic times, which it has not been permitted me to achieve up to this day, owing to the restriction of my time. I give them warning howev// er again, such that they may not approach such an inquiry to no purpose, that they will want a very accurate telescope, and such as I have//  described in the beginning of this account.


	var line1 = d3.select("#line1");
	
	var t0 = line1.transition().delay(2000).duration(3000);
	
	//typewriter effect
	t0.ease("linear")
	    .tween("text", function () {
		var newText = data[0];
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

	var paragraph1Line1 = d3.select("#paragraph1Line1");

	var t1 = paragraph1Line1.transition().delay(5500).duration(3000);

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

	var paragraph1Line2 = d3.select("#paragraph1Line2");

	var t2 = paragraph1Line2.transition().delay(8500).duration(3000);

	t2.ease("linear")
	    .tween("text", function () {
		var newText = data[2];
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
	      <text x="420" y="25" fill="white" fontSize="18px"
		    fontFamily="Palatino" id = "line1">
	      </text>
	      <text x="300" y="75" fill="white" fontSize="18px"
		    fontFamily="Palatino" id = "paragraph1Line1">
	      </text>
	      <text x="300" y="105" fill="white" fontSize="18px"
		    fontFamily="Palatino" id = "paragraph1Line2">
	      </text>

	    </svg>


	);

    }
});
