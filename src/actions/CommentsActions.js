var alt = require('../alt');

class CommentsActions{
	updateTeamComments(teamComments,team,match){
		this.dispatch(teamComments);
	}
	
	updateMatchComments(matchComments,match){
		this.dispatch(matchComments);
	}
}

module.exports = alt.createActions(CommentsActions);