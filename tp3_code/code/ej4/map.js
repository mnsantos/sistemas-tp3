function() {

	//separar RAWTIME por horario.
	//var int = 0;
	var str = this.rawtime.substring(11,13);
	var int = parseInt(str);
    	emit(int , this.number_of_comments);
}
