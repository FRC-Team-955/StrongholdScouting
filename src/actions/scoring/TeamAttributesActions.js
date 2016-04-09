var ScoringConstants = require('../../constants/ScoringConstants');
var AppDispatcher = require('../../components/AppDispatcher');

var TeamAttributesActions = {
	updateAuto: function(team,match){
		AppDispatcher.handleViewAction({
			actionType: ScoringConstants.Auto,
			team: team,
			match: match,
		})
	},
	
	updateChallenge: function(team,match){
		AppDispatcher.handleViewAction({
			actionType: ScoringConstants.Challenge,
			team: team,
			match: match,
		})
	},
	
	updateSpy: function(team,match){
		AppDispatcher.handleViewAction({
			actionType: ScoringConstants.Spy,
			team: team,
			match: match,
		})
	},
	
	updateHumanPlayer: function(team,match){
		AppDispatcher.handleViewAction({
			actionType: ScoringConstants.HumanPlayer,
			team: team,
			match: match,
		})
	},
	
	updateVision: function(team,match){
		AppDispatcher.handleViewAction({
			actionType: ScoringConstants.Vision,
			team: team,
			match: match,
		})
	},
	
	updateBroken: function(team,match){
		AppDispatcher.handleViewAction({
			actionType: ScoringConstants.Broken,
			team: team,
			match: match,
		})
	}
}

export default TeamAttributesActions;
