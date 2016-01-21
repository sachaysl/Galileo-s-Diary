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

	//this star is relevant later
//	d3.select("svg")
//	    .append("svg:polygon")
//	    .attr("id", "star_1")
//	    .attr("visibility", "visible")
//	    .attr("points", calculateStarPoints(50, 50, 5, 10, 5))
//	    .attr("fill", "white");

	//Jan 7th
	d3.select("svg")
	    .append("svg:polygon")
	    .attr("id", "jan7_star_1")
	    .attr("visibility", "visible")
	    .attr("points", calculateStarPoints(50, 30, 8, 7, 0.5))
	    .attr("fill", "none")
	    .attr("stroke","white")
	    .attr("stroke-width", "2");

	d3.select("svg")
	    .append("svg:polygon")
	    .attr("id", "jan7_star_2")
	    .attr("visibility", "visible")
	    .attr("points", calculateStarPoints(100, 31, 8, 7, 0.5))
	    .attr("fill", "none")
	    .attr("stroke","white")
	    .attr("stroke-width", "2");

	d3.select("svg")
	    .append("ellipse")
	    .attr("cx", 136)
	    .attr("cy", 34)
	    .attr("rx", 10)
	    .attr("ry", 8)
	    .attr("fill", "none")
	    .attr("stroke", "white")
	    .attr("stroke-width", "2");

	d3.select("svg")
	    .append("svg:polygon")
	    .attr("id", "jan7_star_3")
	    .attr("visibility", "visible")
	    .attr("points", calculateStarPoints(193, 32, 8, 7, 0.5))
	    .attr("fill", "none")
	    .attr("stroke","white")
	    .attr("stroke-width", "2");



	
    },
    
    componentDidMount: function() {
	this.calendar();
    },
    
    svgStyle: {
	margin: 'auto',
	display: 'block'
    },
    
    render: function() {

	return(

	    <div textAlign = "center" >
	      <svg style = {this.svgStyle} height="500" width="800">
	      </svg>
	    </div>
	);
    }
});
