var CircularMigrationPlot = require('./circular-migration-plot.js');

 var labels = {
	2015: 'migrants (in 100s)',
	2016: 'refugees',
	2017: 'asylum applicants',
}

CircularMigrationPlot({
	chart: {
		element: '#chart',
		mylayout: {
			threshold: 2000,
			labelThreshold: 5000,
			colors: [	'#FF0000',
						'#ED8E00',
						'#00B500',
						'#683F91',
						'#A1007E',
						'#1F57A6',
						'#11B2ED',
						'#07E0CB',
						'#638282',
						'#FF7F00'
					]
			},
		width: 630,
		height: 630,
		margin: 100,
		maxRegionsOpen: 1
	},
	timeline: {
		element: '#timeline',
		formatter: function(d) {
			return labels[d];
		}
	}
});