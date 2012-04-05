jQuery(document).ready(function($) {

	
	$.ajax({
		url: "http://api.wunderground.com/api/bbc6332f8bd0848f/geolookup/conditions/forecast/q/Australia/Melbourne.json",
		dataType: "jsonp",
		success: function(parsed_json) {
		
			var hours = new Date().getHours();
			var timeofday = { "high" : 'a high', "low" : 'an overnight low' };
			
			var temp_c = parseInt(parsed_json.current_observation.temp_c);
			var high_c = parseInt(parsed_json.forecast.simpleforecast.forecastday[0].high.celsius);
			var low_c = parseInt(parsed_json.forecast.simpleforecast.forecastday[0].low.celsius);
			
			$('#weather .current').html(temp_c + "&deg;C");
			if ( hours >= 17 ) {
				timeString = timeofday.low;
				forecastTemp = low_c;
			} else {
				timeString = timeofday.high;
				forecastTemp = high_c;
			}
			$('#weather .timeofday').html(timeString);
			$('#weather .hilowtemp').html(forecastTemp + "&deg;C");

		}
	});
	
	setInterval( function() {
	
		$.ajax({
		url: "http://api.wunderground.com/api/bbc6332f8bd0848f/geolookup/conditions/forecast/q/Australia/Melbourne.json",
		dataType: "jsonp",
		success: function(parsed_json) {
		
			var hours = new Date().getHours();
			var timeofday = { "high" : 'a high', "low" : 'an overnight low' };
			
			var temp_c = parseInt(parsed_json.current_observation.temp_c);
			var high_c = parseInt(parsed_json.forecast.simpleforecast.forecastday[0].high.celsius);
			var low_c = parseInt(parsed_json.forecast.simpleforecast.forecastday[0].low.celsius);
			
			$('#weather .current').html(temp_c + "&deg;C");
			if ( hours >= 17 ) {
				timeString = timeofday.low;
				forecastTemp = low_c;
			} else {
				timeString = timeofday.high;
				forecastTemp = high_c;
			}
			$('#weather .timeofday').html(timeString);
			$('#weather .hilowtemp').html(forecastTemp + "&deg;C");

		}
		});
		
	}, 600000);
		
});