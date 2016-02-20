var alt = require('../alt');

class CommentsActions{
	updateTeamComments(teamComments){
		this.dispatch(teamComments);
	}
	
	updateMatchComments(matchComments){
		this.dispatch(matchComments);
	}
}

module.exports = alt.createActions(CommentsActions);