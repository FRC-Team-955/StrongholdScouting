var ScoringConstants = require('../../constants/ScoringConstants');
var AppDispatcher = require('../../components/AppDispatcher');

var MatchAttributesActions = {
	updateScale: function(team,match){
		AppDispatcher.handleViewAction({
			actionType: ScoringConstants.Scale,
			team: team,
			match: match,
		});
	},
	
	updateScaleHeight: function(value,team,match){
		console.log(value)
		AppDispatcher.handleViewAction({
			actionType: ScoringConstants.ScaleHeight,
			team: team,
			match: match,
			value: value,
		});
	},
	
	updateBreach: function(team,match){
		console.log("called");
		AppDispatcher.handleViewAction({
			actionType: ScoringConstants.Breach,
			team: team,
			match: match,
		});
	},
	
	updateCapture: function(team,match){
		AppDispatcher.handleViewAction({
			actionType: ScoringConstants.Capture,
			team: team,
			match: match,
		});
	}
}

export default MatchAttributesActions;