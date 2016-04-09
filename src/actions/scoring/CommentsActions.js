var ScoringConstants = require('../../constants/ScoringConstants');
var MatchConstants = require('../../constants/MatchConstants');
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
	
	updateMatchComments: function(matchComments,match){
		console.log("callederino")
		AppDispatcher.handleViewAction({
			actionType: MatchConstants.MatchComments,
			match: match,
			matchComments: matchComments
		});
	}
}

export default CommentsActions;