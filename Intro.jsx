
//TO DO
//ADD 'BY GALILEO GALILI TO TITLE IN SMALLER FONT AND RELEVANT PAGE NUMBERS (17R-28R)

Intro = React.createClass({

    typeWriter: function() {
	var data = [ "DISCOVERY OF JUPITER'S SATELLITES, JAN. 7, 1610",
		     "I have now finished my brief account of the observations which I have thus far made", //1
		     "with regard to the Moon, the Fixed Stars, and the Galaxy. There remains the matter,", //2
		     "which seems to me to deserve to be considered the most important in this work,",      //3
		     "namely that I should disclose and publish to the world the occasion of discovering",  //4
		     "and observing four planets, never seen from the very beginning of the world up to",   //5
		     "our own times, their positions, and the observations made during the last two months",//6
		     "about their movements and their changes of magnitude; and I summon all astronomers",  //7
		     "to apply themselves to examine and determine their periodic times, which it has not", //8
		     "been permitted me to achieve up to this day, owing to the restriction of my time. I give", //9
		     "them warning however again, such that they may not approach such an inquiry to no", //10
		     "purpose, that they will want a very accurate telescope, and such as I have described",       //11
		     "in the beginning of this account." //12
		   ];

	// in the beginning of this account.

	var startTime = 5500;
	var printSpeed = 3500;
	var linePause = 200;
	
	var line1 = d3.select("#line1");
	
	var t0 = line1.transition().delay(startTime).duration(3000);
	
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

	//i = (i + 1) % data.length;

	var paragraph1Line1 = d3.select("#paragraph1Line1");

	var t1 = paragraph1Line1.transition().delay(startTime + printSpeed).duration(printSpeed);

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

	var t2 = paragraph1Line2.transition().delay(startTime + 2*printSpeed + linePause).duration(printSpeed);

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

	var paragraph1Line3 = d3.select("#paragraph1Line3");

	var t3 = paragraph1Line3.transition().delay(startTime + 3*printSpeed + linePause).duration(printSpeed);

	t3.ease("linear")
	    .tween("text", function () {
		var newText = data[3];
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

	var paragraph1Line4 = d3.select("#paragraph1Line4");

	var t4 = paragraph1Line4.transition().delay(startTime + 4*printSpeed + linePause).duration(printSpeed);

	t4.ease("linear")
	    .tween("text", function () {
		var newText = data[4];
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

	var paragraph1Line5 = d3.select("#paragraph1Line5");

	var t5 = paragraph1Line5.transition().delay(startTime + 5*printSpeed + linePause).duration(printSpeed);

	t5.ease("linear")
	    .tween("text", function () {
		var newText = data[5];
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

	var paragraph1Line6 = d3.select("#paragraph1Line6");

	var t6 = paragraph1Line6.transition().delay(startTime + 6*printSpeed + linePause).duration(printSpeed);

	t6.ease("linear")
	    .tween("text", function () {
		var newText = data[6];
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

	var paragraph1Line7 = d3.select("#paragraph1Line7");

	var t7 = paragraph1Line7.transition().delay(startTime + 7*printSpeed + linePause).duration(printSpeed);

	t7.ease("linear")
	    .tween("text", function () {
		var newText = data[7];
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

	var paragraph1Line8 = d3.select("#paragraph1Line8");

	var t8 = paragraph1Line8.transition().delay(startTime + 8*printSpeed + linePause).duration(printSpeed);

	t8.ease("linear")
	    .tween("text", function () {
		var newText = data[8];
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

	var paragraph1Line9 = d3.select("#paragraph1Line9");

	var t9 = paragraph1Line9.transition().delay(startTime + 9*printSpeed + linePause).duration(printSpeed);

	t9.ease("linear")
	    .tween("text", function () {
		var newText = data[9];
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

	var paragraph1Line10 = d3.select("#paragraph1Line10");

	var t10 = paragraph1Line10.transition().delay(startTime + 10*printSpeed + linePause).duration(printSpeed);

	t10.ease("linear")
	    .tween("text", function () {
		var newText = data[10];
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

	var paragraph1Line11 = d3.select("#paragraph1Line11");

	var t11 = paragraph1Line11.transition().delay(startTime + 11*printSpeed + linePause).duration(printSpeed);

	t11.ease("linear")
	    .tween("text", function () {
		var newText = data[11];
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

	var paragraph1Line12 = d3.select("#paragraph1Line12");

	var t12 = paragraph1Line12.transition().delay(startTime + 12*printSpeed + linePause).duration(printSpeed/3);

	t12.ease("linear")
	    .tween("text", function () {
		var newText = data[12];
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

	var text = d3.selectAll("text");

	var t13 = text.transition().delay(startTime + 12*printSpeed + linePause + 5000).duration(2000);

	t13.remove();
                  //"I have now finished my brief account of the observations which I have thus far made",


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

    svgStyle: {
	margin: 'auto',
	display: 'block'
    },


    render: function() {

	var basex = 65;
	var basey = 150;
	var lineDist = 30;
	var fontSize = "18px";
	var fontFamily = "Palatino";
	
	return(
	    <div textAlign = "center" >
	      <svg style = {this.svgStyle} height="500" width="800">
	      <text x="180" y="75" fill="white" fontSize="18px"
		    fontFamily = "Palatino" id = "line1">
	      </text>
	      <text x= {basex} y= {basey} fill="white" fontSize= {fontSize}
		    fontFamily = {fontFamily} id = "paragraph1Line1">
	      </text>
	      <text x= {basex}  y= {basey + lineDist} fill="white" fontSize= {fontSize}
		    fontFamily = {fontFamily} id = "paragraph1Line2">
	      </text>
	      <text x= {basex}  y= {basey + 2 * lineDist} fill="white" fontSize= {fontSize}
		    fontFamily = {fontFamily} id = "paragraph1Line3">
	      </text>
	      <text x= {basex}  y= {basey + 3 * lineDist} fill="white" fontSize= {fontSize}
		    fontFamily = {fontFamily} id = "paragraph1Line4">
	      </text>
	      <text x= {basex}  y= {basey + 4 * lineDist} fill="white" fontSize= {fontSize}
		    fontFamily = {fontFamily} id = "paragraph1Line5">
	      </text>
	      <text x= {basex}  y= {basey + 5 * lineDist} fill="white" fontSize= {fontSize}
		    fontFamily = {fontFamily} id = "paragraph1Line6">
	      </text>
	      <text x= {basex}  y= {basey + 6 * lineDist} fill="white" fontSize= {fontSize}
		    fontFamily = {fontFamily} id = "paragraph1Line7">
	      </text>
	      <text x= {basex}  y= {basey + 7 * lineDist} fill="white" fontSize= {fontSize}
		    fontFamily = {fontFamily} id = "paragraph1Line8">
	      </text>
	      <text x= {basex}  y= {basey + 8 * lineDist} fill="white" fontSize= {fontSize}
		    fontFamily = {fontFamily} id = "paragraph1Line9">
	      </text>
	      <text x= {basex}  y= {basey + 9 * lineDist} fill="white" fontSize= {fontSize}
		    fontFamily = {fontFamily} id = "paragraph1Line10">
	      </text>
	      <text x= {basex}  y= {basey + 10 * lineDist} fill="white" fontSize= {fontSize}
		    fontFamily = {fontFamily} id = "paragraph1Line11">
	      </text>
	      <text x= {basex}  y= {basey + 11 * lineDist} fill="white" fontSize= {fontSize}
		    fontFamily = {fontFamily} id = "paragraph1Line12">
	      </text>


	    </svg>
	    </div>


	);

    }
});
