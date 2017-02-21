var CircularMigrationPlot = require('./circular-migration-plot.js');
var d3 = require('d3');

var outerWrapper = d3.select(".outerwrapper");

var colors = [	'#FF0000',
				'#ED8E00',
				'#00B500',
				'#683F91',
				'#A1007E',
				'#1F57A6',
				'#11B2ED',
				'#07E0CB',
				'#638282',
				'#FF7F00',
				'#5A527E'
			];

var chartSmall = {
		element: '#chart',
		mylayout: {
			threshold: 2000,
			labelThreshold: 100000,
			colors: colors
		},
		width: 630,
		height: 630,
		margin: 100,
		arcWidth: 20,
		maxRegionsOpen: 1
	};

var chartLarge = {
		element: '#chart',
		mylayout: {
			threshold: 2000,
			labelThreshold: 30000,
			colors: colors
			},
		maxRegionsOpen: 1
	};



CircularMigrationPlot({
	chart: chartSmall
});

d3.select(".expand-widget").on("click", function() {
	outerWrapper.classed("expanded-widget", true)
		.select("#chart")
		.select("svg")
		.remove();

	CircularMigrationPlot({
		chart: chartLarge
	});

	d3.event.preventDefault();
	return false;
});

d3.select(".close-widget").on("click", function() {
	outerWrapper.classed("expanded-widget", false)
		.select("#chart")
		.select("svg")
		.remove();

	CircularMigrationPlot({
		chart: chartSmall
	});

	d3.event.preventDefault();
	return false;
});

