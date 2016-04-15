var ScoringConstants = require('../../constants/ScoringConstants');
var AppDispatcher = require('../../components/AppDispatcher');

var SaveButtonActions = {
	updateTotalMatches: function(teams){
		AppDispatcher.handleViewAction({
			actionType: ScoringConstants.TotalMatches,
			teams: teams,
		});
	},
}

export default SaveButtonActions;
