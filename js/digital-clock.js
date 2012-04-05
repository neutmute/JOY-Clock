$(document).ready(function() {
	// Create two variable with the names of the months and days in an array
	var monthNames = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
	var dayNames = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
	
	var readPrefixes = { "coming" : 'Coming up to', "after" : 'Just after' };
	var readMiddles = { "to" : 'to', "past" : 'past', "exactly" : 'exactly' };
	var readPostfixes = { "morning" : 'in the morning', "afternoon" : 'in the afternoon', "evening" : 'in the evening' };
	
	// Create a newDate() object
	var newDate = new Date();
	
	// Extract the current date from Date object
	newDate.setDate(newDate.getDate());
	
	$('#date-block .day').html(dayNames[newDate.getDay()]);
	$('#date-block .date').html(newDate.getDate());
	$('#date-block .month').html(monthNames[newDate.getMonth()]);
	
	
	setInterval( function() {
	    $('#date-block .day').html(dayNames[newDate.getDay()]);
	}, 86400000);
	
	setInterval( function() {
	    $('#date-block .date').html(newDate.getDate());
	}, 86400000);
	
	setInterval( function() {
	    $('#date-block .month').html(monthNames[newDate.getMonth()]);
	}, 86400000);
		
	setInterval( function() {
	
		// Create a newDate() object and extract the seconds of the current time on the visitor's
		var seconds = new Date().getSeconds();
		var minutes = new Date().getMinutes();
		var hours = new Date().getHours();
		hourString = '';
	
		// Add a leading zero to seconds, minutes and hours values
		$("#sec").html(( seconds < 10 ? "0" : "" ) + seconds);
		$("#min").html(( minutes < 10 ? "0" : "" ) + minutes);
		$("#hours").html(( hours < 10 ? "0" : "" ) + hours);
	
	    minuteString = " minutes ";
	    
		if ( minutes == 0 ) {
            minutes = '';
	        minuteString = '';
	        middle = readMiddles.exactly;
	        hours += ' o\'clock';
        } else if ( minutes == 1 ) {
            minuteString = " minute ";
	    } else if ( minutes == 15 ) {
            minutes = ' a quarter ';
  	        minuteString = '';
	        middle = readMiddles.past;
		} else if ( minutes < 30 ) {
		    middle = readMiddles.past;
        } else if ( minutes == 30 ) {
            minutes = 'half';
	        minuteString = '';
	        middle = readMiddles.past;
        } else if ( minutes == 45 ) {
            minutes = ' a quarter ';
	        minuteString = '';
	        middle = readMiddles.to;
	        hours++;
	    } else if ( minutes == 59 ) {
	        minuteString = " minute ";
	        middle = readMiddles.to;
	        minutes = 60 - minutes;
	        hours++;
		} else {
		    middle = readMiddles.to;
		    minutes = 60 - minutes;
		    hours++;
		}

	    if ( hours >= 13 ) {
	       hours -= 12;
	    }
	
	   
	   
	
		$('#radio-clock .time-string').html("<span class='highlight'>" + minutes + minuteString + middle + " " + hours + hourString + "</span> ");
	
	}, 1000);

});