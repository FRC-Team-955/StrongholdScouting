var ScoringConstants = require('../../constants/ScoringConstants');
var MatchConstants = require('../../constants/MatchConstants');
var AppDispatcher = require('../../components/AppDispatcher');

var SaveButtonActions = {
	updateTotalMatches: function(teams){
		AppDispatcher.handleViewAction({
			actionType: ScoringConstants.TotalMatches,
			teams: teams
		});
	},
	
	updateScoringSave: function(){
		AppDispatcher.handleViewAction({
			actionType: ScoringConstants.ScoringSave
		});
	},
	
	updateMatchSave: function(){
		AppDispatcher.handleViewAction({
			actionType: MatchConstants.MatchSave
		});
	},
	
	updateScoringData: function(){
		console.log("callds");
		AppDispatcher.handleViewAction({
			actionType: ScoringConstants.ScoresLoad
		});
	},
	
	updateMatchData: function(){
		AppDispatcher.handleViewAction({
			actionType: MatchConstants.MatchLoad
		});
	}
}

export default SaveButtonActions;
