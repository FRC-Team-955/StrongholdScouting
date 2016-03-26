var ScoringConstants = require('../../constants/ScoringConstants');
var AppDispatcher = require('../../components/AppDispatcher');

var TeleopActions = {
	updateIncrementHighGoalsMade: function(team,match){
		AppDispatcher.handleViewAction({
			actionType: ScoringConstants.IncrementHighTeleopGoals,
			team: team,
			match: match
		});
	},
	
	updateIncrementHighGoalsAttempted(team,match){
		AppDispatcher.handleViewAction({
			actionType: ScoringConstants.IncrementHighGoalsAttempted,
			team: team,
			match: match
		});
	},
	
	updateIncrementLowGoalsMade: function(team,match){
		AppDispatcher.handleViewAction({
			actionType: ScoringConstants.IncrementLowTeleopGoals,
			team: team,
			match: match
		});
	},
	
	updateIncrementLowGoalsAttempted: function(team,match){
		AppDispatcher.handleViewAction({
			actionType: ScoringConstants.IncrementLowGoalsAttempted,
			team: team,
			match: match
		});
	},
	
	updateDecrementHighGoalsMade(team,match){
		AppDispatcher.handleViewAction({
			actionType: ScoringConstants.DecrementHighTeleopGoals,
			team: team,
			match: match
		});
	},
	
	updateDecrementHighGoalsAttempted(team,match){
		AppDispatcher.handleViewAction({
			actionType: ScoringConstants.DecrementHighGoalsAttempted,
			team: team,
			match: match
		});
	},
	
	updateDecrementLowGoalsMade(team,match){
		AppDispatcher.handleViewAction({
			actionType: ScoringConstants.DecrementLowTeleopGoals,
			team: team,
			match: match
		});
	},
	
	updateDecrementLowGoalsAttempted(team,match){
		AppDispatcher.handleViewAction({
			actionType: ScoringConstants.DecrementLowGoalsAttempted,
			team: team,
			match: match
		});
	}
}

export default TeleopActions;
