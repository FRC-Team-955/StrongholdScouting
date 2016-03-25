class CommentsActions {
	updateTeamComments(teamComments,team,match){
		this.dispatch(teamComments);
	}
	
	updateMatchComments(matchComments,match){
		this.dispatch(matchComments);
	}
}

export default CommentsActions;