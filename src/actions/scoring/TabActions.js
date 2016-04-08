var ScoringConstants = require('../../constants/ScoringConstants');
var AppDispatcher = require('../../components/AppDispatcher');

var TabActions = {
	updateAddTeam(team,match){
		AppDispatcher.handleViewAction({
			actionType: ScoringConstants.AddTeam,
			team: team,
			match: match
		})
	}
}

export default TabActions;
