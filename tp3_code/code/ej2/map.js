function() {
	var value = {count : 1, comments : this.number_of_comments}
    	emit('comments', value);
}
