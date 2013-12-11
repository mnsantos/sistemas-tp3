function() {
    	emit('max', { hour : this.hour, comments: this.number_of_comments});
	emit('min', { hour : this.hour, comments: this.number_of_comments});

}
