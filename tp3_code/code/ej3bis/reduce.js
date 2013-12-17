function (key, values) { 
  reducedVal = {user: null, score: -Infinity};
  for ( var idx = 0; idx < values.length; idx++) {
	if ( values[idx].score > reducedVal.score ){
		reducedVal.user = values[idx].user;
		reducedVal.score = values[idx].score;
	}
  }
  return reducedVal;
}
