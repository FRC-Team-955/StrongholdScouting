var ScoringConstants = require('../../constants/ScoringConstants');
var AppDispatcher = require('../../components/AppDispatcher');

var TeamAttributesActions = {
	updateAuto(team,match,value){
		AppDispatcher.handleViewAction({
			actionType: ScoringConstants.Auto,
			team: team,
			match: match,
			value: value
		})
	},
	
	updateChallenge(team,match,value){
		AppDispatcher.handleViewAction({
			actionType: ScoringConstants.Challenge,
			team: team,
			match: match,
			value: value
		})
	},
	
	updateSpy(team,match,value){
		AppDispatcher.handleViewAction({
			actionType: ScoringConstants.Spy,
			team: team,
			match: match,
			value: value
		})
	},
	
	updateHumanPlayer(team,match,value){
		AppDispatcher.handleViewAction({
			actionType: ScoringConstants.HumanPlayer,
			team: team,
			match: match,
			value: value
		})
	},
	
	updateVision(team,match,value){
		AppDispatcher.handleViewAction({
			actionType: ScoringConstants.Vision,
			team: team,
			match: match,
			value: value
		})
	},
	
	updateBroken(team,match,value){
		AppDispatcher.handleViewAction({
			actionType: ScoringConstants.Broken,
			team: team,
			match: match,
			value: value
		})
	}
}

export default TeamAttributesActions;
