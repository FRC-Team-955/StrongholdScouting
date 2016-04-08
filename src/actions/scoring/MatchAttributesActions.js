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
	
	updateScaleHeight: function(scaleHeight,team,match,value){
		AppDispatcher.handleViewAction({
			actionType: ScoringConstants.ScaleHeight,
			team: team,
			match: match,
			value: value,
			scaleHeight: scaleHeight
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