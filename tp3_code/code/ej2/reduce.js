function (key, values) {   
	var reducedValue = {count : 0, comments : 0}
	for (var idx = 0; idx < values.length; idx++){
		reducedValue.count += values[idx].count;
		reducedValue.comments += values[idx].comments;
	}
	return reducedValue;
}
