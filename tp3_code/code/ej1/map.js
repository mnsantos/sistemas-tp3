function() {
  if(this.number_of_upvotes > this.number_of_downvotes){
  	emit('posts_upvoted', 1);
	emit('vote_trend', 1);
  }else if(this.number_of_upvotes < this.number_of_downvotes){
	emit('posts_downvoted', 1);
	emit('vote_trend',-1);
  }else{
	emit('neutral_posts', 1);
  }
}
