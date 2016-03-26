var ScoringConstants = require('../../constants/ScoringConstants');
var AppDispatcher = require('../../components/AppDispatcher');


var DefensesActions = {
	updateIncrementPortcullis: function(team,match){
		AppDispatcher.handleViewAction({
			actionType: ScoringConstants.IncrementPortcullis,
			team: team,
			match: match,
		});
	},
	
	updateDecrementPortcullis: function(team,match){
		AppDispatcher.handleViewAction({
			actionType: ScoringConstants.DecrementPortcullis,
			team: team,
			match: match,
		});
	},
	
	updateIncrementChevalDeFrise: function(team,match){
		AppDispatcher.handleViewAction({
			actionType: ScoringConstants.IncrementChevalDeFrise,
			team: team,
			match: match,
		});
	},
	
	updateDecrementChevalDeFrise: function(team,match){
		AppDispatcher.handleViewAction({
			actionType: ScoringConstants.DecrementChevalDeFrise,
			team: team,
			match: match,
		});
	},
	
	updateIncrementMoat: function(team,match){
		AppDispatcher.handleViewAction({
			actionType: ScoringConstants.IncrementMoat,
			team: team,
			match: match,
		});
	},
	
	updateDecrementMoat: function(team,match){
		AppDispatcher.handleViewAction({
			actionType: ScoringConstants.DecrementMoat,
			team: team,
			match: match,
		});
	},
	
	updateIncrementRamparts: function(team,match){
		AppDispatcher.handleViewAction({
			actionType: ScoringConstants.IncrementRamparts,
			team: team,
			match: match,
		});
	},
	
	updateDecrementRamparts: function(team,match){
		AppDispatcher.handleViewAction({
			actionType: ScoringConstants.DecrementRamparts,
			team: team,
			match: match,
		});
	},
	
	updateIncrementDrawbridge: function(team,match){
		AppDispatcher.handleViewAction({
			actionType: ScoringConstants.IncrementDrawbridge,
			team: team,
			match: match,
		});
	},
	
	updateDecrementDrawbridge: function(team,match){
		AppDispatcher.handleViewAction({
			actionType: ScoringConstants.DecrementDrawbridge,
			team: team,
			match: match,
		});
	},
	
	updateIncrementSallyPort: function(team,match){
		AppDispatcher.handleViewAction({
			actionType: ScoringConstants.IncrementSallyPort,
			team: team,
			match: match,
		});
	},
	
	updateDecrementSallyPort: function(team,match){
		AppDispatcher.handleViewAction({
			actionType: ScoringConstants.DecrementSallyPort,
			team: team,
			match: match,
		});
	},
	
	updateIncrementRockWall: function(team,match){
		AppDispatcher.handleViewAction({
			actionType: ScoringConstants.IncrementRockWall,
			team: team,
			match: match,
		});
	},
	
	updateDecrementRockWall: function(team,match){
		AppDispatcher.handleViewAction({
			actionType: ScoringConstants.DecrementRockWall,
			team: team,
			match: match,
		});
	},
	
	updateIncrementRoughTerrain: function(team,match){
		AppDispatcher.handleViewAction({
			actionType: ScoringConstants.IncrementRoughTerrain,
			team: team,
			match: match,
		});
	},
	
	updateDecrementRoughTerrain: function(team,match){
		AppDispatcher.handleViewAction({
			actionType: ScoringConstants.DecrementRoughTerrain,
			team: team,
			match: match,
		});
	},
	
	updateIncrementLowBar: function(team,match){
		AppDispatcher.handleViewAction({
			actionType: ScoringConstants.IncrementLowBar,
			team: team,
			match: match,
		});
	},
	
	updateDecrementLowBar: function(team,match){
		AppDispatcher.handleViewAction({
			actionType: ScoringConstants.DecrementLowBar,
			team: team,
			match: match,
		});
	},
}

export default DefensesActions;
