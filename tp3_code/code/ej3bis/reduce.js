function (key, values) { 
  reducedVal = {user: null, score: -Infinity};
  for ( var idx = 0; idx < values.length; idx++) {
	if ( values[idx].score > reducedVal.score ){
		reducedVal.username = values[idx].username;
		reducedVal.score = values[idx].score;
	}
  }
  return reducedVal;
}
