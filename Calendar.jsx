Calendar = React.createClass({

    calendar: function() {

		//drawing a star
	//a basic star is simply a fixed set of points on a circle, equidistant from
	//each other. to make a fancy looking star we work with two circles,
	//an outer and and an inner, and use the same angle, applied to the larger and
	//shorter radius.
	//using this formula we can calculate the proper angle no matter how many arms
	//we want on the star: 5, 6, 11, etc.).

	//with SVG we simply need to define the points in our polygon(star) and it will
	//do all the hard work of connecting the lines and filling in the space. All our
	//algorithm needs to do is walk along the star, and make note of the coordinates at
	//each tip of the arm.

	function calculateStarPoints(centerX, centerY, arms, outerRadius, innerRadius) {

	    var results = "";
	    var angle = Math.PI / arms;

	    for (var i = 0; i < 2 * arms; i++) {

		//use outer or inner radius depending on which iteration we are in.

		var r = (i & 1) == 0 ? outerRadius : innerRadius;

		var currX = centerX + Math.cos(i * angle) * r;
		var currY = centerY + Math.sin(i * angle) * r;

		// Our first time we simply append the coordinates
		// subsequent times we append a ", " to distinguish
		// each coordinate pair.

		if (i == 0)
		{
		    results = currX + "," + currY;
		}
		else
		{
		    results += "," + currX + "," + currY;
		}
	    }

	    return results;
	}
	//using d3 we can now easily append our star to our svg using
	//the following syntax
	
	function drawObservation(date,star1, star2, star3, star4, jupiter) {

	    if (star1 != []) {
		
		d3.select("svg")
		    .append("svg:polygon")
		    .attr("id", date + "_star_1")
		    .attr("visibility", "visible")
		    .attr("transform", "rotate(90," + star1[0] + "," + star1[1] + ")")
		    .attr("points", calculateStarPoints(star1[0], star1[1], star1[2], star1[3], star1[4]))
		    .attr("fill", "none")
		    .attr("stroke","white")
		    .attr("stroke-width", star1[5]);
	    }
	    if (star2 != []) {
		d3.select("svg")
		    .append("svg:polygon")
		    .attr("id", date +"_star_2")
		    .attr("visibility", "visible")
		    .attr("transform", "rotate(90," + star2[0] + "," + star2[1] + ")")
		    .attr("points", calculateStarPoints(star2[0], star2[1], star2[2], star2[3], star2[4]))
		    .attr("fill", "none")
		    .attr("stroke","white")
		    .attr("stroke-width", star2[5]);
	    }

	    if (jupiter != []) {
		d3.select("svg")
		    .append("ellipse")
		    .attr("cx", jupiter[0])
		    .attr("cy", jupiter[1])
		    .attr("rx", jupiter[2])
		    .attr("ry", jupiter[3])
		    .attr("fill", "none")
		    .attr("stroke", "white")
		    .attr("fill", "white")
		    .attr("stroke-width", jupiter[4]);
	    }

	    if (star3 != []) {
		d3.select("svg")
		    .append("svg:polygon")
		    .attr("id", date + "_star_3")
		    .attr("visibility", "visible")
		    .attr("transform", "rotate(90," + star3[0] + "," + star3[1] + ")")
		    .attr("points", calculateStarPoints(star3[0], star3[1], star3[2], star3[3], star3[4]))
		    .attr("fill", "none")
		    .attr("stroke","white")
		    .attr("stroke-width", star3[5]);
		
		
	    }

	    if (star4 != []) {
		d3.select("svg")
		    .append("svg:polygon")
		    .attr("id", date + "_star_4")
		    .attr("visibility", "visible")
		    .attr("transform", "rotate(90," + star4[0] + "," + star4[1] + ")")
		    .attr("points", calculateStarPoints(star4[0], star4[1], star4[2], star4[3], star4[4]))
		    .attr("fill", "none")
		    .attr("stroke","white")
		    .attr("stroke-width", star4[5]);
	    }

	}

	function drawLines(firstLine, length, width, colour, distBetween, n) {
	    //firstLine = [x,y]

	    var x = firstLine[0];
	    var y = firstLine[1];
	   
	    
	    for (var i = 0; i < n; i++) {
		d3.select("svg")
		    .append("line")
		    .attr("y1", y  + i * distBetween)
		    .attr("y2",  y  + i * distBetween)
		    .attr("x1", x)
		    .attr("x2", x + length)
		    .attr("stroke", colour)
		    .attr("stroke-width", width);
	    }

	}
	var basex = 20;
	var basey = 44;
	var dist = 25;
	var length = 250;
	var fontSizeDate = "14";
	var fontFamDate = "cursive";
	var summaryText = ["With my new telescope, I saw 3 stars around Jupiter in a straight line parallel to the ecliptic.",
			   "Provoked by curiosity, tonight I viewed Jupiter again; now 3 stars were all west of Jupiter.",
			   "Unfortunately tonight the sky was covered everywhere with clouds.",
			   "Only 2 stars, to the east! Is a third hiding behind Jupiter? Jupiter can't move that fast.",
			   "It appears that 3 stars wander around Jupiter, like Venus and Mercury around the Sun.",
			   "As I watched, a third star appeared nearest to Jupiter. All 3 little stars were straight on the ecliptic.",
			   "For the first time I saw 4 separate stars near Jupiter. The eastern star was 2 minutes from Jupiter,",
			   "and the 3 other stars apart at about 1 minute intervals. But now, the weather was cloudy.",
			   "About 3 hours after sunset, 4 stars appeared; at 7 hours after, only 3 were in the same straight line.",
			   "Then 2 stars appeared within a distance of 40 seconds of Jupiter with 1 star 8 minutes from J.",
			   "Again 2 stars; 4 hours later another emerged, which, I suspect, had been united with the first one."
			  ];

	drawLines([basex,basey],length,0.1,"grey",dist,25);

	//write text
	for (var k = 0; k < summaryText.length; k++) {
	    writeSummaryTextAndDate(k);
	}
	
	//Jan 7
	drawObservation("jan7",[(basex - 10) + 50,30,6,6,0.4,"2"],
			[(basex - 10) + 100,31,6,6,0.4,"2"],
			[(basex - 10) + 193,32,6,6,0.4,"2"],
			[],
			[(basex - 10) + 136,34,8,7,"2"]);

	//Jan8
	

	
	function writeSummaryTextAndDate(n) {
	    
	    d3.select("svg").append("text")
		.attr("id", "s" + (n+7))
		.attr("class", "summary")
		.attr("x", basex - 20)
		.attr("y", basey - 4 + (n * 25))
		.style("font-family", fontFamDate)
		.style("font-size", fontSizeDate)
		.style("fill", "white")
		.text("" + (n+7))
		.style("cursor", "pointer")
		.on("mouseover", function() { return fullText(n);})
		.on("mouseout", removeFullText);

	    d3.select("svg").append("text")
		.attr("x", basex + length + 10)
		.attr("y", basey - 2 + (n * 25))
		.style("fill", "white")
		.style("font-family", "cambria")
		.style("font-size", "14")
		.text(summaryText[n]);
	}


	function fullText(n) {

	    d3.select("#s" + (n+7))
		.style("fill", "rgb(178,255,255)");
	    
	    d3.select("svg")
		.append("rect")
		.attr("id","#fulltext")
		.attr("x", 300)
		.attr("y", 100)
		.attr("width", 520)
		.attr("height", 400)
		.style("stroke", "white")
		.style("stroke-width", "1");

	    //fullText needs to know which date we are on
	    janTypewriter(7,data1[n].length);
	}

	function removeFullText() {

	    d3.selectAll("text.summary")
		.style("fill", "white");

	    d3.select("rect").remove();
	    d3.selectAll("text.Lines").remove();
	}

	function janTypewriter(day,numberOfLines) {
	    var n = numberOfLines;
	    
	    for (var i = 0; i < numberOfLines; i++) {
		d3.select("svg")
		    .append("text")
		    .attr("class", "Lines")
		    .attr("id","Line" + i)
		    .attr("x", 350)
		    .attr("y", 170 + i * 25)
		    .style("font-family", "cambria")
		    .style("font-size", "14")
		    .style("fill", "rgb(178,255,255)")
	            .text(data1[day-7][i]);
	    
	    }
		    	      
	}
	
	var data1 = [
	    //jan 7
	    ["On the 7th day of January in the present year, 1610, in the first hour",
	     " of the following night, when I was viewing the constellations of the",
	     "heavens through a telescope, the planet Jupiter presented itself to my",
	     "view, and as I had prepared for myself a very excellent instrument, I",
	     "noticed a circumstance which I had never been able to notice before,",
	     "owing to want of power in my other telescope, namely, that three little",
	     "stars, small but very bright, were near the planet; and although I",
	     "believed them to belong to the number of the fixed stars, yet they made",
	     "me somewhat wonder, because they seemed to be arranged exactly in a",
	      "straight line, parallel to the ecliptic, and to be brighter than the",
	     "rest of the stars, equal to them in magnitude."
	    ]
	]

	
    },
    
    componentDidMount: function() {
	this.calendar();
    },
    
    svgStyle: {
	margin: 'auto',
	display: 'block'
    },

    dateStyle: {
	fontFamily: 'cursive',
	fontSize: '14',
	fill : 'white',
	cursor: 'pointer'
    },

    render: function() {
	var basex = 20;
	var basey = 44;
	var dist = 25;
	//<text x={basex -20} y={basey - 4} style = {this.dateStyle} onClick={this.onUserClick} >
	//    7
	//</text>

	
	return(

	    <div textAlign = "center" >
	      <svg style = {this.svgStyle} height="600" width="880">		
	      </svg>
	    </div>
	);
    }
});
