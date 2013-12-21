function (key, reducedValue) {   
	reducedValue.promedioFinal = reducedValue.comments/reducedValue.count;
	return reducedValue;
}
