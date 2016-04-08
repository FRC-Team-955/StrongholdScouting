var ScoringConstants = require('../../constants/ScoringConstants');
var AppDispatcher = require('../../components/AppDispatcher');

var CommentsActions = {
	updateTeamComments: function(teamComments,team,match){
		AppDispatcher.handleViewAction({
			actionType: ScoringConstants.TeamComments,
			team: team,
			match: match,
			teamComments: teamComments
		});
	},
	
	updateMatchComments: function(matchComments,team,match){
		AppDispatcher.handleViewAction({
			actionType: ScoringConstants.MatchComments,
			team: team,
			match: match,
			matchComments: matchComments
		});
	}
}

export default CommentsActions;