var CircularMigrationPlot = require('./circular-migration-plot.js');

// Just want to show refugees
var labels = {
	2015: 'migrants',
	2016: 'refugees',
	2017: 'asylum applicants',
};

CircularMigrationPlot({
	chart: {
		element: '#chart',
		mylayout: {
			threshold: 2000,
			labelThreshold: 5000,
			colors: ['#FF0000','#ED8E00','#00B500','#683F91','#A1007E','#1F57A6','#11B2ED','#07E0CB','#638282','#FFDD00']
			},
		width: 630,
		height: 630
	},
	timeline: {
		element: '#timeline',
			formatter: function(d) {
			return labels[d]
		}
	}
});