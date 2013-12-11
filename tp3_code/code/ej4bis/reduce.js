function (key, values) { 
  reducedVal = {max_hour: null, max_comments: -Infinity, min_hour : null, min_comments: -Infinity};
  for ( var idx = 0; idx < values.length; idx++) {
	if ( values[idx].comments > reducedVal.max_comments ){
		reducedVal.max_hour = values[idx].hour;
		reducedVal.max_comments = values[idx].comments ;
	}
	if ( values[idx].comments < reducedVal.min_comments ){
		reducedVal.min_hour = values[idx].hour;
		reducedVal.min_comments = values[idx].comments ; 
	}
  }
  return reducedVal;
}
