var ScoringConstants = require('../../constants/ScoringConstants');
var AppDispatcher = require('../../components/AppDispatcher');

var TeamAttributesActions = {
	updateAuto(team,match){
		AppDispatcher.handleViewAction({
			actionType: ScoringConstants.Auto,
			team: team,
			match: match,
		})
	},
	
	updateChallenge(team,match){
		AppDispatcher.handleViewAction({
			actionType: ScoringConstants.Challenge,
			team: team,
			match: match,
		})
	},
	
	updateSpy(team,match){
		AppDispatcher.handleViewAction({
			actionType: ScoringConstants.Spy,
			team: team,
			match: match,
		})
	},
	
	updateHumanPlayer(team,match){
		AppDispatcher.handleViewAction({
			actionType: ScoringConstants.HumanPlayer,
			team: team,
			match: match,
		})
	},
	
	updateVision(team,match){
		AppDispatcher.handleViewAction({
			actionType: ScoringConstants.Vision,
			team: team,
			match: match,
		})
	},
	
	updateBroken(team,match){
		AppDispatcher.handleViewAction({
			actionType: ScoringConstants.Broken,
			team: team,
			match: match,
		})
	}
}

export default TeamAttributesActions;
