function (key, values) {   
	var reducedValue = {count : 0, comments : 0}
	for (var idx = 0; idx < values.length; idx++){
		count += values[idx].count;
		comments += values[idx].comments;
	}
	return reducedValue;
}
